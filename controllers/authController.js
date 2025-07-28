const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, "mysupersecretkey", { expiresIn: '1h' });
};

// Register Function
const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = generateToken(user._id);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login Function
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = generateToken(user._id);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

// ✅ Export functions
module.exports = { register, login };

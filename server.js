const express = require('express');
const mongoose = require('mongoose');
const productroutes = require('./routes/productRoutes');
const app = express();

app.use(express.json()); // To parse JSON request body

// Routes
app.use('/products', productroutes);
app.use('/api/auth', require('./routes/authRoutes'));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/softnexisdb")
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Default route
app.get('/', (req, res) => {
  res.send('🚀 API is working!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

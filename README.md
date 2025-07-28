# 🛡️ Softnexis Internship - Task 3: Authentication with Protected Routes

This is my Task 3 submission for the **Softnexis Internship Program**, built using the **MERN stack (backend only)**.

It includes:
- 🔐 User Registration & Login using JWT
- ✅ Authentication Middleware
- 🧾 Protected Routes for Products
- 📦 MongoDB Integration with Mongoose
- ⚙️ Validation Middleware

---

## 📁 Project Structure

controllers/
middleware/
models/
routes/
server.js
package.json
.gitignore

---

## 🔐 Authentication Routes

### ✅ Register  
`POST /api/auth/register`

**Body:**

```json
{
  "email": "test@example.com",
  "password": "test1234"
}
✅ Login
POST /api/auth/login

Body:
{
  "email": "test@example.com",
  "password": "test1234"
}

Returns:
{
  "token": "JWT_TOKEN_HERE"
}

🔒 Protected Route
➕ Create Product
POST /products

Headers:
Authorization: Bearer <token>
Body:
{
  "name": "Wireless Headphones",
  "price": 1299
}

Submitted By suga-25

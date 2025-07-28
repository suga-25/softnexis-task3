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
```json

✅ Login
POST /api/auth/login

Body:

```json
{
  "email": "test@example.com",
  "password": "test1234"
}
```json

Returns:
```json
{
  "token": "JWT_TOKEN_HERE"
}
```json

🔒 Protected Route
➕ Create Product

POST /products

Headers:
Authorization: Bearer <token>
Body:
```json
{
  "name": "Wireless Headphones",
  "price": 1299
}
```json

Submitted By  https://github.com/suga-25

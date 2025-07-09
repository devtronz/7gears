const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('.')); // serve your html/js files

// Simple "database" as a JSON file
const USERS_FILE = './users.json';

// Register endpoint
app.post('/api/register', (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  // Load existing users
  let users = [];
  if (fs.existsSync(USERS_FILE)) {
    users = JSON.parse(fs.readFileSync(USERS_FILE));
  }
  // Check if email already exists
  if (users.some(u => u.email === email)) {
    return res.status(409).json({ error: 'Email already registered' });
  }
  // Save user (password should be hashed in real apps!)
  users.push({ name, email, phone, password });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.status(201).json({ message: 'User registered' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
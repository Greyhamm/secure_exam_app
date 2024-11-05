const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const knex = require('../db'); // Import the Knex instance from db.js

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
    const { email, password, role = 'student' } = req.body;
    try {
      // Check if email already exists
      const existingUser = await knex('users').where({ email }).first();
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }
  
      // Hash password and insert new user
      const hashedPassword = await bcrypt.hash(password, 10);
      await knex('users').insert({ email, password: hashedPassword, role });
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Registration failed' });
    }
  });
  
// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(`Login attempt for email: ${email}`); // Log the incoming request
  
    try {
      const user = await knex('users').where({ email }).first();
      if (!user) {
        console.log('User not found');
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log('Password does not match');
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ email: user.email, role: user.role }, 'secret', { expiresIn: '1h' });
      console.log('Login successful');
      res.json({ token, role: user.role });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Login failed' });
    }
  });
  

module.exports = router;

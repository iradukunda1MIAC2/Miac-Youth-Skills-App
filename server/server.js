
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);
// Connect authentication routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
// Test the API
app.get('/', (req, res) => {
  res.send('Welcome to MIAC Youth Skills API!');
});

// Check API status
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'MIAC Youth Skills API is running'
  });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully!');

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
  });

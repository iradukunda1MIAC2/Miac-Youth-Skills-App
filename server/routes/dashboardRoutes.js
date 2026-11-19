
const express = require('express');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/student', protect, (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to your MIAC Youth Skills Dashboard!',
    user: {
      id: req.user.id,
      role: req.user.role
    }
  });
});

module.exports = router;


const express = require('express');
const Course = require('../models/Course');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// GET ALL AVAILABLE COURSES
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find({ isActive: true });

    res.status(200).json({
      success: true,
      count: courses.length,
      courses
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve courses'
    });
  }
});

// ADD A NEW COURSE (ADMIN ONLY)
router.post('/', protect, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Only administrators can add courses'
      });
    }

    const {
      title,
      description,
      category,
      instructor,
      duration,
      image
    } = req.body;

    const newCourse = new Course({
      title,
      description,
      category,
      instructor,
      duration,
      image
    });

    await newCourse.save();

    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      course: newCourse
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;

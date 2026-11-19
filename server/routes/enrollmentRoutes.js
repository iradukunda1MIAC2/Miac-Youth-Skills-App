
const express = require('express');
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// STUDENT ENROLLS IN A COURSE
router.post('/', protect, async (req, res) => {
  try {
    const { courseId } = req.body;

    if (req.user.role !== 'student') {
      return res.status(403).json({
        success: false,
        message: 'Only students can enroll in courses'
      });
    }

    const course = await Course.findOne({
      _id: courseId,
      isActive: true
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    const enrollment = new Enrollment({
      student: req.user.id,
      course: courseId
    });

    await enrollment.save();

    res.status(201).json({
      success: true,
      message: 'Successfully enrolled in course!',
      enrollment
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'You are already enrolled in this course'
      });
    }

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// GET MY ENROLLED COURSES
router.get('/my-courses', protect, async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      student: req.user.id
    }).populate('course');

    res.json({
      success: true,
      count: enrollments.length,
      enrollments
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve enrolled courses'
    });
  }
});

module.exports = router;

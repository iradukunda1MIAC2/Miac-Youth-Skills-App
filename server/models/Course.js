
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true,
      enum: [
        'Software Development',
        'Building & Construction',
        'Multimedia',
        'Tailoring & Carpentry'
      ]
    },

    instructor: {
      type: String,
      default: 'MIAC Instructor'
    },

    duration: {
      type: String,
      required: true
    },

    image: {
      type: String,
      default: ''
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Course', courseSchema);

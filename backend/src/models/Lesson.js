const mongoose = require('mongoose')

const lessonSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    experience: {
      type: Number,
      default: 10
    },
    pages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page'}]
  }, { timestamps: true }
)

module.exports = mongoose.model('Lesson', lessonSchema)


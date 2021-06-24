const mongoose = require('mongoose')

const questionSchema = mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
)



const Question = mongoose.model('Question', questionSchema)

module.exports = Question

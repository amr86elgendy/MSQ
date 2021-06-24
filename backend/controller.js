const Question = require('./model')

exports.getAllQues = async (req, res) => {
  const questions = await Question.find({})
  res.json(questions)
}

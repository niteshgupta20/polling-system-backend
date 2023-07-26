const Question = require('../models/Question');

// @desc Get a specific Question
// @route GET /api/v1/questions/:id
// @access Public

module.exports.getQuestion = async function (req, res) {
  try {
    const id = req.params.id;

    let question = await Question.findById(id);
    if (!question) {
      return res.status(400).json({
        message: 'Invalid Question | question_id does not exist in Database',
      });
    }

    question = await Question.findById(id).populate('options');

    return res.status(200).json({
      message: 'question fetched successfully',
      question: question,
    });
  } catch (err) {
    console.log('**** Error in  getQuestion API ****', err);
    return res.status(500).json({
      message: 'Internal Server Error',
      error: err,
    });
  }
};

// @desc create Question
// @route POST /api/v1/questions/create
// @access Public

module.exports.createQuestion = async function (req, res) {
  try {
    const title = req.body.title;
    // if title is empty
    if (!title) {
      return res.status(400).json({
        message: 'Title can not be empty',
      });
    }

    const question = await Question.create({ title });

    return res.status(201).json({
      message: 'question created successfully',
      question: question,
    });
  } catch (err) {
    console.log('****** Error in createQuestion API *******', err);
    return res.status(500).json({
      message: 'Internal Server Error',
      error: err,
    });
  }
};

// @desc delete Question
// @route DELETE /api/v1/questions/:id/delete
// @access Public
module.exports.deleteQuestion = async function (req, res) {
  try {
    const id = req.params.id;

    let question = await Question.findById(id);
    if (!question) {
      return res.status(400).json({
        message: 'Invalid Question | question_id does not exist in Database',
      });
    }

    question = await Question.findById(id).populate('options');

    const options = question.options;

    let isVoted = false;

    for (let i = 0; i < options.length; i++) {
      if (options[i].votes > 0) {
        isVoted = true;
        break;
      }
    }

    if (isVoted) {
      return res.status(400).json({
        message: 'Already Voted, Question can not be deleted',
        question: question,
      });
    }

    question = await Question.deleteOne({ _id: id });

    return res.status(200).json({
      message: 'question deleted successfully',
      question: question,
    });
  } catch (err) {
    console.log('****** Error in deleteQuestion API *******', err);
    return res.status(500).json({
      message: 'Internal Server Error',
      error: err,
    });
  }
};

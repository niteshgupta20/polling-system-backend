const Option = require('../models/option');
const Question = require('../models/Question');
require('dotenv').config();

// @desc create option to a specific question
// @route POST /api/v1/questions/:id/options/create
// @access Public

module.exports.createOption = async function (req, res) {
  try {
    const id = req.params.id;

    const question = await Question.findById(id);
    if (!question) {
      return res.status(400).json({
        message: 'Invalid Question | question_id does not exist in Database',
      });
    }

    const text = req.body.text;
    // if title is empty
    if (!text) {
      return res.status(400).json({
        message: 'text can not be empty',
      });
    }

    const option = await Option.create({ text });
    option.link_to_vote = `${process.env.VOTE_URL}/${option.id}/add_vote`;
    option.save();

    question.options.push(option._id);
    question.save();

    return res.status(201).json({
      message: 'option created successfully',
      option: option,
    });
  } catch (err) {
    console.log('**** Error in createOption API ****', err);
    return res.status(500).json({
      message: 'Internal Server Error',
      error: err,
    });
  }
};

// @desc To increment the count of votes
// @route PATCH /api/v1/options/:id/add_vote
// @access Public

module.exports.addVote = async function (req, res) {
  try {
    const id = req.params.id;

    const option = await Option.findById(id);

    if (!option) {
      return res.status(400).json({
        message: 'Invalid Option | option id does not exist in Database',
      });
    }

    option.votes = option.votes + 1;
    option.save();
    return res.status(200).json({
      message: 'Voted successfully',
      option: option,
    });
  } catch (err) {
    console.log('**** Error in addVote API ****', err);
    return res.status(500).json({
      message: 'Internal Server Error',
      error: err,
    });
  }
};

// @desc To delete an option
// @route PATCH /api/v1/options/:id/delete
// @access Public

module.exports.deleteOption = async function (req, res) {
  try {
    const id = req.params.id;

    let option = await Option.findById(id);

    if (!option) {
      return res.status(400).json({
        message: 'Invalid Option | option id does not exist in Database',
      });
    }

    if (option.votes === 0) {
      option = await Option.deleteOne({ _id: id });
      return res.status(200).json({
        message: 'Option deleted successfully',
        option: option,
      });
    } else {
      return res.status(400).json({
        message: "option can't be deleted beacuse it's already voted",
        option: option,
      });
    }
  } catch (err) {
    console.log('***** Error in deleteOption API *****', err);
    return res.status(500).json({
      message: 'Internal Server Error',
      error: err,
    });
  }
};

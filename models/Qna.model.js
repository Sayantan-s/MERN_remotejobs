const { Schema, model } = require('mongoose');

const qnaSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    correct: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    addExplanations: {
        type: Boolean,
        default: false,
        required: true
    }
});

const Qna = model('Qna', qnaSchema, 'questions');

module.exports = Qna;

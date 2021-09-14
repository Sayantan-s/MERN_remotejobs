const { Schema, model } = require('mongoose');

const qnaSchema = new Schema({
    type: {
        type: String,
        enum: {
            values: ['radio', 'lat', 'checkbox'],
            message: '{VALUE} of question is not supported'
        },
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
    company_id: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    explanations: {
        add: {
            type: Boolean,
            default: false,
            required: true
        },
        optional: {
            type: Boolean,
            default: false,
            required: true
        }
    }
});

const Qna = model('Qna', qnaSchema, 'questions');

module.exports = Qna;

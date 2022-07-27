const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');
const formatDate = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => formatDate(timestamp)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],

    },
    {
        toJSON: {
            getters:true
        },
    }
);



const Thoughts = model('thoughts', thoughtSchema);

module.export = Thoughts;
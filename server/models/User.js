const { Schema } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        require: true,
        uniqe: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },

    password: {
        type: String,
        required: true,
        minlength: 5
    },

    UsrType: {
        type: String,
        required: true,
        enum: ['Subscriber', 'Journalist'],
        default: 'Subscriber'
    }
});

const User = model('User', userSchema);

module.exports = User;
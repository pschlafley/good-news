const { Schema } = require('mongoose');

const articleSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['US', 'World', 'Christianity', 'Politics']
    },

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        minLength: 25,
        required: true
    },

});

const Article = model('Article', articleSchema);

module.exports = Article;
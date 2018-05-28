const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
    title: {type: String, required: true}, 
    content: {type: String, reuired: true},
    author: {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true}
    }
});

blogPostSchema.virtual('authorName').get(function() {
    return `${this.author.firstName} ${this.author.lastName}`
});

blogPostSchema.methods.serialize = function() {
    return {
        id: this._id,
        title: this.title,
        author: this.authorName,
        content: this.content
    };
}

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = {BlogPost};
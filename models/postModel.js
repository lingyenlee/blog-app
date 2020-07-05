import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CommentSchema = new Schema({
    username: {
        type: String,
    },
    text: {
        type: String,
    }
})

const PostSchema = new Schema({

    title: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    content: {
        type: String
    },
    category: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: Date.now
    },
    upvotes: {
        type: Number
    },
    image: {
        type: String
    },
    comments: [CommentSchema]
})

module.exports = mongoose.model("Post", PostSchema)
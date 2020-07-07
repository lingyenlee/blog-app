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

    },
    username: {
        type: String,

    },
    description: {
        type: String
    },
    ingredients: {
        type: Array
    },
    method: {
        type: Array
    },
    prepTime: {
        type: Number
    },
    cookTime: {
        type: Number
    },
    servingSize: {
        type: String,
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
    foodImage: {
        type: String
    },
    comments: [CommentSchema]
})

module.exports = mongoose.model("Post", PostSchema)
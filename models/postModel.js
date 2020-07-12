import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PostSchema = new Schema({

    title: {
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

    foodImage: {
        type: String
    }

})

module.exports = mongoose.model("Post", PostSchema)
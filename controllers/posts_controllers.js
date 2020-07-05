import mongoose from 'mongoose';
import { PostSchema } from '../models/postModel';

const Post = mongoose.model('Post', PostSchema)


//make a new post
export const addNewPost = async (req, res) => {
    console.log(req.body)
    const { title, username, content, category, create_date, modified_date, upvotes, comments } = req.body
    try {
        let newPost = new Post({
            title,
            username,
            content,
            category,
            create_date,
            modified_date,
            upvotes,
            comments
        })
        const post = await newPost.save()
        res.json(post)
        res.send("New post added")

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")

    }

}

// export const addNewPost = (req, res) => {
//     let newPost = new Post(req.body);
//     newPost.save((err, Post) => {
//         if (err) {
//             res.send(err)
//         }
//         res.json(Post)
//     })

// }

// get all posts
export const getPosts = async (req, res) => {

    try {
        const posts = await Post.find().sort({ modified_date: -1 })
        res.json(posts)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")

    }
}

//get a post by id
export const getPostID = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id)
        if (!post) return res.status(404).json({ msg: "No post found!" })
        res.json(post)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
}

//update a post
export const updatePost = async (req, res) => {

    try {
        let post = await Post.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (!post) return res.status(404).json({ msg: "No post found!" })
        res.json(post)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
}

// delete a post
export const deletePost = async (req, res) => {

    try {
        let post = await Post.findByIdAndDelete(req.params.id)
        res.json({ message: 'Successfully deleted post' })

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
}
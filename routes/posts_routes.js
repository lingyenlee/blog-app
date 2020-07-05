import express from 'express'
import {
    getPosts,
    getPostID,
    addNewPost,
    updatePost,
    deletePost
} from '../controllers/posts_controllers'


//initialize Router from express
const router = express.Router()

// @route GET api/posts
// @desc GET all posts
// @access Public

router.get('/', getPosts)

// @route GET api/posts/:id
// @desc GET a post by id
// @access Public

router.get('/:id', getPostID)

// @route POST api/posts
// @desc Create a new post
// @access Private

router.post('/', addNewPost)

// @route PUT api/posts/:id
// @desc Update a post by id
// @access Private

router.put('/:id', updatePost)

// @route DELTE api/posts/:id
// @desc Delete a post by id
// @access Private

router.delete('/:id', deletePost)

module.exports = router
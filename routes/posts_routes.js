import express from 'express'
import Post from '../models/postModel';
import upload from '../utils/upload'

//initialize Router from express
const router = express.Router()


// @route GET api/posts
// @desc GET all posts
// @access Public

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ modified_date: -1 })
        res.json(posts)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
})

// @route GET api/posts/:id
// @desc GET a post by id
// @access Public

router.get('/:id', async (req, res) => {
    try {
        let post = await Post.findById(req.params.id)
        if (!post) return res.status(404).json({ msg: "No post found!" })
        res.json(post)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
})

// @route POST api/posts
// @desc Create a new post
// @access Private
// router.post('/', upload.single('blogImages'), async (req, res) => {

//     const { title, username, content, category, create_date, modified_date, upvotes, comments } = req.body
//     try {
//         const newPost = new Post({
//             title,
//             username,
//             content,
//             category,
//             create_date,
//             modified_date,
//             upvotes,
//             comments,
//             blogImages: req.file.location,
//         })
//         const post = await newPost.save()

//         res.json(post)
//         res.send("New post added")
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).send("Server Error")
//     }

router.post('/', upload.array('blogImages', 4), async (req, res) => {

    console.log(req.files)
    const { title, username, content, category, create_date, modified_date, upvotes, comments, blogImages } = req.body
    try {
        let blogImagesArray = []
        const promises = req.files.map(file => {
            blogImagesArray.push(file.location)
            return blogImagesArray
        })

        const images = await Promise.all(promises)
        
        const newPost = new Post({
            title,
            username,
            content,
            category,
            create_date,
            modified_date,
            upvotes,
            comments,
            blogImages: images
        })
        const post = await newPost.save()

        res.json(post)
        res.send("New post added")

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }



    // console.log(req.files)
    // res.send(req.files)
    // const { title, username, content, category, create_date, modified_date, upvotes, comments, blogImages } = req.body
    // try {
    //     const newPost = new Post({
    //         title,
    //         username,
    //         content,
    //         category,
    //         create_date,
    //         modified_date,
    //         upvotes,
    //         comments,
    //         blogImages: req.file.location,
    //     })
    //     const post = await newPost.save()

    //     res.json(post)
    //     res.send("New post added")
    // } catch (error) {
    //     console.log(error.message)
    //     res.status(500).send("Server Error")
    // }

    // let newPost = await new Post(req.body);
    // newPost.save((err, Post) => {
    //     if (err) {
    //         res.send(err)
    //     }
    //     res.json(Post)
    // })
})


// @route PUT api/posts/:id
// @desc Update a post by id
// @access Private
router.put('/:id', async (req, res) => {

    try {
        let post = await Post.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (!post) return res.status(404).json({ msg: "No post found!" })
        res.json(post)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
})


// @route DELTE api/posts/:id
// @desc Delete a post by id
// @access Private

router.delete('/:id', async (req, res) => {

    try {
        let post = await Post.findByIdAndDelete(req.params.id)
        res.json({ message: 'Successfully deleted post' })

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
})

module.exports = router



// export const uploadImages = (req, res) => {
//     uploadMultiple(req, res, (error) => {
//         console.log('files', req.files);
//         if (error) {
//             console.log('errors', error);
//             res.json({ error: error });
//         } else {
//             // If File not found
//             if (req.files === undefined) {
//                 console.log('Error: No File Selected!');
//                 res.json('Error: No File Selected');
//             } else {
//                 // If Success
//                 let fileArray = req.files,
//                     fileLocation;
//                 const blogImagesArray = [];
//                 for (let i = 0; i < fileArray.length; i++) {
//                     fileLocation = fileArray[i].location;
//                     console.log('filenm', fileLocation);
//                     blogImagesArray.push(fileLocation)
//                 }
//                 // Save the file name into database
//                 res.json({
//                     filesArray: fileArray,
//                     locationArray: blogImagesArray 
//                 });
//             }
//         }
//     });
// }

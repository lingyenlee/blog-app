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
        console.log(post)
        res.json(post)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
})

// @route POST api/posts
// @desc Create a new post
// @access Private
router.post('/add', upload.single('foodImage'), async (req, res) => {

    const { title, description, ingredients, method,
        servingSize, cookTime, prepTime, create_date, modified_date } = req.body

    // const { foodImage } = req.file
    try {
        console.log("req body", req.body)
        console.log("req file", req.file)
        // let newPost;


        if (!req.file) {
            // res.json(req.file)
            const newPost = new Post()
            console.log("no file")
            await newPost.save(req.body)
            res.json(newPost)
        } else {
            const newPost = new Post({
                title, description, ingredients, method,
                servingSize, cookTime, prepTime, create_date, modified_date, foodImage: req.file.location
            })
            await newPost.save()
            res.json(newPost)
        }

        // const post = await newPost.save()


        // res.send("New post added")
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }

})

// router.post('/', upload.array('foodImages', 4), async (req, res) => {

//     console.log(req.files)

//     const { title, username, description, ingredients, directions,
//         servings, cookTime, prepTime, category, create_date, modified_date,
//         upvotes, comments } = req.body


//     try {
//         let images;

//         //if no images 
//         if (req.files === undefined) {
//             console.log('Error: No File Selected')
//             res.json('Error: No File Selected')
//         } else {
//             images = req.files.map(file => {
//                 return file.location
//             })
//         }

//         const newPost = new Post({
//             title,
//             username,
//             description,
//             ingredients,
//             directions,
//             servings,
//             cookTime,
//             prepTime,
//             category,
//             create_date,
//             modified_date,
//             upvotes,
//             comments,
//             foodImages: images
//         })

//         const post = await newPost.save()
//         res.json(post)
//         //  res.send("New post added")

//     } catch (error) {
//         console.log(error.message)
//         res.status(500).send("Server Error")
//     }



// @route PUT api/posts/:id
// @desc Update a post by id
// @access Private
router.put('/:id', upload.single('foodImage'), async (req, res) => {

    const { title, username, description, ingredients, method,
        servingSize, cookTime, prepTime, create_date, modified_date,
        upvotes, comments } = req.body

    let foodImage;
    if (req.file) {
        foodImage = req.file.location
    }


    try {
        let post = await Post.findOneAndUpdate(
            { _id: req.params.id },
            {
                '$set':
                {
                    title, username, description, ingredients, method,
                    servingSize, cookTime, prepTime, create_date, modified_date,
                    upvotes, comments, foodImage
                }
            },
            { new: true })

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

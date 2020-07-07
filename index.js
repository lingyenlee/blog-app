import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRouter from './routes/posts_routes'
import mongoose from 'mongoose'


//initialize express as app
const app = express();

//set server port at 5000
const PORT = 5000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/recipe-blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
    err => {
        if (err) {
            console.log("Error connecting to database", err)
        } else {
            console.log('Connected to MongoDB')
        }
    }
)


//use imported modules
// cors setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.send(`Our recipe app is running on PORT ${PORT}`)
})

//use posts routes
app.use('/posts', postRouter);

//connect and listen to port
app.listen(PORT, () => {
    console.log(`Your recipe app server is running on port ${PORT}`)
})



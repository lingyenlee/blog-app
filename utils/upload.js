import multer from 'multer'
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'
import config from 'config'


const awsAccessKey = config.get("aws-access-key")
const awsSecret = config.get("aws-secret")
const bucketName = config.get("bucket-name")

//Configure storage on S3
const s3 = new aws.S3({
    accessKeyId: awsAccessKey,
    secretAccessKey: awsSecret,
    region: 'ap-southeast-2',
})


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./uploads");
//     },
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname);
//     }
// })

// Check File Type
//define filter for multer uploads
const fileFilter = (req, file, cb) => {
    //reject file if not jpeg or png
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false)
    }
}



//configure multer for uploading multiple files (max 4)
const upload = multer({
    // storage: storage,
    storage: multerS3({
        s3: s3,
        bucket: bucketName,
        acl: "public-read",
        // metadata: (req, file, cb) => {
        //     cb(null, {fieldName: "blogImages"})
        // },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        }
    }),
    limits: { fileSize: 10000000 }, // In bytes: 2000000 bytes = 5 MB
    fileFilter: fileFilter

})

module.exports = upload
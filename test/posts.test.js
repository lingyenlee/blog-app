// import expect from 'expect'
// import fs from 'fs'
// import utilities from '../utils/utilities'

// //use test data file
// const testDataFile = '../data/blog_posts.test.json'

// // when we write to the file, the path is relative to app.js
// const testFileDataForWrite = utilities.getDataFileRelativeToApp(testDataFile)

// beforeEach(() => {
//     //set and load data from test data file
//     setupData()
// })

// describe('getAllPosts with one post', () => {
//     it('should get a post if one exists', () => {
//         //pass an empty req object
//         expect(Object.keys(utilities.getAllPosts({})).length).toBe(1)
//     })

//     it("user of first post should be tester", () => {
//         expect(utilities.getAllPosts({})["1"].username).toBe("tester")
//     })
// })


// describe("getPostById", () => {
//     // Define a req object with the expected structure to pass a parameter
//     const req = {
//         params: {
//             id: "1"
//         }
//     }
//     it("user of post with id 1 should be tester", () => {
//         expect(utilities.getPostById(req).username).toBe("tester")
//     })
// })

// // Setup and tear down functions
// function setupData() {
//     let testPostData = {}
//     let testPost = {}
//     let date = Date.now()
//     testPost.title = "Test post 1"
//     testPost.username = "tester"
//     testPost.create_date = date
//     testPost.modified_date = date
//     testPost.content = "This is the first test post"
//     testPost.category = ""
//     testPostData["1"] = testPost

//     fs.writeFileSync(testDataFileRelative, JSON.stringify(testPostData))
//     utilities.loadFile(testDataFileRelative)
// }

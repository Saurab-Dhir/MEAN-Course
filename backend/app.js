const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require('mongoose');


const Post = require('./models/post')

const app = express();

mongoose.connect("mongodb+srv://Saurab:zZvM8CL29SdloMwJ@cluster0.75vpjpq.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(() =>{
  console.log("Conntected to Database")

})
.catch(() =>{
  console.log("Connection Failed")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({ // Because of the mongoose.model function in backend/models/post.js file we now have a constructor for Post
    title: req.body.title,
    content: req.body.content
  });

  post.save().then( createdPost => {
    res.status(201).json({
      message: "Post Added Successfully",
      postId: createdPost._id
    });
  });    // save is a mongoose function, the object "post" is now sent to mongoDB
});

app.get("/api/posts", (req, res, next) => {
  Post.find() // returns all/filtered enteries
  .then(documents =>{
    console.log(documents);
    res.status(200).json({                    // since fetching is asynchronus we need the res.status inside the .then
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result)
    res.status(200).json({message: 'Post Deleted!'})

  });
});

module.exports = app;

// User posts, aka allows people too make and comment on posts
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

router.post("/post", (req,res) => {
    const {title, author, description} = req.body

    const newPost = new Adventure({
        title: title,
        author: author,
        description: description
    })

    newPost.save((err, savedTopic) => {
        if (err) return res.json(err)
        res.json(savedTopic)
    })
})

router.get("/all", (req,res) => {
    Adventure.find({}).sort({date: -1}).then(results => res.json(results))
})



router.post("/submit/:id", function(req,res){
    const { author , body, postId } = req.body

    const newComment = new Comment({
        author: author,
        body: body,
        postId: postId
    })

    newComment.save((err, dbComment) => {
        if (err) return res.json(err)
        res.json(dbComment)
        console.log(dbComment)
    })
})

router.get("/api/comment/:id", function(req,res){
    Comment.find({postId: req.params.id}).then(results => res.json(results))
})


module.exports = router;
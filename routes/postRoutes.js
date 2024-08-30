const express = require('express');
const { createPost, updatePost, getAllPost, getUserPost, deletePost } = require('../controllers/postController');

let router = express.Router();

router.post('/create',createPost)
router.put('/update/:_id',updatePost)
router.get('/getall',getAllPost)
router.get('/userpost/:_id',getUserPost)
router.delete('/delete/:_id',deletePost)




module.exports = router
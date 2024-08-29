const express = require('express');
const { registerUser, getAllusers, deleteUser, loginUser } = require('../controllers/userController');
const router = express.Router();


router.post('/register',registerUser)
router.get('/getAllUser',getAllusers)
router.delete('/delete/:_id',deleteUser)
router.post('/login',loginUser)


module.exports = router  
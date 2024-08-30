const express = require('express');
const { registerUser, getAllusers, deleteUser, loginUser, updateUser } = require('../controllers/userController');
const router = express.Router();


router.post('/register',registerUser)
router.get('/getAllUser',getAllusers)
router.delete('/delete/:_id',deleteUser)
router.post('/login',loginUser)
router.put('/update/:_id',updateUser)


module.exports = router  
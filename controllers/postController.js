const PostCollection = require('../models/Post')
const createPost = async(req,res)=>{
    const {title,description,image,video,user} = req.body
    try {
        let data = await PostCollection.create({
            title,
            description,
            image,
            video,
            user
        })
        res.json({msg:"post created successfully",success:true,data})
    } catch (error) {
        res.json({msg:"error in creating post",success:false,error:error.message})
    }

}
const updatePost = async()=>{

}
const deletePost = async()=>{

}
const getAllPost = async(req,res)=>{
    let data = await PostCollection.find().populate({path:"user"});
    res.json({msg:"fetched successfully",data})

}
const getUserPost = async(req,res)=>{
    let id = req.params._id;
    let data = await PostCollection.find({user:id})
    res.json({msg:"post fetched successfully",data})
}

module.exports = {
    createPost,
    getAllPost,
    deletePost,
    updatePost,
    getUserPost
}
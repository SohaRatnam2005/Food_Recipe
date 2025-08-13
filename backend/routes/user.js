const express = require("express")
const router = express.Router()

const {userLogin,userSignUp,getUser} = require("../controller/user")
const verifyToken=require('../middleware/auth')
router.post("/signUp",userSignUp)
router.post("/login",userLogin)
router.get("/", verifyToken, getUser);

module.exports = router
const router = require("express").Router();
const {loginUser , singupUser} = require('../controller/userController')


router.post('/login',loginUser)
router.post('/singup',singupUser)

module.exports = router
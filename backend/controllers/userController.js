const register =(req,res)=>{
res.json({messgae:"Register user"})
}
const login =(req,res)=>{
    res.json({messgae:"login user"})

}
const getUsers =(req,res)=>{
    res.json({messgae:"login user"})

}

module.exports = {
    register,
    login,
    getUsers
}
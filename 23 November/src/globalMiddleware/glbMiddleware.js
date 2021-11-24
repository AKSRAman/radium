// let token = req.headers['x-auth-token']
// let decoded = jwt.verify(token, 'unlock')
// if (decoded) {
//     req.decoded = decoded
//     next()
// } else {
//     res.send({ status: false, mesg: 'invalid token' })
// }



// const getUser= async function(req,res){
//     let decodedToken=req.params.userId
//     //console.log(req.decoded.userId)
//     if(req.decoded.userId==decodedToken){
//         let userDetail=await userModel.findOne({_id:decodedToken,isDeteted:false})
//         if(userDetail){
//             res.send({status:false,message:userDetail})
//         }else{
//             res.send({status:false,message:'user not found'})
//         }
//     }else{
//         res.send({status:false,data:'user not authorised'})
//     }

// }



// const updateEmail= async function(req,res){
//     let decodedToken=req.params.userId
//     console.log(req.decoded.userId)
//     if(req.decoded.userId==decodedToken){
//         let userDetail=await userModel.findOne({_id:decodedToken,isDeteted:false})
//         if(userDetail){
//             let newEmail = req.body
//             let updetedEmail=await userModel.findOneAndUpdate({_id:userId,isDeleted:false},{email:newEmail})
//             res.send({status:false,message:updetedEmail})
//         }else{
//             res.send({status:false,message:'user not found'})
//         }
//     }else{
//         res.send({status:false,data:'user not authorised'})
//     }
// }

// module.exports.captureInfo = captureInfo
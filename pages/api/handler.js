import  nc  from  'next-connect'

const onError =  (err,req,res)=>{
    res.status(403).json({err:`POST method is not allowed  `})
}
const  onNoMatch=(req,res)=>{
    res.status(404).json({message:'There is  no  matched user'})
}
const handler =   nc({onError},{onNoMatch})
// const   handler =  nc({onError},{onNoMatch});
// const onError = (err,req,res)=>{
    //     res.status(205).json({err:`POST method not allowed ${err.message}`})
// }
// const onNoMatch = (req,res) =>{
//     res.status(404).json({message:'Not Allowed'})
// }
export default nc()
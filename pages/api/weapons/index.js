import Users from '../../../models/Users'
import dbConnect from "../../../utilis/dbConnection";
import nConnect from 'next-connect'  
// import  handler from'../handler'
dbConnect();



const onError =  (error,req,res)=>{
    res.status(400).json({error:`Something  wents wrong ,  ${error.message}`})
}


const handler =  nConnect({onError});

handler.post(async(req,res)=>{

    const  data  = req.body
    const {name,email,password} =  data
    try {
        const checkUser = await Users.exists({name:name,email:email,password:password})
        if(!checkUser){
           throw new Error('Not in use')
            
        }else{
            const $name = await Users.findOneAndUpdate({name:name,isAuth:true})
            res.status(200).json({success:true,data:$name,message:'successfully  logged'})
            console.log(name        ) 
            
        }
        console.log(checkUser)
        // res.status(200).json({data:checkUser})
        } catch (error) {
            throw   new Error('Use')
        }
        console.log()
    

})
.get((req,res)=>{
    throw new Error("POST METHOD  NOT  ALLOWED")
}).put((req,res)=>{
    throw new Error("PUT METHOD Not ALOOWED")
})

export default handler
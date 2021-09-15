import Users from  './../../models/Users'
import dbConnect from './../../utilis/dbConnection'

dbConnect();




const SignIn = async(req,res)=>{
        const {method} = req
        const data = req.body
        const {name,email,password} = data
        //
        if(method === "POST"){
            console.log(req.body)
             try {
                const checkUser = await Users.exists({name:name,email:email,password:password})
                if(!checkUser){
                    res.status(401).json({success:false,message:'User Doesnt  Exist'})
                    
                }else{
                    // const $name = await Users.findOneAndUpdate({name:name,isAuth:true})
                    res.status(200).json({success:true,data:checkUser,message:'successfully  logged'})
                    console.log(name        ) 
                    
                }
                console.log(checkUser)
                // res.status(200).json({data:checkUser})
                } catch (error) {
                    res.status(404).json({access:"denied"})
                }
                console.log()
            }

                
}

export default SignIn
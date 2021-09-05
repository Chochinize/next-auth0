import dbConnect from "../../../utilis/dbConnection";
import Users from "../../../models/Users";
dbConnect();

console.log(123);


const LogAuth  = async(req,res)=>{
    // const {method} = req;

    const {
        query:{id},
        method
    } = req;
    if(req.method === "GET"){
        try {
            const user = await Users.findById(id)
            res.status(201).json({success:true,data:user})
            console.log(user)
        } catch (error) {
            res.status(400).json({success:false})
        }
    }
    
        
    
    

}
export default LogAuth

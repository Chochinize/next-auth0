import dbConnect from "../../../utilis/dbConnection";
import Users from "../../../models/Users";
dbConnect();
const Page = async(req,res)=>{
    const {method} = req;
    switch(method){
        case 'GET':
            try{
                const notes1 = await Users.find({});
                res.status(200).json({success:true, data:notes1})
            }catch(error){
            res.status(400).json({success: false});
            }
            break;

            case'POST': 
        
            try{
                const note = await Users.create(req.body);
                res.status(201).json({success:true,data:note})
            }catch(error){
                res.status(400).json({success: false});
            }
            break;
           default:  res.status(400).json({success: false});
           break;

    }
}
export default  Page
import dbConnect from "../../../utilis/dbConnection";
import Users from "../../../models/Users";

dbConnect();

const handler =  async  (req,res)=>{
    const {
        query:{id},
        method
    } = req;

    switch(method){

        case 'GET':
            try{
                const note = await Users.findById(id)
                if(!note){
                    return res.status(400).json({success:false});
                }
                res.status(200).json({success:true, data:note});
            }catch(error){
                res.status(400).json({success:false})
            }
            break;
        case 'PUT':
            try{
                const note = await Users.findByIdAndUpdate(id, req.body, {
                    new:true,
                    runValidators: true
                });
                if(!note){
                    return res.status(400).json({success:false}); 
                }
                res.status(200).json({success:true, data:note});
            }catch(error){
                 res.status(400).json({success:false}); 
            }
            break;
            case 'DELETE':
                try{
                    const deletedNote = await Users.deleteOne({_id:id})
                    if(!deletedNote){
                        return res.status(400).json({success:false})
                    } 
                    res.status(200).json({success:true, data:{}});
                }catch(error){
                    res.status(400).json({success:false})
                }
                break;
                default:
                    res.status(400).json({success:false})
                    break;

        }

}

export default handler;
import Users from '../../../models/Users'
import dbConnect from "../../../utilis/dbConnection";
import {useRouter} from 'next/router'
dbConnect()

const  handler = async(req, res)=>{
  const data = req.body
  const {name,idx,email} = data
  const {method,query:{id}} = req;










  //  operating with databese  =>
  //  1.GET
  //  2.POST
  switch(method){
    case "GET":
      try {
        const getUser = await Users.find({})
        res.status(200).json({success:true, data:getUser})
      } catch (error) {
        res.status(400).json({success:false})
      }
      break;
      case "POST":
        try {
          const checkUser = await Users.findOne({name:name})
          if(checkUser){
            res.status(400).json({message:"Name already exis"})
            break;
          }
          const createUser = await Users.create(data)
          res.status(200).json({success:true,data:createUser})

        } catch (error) {
          res.status(404).json({success:false,data:error})
        }
      }
    }
export default handler
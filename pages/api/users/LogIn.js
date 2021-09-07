import dbConnect from "../../../utilis/dbConnection";
import Users from "../../../models/Users";
import nc from 'next-connect'
import Email from "../../../utilis/email";
import BE from '../../../Components/backend'
import path from 'path'
dbConnect();
const logHanndler = nc()
 logHanndler.post(async(req,res)=>{
    
    

    try {

    } catch (error) {
        
    }
 }).get(async(req,res)=>{
    res.sendFile(path.join(__dirname, '/pages/backend'));
 })

 export default logHanndler;
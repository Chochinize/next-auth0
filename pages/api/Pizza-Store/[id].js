import dbConnect from "../../../utilis/dbConnection";
import Piz from "../../../models/Pizzas";
import nc from 'next-connect'
import Basket  from '../../../models/basket'
import { getToken } from "next-auth/jwt"
dbConnect();
const handler =  nc();

handler.get(async(req,res)=>{
    const {
        query:{id},
        method
    } = req;

    
            try{
                const note = await Piz.findById(id)
                // if(!note){
                //     return res.status(400).json({success:false});
                // }
               
                res.status(200).json({success:true, data:note});
            }catch(error){
                res.status(400).json({success:false})
            }
           

        }).patch(async(req,res)=>{

            const {id} = req.body;
        
            const deletItem = await Basket.findByIdAndUpdate(id,req.body,{
                new: true,
                upsert: true,
                runValidators:true
                
            })
            res.status(200).json({successfull:deletItem})
            try {
                
            } catch (error) {
                
            }
        })



export default handler;
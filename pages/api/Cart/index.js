import dbConnect from "../../../utilis/dbConnection";

import nc  from 'next-connect'
import Cart from '../../../models/basket'
dbConnect()

const  handler =  nc()

handler.get(async(req,res)=>{
    

    console.log(12355)
    try {
      
       
        
        
        
        
        const  finder = await  Cart.find({})

           res.status(200).json({success:'Successfully Updated',message:finder})
    } catch (error) {
        
    }
})

export default handler
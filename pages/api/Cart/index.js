import dbConnect from "../../../utilis/dbConnection";
import {StoryModel}from '../../../models/population'
import nc  from 'next-connect'
dbConnect()

const  handler =  nc()

handler.post(async(req,res)=>{
    console.log(StoryModel)
    try {
      
       
        
        
        
        
        const  finder = await  StoryModel.find({}).populate('title')

           res.status(200).json({success:'Successfully Updated',message:finder})
    } catch (error) {
        
    }
})

export default handler
import {ShamanModel,SorsModel}  from '../../../models/HeroClasses'
import dbConnect from '../../../utilis/dbConnection';
import  nc  from  'next-connect'
import  {StoryModel,PersonModel} from '../../../models/population'
dbConnect();


const handler = nc()
console.log(SorsModel)
  handler.post(async(req,res)=>{

      try {
          const createCharacter = await SorsModel.create(req.body)
          res.status(200).json({message:createCharacter})
        } catch (error) {
            res.status(400).json({message:"not  created"})
        }
    }).get(async(req,res)=>{
     console.log(23)
     console.log(23)
     console.log(23)
        try {
            const finde  =  await  StoryModel.
            findOne({ title: 'Casino Royale' })
            res.status(200).json({message:finde})
        } catch (error) {
            
        }
    })
    


export  default handler
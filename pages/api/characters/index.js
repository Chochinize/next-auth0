import { Shaman,Sorceres } from '../../../models/HeroClasses'
import dbConnect from '../../../utilis/dbConnection';
dbConnect();


const  handler =  async(req,res)=>{
    if(req.method === "POST"){
        try {
            const createCharacter = await Shaman.create(req.body)
            res.status(200).json({message:"Successfully create Character"})
        } catch (error) {
            res.status(400).json({message:"not  created"})
        }
    }
}

export  default handler
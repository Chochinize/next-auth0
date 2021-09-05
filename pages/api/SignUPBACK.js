import dbconnect from '../../utilis/dbConnection'
import  Users  from '../../models/Users'
import nc from 'next-connect'
import {getUsers} from '../../controllers/usersController'

const onError = (err,req,res)=>{
    res.status(205).json({err:`POST method not allowed ${err.message}`})
}
const onNoMatch = (req,res) =>{
    res.status(404).json({message:'Not Allowed'})
}
    const handler =  nc({onError},{onNoMatch});

    handler.get(async(req,res)=>{

        const  data  = req.body
        const {name} =  data
        try {
        const f = await Users.findOne({})
         if(f){

             res.status(200).json({message:'GOOD'})
            }else{
                throw new Error('Imposiible login')
            }
          
                
                
            } catch (error) {
                throw new Error('NOT GOOD')
                // res.status(405).json({message:"sorry  bout dat"})
                
        }
        

    })
    .post((req,res)=>{
        throw new Error('NOT ALLOWED')
    })
export  default handler
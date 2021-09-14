import dbConnect from "../../../utilis/dbConnection";
import Piz from "../../../models/Pizzas";
import nc from 'next-connect'
import Cart from  '../../../models/basket'

dbConnect();
const handler =  nc();

handler.get(async(req,res)=>{
    const {
        query:{id},
        
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
           

        }).put(async(req,res)=>{
            console.log(req.body)
            const {
                query:{id},
                method
            } = req;
            console.log("both works",id)
            const deletItem = await Cart.findByIdAndUpdate(id,req.body,{
                new: true,
                upsert: true,
                runValidators:true
                
            })
            res.status(200).json({successfull:deletItem})
            try {
                
            } catch (error) {
                
            }
        }).post(async(req,res)=>{


            // const {id} = req.body;
                const {
                    query:{id},
                    method  
                } = req;
                console.log(id)
                try {
                   
                    
                    const creater  =  await Cart.exists({_id:id})
                
                        
                        
                        
                        const  finder = await  Cart.findByIdAndUpdate(id,req.body,{
                            new: true,
                            upsert: true,
                            runValidators:true
                            
                    })
                    
                    
                    
                    
                    
                    res.status(200).json({success:'Successfully Updated',message:finder})
                
                   
                } catch (error) {
                    
                }
            })



export default handler;
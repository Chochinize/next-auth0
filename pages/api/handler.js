import Cart from  './../../models/basket'
import dbConnect from './../../utilis/dbConnection'
import  nc from 'next-connect'
dbConnect();


const  handler =  nc()


handler.get(async(req,res)=>{
   
    try {
        const PizzaList = await Cart.find({})
        res.status(200).json({success:true,data:PizzaList})
    } catch (error) {
        console.log(error)
    }
}).post(async(req,res)=>{
    try {

        const filter = { _id:'61378a4d6f3267adfb3cc8b3'};
        const  finder = await  Cart.findByIdAndUpdate(filter,req.body,{
            new: true,
            upsert: true,
            runValidators:true
            
        })
        res.status(200).json({success:"updated item",data:finder})
    } catch (error) {
        
    }
})


export default handler
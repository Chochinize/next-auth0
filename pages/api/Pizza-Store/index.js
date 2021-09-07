import Piz from "../../../models/Pizzas";
import dbConnect from "../../../utilis/dbConnection";
import nc from 'next-connect';

dbConnect()

const pizzahandler = nc();


pizzahandler.get(async(req,res)=>{
    try {
        const PizzaList = await Piz.find({})
        res.status(200).json({success:true,data:PizzaList})
    } catch (error) {
        console.log(error)
    }
}).post(async(req,res)=>{
    try {
        const  finder = await  Piz.create({quantity:req.body.quantity})
       if(!finder){
           res.status(200).json({message:finder})
       }
    } catch (error) {
        
    }
})


export default pizzahandler

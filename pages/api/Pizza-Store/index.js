import Piz from "../../../models/Pizzas";
import Cart from  '../../../models/basket'
import dbConnect from "../../../utilis/dbConnection";
import nc from 'next-connect';
import  jwt  from "next-auth/jwt"
dbConnect()

const pizzahandler = nc();

pizzahandler.get(async(req,res)=>{
   
        

    try {
        const PizzaList = await Piz.find({})
        res.status(200).json({success:true,data:PizzaList})
    } catch (error) {
        console.log(error)
    }
})


export default pizzahandler

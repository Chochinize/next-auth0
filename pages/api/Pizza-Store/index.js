import Piz from "../../../models/Pizzas";

import dbConnect from "../../../utilis/dbConnection";
import nc from 'next-connect';

dbConnect()

const pizzahandler = nc();

pizzahandler.get(async(req,res)=>{
   

    try {
        console.log('COOl')

        const PizzaList = await Piz.find({})
        res.status(200).json({success:true,data:PizzaList})
    } catch (error) {
        console.log(error)
    }
})


export default pizzahandler

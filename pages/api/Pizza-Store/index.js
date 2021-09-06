import Pizzas from "../../../models/Pizzas";
import dbConnect from "../../../utilis/dbConnection";
import nc from 'next-connect';

dbConnect()

const handler = nc();


handler.get(async(req,res)=>{
    try {
        const PizzaList = await Pizzas.find({})
        res.status(200).json({success:true,data:PizzaList})
    } catch (error) {
        throw new Error('NOT       ALLOWED')
    }
})

export default handler

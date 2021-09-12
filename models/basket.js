import mongoose from "mongoose";

const Cart = new mongoose.Schema({

    item:{
        type:String
    },
    count:{
        type:Number,default:0
    },
    price:{
        type:Number,default:0
    },
    token:{
        type:String
    }
})



export default mongoose.models.Cart || mongoose.model('Cart',Cart);
import mongoose from 'mongoose';


const Pizzas = new mongoose.Schema({
  name:{
    type:String,
    require:[true,'Please Add a title'],
    unique:true,
    maxlength:[40,'Titlle with no more than 40 characters']
 
},
description:{
    type:String,
    require:[true,'Please Add Email']
},
price:{
    type:Number
},
image:{
    type:String
}
  })

  export default mongoose.models.Pizzas || mongoose.model('Pizzas',Pizzas);




// export const Pizza  = mongoose.model('Pizzas',Pizzas)
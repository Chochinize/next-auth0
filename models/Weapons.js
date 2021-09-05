import mongoose from 'mongoose';

const Weapons = new mongoose.Schema({
  name:{
    type:String,
    require:[true,'Please Add a title'],
    unique:true,
    maxlength:[40,'Titlle with no more than 40 characters']
 
},
dmg:{
    type:String,
    require:[true,'Please Add Email']
}
  })

  export default mongoose.model.Weapons || mongoose.model("Weapons",Weapons)
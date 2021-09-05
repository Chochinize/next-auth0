import mongoose from 'mongoose'


const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Add a title'],
        unique:true,
        maxlength:[40,'Titlle with no more than 40 characters']
     
    },
    email:{
        type:String,
        required:[true,'Please Add Email'],
        trim:true
    },
    password:{
        type:String,
        required:true,
        maxlength:[200,'Descriptions cannot be more than 200 characters']
    },
    style:{
        type:String
    },
    updated:{
        type:String,
        lowercase:true,
        trim:true
    },
    isAuth:{
        type:Boolean,
        default:false
    },
    date: { type: Date, default: Date.now }

},{collection:'users'})
export default mongoose.models.Note || mongoose.model('Note',UserSchema);


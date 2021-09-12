import mongoose from 'mongoose'



const YberSchema = new mongoose.Schema({
    username: String,
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }]
  })

  const  PostSchema = new mongoose.Schema({
      content:String,
      author:{
          type:mongoose.Schema.Types.ObjectId
        }
    })

    
    export default  mongoose.model('Yber',YberSchema,'ybeer');
//   export const User = mongoose.model('User',UserSchema,'users')




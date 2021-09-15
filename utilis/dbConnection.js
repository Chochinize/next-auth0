import mongoose from 'mongoose';

//CREATE CONNECTION  TO DATABASE
//FROM NOW ON dBConnect is available everywhere
const connection = {};
const conn = process.env.NEXT_PUBLIC_MONGODB_CONNECTION 

const dbConnect= async()=>{
    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect(conn,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
    console.log('------------DATA BASE RUNiNG------------')
    
}
export default dbConnect;

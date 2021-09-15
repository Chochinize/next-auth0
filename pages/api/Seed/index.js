import dbConnect from '../../../utilis/dbConnection'
import Pizz from '../../../models/Pizzas'
import faker from 'faker'
import mongoose from 'mongoose'


dbConnect()

const handler = async (req,res)=>{

    try {
        await Pizz.deleteMany({})
        console.log('All pizzas have been deleted')
      } catch (err) {
        console.log(err)
      }
    
    const pizzaPromises = Array(15)
    .fill(null)
    .map(() => {
      const pizzaData = {
        name: faker.address.cityName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(7.99, 13.80),
        image: faker.image.food()
      }
      console.log(`Pizza ${pizzaData.name} has been created`)
      return Pizz.create(pizzaData)
      res.status(200).json({message:'CREATED'})
    })

    try {
        await Promise.all(pizzaPromises)
        console.log('==================================')
        console.log('All 15 pizzas have been stored into the DB')
        console.log('==================================')
        res.status(200).json({message:'CREATED'})
      } catch (err) {
        console.log(err)
      }
      
      mongoose.connection.close()

}














export default handler
















// (async () => {
  

//     const MONGO_URI = process.env.NEXT_PUBLIC_TEST
//     mongoose.connect(MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       })
//       .then(() => console.log('Connection to DB established!'))
//       .catch(err => console.log(`[ERROR] Connection failed => ${err}`))



//     const pizzaPromises = Array(15)
//       .fill(null)
//       .map(() => {
//         const pizzaData = {
//           name: faker.address.cityName(),
//           description: faker.commerce.description(),
//           price: faker.commerce.price(7.99, 13.80),
//           image: faker.image.food()
//         }
//         console.log(`Pizza ${pizzaData.name} has been created`)
//         return Pizz.create(pizzaData)
//       })
//     try {
//       await Promise.all(pizzaPromises)
//       console.log('==================================')
//       console.log('All 15 pizzas have been stored into the DB')
//       console.log('==================================')
//     } catch (err) {
//       console.log(err)
//     }
//     mongoose.connection.close()
//   })()






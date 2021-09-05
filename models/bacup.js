import mongoose from 'mongoose'

const HeroStatsSchema = new mongoose.Schema({
  
 
      
        stats:{
            health:{
                vitality:{type:Number}
            },
            mana:{
                intelect:{type:Number}
            },
            dmg:{
                magic:{type:Number},
                hand:{type:Number}
            }
        }
})

const SorceresSchema = new mongoose.Schema({
    Stats:HeroStatsSchema,
    skills:{
        fire:[String],
        lightning:[String],
        cold:[String]
    },
})
const ShamanSchema = new mongoose.Schema({
    Stats:HeroStatsSchema,
    skills:{
        wind:[String],
        earth:[String],
        water:[String]
    },
})
export default mongoose.models.Heroes || mongoose.model('Heroes',HeroStatsSchema)
import mongoose from 'mongoose'

const HeroStatsSchema = new mongoose.Schema({
            level:[{base:Number}],
            expirience:[Number],
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
export const SorsModel  =    mongoose.models.Sorceres ||mongoose.model('Sorceres',SorceresSchema) 
export const  ShamanModel  =  mongoose.models.Shaman  || mongoose.model('Shaman',ShamanSchema) 


import mongoose from 'mongoose'

const HeroStatsSchema = new mongoose.Schema({
            level:{},
            expirience:{},
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
export const Sorceres = mongoose.model('Sorcersess',SorceresSchema)
export const Shaman = mongoose.model('Shaman',ShamanSchema)

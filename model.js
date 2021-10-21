
const mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')
const keys = require('./config/keys');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/wma_test', {
    useNewUrlParser: true, useUnifiedTopology: true
}).catch(err => console.log(err))

const wmaSchema = new mongoose.Schema({
    timestamp: {type: Number, required:true},
    cod: Number,
    bod: Number,
    do: Number,
    ph: Number,
    temp: Number,
    ss: Number,
    fog: Number,
    total_nitrogen: Number,
    total_phosphorous: Number,
    salt: Number,
    treated_water: Number,
    treated_bod: Number,
    treated_cod: Number,
    treated_doo: Number,
    treated_ph: Number,
    treated_temp: Number,
    treated_ss: Number,
    treated_fog: Number,
    treated_totalNitrogen: Number,
    treated_totalPhosphorous: Number,
    treated_salt: Number,
    level1_approval: Number,
    level2_approval: String,
    station_id: Boolean,
    station_name : Boolean,
    latitude: Number,
    longtitude: Number,
    year: Number,
    month: Number,
    day: Number,

    
})

wmaSchema.plugin(paginate)

module.exports = mongoose.model('wma99', wmaSchema)


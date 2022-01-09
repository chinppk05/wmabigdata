
const mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')
const keys = require('./config/keys');

/*
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/wma_test', {
    useNewUrlParser: true, useUnifiedTopology: true
}).catch(err => console.log(err))
*/


mongoose.connect("mongodb+srv://chinppk05:25021996@wmatest.plvbd.mongodb.net/wma_test?retryWrites=true&w=majority", {
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

const mwaSchema = new mongoose.Schema({
    "order": Number,
    "datetime": String,
    "time": String,
    "ph": Number,
    "salt": Number,
    "turb": Number,
    "tds": Number,
    "chlorophyll": Number,
    "do": Number,
    "temp": Number,
    "depth": Number,
    "conduct": Number,
    "wlevel": Number,
    "bga": Number
    
})

const ridcpSchema = new mongoose.Schema({
    "code": String,
    "name": String,
    "dateTh": String,
    "dateTime": String,
    "ph": Number,
    "salinity": Number,
    "tds": Number,
    "do": Number,
    "temp": Number,
    "conductivity": Number,
    "waterLevel": Number
    
})

const ridtcSchema = new mongoose.Schema({
    "code": String,
    "name": String,
    "dateTh": String,
    "dateTime": String,
    "ph": Number,
    "salinity": Number,
    "tds": Number,
    "do": Number,
    "temp": Number,
    "conductivity": Number,
    "waterLevel": Number,
    "velocity": Number,
    "flowRate": Number
    
})

const pcdSchema = new mongoose.Schema({
    "pH": Number,
    "DO": Number,
    "EC": Number,
    "temp": Number,
    "Turbid": Number,
    "Ammonium": Number,
    "Nitrate": Number,
    "BOD": Number,
    "COD": Number,
    "Ammonia": Number,
    "time": String,
    "date": String,
    "stationid": String,
    "name": String
    
})



wmaSchema.plugin(paginate)

module.exports.wmadata = mongoose.model('wma99', wmaSchema)
module.exports.mwadata = mongoose.model('wma87', mwaSchema)
module.exports.ridcpdata = mongoose.model('wma88', ridcpSchema)
module.exports.ridtcdata = mongoose.model('wma89', ridtcSchema)
module.exports.pcddata = mongoose.model('wma85', pcdSchema)




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
    "bga": Number,
    "stationId":String,
    "stationName":String
    
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

const budgetSchema = new mongoose.Schema({
    "year": Number,
    "projectname": String,
    "projectlist": String,
    "username": String,
    "plan1": Number,
    "plan2": Number,
    "plan3": Number,
    "plan4": Number,
    "plan5": Number,
    "plan6": Number,
    "plan7": Number,
    "plan8": Number,
    "plan9": Number,
    "plan10": Number,
    "plan11": Number,
    "plan12": Number,
    "result1": Number,
    "result2": Number,
    "result3": Number,
    "result4": Number,
    "result5": Number,
    "result6": Number,
    "result7": Number,
    "result8": Number,
    "result9": Number,
    "result10": Number,
    "result11": Number,
    "result12": Number,
    "edited": Number,
    "timestamp": Date
   
})
const stationnameSchema = new mongoose.Schema({
    "number": Number,
    "station": String,
    "detail" : String,
    "location" : String,
    "person": String,
    "tel" : String,
    "email": String,
    "type" : String,
    "capability":String,
    "last year_average":String,
    "input": Number,
    "all_area":Number,
    "service_area":Number,
    "coverage":Number,
    "area_waste":Number,
    "people":String,

    
})

const monthlydataSchema = new mongoose.Schema({
    "stationid" : Number,
    "year": Number,
    "month" : Number,
    "treated_water" : Number,
    "timestamp": Date
    
})

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        unique: true
    },
    password: String
   
})


wmaSchema.plugin(paginate)

module.exports.wmadata = mongoose.model('wma99', wmaSchema)
module.exports.mwadata = mongoose.model('wma87', mwaSchema)
module.exports.ridcpdata = mongoose.model('wma88', ridcpSchema)
module.exports.ridtcdata = mongoose.model('wma89', ridtcSchema)
module.exports.pcddata = mongoose.model('wma85', pcdSchema)
module.exports.userdata = mongoose.model('wmauser', userSchema)
module.exports.budgetdata = mongoose.model('wmabudget', budgetSchema)
module.exports.stationdata = mongoose.model('wmastations', stationnameSchema)
module.exports.monthlydata = mongoose.model('wmamonthlies', monthlydataSchema)




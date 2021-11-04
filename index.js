
const models = require('./model')
const wmadata = models.wmadata
const mwadata = models.mwadata
const pcddata = models.pcddata
const ridcpdata = models.ridcpdata
const ridtcdata = models.ridtcdata

const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const PORT = process.env.PORT ||  8080


app.use(express.static('public'))

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    wmadata
    .find().sort('level1_approval')
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('index', {
            data: docs
        })
    })
})

app.get('/pcd01', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("240")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.render('pcd01', {
            data: docs
        })
    })
})
app.get('/pcd02', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("118")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.render('pcd02', {
            data: docs
        })
    })
})
app.get('/pcd03', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("113")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.render('pcd03', {
            data: docs
        })
    })
})
app.get('/pcd04', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("128")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.render('pcd04', {
            data: docs
        })
    })
})
app.get('/pcd05', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("112")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.render('pcd05', {
            data: docs
        })
    })
})
app.get('/pcd06', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("222")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.render('pcd06', {
            data: docs
        })
    })
})
app.get('/pcd07', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("111")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.render('pcd07', {
            data: docs
        })
    })
})
app.get('/pcd08', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("248")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.render('pcd08', {
            data: docs
        })
    })
})
app.get('/pcd09', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("110")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.render('pcd09', {
            data: docs
        })
    })
})
app.get('/pcd10', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("109")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.render('pcd10', {
            data: docs
        })
    })
})

app.get('/pcddata01', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("240")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/pcddata02', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("118")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/pcddata03', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("113")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/pcddata04', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("128")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/pcddata05', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("112")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/pcddata06', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("222")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/pcddata07', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("111")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/pcddata08', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("248")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/pcddata09', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("110")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/pcddata10', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("109")
    .where("date").equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})



app.get('/rid-tc01', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC01")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridtc01', {
            data: docs
        })
    })
})
app.get('/rid-tc02', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC02")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridtc02', {
            data: docs
        })
    })
})
app.get('/rid-tc03', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC03")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridtc03', {
            data: docs
        })
    })
})
app.get('/rid-tc04', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC04")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridtc04', {
            data: docs
        })
    })
})
app.get('/rid-tc05', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC05")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridtc05', {
            data: docs
        })
    })
})
app.get('/rid-tc06', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC06")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridtc06', {
            data: docs
        })
    })
})
app.get('/rid-tc07', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC07")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridtc07', {
            data: docs
        })
    })
})
app.get('/rid-tc08', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC08")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridtc08', {
            data: docs
        })
    })
})
app.get('/rid-tc09', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC09")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridtc09', {
            data: docs
        })
    })
})
app.get('/riddata-tc01', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC01")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-tc02', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC02")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-tc02', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC02")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-tc03', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC03")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-tc04', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC04")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-tc05', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC05")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-tc06', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC06")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-tc07', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC07")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-tc08', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC08")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-tc09', (request, response) => {
    ridtcdata
    .find()
    .where('code').equals("TC09")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})





app.get('/rid-cp01', (request, response) => {
    ridcpdata
    .find()
    .where('code').equals("CP01")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridcp01', {
            data: docs
        })
    })
})
app.get('/rid-cp02', (request, response) => {
    ridcpdata
    .find()
    .where('code').equals("CP02")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridcp02', {
            data: docs
        })
    })
})
app.get('/rid-cp03', (request, response) => {
    ridcpdata
    .find()
    .where('code').equals("CP03")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridcp03', {
            data: docs
        })
    })
})
app.get('/rid-cp04', (request, response) => {
    ridcpdata
    .find()
    .where('code').equals("CP04")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridcp04', {
            data: docs
        })
    })
})
app.get('/rid-cp05', (request, response) => {
    ridcpdata
    .find()
    .where('code').equals("CP05")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridcp05', {
            data: docs
        })
    })
})
app.get('/rid-cp06', (request, response) => {
    ridcpdata
    .find()
    .where('code').equals("CP06")
    .where('dateTh').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('ridcp06', {
            data: docs
        })
    })
})

app.get('/riddata-cp01', (request, response) => {
    ridcpdata
    .find()
    .where('code').equals("CP01")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-cp02', (request, response) => {
    ridcpdata
    .find()
    .where('code').equals("CP02")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-cp03', (request, response) => {
    ridcpdata
    .find()
    .where('code').equals("CP03")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-cp04', (request, response) => {
    ridcpdata
    .find()
    .where('code').equals("CP04")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-cp05', (request, response) => {
    ridcpdata
    .find()
    .where('code').equals("CP05")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/riddata-cp06', (request, response) => {
    ridcpdata
    .find()
    .where('code').equals("CP06")
    .where('dateTh').equals("01/11/2564")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/wmastation01', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(1)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma-ex', {
            data: docs
        })
    })
})
app.get('/wmastation02', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(2)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma02', {
            data: docs
        })
    })
})
app.get('/wmastation03', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(3)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma03', {
            data: docs
        })
    })
})
app.get('/wmastation04', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(4)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma04', {
            data: docs
        })
    })
})
app.get('/wmastation05', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(5)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma05', {
            data: docs
        })
    })
})
app.get('/wmastation06', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(6)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma06', {
            data: docs
        })
    })
})
app.get('/wmastation07', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(7)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma07', {
            data: docs
        })
    })
})
app.get('/wmastation08', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(8)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma08', {
            data: docs
        })
    })
})
app.get('/wmastation09', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(9)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma09', {
            data: docs
        })
    })
})
app.get('/wmastation10', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(10)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma10', {
            data: docs
        })
    })
})
app.get('/wmastation11', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(11)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma11', {
            data: docs
        })
    })
})
app.get('/wmastation12', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(12)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma12', {
            data: docs
        })
    })
})
app.get('/wmastation13', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(13)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma13', {
            data: docs
        })
    })
})
app.get('/wmastation14', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(14)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma14', {
            data: docs
        })
    })
})
app.get('/wmastation15', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(15)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma15', {
            data: docs
        })
    })
})
app.get('/wmastation16', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(16)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma16', {
            data: docs
        })
    })
})
app.get('/wmastation17', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(17)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma17', {
            data: docs
        })
    })
})
app.get('/wmastation18', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(18)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma18', {
            data: docs
        })
    })
})
app.get('/wmastation19', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(19)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma19', {
            data: docs
        })
    })
})
app.get('/wmastation20', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(20)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma20', {
            data: docs
        })
    })
})
app.get('/wmastation21', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(21)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma21', {
            data: docs
        })
    })
})
app.get('/wmastation22', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(22)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma22', {
            data: docs
        })
    })
})
app.get('/wmastation23', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(23)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma23', {
            data: docs
        })
    })
})
app.get('/wmastation24', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(24)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma24', {
            data: docs
        })
    })
})
app.get('/wmastation25', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(25)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma25', {
            data: docs
        })
    })
})
app.get('/wmastation26', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(26)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma26', {
            data: docs
        })
    })
})
app.get('/wmastation27', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(27)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma27', {
            data: docs
        })
    })
})
app.get('/wmastation28', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(28)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma28', {
            data: docs
        })
    })
})
app.get('/wmastation29', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(29)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma29', {
            data: docs
        })
    })
})
app.get('/wmastation30', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(30)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma30', {
            data: docs
        })
    })
})
app.get('/wmastation31', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(31)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma31', {
            data: docs
        })
    })
})
app.get('/wmastation32', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(32)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma32', {
            data: docs
        })
    })
})
app.get('/wmastation33', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(33)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma33', {
            data: docs
        })
    })
})
app.get('/wmastation34', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(34)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma34', {
            data: docs
        })
    })
})
app.get('/wmastation35', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(35)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma35', {
            data: docs
        })
    })
})
app.get('/wmastation36', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(36)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma36', {
            data: docs
        })
    })
})
app.get('/wmastation37', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(37)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma37', {
            data: docs
        })
    })
})
app.get('/wmastation38', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(38)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma38', {
            data: docs
        })
    })
})
app.get('/wmastation39', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(39)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma39', {
            data: docs
        })
    })
})
app.get('/wmastation40', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(40)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma40', {
            data: docs
        })
    })
})
app.get('/wmastation41', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(41)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma41', {
            data: docs
        })
    })
})
app.get('/wmastation42', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(42)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma42', {
            data: docs
        })
    })
})
app.get('/wmastation43', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(43)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma43', {
            data: docs
        })
    })
})
app.get('/wmastation44', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(44)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma44', {
            data: docs
        })
    })
})
app.get('/wmastation45', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(45)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma45', {
            data: docs
        })
    })
})
app.get('/wmastation46', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(46)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma46', {
            data: docs
        })
    })
})
app.get('/wmastation47', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(47)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma47', {
            data: docs
        })
    })
})
app.get('/wmastation48', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(48)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma48', {
            data: docs
        })
    })
})
app.get('/wmastation49', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(49)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma49', {
            data: docs
        })
    })
})
app.get('/wmastation50', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(50)
    .where('month').equals(11)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('wma50', {
            data: docs
        })
    })
})

app.get('/wmadata01', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(1)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/wmadata02', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(2)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata03', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(3)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata04', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(4)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata05', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(5)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata06', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(6)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata07', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(7)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata08', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(8)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata09', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(9)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata10', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(10)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata11', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(11)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata12', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(12)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata13', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(13)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata14', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(14)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata15', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(15)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata16', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(16)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata17', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(17)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata18', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(18)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata19', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(19)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata20', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(20)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata21', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(21)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata22', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(22)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata23', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(23)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata24', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(24)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata25', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(25)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata26', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(26)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata27', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(27)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata28', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(28)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata29', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(29)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata30', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(30)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata31', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(31)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata32', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(32)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata33', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(33)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata34', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(34)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata35', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(35)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata36', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(36)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata37', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(37)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata38', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(38)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata39', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(39)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata40', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(41)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata42', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(42)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata43', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(43)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata44', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(44)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata45', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(45)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata46', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(46)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata47', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(47)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata48', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(48)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata49', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(49)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
app.get('/wmadata50', (request, response) => {
    wmadata
    .find()
    .where('level1_approval').equals(50)
    .where('month').equals(11)
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})




app.get('/mwa-data', (request, response) => {
    mwadata
    .find()
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('mwa', {
            data: docs
        })
    })
})

app.get('/mwa01', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("T3")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('mwa', {
            data: docs
        })
    })
})

app.get('/mwa02', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('mwa02', {
            data: docs
        })
    })
})
app.get('/mwa03', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S4")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('mwa03', {
            data: docs
        })
    })
})
app.get('/mwa04', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("T4")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('mwa04', {
            data: docs
        })
    })
})
app.get('/mwa05', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S7")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('mwa05', {
            data: docs
        })
    })
})
app.get('/mwa06', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S6")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('mwa05', {
            data: docs
        })
    })
})
app.get('/mwa07', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("T2")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('mwa06', {
            data: docs
        })
    })
})
app.get('/mwa08', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S2")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('mwa07', {
            data: docs
        })
    })
})
app.get('/mwa09', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S17")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('mwa08', {
            data: docs
        })
    })
})
app.get('/mwa10', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S18")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('mwa09', {
            data: docs
        })
    })
})
app.get('/mwa11', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S20")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.render('mwa10', {
            data: docs
        })
    })
})



app.get('/mwadata01', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("T3")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/mwadata02', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("T3")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/mwadata03', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S4")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/mwadata04', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("T4")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/mwadata05', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S7")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/mwadata06', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S6")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/mwadata07', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("T2")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/mwadata08', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S2")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/mwadata09', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S17")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/mwadata10', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S18")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/mwadata11', (request, response) => {
    mwadata
    .find()
    .where('stationid').equals("S20")
    .where('datetime').equals("01/11/2564")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})





app.get('/wma-all', (request, response) => {
    wmadata
    .find()
    .exec((err, docs) => {
        response.render('wma-all', {
            data: docs     
        })
    })
})

app.get('/test', (request, response) => {
    wmadata
    .find()
    .where('month').equals(11)
    .limit(10)
    .exec((err, docs) => {
        response.render('wma-test', {
            data: docs
        })
    })
})

app.get('/wma-daily', (request, response) => {
    wmadata
    .find()
    .where('month').equals(11)
    .where('day').equals(19)
    .exec((err, docs) => {
        response.render('wma-test', {
            data: docs
        })
    })
})

app.get('/data', (request, response) => {
    wmadata
    .find()
    .where('month').equals(11)
    .where('day').equals(19)
    .limit(10)
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/totalwater-daily', (request, response) => {
    
    var d = new Date();
    var n = d.getDate();

    wmadata
    .find()
    .select('treated_water')
    .where('month').equals(d.getMonth()+1)
    .where('day').equals(n)
    .exec((err, docs) => { response.json({
        data: docs
        })
    })
})

app.get('/do-daily', (request, response) => {
    
    var d = new Date();
    var n = d.getDate();

    wmadata
    .find()
    .select('level1_approval level2_approval treated_doo')
    .where('month').equals(d.getMonth()+1)
    .where('day').equals(n)
    .exec((err, docs) => { response.json({
        data: docs
        })
    })
})

app.get('/totalwater-monthly', (request, response) => {
    
    var d = new Date();
    var n = d.getDate();

    wmadata
    .find()
    .select('treated_water day')
    .where('month').equals(d.getMonth()+1)
    .exec((err, docs) => { response.json({
        data: docs
        })
    })
})




app.get('/wma-month', (request, response) => {
    wmadata
    .find()
    .where('month').equals(9)
    .exec((err, docs) => {
        response.render('wma-month', {
            data: docs
        })
    })
})


app.get('/maps', (request, response) => {
    
      response.sendFile(path.join(__dirname,"public/wma-test.html"))

})

app.get('/map-do', (request, response) => {
    
      response.sendFile(path.join(__dirname,"public/mapdo.html"))

})

app.get('/map-plan', (request, response) => {
    
      response.sendFile(path.join(__dirname,"public/map_plan.html"))

})

app.get('/map-predict', (request, response) => {
    
      response.sendFile(path.join(__dirname,"public/map_mike.html"))

})

app.get('/search', (request, response) => {
    
      response.sendFile(path.join(__dirname,"public/search.html"))

})


app.get('/wma-latest', (request, response) => {
    
    var d = new Date();
    var n = d.getDate();

    wmadata
    .find()
    .where('month').equals(11)
    .where('day').equals(11)
    .exec((err, docs) => {
        response.render('wma-latest', {
            data: docs
        })
    })
})





app.get('/show-products-search', (request, response) => {  
    let q = request.query.q || ''
    wmadata
    .find({name: { $regex: q, $options: 'i' }})
    .exec((err, docs) => {
        response.render('show-products-search', {
            data: docs, q: q
        })
    })
})






app.get('/show-products-edit', (request, response) => {
    wmadata
    .find()
    .exec((err, docs) => {
        response.render('show-products-edit', {
            data: docs
        })
    })
})

app.all('/edit-product/:id', (request, response) => {
    //ถ้าเรียกเข้ามาด้วยเมธอด GET พร้อมแนบค่า id
    //ก็ใช้เป็นเงื่อนไขในการอ่านข้อมูลเดิม แล้วส่งไปที่ฟอร์ม
    if (request.method == 'GET') {
        if (request.params.id) {
            wmadata
            .findById(request.params.id)
            .exec((err, doc) => {
                response.render('edit-product', { data: doc })
            })
        } else {
            response.render('show-products-edit')
        }
    
    //ถ้าโพสต์ข้อมูลจากฟอร์มเข้ามา (หลังการแก้ไข)
    //ก็อ่านค่าจากแต่ละอิลิเมนต์ แล้วนำไปแก้ไขข้อมูลเดิม
    } else if (request.method == 'POST') {
        let form = request.body
        let data = {
            name: form.name || '', 
            price: form.price || 0, 
            stock: form.stock || 0,
            date_added: new Date(Date.parse(form.date_added)) || new Date(), 
            description: form.description || ''
        }
        
        wmadata
        .findByIdAndUpdate(request.params.id, data, {useFindAndModify: false})
        .exec(err => {
            //หลังการแก้ไข กลับไปแสดงผลที่เพจเดิม
            response.redirect('/show-products-edit')
        })        
    }
})

app.get('/delete-product/:id', (request, response) => {
    if (request.params.id) {
        wmadata
        .findByIdAndDelete(request.params.id, {useFindAndModify: false})
        .exec(err => {
            //หลังการแก้ไข กลับไปแสดงผลที่เพจเดิม
            response.redirect('/show-products-edit')
        })
    }
})

app.get('/show-products-paging-pn', (request, response) => {
    let options = {
        page: request.query.page || 1,     //เพจปัจจุบัน
        limit: 2     //แสดงผลหน้าละ 2 รายการ (ข้อมูลมีน้อย)               
    }

    wmadata
    .paginate({}, options, (err, result) => {
        let links = []

        if (result.page > 1) {  //ถ้าไม่ได้อยู่ที่หน้าแรก ให้มีลิงก์สำหรับเลื่อนไปหน้าแรก
            links.push(`<a href="${request.path}?page=1">หน้าแรก</a>`)
        }
        
        if (result.hasPrevPage) {   //ถ้าเลื่อนไปยังหน้าที่แล้วได้
            links.push(`<a href="${request.path}?page=${result.prevPage}">หน้าที่แล้ว</a>`)
        }

        if (result.hasNextPage) {   //ถ้าเลื่อนไปยังหน้าถัดไปได้
            links.push(`<a href="${request.path}?page=${result.nextPage}">หน้าถัดไป</a>`)
        }

        if (result.page < result.totalPages) {  //ถ้าไม่ใช่หน้าสุดท้าย ให้สร้างลิงก์ไปยังหน้าสุดท้าย
            links.push(`<a href="${request.path}?page=${result.totalPages}">หน้าสุดท้าย</a>`)
        }

        //นำลิงก์ในอาร์เรย์มาเชื่อมต่อกันเป็นสตริง
        let pageLink = links.join('  -  ')  //ผลลัพธ์เป็น HTML String
        
        //ส่งรายการข้อมูลในเพจนั้น หมายเลขเพจปัจจุบัน 
        //และลิงก์ที่ใช้เลื่อนระหว่างเพจ ไปแสดงผลที่เท็มเพลต
        response.render('show-products-paging-pn', {
            data: result.docs, page: result.page, pageLink: pageLink
        })
    })
})

app.get('/show-products-paging-no', (request, response) => {
    let options = {
        page: request.query.page || 1,
        limit: 2 
    }

    wmadata
    .paginate({}, options, (err, result) => {
        let links = []
        //สร้างลิงก์ไปยังเพจต่างๆ 
        for (i = 1; i <= result.totalPages; i++) {
            if (i == result.page) {    //เพจปัจจุบันไม่ทำลิงก์
                links.push(i)
            } else {
                links.push(`<a href="${request.path}?page=${i}">${i}</a>`)
            }
        }

        let pageLink = links.join('  -  ') 
        
        response.render('show-products-paging-no', {
            data: result.docs, pageLink: pageLink
        })
    })
})

app.listen(PORT, () => console.log('Server started on port: 3000'))


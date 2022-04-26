
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
app.use('/pdf',express.static(__dirname+'/node_modules'))
app.use('/views',express.static(__dirname+'/views'))

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)


app.post('/newuser', function (req, res) {
    var json = req.body
    res.send('Add new ' + json.name + ' Completed!')
  })


  app.post('/posttest', (request, response) => {
    var json = request.body
    var d = new Date();
    var n = d.getDate();
    var ddd = parseInt(json.date)
   
 
   
    wmadata
    .find()
    .select('treated_water')
    .where('month').equals(d.getMonth()+1)
    .where('day').equals(ddd)
    .exec((err, docs) => { 
    response.json({
        data: docs
        })
    })
})


///////////______________________ หน้าหลัก ______________________________////////////

app.get('/', (request, response) => {

    var d = new Date();
    var n = d.getDate();
    var m = d.getMonth();
    var h = d.getHours();
    var y = d.getFullYear();

    if(h<10){
    wmadata
    .find().sort('level1_approval')
    .where('year').equals(y)
    .where('month').equals(m+1)
    .where('day').equals(n-1)
    .exec((err, docs) => {
        response.render('index', {
            data: docs
        })
    })
    }
    else{
    wmadata
    .find().sort('level1_approval')
    .where('year').equals(y)
    .where('month').equals(m+1)
    .where('day').equals(n)
    .exec((err, docs) => {
        response.render('index', {
            data: docs
        })
    })
    }
})

//////////////////////////////////////////////////////////////////////////////////////




///////////______________________ form การเงิน ______________________________////////////

app.get('/form', (request, response) => {
    response.render('index-f')
})

app.get('/form-edit', (request, response) => {
    response.render('index-f-edit')
})

///////////////////////////////////////////////////////////////////////////////////////







app.get('/pcd01', (request, response) => {
    pcddata
    .find()
    .where("stationid").equals("240")
    .where("date").equals("4/3/2565")
    .exec((err, docs) => {
        response.render('pcd01', {
            data: docs
        })
    })
})




///////////______________________ PCD กรมควบคุมมลพิษ ______________________________////////////

app.get('/pcd-station/:id', (request, response) => {
    var stationNo = request.params.id
    pcddata
    .find()
    .where("stationid").equals(String(stationNo))
    .where("date").equals("4/3/2565")
    .exec((err, docs) => {
        response.render('at-pcd', {
            data: docs,
            fuck: request.params.id
        })
    })
})

app.get('/pcd-data/:id', (request, response) => {
    var stationNo = request.params.id
    pcddata
    .find()
    .where("stationid").equals(String(stationNo))
    .where("date").equals("4/3/2565")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

//////////////////////////////////////////////////////////////////////////////////////





///////////______________________ กรมชลประทาน ลุ่มแม่น้ำท่าจีน ______________________________////////////

app.get('/rid-station/thachin/:id', (request, response) => {
    var stationNo = request.params.id
    ridtcdata
    .find()
    .where('code').equals(stationNo)
    .where('dateTh').equals("04/04/2565")
    .exec((err, docs) => {
        response.render('at-ridtc', {
            data: docs
        })
    })
})

app.get('/rid-data/thachin/:id', (request, response) => {
    var stationNo = request.params.id
    ridtcdata
    .find()
    .where('code').equals(stationNo)
    .where('dateTh').equals("04/04/2565")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

////////////////////////////////////////////////////////////////////////////////////////////////////





///////////______________________ กรมชลประทาน ลุ่มแม่น้ำเจ้าพระยา ______________________________////////////

app.get('/rid-station/caophraya/:id', (request, response) => {
    var stationNo = request.params.id
    ridcpdata
    .find()
    .where('code').equals(stationNo)
    .where('dateTh').equals("04/04/2565")
    .exec((err, docs) => {
        response.render('at-ridcpy', {
            data: docs
        })
    })
})

app.get('/rid-data/caophraya/:id', (request, response) => {
    var stationNo = request.params.id
    ridcpdata
    .find()
    .where('code').equals(stationNo)
    .where('dateTh').equals("04/04/2565")
    
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

///////////////////////////////////////////////////////////////////////////////////////////////





///////////______________________ อจน ______________________________////////////

app.get('/wma-station/:id', (request, response) => {
    var stationNo = request.params.id
    wmadata
    .find()
    .where('level1_approval').equals(stationNo)
    .where('month').equals(4)
    .where('day').equals(4)
    .exec((err, docs) => {
        response.render('at-wma', {
            data: docs
        })
    })
})

app.get('/wma-data/:id', (request, response) => {
    var stationNo = request.params.id
    wmadata
    .find()
    .where('level1_approval').equals(stationNo)
    .where('month').equals(4)
    .where('year').equals(2022)
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})
///////////////////////////////////////////////////////////////////////////////////////////////





///////////______________________ การประปานครหลวง ______________________________////////////

app.get('/mwa-station/:id', (request, response) => {
    var stationNo = request.params.id
    mwadata
    .find()
    .where('stationId').equals(stationNo)
    .where('datetime').equals("04/04/2565")
    .exec((err, docs) => {
        response.render('at-mwa', {
            data: docs
        })
    })
})

app.get('/mwa-data/:id', (request, response) => {
    var stationNo = request.params.id
    mwadata
    .find()
    .where("stationId").equals(stationNo)
    .where('datetime').equals("04/04/2565")
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

///////////////////////////////////////////////////////////////////////////////////////////////




//_______________________________API อื่น ______________________________________________________//



//ข้อมูลทั้งหมด//
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
    .where('month').equals(1)
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
    .where('month').equals(1)
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
    .where('month').equals(1)
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
    var h = d.getHours();

    if(h < 10){
        wmadata
        .find()
        .select('treated_water')
        .where('month').equals(d.getMonth()+1)
        .where('day').equals(n-1)
        .exec((err, docs) => { response.json({
            data: docs
            })
        })
    } 
    else{
    wmadata
    .find()
    .select('treated_water')
    .where('month').equals(d.getMonth()+1)
    .where('day').equals(n)
    .exec((err, docs) => { response.json({
        data: docs
        })
    })
    }
    
})

app.get('/do-daily', (request, response) => {
    
    var d = new Date();
    var n = d.getDate();
    var h = d.getHours();

    if(h < 10){
        wmadata
    .find()
    .select('level1_approval level2_approval treated_doo do')
    .where('month').equals(d.getMonth()+1)
    .where('day').equals(n-1)
    .exec((err, docs) => { response.json({
        data: docs
        })
    })
    }

    else{
        wmadata
    .find()
    .select('level1_approval level2_approval treated_doo do')
    .where('month').equals(d.getMonth()+1)
    .where('day').equals(n)
    .exec((err, docs) => { response.json({
        data: docs
        })
    })
    }
})

app.get('/all-daily', (request, response) => {
    
    var d = new Date();
    var n = d.getDate();
    var h = d.getHours();

    if (h < 10){
        wmadata
    .find().sort('level1_approval')
    .where('year').equals(d.getFullYear())
    .where('month').equals(d.getMonth()+1)
    .where('day').equals(n-1)
    .exec((err, docs) => { response.json({
        data: docs
        })
    })
    }
    else if (h >= 10){
        wmadata
    .find().sort('level1_approval')
    .where('year').equals(d.getFullYear())
    .where('month').equals(d.getMonth()+1)
    .where('day').equals(n)
    .exec((err, docs) => { response.json({
        data: docs
        })
    }) 
    }
    
})

app.get('/all-year', (request, response) => {
    
    var d = new Date();
    var n = d.getDate();
    var h = d.getHours();

   
        wmadata
        .find().sort('level1_approval')
        .select('treated_water day month year')
        .where('year').equals(d.getFullYear())
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

app.get('/wma-login', (request, response) => {
    
      response.sendFile(path.join(__dirname,"public/authen.html"))

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
    .where('month').equals(1)
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


app.all('*', (req, res) => {
    res.status(500).send('<h1>404! Page not found</h1>');
});
    
app.listen(PORT, () => console.log('Server started on port: 3000'))



const models = require('./model')
const wmadata = models.wmadata
const mwadata = models.mwadata
const pcddata = models.pcddata
const ridcpdata = models.ridcpdata
const ridtcdata = models.ridtcdata
const userdata = models.userdata
const budgetdata = models.budgetdata
const stationdata = models.stationdata
const monthlydata = models.monthlydata

const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const { redirect } = require('express/lib/response')
const PORT = process.env.PORT ||  8080
const bcrypt = require('bcrypt');

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






///////////////////////////////////// Authen /////////////////////////////////////////

app.get('/register', (request, response) => {
    response.render('register')
})

app.get('/login', (request, response) => {
    response.render('authen02',{ message : "ข้อมูลไม่ถูกต้อง กรุณาทำการสมัครสมาชิก"})
})

app.post('/auth/register', async (request, response) => {
  const { username, password } = request.body

  //simple validation
  if ( !username || !password) {
      return response('register',{ message : "ข้อมูลไม่ถูกต้อง กรุณาทำการสมัครสมาชิก"})
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  const user = new userdata({
      username,
      password: passwordHash
  });
  console.log(user)
  await user.save();
  response.render('index' , {user});
});


app.post('/wma-authen', async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password){
        return res.render('authen02',{ message : "ข้อมูลไม่ถูกต้อง กรุณาทำการสมัครสมาชิก"})
    }
    const user = await userdata.findOne({
      username
    });
  
    if (user) {
        const isCorrect = bcrypt.compareSync(password, user.password);

        if(isCorrect){
            return res.render('employee',{user});
        } else {
            return res.render('authen02', {message :' Username หรือ Password ผิดพลาด'});
        }
    } else {
        return res.render('authen02', {message :'ไม่พบ Username ดังกล่าว'});
    }
 });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////// หน้าพนักงาน ///////////////////////////////


app.get('/wma-manage', (request, response) => {
    response.render('employee')
})

///////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////// หน้าน้ำออก ///////////////////////////////



app.get('/onestation-data/:year/:month/:id', (request, response) => {
    var year = request.params.year
    var id = request.params.id
    var month = request.params.month

    monthlydata
    .find().sort('date')
    .where('year').equals(year)
    .where('month').equals(month)
    .where('stationid').equals(id)
    .select('stationid year month date treated_water comment')
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})

app.get('/allstation-data', (request, response) => {
  
    stationdata
    .find()
    .where('number').lt(100)
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
})




app.all('/treated-water', (request, response) => {
    //ถ้าเปิดพาธนี้โดยไม่ได้โพสข้อมูลเข้ามา ให้แสดงฟอร์มรับข้อมูล
      if(!request.body.stationid){
        response.render('water-out')      
      } else {
            
            console.log(request.body)
            let form = request.body
            let stack = [form.dd1,form.dd2,form.dd3,form.dd4,form.dd5,form.dd6,form.dd7,form.dd8,form.dd9,form.dd10,
                form.dd11,form.dd12,form.dd13,form.dd14,form.dd15,form.dd16,form.dd17,form.dd18,form.dd19,form.dd20,
                form.dd21,form.dd22,form.dd23,form.dd24,form.dd25,form.dd26,form.dd27,form.dd28,form.dd29,form.dd30,form.dd31]

            
            let ps_stack = [form.ps1,form.ps2,form.ps3,form.ps4,form.ps5,form.ps6,form.ps7,form.ps8,form.ps9,form.ps10,
                form.ps11,form.ps12,form.ps13,form.ps14,form.ps15,form.ps16,form.ps17,form.ps18,form.ps19,form.ps20,
                form.ps21,form.ps22,form.ps23,form.ps24,form.ps25,form.ps26,form.ps27,form.ps28,form.ps29,form.ps30,form.ps31]
            monthlydata
            .find()
            .where('year').equals(form.year)
            .where('month').equals(form.monthly)
            .where('stationid').equals(form.stationid)
            .exec((err, docs) => { 
                let keep_date = []
                console.log('docs ยาวว : '+docs.length)

                for (i=0; i<docs.length; i++){
                    keep_date.push(docs[i].date)
                }
                console.log('docs วันที่ : '+ keep_date)
                
                if (docs.length == 0){
                    console.log('ไม่มีข้อมูลก่อนหน้า => ดำเนินการเพิ่มข้อมูล')
                    for (i=0; i< stack.length ; i++){
                        let data = {
                            stationid : form.stationid ,
                            year: form.year ,
                            month : form.monthly,
                            date: i+1,
                            treated_water : stack[i] || '',
                            timestamp: new Date(),
                            edited: 0,
                            editor: 'test',
                            comment: ps_stack[i] ||''       
                        }  
        
                        if(stack[i] != ""){
                            monthlydata.create(data, err =>{
                                if(!err){
                                    console.log("เพิ่มข้อมูลเสร็จสิ้นรายการที่ : " + (i+1))
                                }
                            })
                        }
                    
                    }
                    stack = []
                    console.log("complete!!")
                    response.render('water-out') 

                } else{
                    console.log('มีข้อมูลก่อนหน้า => ดำเนินการแก้ไขข้อมูล')
                                
                    for(i=0; i< stack.length ; i++){
                            const query = { year: form.year, month: form.monthly,date: i+1, stationid: form.stationid};
                            const update = { $set: { treated_water: stack[i], comment: ps_stack[i] , edited: docs[0].edited+1, timestamp:new Date(),}};
                            const options = {};
                            monthlydata.updateOne(query, update, function(err,res){
                                if(err) throw err;
                                console.log('Update' + i)
                            });
                    }

                    response.render('water-out') 
                }
            })

      
       

      }          
})



///////////////////////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////____________budget_____________________//////////////////////////////////////////////



app.all('/budget-add', (request, response) => {
    //ถ้าเปิดพาธนี้โดยไม่ได้โพสข้อมูลเข้ามา ให้แสดงฟอร์มรับข้อมูล
      if(!request.body.pname){
        response.render('budget-add')      
      } else {
            
            console.log(request.body)
            let form = request.body
            let stack = [form.plist1,form.plist2,form.plist3,form.plist4,form.plist5]
            let alldata = []
            console.log("stack :"+stack)
            for (i=0; i<5; i++){
                let data = {
                    projectname: form.pname || '',
                    projectlist: stack[i] || '',
                    year: form.year ,
                    username: 'tester',
                    edited: 0,
                    timestamp: new Date(),
                    plan1: 0,
                    plan2: 0,
                    plan3: 0,
                    plan4: 0,
                    plan5: 0,
                    plan6: 0,
                    plan7: 0,
                    plan8: 0,
                    plan9: 0,
                    plan10: 0,
                    plan11: 0,
                    plan12: 0,
                    result1: 0,
                    result2: 0,
                    result3: 0,
                    result4: 0,
                    result5: 0,
                    result6: 0,
                    result7: 0,
                    result8: 0,
                    result9: 0,
                    result10: 0,
                    result11: 0,
                    result12: 0,
                }  
                alldata.concat(data)

                if(stack[i] != ""){
                    budgetdata.create(data, err =>{
                        if(!err){
                            console.log("yesss")
                        }
                    })
                }
            
            }
            let eiei = 'eiei'
            console.log("complete!!")
            response.redirect('/budget-edit')  
       

      }          
})


app.all('/budget-edit', (request, response) => {
    //ถ้าเปิดพาธนี้โดยไม่ได้โพสข้อมูลเข้ามา ให้แสดงฟอร์มแก้ไขข้อมูลพื้นฐาน
      if(!request.body.pname){
          
        var d = new Date();
        var n = d.getDate();
        var m = d.getMonth();
        var h = d.getHours();
        var y = d.getFullYear();

        budgetdata
        .find()
        .where('year').equals(y+543)
        .exec((err, docs) => {
        response.render('budget-edited', {
            data: docs || ''  
            
        })
    })
       
    } else {

            var d = new Date();
            var n = d.getDate();
            var m = d.getMonth();
            var h = d.getHours();
            var y = d.getFullYear();
            
            console.log(request.body)
            let form = request.body
            
            budgetdata
            .find().sort('-edited')
            .where('year').equals(form.year)
            .where('projectname').equals(form.pname)
            .where('projectlist').equals(form.plist)
            .exec((err, docs) => {  

            console.log(docs[0]._id)
            console.log(docs[0].projectname)
            console.log(docs[0].projectlist)
            console.log(docs[0].edited)

            let data = {
                projectname: form.pname || '',
                projectlist: form.plist || '',
                year: form.year ,
                username: 'tester',
                edited: docs[0].edited+1 ,
                timestamp: new Date(),
                plan1: form.plan1,
                plan2: form.plan2,
                plan3: form.plan3,
                plan4: form.plan4,
                plan5: form.plan5,
                plan6: form.plan6,
                plan7: form.plan7,
                plan8: form.plan8,
                plan9: form.plan9,
                plan10: form.plan10,
                plan11: form.plan11,
                plan12: form.plan12,
                result1: form.result1,
                result2: form.result2,
                result3: form.result3,
                result4: form.result4,
                result5: form.result5,
                result6: form.result6,
                result7: form.result7,
                result8: form.result8,
                result9: form.result9,
                result10: form.result10,
                result11: form.result11,
                result12: form.result12,
            }  
            
            budgetdata.create(data, err =>{
                if(!err){
                    console.log("yesss")
                }
            })

            
        
        })
            
           
             
            console.log("complete!!")
            response.redirect('/budget-edit')  
       

      }

            
})





app.get('/budget-data/:year', (request, response) => {
    var year = request.params.year

    budgetdata
    .find()
    .where('year').equals(year)
    .exec((err, docs) => {
        response.json({
            data: docs
        })
    })
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
    .where('month').equals(5)
    .where('day').equals(5)
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
    .where('month').equals(5)
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


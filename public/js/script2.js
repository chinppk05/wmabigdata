document.getElementById("make-pdf2").addEventListener("click", makePDF);

function makePDF() {

  let station_data = [
      {"station_id":"1" , "name" : " เทศบาลเมืองพะเยา"},
      {"station_id":"2" , "name" : " เทศบาลนครลำปาง"},
      {"station_id":"3" , "name" : " เทศบาลเมืองมุกดาหาร"},
      {"station_id":"4" , "name" : " เทศบาลนครแม่สอด"},
      {"station_id":"5" , "name" : " เทศบาลนครอุดรธานี"},
      {"station_id":"6" , "name" : " เทศบาลเมืองกำแพงเพชร"},
      {"station_id":"7" , "name" : " เทศบาลเมืองอำนาจเจริญ"},
      {"station_id":"8" , "name" : " เทศบาลเมืองบ้านโป่ง"},
      {"station_id":"9" , "name" : " เทศบาลเมืองสิงห์บุรี"},
      {"station_id":"10" , "name" : " เทศบาลนครหาดใหญ่"},
      {"station_id":"11" , "name" : " เทศบาลตำบลบางเสร่"},
      {"station_id":"12" , "name" : " เทศบาลเมืองประจวบคีรีขันธ์"},
      {"station_id":"13" , "name" : " เทศบาลนครสงขลา"},
      {"station_id":"14" , "name" : " เทศบาลเมืองกระบี่"},
      {"station_id":"15" , "name" : " เทศบาลนครเชียงใหม่"},
      {"station_id":"16" , "name" : " เทศบาลเมืองปากช่อง"},
      {"station_id":"17" , "name" : " เทศบาลเมืองมาบตาพุด"},
      {"station_id":"18" , "name" : " เทศบาลเมืองอุบลราชธานี"},
      {"station_id":"19" , "name" : " เทศบาลเมืองบุรีรัมย์"},
      {"station_id":"20" , "name" : " เทศบาลเมืองกาฬสินธุ์"},
      {"station_id":"21" , "name" : " เทศบาลเมืองชะอำ"},
      {"station_id":"22" , "name" : " เทศบาลตำบลบ้านเพ"},
      {"station_id":"23" , "name" : " เทศบาลเมืองศรีราชา"},
      {"station_id":"24" , "name" : " เทศบาลเมืองแสนสุขเหนือ"},
      {"station_id":"25" , "name" : " เทศบาลเมืองแสนสุขใต้"},
      {"station_id":"26" , "name" : " เทศบาลเมืองกาญจนบุรี"},
      {"station_id":"27" , "name" : " เทศบาลตำบลบางปลา"},
      {"station_id":"28" , "name" : " เทศบาลตำบลนครชัยศรี"},
      {"station_id":"29" , "name" : " เทศบาลตำบลบางหญ้าแพรก"},
      {"station_id":"30" , "name" : " เทศบาลตำบลท่าจีน"},
      {"station_id":"31" , "name" : " เทศบาลเมืองไร่ขิง"},
      {"station_id":"32" , "name" : " เทศบาลตำบลบางเลน"},
      {"station_id":"33" , "name" : " องค์การบริหารส่วนตำบลสามควายเผือก"},
      {"station_id":"34" , "name" : " เทศบาลตำบลวิชิต"},
      {"station_id":"35" , "name" : " เทศบาลตำบลราไวย์"},
      {"station_id":"36" , "name" : " เทศบาลตำบลปากน้ำปราณ"},
      {"station_id":"37" , "name" : " เทศบาลตำบลพรหมโลก"},
      {"station_id":"38" , "name" : " องค์การบริหารส่วนตำบลบางบัวทอง"},
      {"station_id":"39" , "name" : " เทศบาลตำบลบางพลี"},
      {"station_id":"40" , "name" : " เทศบาลนครระยอง"},
      {"station_id":"41" , "name" : " องค์การบริหารส่วนตำบลกมลา"},
      {"station_id":"42" , "name" : " เทศบาลตำบลฉลอง"},
      {"station_id":"43" , "name" : " เทศบาลเมืองสามพราน"},
      {"station_id":"44" , "name" : " เทศบาลเมืองปากพนัง บริเวณหลังเรือนจำ"},
      {"station_id":"45" , "name" : " เทศบาลเมืองปากพนัง วัดนาควารี"},
      {"station_id":"46" , "name" : " เทศบาลตำบลหัวไทร ถนนสุขาภิบาล 1"},
      {"station_id":"47" , "name" : " เทศบาลตำบลหัวไทร หลังตลาดสด ถนนบางแค"},
      {"station_id":"48" , "name" : " วัดศรีมาประสิทธิ์"},
      {"station_id":"49" , "name" : " ชุมชนหอยราก-ศรีสมบูรณ์"},
      {"station_id":"50" , "name" : " อุทยานสิ่งแวดล้อมนานาชาติสิรินธร"},
     
     
  ]


  
  

  var today = new Date();
  var month = new Array();
  month[0] = "มกราคม";
  month[1] = "กุมภาพันธ์";
  month[2] = "มีนาคม";
  month[3] = "เมษายน";
  month[4] = "พฤษภาคม";
  month[5] = "มิถุนายน";
  month[6] = "กรกฏาคม";
  month[7] = "สิงหาคม";
  month[8] = "กันยายน";
  month[9] = "ตุลาคม";
  month[10] = "พฤษจิกายน";
  month[11] = "ธันวาคม";

  const getdata = () => {
    axios.get("/all-daily").then((response) => {
     // console.log(response.data);
      let numWater = response.data.data.length;
      let sum = 0;
      let x = []; // สถานีที่มีข้อมูล
      let y = []; // สถานีที่ไม่มีข้อมูล
      let dummy = 0;

      
      /// หาเลขสถานีที่มีข้อมูลและไม่มีข้อมูล ///
      for (n = 1; n <= 50; n++) {
          for  (i = 0; i < numWater; i++){
              if (n == response.data.data[i].level1_approval){
                  dummy = response.data.data[i].level1_approval;
              }
          }
          if (dummy != 0){
            x.push(dummy);
          }
          else {
            y.push(n);
          }
          dummy = 0;
      }
  
      for (i = 0; i < x.length; i++) {}

      let sum2 = parseInt(sum);
      //console.log("มี", x);
     // console.log("บ่มี", y);


      // นับจำนวนคุณภาพน้ำ
      let good = 0;
      let care = 0;
      let bad = 0;
      let eiei = [];
      let good_ar = [];
      let care_ar = [];
      let bad_ar = [];
      for (i = 0; i < numWater; i++) {
        if (response.data.data[i].treated_doo >= 3) {
          good = good + 1;
          good_ar.push(response.data.data[i].level1_approval)
        } else if (
          response.data.data[i].treated_doo < 3 &&
          response.data.data[i].treated_doo >= 2
        ) {
          care = care + 1;
          care_ar.push(response.data.data[i].level1_approval)
        } else if (
          response.data.data[i].treated_doo < 2 &&
          response.data.data[i].treated_doo > 0
        ) {
          bad = bad + 1;
          bad.push(response.data.data[i].level1_approval)
        }
      }

      let nodo = 50 - good - care - bad;
      // console.log("จำนวนสถานีคุณภาพน้ำปกติ",good)
      // console.log("จำนวนสถานีคุณภาพน้ำเฝ้าระวัง",care)
      // console.log("จำนวนสถานีคุณภาพน้ำแย่",bad)
      //console.log("ไม่มีข้อมูล",nodo)

      //console.log("ไหน good",good_ar)
      //console.log("ไหน care",care_ar)
      //console.log("ไหน bad",bad_ar)

    
      eiei = [
        { value: good, name: "ปกติ" },
        { value: care, name: "เฝ้าระวัง" },
        { value: bad, name: "วิกฤต" },
        { value: nodo, name: "ไม่มีผล" },
      ];




      
      for (i=0 ; i< x.length; i++ ){
            station_data[x[i]-1]['treated_water'] =  response.data.data[i].treated_water
            station_data[x[i]-1]["do"] =  response.data.data[i].do
            station_data[x[i]-1]["treated_doo"] =  response.data.data[i].treated_doo
            station_data[x[i]-1]["ph"] =  response.data.data[i].ph
            station_data[x[i]-1]["treated_ph"] =  response.data.data[i].treated_ph
            station_data[x[i]-1]["temp"] =  response.data.data[i].temp
            station_data[x[i]-1]["treated_temp"] =  response.data.data[i].treated_temp
      }

      for (i=0 ; i<y.length; i++ ){
        station_data[y[i]-1]["treated_water"] =  "-"
        station_data[y[i]-1]["do"] =  "-"
        station_data[y[i]-1]["treated_doo"] =  "-"
        station_data[y[i]-1]["ph"] =  "-"
        station_data[y[i]-1]["treated_ph"] =  "-"
        station_data[y[i]-1]["temp"] =  "-"
        station_data[y[i]-1]["treated_temp"] =  "-"
      }




      let good_station = ""
      let care_station = ""
      let bad_station = ""
      let nodata_station = ""

      for (i=0 ; i<good_ar.length; i++ ) {
        good_station = good_station+" -  "+station_data[good_ar[i]-1].name+" , "+"\n" ;
      }
      for (i=0 ; i<care_ar.length; i++ ) {
        care_station = care_station+" - "+station_data[care_ar[i]-1].name+" , "+"\n" ;
      }
      for (i=0 ; i<bad_ar.length; i++ ) {
        bad_station = bad_station+" - "+station_data[bad_ar[i]-1].name+" , "+"\n" ;
      } 
      for (i=0 ; i<y.length; i++ ) {
        nodata_station = nodata_station+" - "+station_data[y[i]-1].name+" , "+"\n" ;
      } 
    
     // console.log("goddddddddddddddddddd :", good_station)
      //console.log("careeeeeeeeeeeeeeeeee :", care_station)
      //console.log("baddddddddddddddddddd :", bad_station)
     // console.log("noooooooooooooooooooo :", nodata_station)

      
      station_data[x[0]-1]['treated_water'] = response.data.data[x[0]-1].treated_water;
     // console.log("ไหนน้ำ", station_data)
      //console.log("xx ยาวเท่าไหร่", x.length)
      //console.log("xxx",  response.data.data[x[0]-1].treated_water )
      //console.log("At last",station_data)


      //// เนื้อหา /////
      pdfMake.fonts = {
        Sarabun: {
          normal: "Sarabun-Regular.ttf",
          bold: "Sarabun-Bold.ttf",
          italics: "Sarabun-Italic.ttf",
          bolditalics: "Sarabun-BoldItalic.ttf",
        },
      };

      var docDefinition = {
        pageSize: "A4",
        pageOrientation: "landscape",

        content: [
          {
            text: "รายงานคุณภาพน้ำเสียแบบครบวงจร\n",
            style: "header",
            alignment: "center",
          },
          {
            text: "บนระบบสารสนเทศภูมิศาสตร์ Big Data\n\n",
            style: "header",
            alignment: "center",
          },

          {
            text:
              "ข้อมูลคุณภาพน้ำ วันที่ " +
              today.getDate() +
              " เดือน " +
              month[today.getMonth()] +
              " พ.ศ. " +
              (today.getFullYear() + 543) +
              "\n\n",
            style: "header",
            alignment: "center",
          },

          {
            style: "tableExample",
            table: {
              widths: [300, 300, 120],
              body: [
                ["เปรียบเทียบเกณฑ์", "จำนวน (สถานี)", "หน่วย"],
                ["ผ่านเกณฑ์", good, "แห่ง"],
                ["เฝ้าระวัง", care, "แห่ง"],
                ["ต่ำกว่าเกณฑ์", bad, "แห่ง"],
                ["ไม่มีข้อมูลอัพเดท", nodo, "แห่ง"],
              ],
            },
            alignment: "center",
          },

          {
            text: "\n\n",
          },

          {
            style: "tableExample",
            table: {
              headerRows: 2,
              // dontBreakRows: true,
              // keepWithHeaderRows: 1,
              widths: [280, 50, 50, 50, 50, 50, 50, 100],
              body: [
                [
                  { text: "สถานี", style: "tableHeader", rowSpan: 2 },
                  { text: "Do", style: "tableHeader", colSpan: 2 },
                  {},
                  { text: "pH", style: "tableHeader", colSpan: 2 },
                  {},
                  { text: "Temp", style: "tableHeader", colSpan: 2 },
                  {},
                  { text: "ปริมาณน้ำเสีย (ลบ.ม)", style: "tableHeader", rowSpan: 2 },
                ],
                [
                  { text: "", style: "tableHeader" },
                  { text: "ก่อน", style: "tableHeader" },
                  { text: "หลัง", style: "tableHeader" },
                  { text: "ก่อน", style: "tableHeader" },
                  { text: "หลัง", style: "tableHeader" },
                  { text: "ก่อน", style: "tableHeader" },
                  { text: "หลัง", style: "tableHeader" },
                  { text: "", style: "tableHeader" },
                ],
                [
                  station_data[0]["name"],
                  station_data[0]["do"],
                  station_data[0]["treated_doo"],
                  station_data[0]["ph"],
                  station_data[0]["treated_ph"],
                  station_data[0]["temp"],
                  station_data[0]["treated_temp"],
                  station_data[0]["treated_water"],
                ],
                [
                  station_data[1]["name"],
                  station_data[1]["do"],
                  station_data[1]["treated_doo"],
                  station_data[1]["ph"],
                  station_data[1]["treated_ph"],
                  station_data[1]["temp"],
                  station_data[1]["treated_temp"],
                  station_data[1]["treated_water"],
                ],
                [
                  station_data[2]["name"],
                  station_data[2]["do"],
                  station_data[2]["treated_doo"],
                  station_data[2]["ph"],
                  station_data[2]["treated_ph"],
                  station_data[2]["temp"],
                  station_data[2]["treated_temp"],
                  station_data[2]["treated_water"],
                ],
                [
                  station_data[3]["name"],
                  station_data[3]["do"],
                  station_data[3]["treated_doo"],
                  station_data[3]["ph"],
                  station_data[3]["treated_ph"],
                  station_data[3]["temp"],
                  station_data[3]["treated_temp"],
                  station_data[3]["treated_water"],
                ],
                [
                  station_data[4]["name"],
                  station_data[4]["do"],
                  station_data[4]["treated_doo"],
                  station_data[4]["ph"],
                  station_data[4]["treated_ph"],
                  station_data[4]["temp"],
                  station_data[4]["treated_temp"],
                  station_data[4]["treated_water"],
                ],
                [
                  station_data[5]["name"],
                  station_data[5]["do"],
                  station_data[5]["treated_doo"],
                  station_data[5]["ph"],
                  station_data[5]["treated_ph"],
                  station_data[5]["temp"],
                  station_data[5]["treated_temp"],
                  station_data[5]["treated_water"],
                ],
                [
                  station_data[6]["name"],
                  station_data[6]["do"],
                  station_data[6]["treated_doo"],
                  station_data[6]["ph"],
                  station_data[6]["treated_ph"],
                  station_data[6]["temp"],
                  station_data[6]["treated_temp"],
                  station_data[6]["treated_water"],
                ],
                [
                  station_data[7]["name"],
                  station_data[7]["do"],
                  station_data[7]["treated_doo"],
                  station_data[7]["ph"],
                  station_data[7]["treated_ph"],
                  station_data[7]["temp"],
                  station_data[7]["treated_temp"],
                  station_data[7]["treated_water"],
                ],
                [
                  station_data[8]["name"],
                  station_data[8]["do"],
                  station_data[8]["treated_doo"],
                  station_data[8]["ph"],
                  station_data[8]["treated_ph"],
                  station_data[8]["temp"],
                  station_data[8]["treated_temp"],
                  station_data[8]["treated_water"],
                ],
                [
                  station_data[9]["name"],
                  station_data[9]["do"],
                  station_data[9]["treated_doo"],
                  station_data[9]["ph"],
                  station_data[9]["treated_ph"],
                  station_data[9]["temp"],
                  station_data[9]["treated_temp"],
                  station_data[9]["treated_water"],
                ],
                [
                  station_data[10]["name"],
                  station_data[10]["do"],
                  station_data[10]["treated_doo"],
                  station_data[10]["ph"],
                  station_data[10]["treated_ph"],
                  station_data[10]["temp"],
                  station_data[10]["treated_temp"],
                  station_data[10]["treated_water"],
                ],
                
                [
                  station_data[11]["name"],
                  station_data[11]["do"],
                  station_data[11]["treated_doo"],
                  station_data[11]["ph"],
                  station_data[11]["treated_ph"],
                  station_data[11]["temp"],
                  station_data[11]["treated_temp"],
                  station_data[11]["treated_water"],
                ],
                [
                  station_data[12]["name"],
                  station_data[12]["do"],
                  station_data[12]["treated_doo"],
                  station_data[12]["ph"],
                  station_data[12]["treated_ph"],
                  station_data[12]["temp"],
                  station_data[12]["treated_temp"],
                  station_data[12]["treated_water"],
                ],
                [
                  station_data[13]["name"],
                  station_data[13]["do"],
                  station_data[13]["treated_doo"],
                  station_data[13]["ph"],
                  station_data[13]["treated_ph"],
                  station_data[13]["temp"],
                  station_data[13]["treated_temp"],
                  station_data[13]["treated_water"],
                ],
                [
                  station_data[14]["name"],
                  station_data[14]["do"],
                  station_data[14]["treated_doo"],
                  station_data[14]["ph"],
                  station_data[14]["treated_ph"],
                  station_data[14]["temp"],
                  station_data[14]["treated_temp"],
                  station_data[14]["treated_water"],
                ],
                [
                  station_data[15]["name"],
                  station_data[15]["do"],
                  station_data[15]["treated_doo"],
                  station_data[15]["ph"],
                  station_data[15]["treated_ph"],
                  station_data[15]["temp"],
                  station_data[15]["treated_temp"],
                  station_data[15]["treated_water"],
                ],
                [
                  station_data[16]["name"],
                  station_data[16]["do"],
                  station_data[16]["treated_doo"],
                  station_data[16]["ph"],
                  station_data[16]["treated_ph"],
                  station_data[16]["temp"],
                  station_data[16]["treated_temp"],
                  station_data[16]["treated_water"],
                ],
                [
                  station_data[17]["name"],
                  station_data[17]["do"],
                  station_data[17]["treated_doo"],
                  station_data[17]["ph"],
                  station_data[17]["treated_ph"],
                  station_data[17]["temp"],
                  station_data[17]["treated_temp"],
                  station_data[17]["treated_water"],
                ],
                [
                  station_data[18]["name"],
                  station_data[18]["do"],
                  station_data[18]["treated_doo"],
                  station_data[18]["ph"],
                  station_data[18]["treated_ph"],
                  station_data[18]["temp"],
                  station_data[18]["treated_temp"],
                  station_data[18]["treated_water"],
                ],
                [
                  station_data[19]["name"],
                  station_data[19]["do"],
                  station_data[19]["treated_doo"],
                  station_data[19]["ph"],
                  station_data[19]["treated_ph"],
                  station_data[19]["temp"],
                  station_data[19]["treated_temp"],
                  station_data[19]["treated_water"],
                ],
                [
                  station_data[20]["name"],
                  station_data[20]["do"],
                  station_data[20]["treated_doo"],
                  station_data[20]["ph"],
                  station_data[20]["treated_ph"],
                  station_data[20]["temp"],
                  station_data[20]["treated_temp"],
                  station_data[20]["treated_water"],
                ],
                [
                  station_data[21]["name"],
                  station_data[21]["do"],
                  station_data[21]["treated_doo"],
                  station_data[21]["ph"],
                  station_data[21]["treated_ph"],
                  station_data[21]["temp"],
                  station_data[21]["treated_temp"],
                  station_data[21]["treated_water"],
                ],
                [
                  station_data[22]["name"],
                  station_data[22]["do"],
                  station_data[22]["treated_doo"],
                  station_data[22]["ph"],
                  station_data[22]["treated_ph"],
                  station_data[22]["temp"],
                  station_data[22]["treated_temp"],
                  station_data[22]["treated_water"],
                ],
                [
                  station_data[23]["name"],
                  station_data[23]["do"],
                  station_data[23]["treated_doo"],
                  station_data[23]["ph"],
                  station_data[23]["treated_ph"],
                  station_data[23]["temp"],
                  station_data[23]["treated_temp"],
                  station_data[23]["treated_water"],
                ],
                [
                  station_data[24]["name"],
                  station_data[24]["do"],
                  station_data[24]["treated_doo"],
                  station_data[24]["ph"],
                  station_data[24]["treated_ph"],
                  station_data[24]["temp"],
                  station_data[24]["treated_temp"],
                  station_data[24]["treated_water"],
                ],
                [
                  station_data[25]["name"],
                  station_data[25]["do"],
                  station_data[25]["treated_doo"],
                  station_data[25]["ph"],
                  station_data[25]["treated_ph"],
                  station_data[25]["temp"],
                  station_data[25]["treated_temp"],
                  station_data[25]["treated_water"],
                ],
                [
                  station_data[26]["name"],
                  station_data[26]["do"],
                  station_data[26]["treated_doo"],
                  station_data[26]["ph"],
                  station_data[26]["treated_ph"],
                  station_data[26]["temp"],
                  station_data[26]["treated_temp"],
                  station_data[26]["treated_water"],
                ],
                [
                  station_data[27]["name"],
                  station_data[27]["do"],
                  station_data[27]["treated_doo"],
                  station_data[27]["ph"],
                  station_data[27]["treated_ph"],
                  station_data[27]["temp"],
                  station_data[27]["treated_temp"],
                  station_data[27]["treated_water"],
                ],
                [
                  station_data[28]["name"],
                  station_data[28]["do"],
                  station_data[28]["treated_doo"],
                  station_data[28]["ph"],
                  station_data[28]["treated_ph"],
                  station_data[28]["temp"],
                  station_data[28]["treated_temp"],
                  station_data[28]["treated_water"],
                ],
                [
                  station_data[29]["name"],
                  station_data[29]["do"],
                  station_data[29]["treated_doo"],
                  station_data[29]["ph"],
                  station_data[29]["treated_ph"],
                  station_data[29]["temp"],
                  station_data[29]["treated_temp"],
                  station_data[29]["treated_water"],
                ],
                [
                  station_data[30]["name"],
                  station_data[30]["do"],
                  station_data[30]["treated_doo"],
                  station_data[30]["ph"],
                  station_data[30]["treated_ph"],
                  station_data[30]["temp"],
                  station_data[30]["treated_temp"],
                  station_data[30]["treated_water"],
                ],
                [
                  station_data[31]["name"],
                  station_data[31]["do"],
                  station_data[31]["treated_doo"],
                  station_data[31]["ph"],
                  station_data[31]["treated_ph"],
                  station_data[31]["temp"],
                  station_data[31]["treated_temp"],
                  station_data[31]["treated_water"],
                ],
                [
                  station_data[32]["name"],
                  station_data[32]["do"],
                  station_data[32]["treated_doo"],
                  station_data[32]["ph"],
                  station_data[32]["treated_ph"],
                  station_data[32]["temp"],
                  station_data[32]["treated_temp"],
                  station_data[32]["treated_water"],
                ],
                [
                  station_data[33]["name"],
                  station_data[33]["do"],
                  station_data[33]["treated_doo"],
                  station_data[33]["ph"],
                  station_data[33]["treated_ph"],
                  station_data[33]["temp"],
                  station_data[33]["treated_temp"],
                  station_data[33]["treated_water"],
                ],
                [
                  station_data[34]["name"],
                  station_data[34]["do"],
                  station_data[34]["treated_doo"],
                  station_data[34]["ph"],
                  station_data[34]["treated_ph"],
                  station_data[34]["temp"],
                  station_data[34]["treated_temp"],
                  station_data[34]["treated_water"],
                ],
                [
                  station_data[35]["name"],
                  station_data[35]["do"],
                  station_data[35]["treated_doo"],
                  station_data[35]["ph"],
                  station_data[35]["treated_ph"],
                  station_data[35]["temp"],
                  station_data[35]["treated_temp"],
                  station_data[35]["treated_water"],
                ],
                [
                  station_data[36]["name"],
                  station_data[36]["do"],
                  station_data[36]["treated_doo"],
                  station_data[36]["ph"],
                  station_data[36]["treated_ph"],
                  station_data[36]["temp"],
                  station_data[36]["treated_temp"],
                  station_data[36]["treated_water"],
                ],
                [
                  station_data[37]["name"],
                  station_data[37]["do"],
                  station_data[37]["treated_doo"],
                  station_data[37]["ph"],
                  station_data[37]["treated_ph"],
                  station_data[37]["temp"],
                  station_data[37]["treated_temp"],
                  station_data[37]["treated_water"],
                ],
                [
                  station_data[38]["name"],
                  station_data[38]["do"],
                  station_data[38]["treated_doo"],
                  station_data[38]["ph"],
                  station_data[38]["treated_ph"],
                  station_data[38]["temp"],
                  station_data[38]["treated_temp"],
                  station_data[38]["treated_water"],
                ],
                [
                  station_data[39]["name"],
                  station_data[39]["do"],
                  station_data[39]["treated_doo"],
                  station_data[39]["ph"],
                  station_data[39]["treated_ph"],
                  station_data[39]["temp"],
                  station_data[39]["treated_temp"],
                  station_data[39]["treated_water"],
                ],
                [
                  station_data[40]["name"],
                  station_data[40]["do"],
                  station_data[40]["treated_doo"],
                  station_data[40]["ph"],
                  station_data[40]["treated_ph"],
                  station_data[40]["temp"],
                  station_data[40]["treated_temp"],
                  station_data[40]["treated_water"],
                ],
                [
                  station_data[41]["name"],
                  station_data[41]["do"],
                  station_data[41]["treated_doo"],
                  station_data[41]["ph"],
                  station_data[41]["treated_ph"],
                  station_data[41]["temp"],
                  station_data[41]["treated_temp"],
                  station_data[41]["treated_water"],
                ],
                [
                  station_data[42]["name"],
                  station_data[42]["do"],
                  station_data[42]["treated_doo"],
                  station_data[42]["ph"],
                  station_data[42]["treated_ph"],
                  station_data[42]["temp"],
                  station_data[42]["treated_temp"],
                  station_data[42]["treated_water"],
                ],
                [
                  station_data[43]["name"],
                  station_data[43]["do"],
                  station_data[43]["treated_doo"],
                  station_data[43]["ph"],
                  station_data[43]["treated_ph"],
                  station_data[43]["temp"],
                  station_data[43]["treated_temp"],
                  station_data[43]["treated_water"],
                ],
                [
                  station_data[44]["name"],
                  station_data[44]["do"],
                  station_data[44]["treated_doo"],
                  station_data[44]["ph"],
                  station_data[44]["treated_ph"],
                  station_data[44]["temp"],
                  station_data[44]["treated_temp"],
                  station_data[44]["treated_water"],
                ],
                [
                  station_data[45]["name"],
                  station_data[45]["do"],
                  station_data[45]["treated_doo"],
                  station_data[45]["ph"],
                  station_data[45]["treated_ph"],
                  station_data[45]["temp"],
                  station_data[45]["treated_temp"],
                  station_data[45]["treated_water"],
                ],
                [
                  station_data[46]["name"],
                  station_data[46]["do"],
                  station_data[46]["treated_doo"],
                  station_data[46]["ph"],
                  station_data[46]["treated_ph"],
                  station_data[46]["temp"],
                  station_data[46]["treated_temp"],
                  station_data[46]["treated_water"],
                ],
                [
                  station_data[47]["name"],
                  station_data[47]["do"],
                  station_data[47]["treated_doo"],
                  station_data[47]["ph"],
                  station_data[47]["treated_ph"],
                  station_data[47]["temp"],
                  station_data[47]["treated_temp"],
                  station_data[47]["treated_water"],
                ],
                [
                  station_data[48]["name"],
                  station_data[48]["do"],
                  station_data[48]["treated_doo"],
                  station_data[48]["ph"],
                  station_data[48]["treated_ph"],
                  station_data[48]["temp"],
                  station_data[48]["treated_temp"],
                  station_data[48]["treated_water"],
                ],
                [
                  station_data[49]["name"],
                  station_data[49]["do"],
                  station_data[49]["treated_doo"],
                  station_data[49]["ph"],
                  station_data[49]["treated_ph"],
                  station_data[49]["temp"],
                  station_data[49]["treated_temp"],
                  station_data[49]["treated_water"],
                ],
           
              
                
              ],
            },
            alignment: "center",
          },

          { text: "", pageBreak: "before", style: "subheader" },

          {
            text: "รายงานคุณภาพน้ำเสียแบบครบวงจร\n",
            style: "header",
            alignment: "center",
          },
          {
            text: "บนระบบสารสนเทศภูมิศาสตร์ Big Data\n\n",
            style: "header",
            alignment: "center",
          },
          {
            text:
              "ข้อมูลคุณภาพน้ำ วันที่ " +
              today.getDate() +
              " เดือน " +
              month[today.getMonth()] +
              " พ.ศ. " +
              (today.getFullYear() + 543) +
              "\n\n",
            style: "header",
            alignment: "center",
          },

          "\n\n 1.พบสถานีคุณภาพน้ำดีกว่าเกณฑ์ที่กำหนด  (ค่า do มากกว่า 3) จำนวน " +
            good +
            " สถานี คิดเป็นร้อยละ " +
            ((good / (good + care + bad + nodo)) * 100).toFixed(2) + 
            " ได้แก่",

            good_station + "\n\n\n\n",


         { text: "", pageBreak: "before", style: "subheader" },
          "2. พบสถานีมีค่าคุณภาพน้ำเฝ้าระวัง (ค่า do อยู่ระหว่าง 2 และ 3) จำนวน " +
            care +
            " สถานี  คิดเป็นร้อยละ " +
            ((care / (good + care + bad + nodo)) * 100).toFixed(2) + 
            " ได้แก่" +
            " \n",

           care_station + "\n\n\n\n",

          "3. พบสถานีมีค่าคุณภาพน้ำต่ำกว่าเกณฑ์ (ค่า do น้อยกว่า 2) จำนวน " +
            bad +
            " สถานี คิดเป็นร้อยละ " +
            ((bad / (good + care + bad + nodo)) * 100).toFixed(2) + 
            " ได้แก่" +
            "\n",

            bad_station+"\n\n\n\n",

            { text: "", pageBreak: "before", style: "subheader" },

          "4. พบสถานีไม่มีข้อมูลคุณภาพน้ำ จำนวน " +
             nodo +
            " สถานี คิดเป็นร้อยละ " +
            ((nodo / (good + care + bad + nodo)) * 100).toFixed(2) + 
            " ได้แก่" +
            "\n",

            nodata_station+"\n\n\n\n",
        ],
        defaultStyle: {
          font: "Sarabun",
        },
      };

      pdfMake.createPdf(docDefinition).open();
    });
  };

  getdata();

}

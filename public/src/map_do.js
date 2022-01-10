 function getRandomLatLng(map) {
        var bounds = map.getBounds(),
          southWest = bounds.getSouthWest(),
          northEast = bounds.getNorthEast(),
          lngSpan = northEast.lng - southWest.lng,
          latSpan = northEast.lat - southWest.lat;

        return new L.LatLng(
          southWest.lat + latSpan * Math.random(),
          southWest.lng + lngSpan * Math.random()
        );
      }

      function pickRandomColor() {
        var colors = [
          "red",
          "darkred",
          "orange",
          "green",
          "darkgreen",
          "blue",
          "purple",
          "darkpuple",
          "cadetblue",
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      function RedColor() {
        var colors = ["red"];
        return colors[0];
      }

      function OrangeColor() {
        var colors = ["orange"];
        return colors[0];
      }

      function GreenColor() {
        var colors = ["green"];
        return colors[0];
      }

      function GrayColor() {
        var colors = ["lightgray"];
        return colors[0];
      }



      //// ใช้ฟังก์ชันนี้ /////
      function wma_color(treat_do) {
        var colors = ["green","orange","red","lightgray"];
        if(treat_do >= 3){
          return colors[0];
        }
        else if (treat_do >= 2 && treat_do < 3){
          return colors[1];
        }
        else if (treat_do < 2 && treat_do > 0){
          return colors[2] ;
      }
        else if (treat_do == 0){
          return colors[3] ;
      }
        else {
          return colors[3] ;
      }
    }
      (function () {
        var map = L.map("mapdo");

        // create the tile layer with correct attribution
        var osmUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
        var osmAttrib =
          'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(osmUrl, {
          minZoom: 1,
          maxZoom: 20,
          attribution: osmAttrib,
        });

        map.setView(new L.LatLng(13.724618, 100.584682), 9);
        map.addLayer(osm);

        var markers = new L.FeatureGroup();
        /*
       for (var i = 1; i < 10; i++) {
          var color = RedColor();
          markers.addLayer(
            new L.Marker(getRandomLatLng(map), {
              icon: new L.AwesomeNumberMarkers({
                number: i/10,
                markerColor: color,
              }),
            })
          );
        }
        markers.addTo(map);

        for (var i = 1; i < 10; i++) {
          var color = OrangeColor();
          markers.addLayer(
            new L.Marker(getRandomLatLng(map), {
              icon: new L.AwesomeNumberMarkers({
                number: 2 + 0.1 * i,
                markerColor: color,
              }),
            })
          );
        }
        markers.addTo(map);

        for (var i = 1; i < 10; i++) {
          var color = GreenColor();
          markers.addLayer(
            new L.Marker(getRandomLatLng(map), {
              icon: new L.AwesomeNumberMarkers({
                number: 3 + 0.25 * i,
                markerColor: color,
              }),
            })
          );
        }
        markers.addTo(map);
        */

        //ใช้ฟอร์มนี้

        //wma


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






        /////////// ดึงข้อมูล WMA ////////////
        const waterchart = () => {
          axios
            
            .get("/all-daily")
            .then((response) => {
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

     // console.log("ไหน good",good_ar)
     // console.log("ไหน care",care_ar)
      // console.log("ไหน bad",bad_ar)

    
      eiei = [
        { value: good, name: "ปกติ" },
        { value: care, name: "เฝ้าระวัง" },
        { value: bad, name: "วิกฤต" },
        { value: nodo, name: "ไม่มีผล" },
      ];



      // console.log(eiei)
      
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
    
      //console.log("goddddddddddddddddddd :", good_station)
      //console.log("careeeeeeeeeeeeeeeeee :", care_station)
      //console.log("baddddddddddddddddddd :", bad_station)
      //console.log("noooooooooooooooooooo :", nodata_station)

      
      station_data[x[0]-1]['treated_water'] = response.data.data[x[0]-1].treated_water;
      //console.log("ไหนน้ำ", station_data)
      //console.log("xx ยาวเท่าไหร่", x.length)
      //console.log("xxx",  response.data.data[x[0]-1].treated_water )
      //console.log("At last",station_data)

      let wma_real = station_data ; 

             ////////////////// เริ่มต้น เพิ่มหมุดแผนที่ marker /////////////////

             ///////// เริ่มที่ WMA //////////
             
              markers.addLayer(
                new L.Marker([19.149679, 99.919465], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[0].treated_doo,
                    markerColor: wma_color(wma_real[0].treated_doo ),
                  }),   
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองพะเยา')
              );
              markers.addTo(map);
              markers.addLayer(
                new L.marker([18.274304, 99.453956], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[1].treated_doo,
                    markerColor: wma_color(wma_real[1].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครลำปาง')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([16.577217, 104.711438], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[2].treated_doo,
                    markerColor: wma_color(wma_real[2].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองมุกดาหาร')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([16.728201, 98.528594], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[3].treated_doo,
                    markerColor: wma_color(wma_real[3].treated_doo ),
                  }),
                }).bindPopup('eieศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครแม่สอด')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([17.445777, 102.818166], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[4].treated_doo,
                    markerColor: wma_color(wma_real[4].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครอุดรธานี')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([16.46872, 99.560603], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[5].treated_doo,
                    markerColor: wma_color(wma_real[5].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองกำแพงเพชร')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([15.845980, 104.621658], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[6].treated_doo,
                    markerColor: wma_color(wma_real[6].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองอำนาจเจริญ')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.783120, 99.870421], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[7].treated_doo,
                    markerColor: wma_color(wma_real[7].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองบ้านโป่ง')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([14.865746, 100.425427], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[8].treated_doo,
                    markerColor: wma_color(wma_real[8].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองสิงห์บุรี')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([7.111448, 100.488045], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[9].treated_doo,
                    markerColor: wma_color(wma_real[9].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครหาดใหญ่')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([12.7541388, 100.88788], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[10].treated_doo,
                    markerColor: wma_color(wma_real[10].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลบางเสร่')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([11.8172777, 99.795666], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[11].treated_doo,
                    markerColor: wma_color(wma_real[11].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองประจวบคีรีขันธ์')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([7.12333, 100.651666], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[12].treated_doo,
                    markerColor: wma_color(wma_real[12].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครสงขลา')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([8.071794, 98.912944], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[13].treated_doo,
                    markerColor: wma_color(wma_real[13].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองกระบี่')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([18.721518, 98.979121], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[14].treated_doo,
                    markerColor: wma_color(wma_real[14].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครเชียงใหม่')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([14.750750, 101.474207], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[15].treated_doo,
                    markerColor: wma_color(wma_real[15].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองปากช่อง')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([12.717483, 101.134082], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[16].treated_doo,
                    markerColor: wma_color(wma_real[16].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองมาบตาพุด')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([15.233756, 104.879309], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[17].treated_doo,
                    markerColor: wma_color(wma_real[17].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองอุบลราชธานี')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([14.982519, 103.131512], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[18].treated_doo,
                    markerColor: wma_color(wma_real[18].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองบุรีรัมย์')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([16.444741, 103.503695], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[19].treated_doo,
                    markerColor: wma_color(wma_real[19].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองกาฬสินธุ์')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([12.813463, 99.975366], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[20].treated_doo,
                    markerColor: wma_color(wma_real[20].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองชะอำ')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([12.61555, 101.402027], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[21].treated_doo,
                    markerColor: wma_color(wma_real[21].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลบ้านเพ')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.169435, 100.929084], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[22].treated_doo,
                    markerColor: wma_color(wma_real[22].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองศรีราชา')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.299100, 100.921861], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[23].treated_doo,
                    markerColor: wma_color(wma_real[23].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองแสนสุขเหนือ')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.267342, 100.928696], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[24].treated_doo,
                    markerColor: wma_color(wma_real[24].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองแสนสุขใต้')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.998585, 99.547753], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[25].treated_doo,
                    markerColor: wma_color(wma_real[25].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองกาญจนบุรี')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.5840, 100.2307], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[26].treated_doo,
                    markerColor: wma_color(wma_real[26].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลบางปลา')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.8000, 100.18582], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[27].treated_doo,
                    markerColor: wma_color(wma_real[27].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลนครชัยศรี')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.5194, 100.2605], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[28].treated_doo,
                    markerColor: wma_color(wma_real[28].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลบางหญ้าแพรก')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.5345, 100.2503], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[29].treated_doo,
                    markerColor: wma_color(wma_real[29].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลท่าจีน')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.7411, 100.2591], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[30].treated_doo,
                    markerColor: wma_color(wma_real[30].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองไร่ขิง')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([14.0238, 100.1747], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[31].treated_doo,
                    markerColor: wma_color(wma_real[31].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลบางเลน')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.8293, 100.1105], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[32].treated_doo,
                    markerColor: wma_color(wma_real[32].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ องค์การบริหารส่วนตำบลสามควายเผือก')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([7.8691, 98.3739], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[33].treated_doo,
                    markerColor: wma_color(wma_real[33].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลวิชิต')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([7.7799, 98.3114], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[34].treated_doo,
                    markerColor: wma_color(wma_real[34].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลราไวย์')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([12.3951, 99.9904], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[35].treated_doo,
                    markerColor: wma_color(wma_real[35].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลปากน้ำปราณ')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([8.5276, 99.8235], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[36].treated_doo,
                    markerColor: wma_color(wma_real[36].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลพรหมโลก')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.9580, 100.3748], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[37].treated_doo,
                    markerColor: wma_color(wma_real[37].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ องค์การบริหารส่วนตำบลบางบัวทอง')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.604092, 100.718304], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[38].treated_doo,
                    markerColor: wma_color(wma_real[38].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลบางพลี')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([12.678777, 101.259181], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[39].treated_doo,
                    markerColor: wma_color(wma_real[39].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครระยอง')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([7.952102, 98.282784], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[40].treated_doo,
                    markerColor: wma_color(wma_real[40].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ องค์การบริหารส่วนตำบลกมลา')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([7.8461902, 98.3369248], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[41].treated_doo,
                    markerColor: wma_color(wma_real[41].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลฉลอง')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([13.733720, 100.210296], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[42].treated_doo,
                    markerColor: wma_color(wma_real[42].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองสามพราน')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([8.355628, 100.200548], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[43].treated_doo,
                    markerColor: wma_color(wma_real[43].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองปากพนัง บริเวณหลังเรือนจำ')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([8.345817, 100.195162], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[44].treated_doo,
                    markerColor: wma_color(wma_real[44].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองปากพนัง วัดนาควารี')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([8.046150, 100.302335], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[45].treated_doo,
                    markerColor: wma_color(wma_real[45].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลหัวไทร ถนนสุขาภิบาล 1')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([8.040836, 100.305951], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[46].treated_doo,
                    markerColor: wma_color(wma_real[46].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลหัวไทร หลังตลาดสด ถนนบางแค')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([7.963804, 99.995466], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[47].treated_doo,
                    markerColor: wma_color(wma_real[47].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ วัดศรีมาประสิทธิ์')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([8.334804, 100.1914], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[48].treated_doo,
                    markerColor: wma_color(wma_real[48].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ ชุมชนหอยราก-ศรีสมบูรณ์')
              );
              markers.addTo(map);
      
              markers.addLayer(
                new L.marker([12.702201, 99.956145], {
                  icon: new L.AwesomeNumberMarkers({
                    number: wma_real[49].treated_doo,
                    markerColor: wma_color(wma_real[49].treated_doo ),
                  }),
                }).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ อุทยานสิ่งแวดล้อมนานาชาติสิรินธร')
              );
              markers.addTo(map);
      
      
      
              //////////////////////////// กรมควบคุมมลพิษ //////////////////////////////////
      /*
              markers.addLayer(
                  new L.marker([13.69810, 100.57737], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1,
                      markerColor: RedColor,
                    }),
                  }).bindPopup('สถานีสมุทรปราการ')
                );
                markers.addTo(map);
        
              markers.addLayer(
                  new L.marker([13.69534, 100.48883], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1,
                      markerColor: RedColor,
                    }),
                  }).bindPopup('สถานีดาวคะนอง')
                );
                markers.addTo(map);
        
              markers.addLayer(
                  new L.marker([13.70449, 100.49942], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1,
                      markerColor: RedColor,
                    }),
                  }).bindPopup('สถานีปากเกร็ด')
                );
                markers.addTo(map);
        
              markers.addLayer(
                  new L.marker([14.04134, 100.55539], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1,
                      markerColor: RedColor,
                    }),
                  }).bindPopup('สถานีสำแล')
                );
                markers.addTo(map);
        
              markers.addLayer(
                  new L.marker([14.20062, 100.51171], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1,
                      markerColor: RedColor,
                    }),
                  }).bindPopup('สถานีบางไทร')
                );
                markers.addTo(map);
        
              markers.addLayer(
                  new L.marker([14.36679, 100.53119], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1,
                      markerColor: RedColor,
                    }),
                  }).bindPopup('สถานึอยุธยา')
                );
                markers.addTo(map);
        
              markers.addLayer(
                  new L.marker([14.45026, 100.46032], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1,
                      markerColor: RedColor,
                    }),
                  }).bindPopup('สถานีป่าโมก')
                );
                markers.addTo(map);
        
              markers.addLayer(
                  new L.marker([14.60015, 100.46138], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1,
                      markerColor: RedColor,
                    }),
                  }).bindPopup('สถานีอ่างทอง')
                );
                markers.addTo(map);
        
              markers.addLayer(
                  new L.marker([14.89906, 100.40228], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1,
                      markerColor: RedColor,
                    }),
                  }).bindPopup('สถานีสิงห์บุรี')
                );
                markers.addTo(map);
        
              markers.addLayer(
                  new L.marker([15.17294, 100.12699], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1,
                      markerColor: RedColor,
                    }),
                  }).bindPopup('สถานีชัยนาท')
                );
                markers.addTo(map);
        */
      
               /////////////////////////////////////////////// // การประปานครหลวง ////////////////////////////////////////////



               /*
      
                markers.addLayer(
                  new L.marker([14.238480, 100.575364], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 3.82,
                      markerColor: GreenColor(),
                    }),
                  }).bindPopup('สถานีวัดบ้านแป้ง')
                );
                markers.addTo(map);
        
                markers.addLayer(
                  new L.marker([14.130558, 100.523788], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1.87,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดโพธิ์แดงเหนือ')
                );
                markers.addTo(map);
        
                markers.addLayer(
                  new L.marker([14.040830, 100.555875], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1.27,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีสำแล')
                );
                markers.addTo(map);
        
                markers.addLayer(
                  new L.marker([14.00409, 100.54069], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1.53,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดมะขาม')
                );
                markers.addTo(map);
        
                markers.addLayer(
                  new L.marker([13.862707, 100.475875], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 1.16,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีสะพานพระนั่งเกล้า')
                );
                markers.addTo(map);
        
                markers.addLayer(
                  new L.marker([13.739180, 100.495000], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0,
                      markerColor: GrayColor(),
                    }),
                  }).bindPopup('สถานึสะพานพระพุทธยอดฟ้า')
                );
                markers.addTo(map);
        
                markers.addLayer(
                  new L.marker([13.66687, 100.53929], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0,
                      markerColor: GrayColor(),
                    }),
                  }).bindPopup('สถานีคลองลัดโพธิ์')
                );
                markers.addTo(map);
        
                markers.addLayer(
                  new L.marker([13.615763, 100.55948], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0,
                      markerColor: GrayColor(),
                    }),
                  }).bindPopup('สถานีโรงไฟฟ้าพระนครใต้')
                );
                markers.addTo(map);
        
                markers.addLayer(
                  new L.marker([13.972577, 100.571875], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 2.34,
                      markerColor: OrangeColor(),
                    }),
                  }).bindPopup('สถานีรังสิตไซฟอน')
                );
                markers.addTo(map);
        
                markers.addLayer(
                  new L.marker([13.851133, 100.544267], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0,
                      markerColor: GrayColor(),
                    }),
                  }).bindPopup('สถานีพงษ์เพชร')
                );
                markers.addTo(map);
        
                markers.addLayer(
                  new L.marker([13.775344, 100.530614], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0,
                      markerColor: GrayColor(),
                    }),
                  }).bindPopup('สถานีโรงผลิตน้ำสามเสน')
                );
                markers.addTo(map);
      
                markers.addLayer(
                  new L.marker([14.03729, 100.56375], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.89,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีคลองน้ำอ้อม')
                );
                markers.addTo(map);
      
      
      
      
                //กรมชลประทาน-เจ้าพระยา
      
                markers.addLayer(
                  new L.marker([13.7852912, 100.5042497], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.16,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีกรมชลประทานสามเสน')
                );
                markers.addTo(map);
                
                markers.addLayer(
                  new L.marker([13.8223588, 100.5010296], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.06,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดเขมาภิรตาราม')
                );
                markers.addTo(map);
                
                markers.addLayer(
                  new L.marker([13.8965228, 100.4855822], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.43,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดเชิงเลน')
                );
                markers.addTo(map);
                
                markers.addLayer(
                  new L.marker([14.0049999, 100.5349362], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.86,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดฉาง')
                );
                markers.addTo(map);
                
                markers.addLayer(
                  new L.marker([14.016377,  100.5319814], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.45,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดโสภาราม')
                );
                markers.addTo(map);
                
                markers.addLayer(
                  new L.marker([14.1149229, 100.5299554], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.92,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดกร่าง')
                );
                markers.addTo(map);
                
      
                //กรมชลประทาน - ท่าจีน
                markers.addLayer(
                  new L.marker([13.6012152, 100.2271764], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.08,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดพันธุวงษ์')
                );
                markers.addTo(map);
                
                markers.addLayer(
                  new L.marker([13.643662,  100.2240164], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.04,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดอ่างทอง')
                );
                markers.addTo(map);
                
                markers.addLayer(
                  new L.marker([13.6553374, 100.2486013], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.02,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดตอนไก่ดี')
                );
                markers.addTo(map);
                
                markers.addLayer(
                  new L.marker([13.7004723, 100.241895], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.05,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดเทียนตัด')
                );
                markers.addTo(map);
                
                markers.addLayer(
                  new L.marker([13.7064997, 100.2069157], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.02,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีปตร.คลองจินดา')
                );
                markers.addTo(map);
                
                markers.addLayer(
                  new L.marker([13.7194724, 100.2286877], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.04,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดท่าขาม')
                );
                markers.addTo(map);
                
                markers.addLayer(
                  new L.marker([13.74751004, 100.2735515], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.20,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดท่าพูด')
                );
                markers.addTo(map);
                
                markers.addLayer(
                  new L.marker([13.7674768, 100.2565292], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.09,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดทรงคนอง')
                );
                markers.addTo(map);
                
                markers.addLayer(
                  new L.marker([13.8108016, 100.181981], {
                    icon: new L.AwesomeNumberMarkers({
                      number: 0.04,
                      markerColor: RedColor(),
                    }),
                  }).bindPopup('สถานีวัดสัมปทวน')
                );
                markers.addTo(map);
                

                  */











              
           
            });
        };
        
        waterchart()
       
        
      })();
    
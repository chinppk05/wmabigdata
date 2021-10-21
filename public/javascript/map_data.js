(function() {

    var basemaps = {
      Grayscale: L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }),
      Streets: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    };
  
    // สร้างกลุ่ม
    var groups = {
      cities: new L.LayerGroup(),
      restaurants: new L.LayerGroup(),
      wma: new L.LayerGroup(),
      dogs: new L.LayerGroup(),
      cats: new L.LayerGroup(),
      gis: new L.LayerGroup()
    };
  
   //กำหนดหน้าตา Custom Marker 
    var WMA_logo = L.icon({
      iconUrl: "icons/drop.png",
    });
  
    var iwis_logo = L.icon({
      iconUrl: "icons/IWIS_logo.png",
    });
  
    var papa_logo = L.icon({
      iconUrl: "icons/PAPA_logo.png",
    });
  
    var chon_logo = L.icon({
      iconUrl: "icons/CHON_logo.png",
    });
  
  
    //Marker WMA
    L.marker([19.149679, 99.919465],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองพะเยา').addTo(groups.wma);
    L.marker([18.274304, 99.453956],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครลำปาง').addTo(groups.wma);
    L.marker([16.577217, 104.711438],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองมุกดาหาร').addTo(groups.wma);
    L.marker([16.728201, 98.528594],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครแม่สอด').addTo(groups.wma);
    L.marker([17.445777, 102.818166],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครอุดรธานี').addTo(groups.wma);
    L.marker([16.46872, 99.560603],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองกำแพงเพชร').addTo(groups.wma);
    L.marker([15.845980, 104.621658],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองอำนาจเจริญ').addTo(groups.wma);
    L.marker([13.783120, 99.870421],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองบ้านโป่ง').addTo(groups.wma);
    L.marker([14.865746, 100.425427],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองสิงห์บุรี').addTo(groups.wma);
    L.marker([7.111448, 100.488045],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครหาดใหญ่').addTo(groups.wma);
    L.marker([12.7541388, 100.88788],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลบางเสร่').addTo(groups.wma);
    L.marker([11.8172777, 99.795666],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองประจวบคีรีขันธ์').addTo(groups.wma);
    L.marker([7.12333, 100.651666],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครสงขลา').addTo(groups.wma);
    L.marker([8.071794, 98.912944],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองกระบี่').addTo(groups.wma);
    L.marker([18.721518, 98.979121],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครเชียงใหม่').addTo(groups.wma);
    L.marker([14.750750, 101.474207],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองปากช่อง').addTo(groups.wma);
    L.marker([12.717483, 101.134082],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองมาบตาพุด').addTo(groups.wma);
    L.marker([15.233756, 104.879309],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองอุบลราชธานี').addTo(groups.wma);
    L.marker([14.982519, 103.131512],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองบุรีรัมย์').addTo(groups.wma);
    L.marker([16.444741, 103.503695],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองกาฬสินธุ์').addTo(groups.wma);
    L.marker([12.813463, 99.975366],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองชะอำ').addTo(groups.wma);
    L.marker([12.61555, 101.402027],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลบ้านเพ').addTo(groups.wma);
    L.marker([13.169435, 100.929084],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองศรีราชา').addTo(groups.wma);
    L.marker([13.299100, 100.921861],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองแสนสุขเหนือ').addTo(groups.wma);
    L.marker([13.267342, 100.928696],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองแสนสุขใต้').addTo(groups.wma);
    L.marker([13.998585, 99.547753],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองกาญจนบุรี').addTo(groups.wma);
    L.marker([13.5840, 100.2307],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลบางปลา').addTo(groups.wma);
    L.marker([13.8000, 100.18582],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลนครชัยศรี').addTo(groups.wma);
    L.marker([13.5194, 100.2605],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลบางหญ้าแพรก').addTo(groups.wma);
    L.marker([13.5345, 100.2503],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลท่าจีน').addTo(groups.wma);
    L.marker([13.7411, 100.2591],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองไร่ขิง').addTo(groups.wma);
    L.marker([14.0238, 100.1747],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลบางเลน').addTo(groups.wma);
    L.marker([13.8293, 100.1105],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ องค์การบริหารส่วนตำบลสามควายเผือก').addTo(groups.wma);
    L.marker([7.8691, 98.3739],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลวิชิต').addTo(groups.wma);
    L.marker([7.7799, 98.3114],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลราไวย์').addTo(groups.wma);
    L.marker([12.3951, 99.9904],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลปากน้ำปราณ').addTo(groups.wma);
    L.marker([8.5276, 99.8235],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลพรหมโลก').addTo(groups.wma);
    L.marker([13.9580, 100.3748],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ องค์การบริหารส่วนตำบลบางบัวทอง').addTo(groups.wma);
    L.marker([13.604092, 100.718304],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลบางพลี').addTo(groups.wma);
    L.marker([12.678777, 101.259181],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลนครระยอง').addTo(groups.wma);
    L.marker([7.952102, 98.282784],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ องค์การบริหารส่วนตำบลกมลา').addTo(groups.wma);
    L.marker([7.8461902, 98.3369248],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลฉลอง').addTo(groups.wma);
    L.marker([13.733720, 100.210296],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองสามพราน').addTo(groups.wma);
    L.marker([8.355628, 100.200548],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองปากพนัง บริเวณหลังเรือนจำ').addTo(groups.wma);
    L.marker([8.345817, 100.195162],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลเมืองปากพนัง วัดนาควารี').addTo(groups.wma);
    L.marker([8.046150, 100.302335],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลหัวไทร ถนนสุขาภิบาล 1').addTo(groups.wma);
    L.marker([8.040836, 100.305951],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ เทศบาลตำบลหัวไทร หลังตลาดสด ถนนบางแค').addTo(groups.wma);
    L.marker([7.963804, 99.995466],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ วัดศรีมาประสิทธิ์').addTo(groups.wma);
    L.marker([8.334804, 100.1914],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ ชุมชนหอยราก-ศรีสมบูรณ์').addTo(groups.wma);
    L.marker([12.702201, 99.956145],{icon:WMA_logo}).bindPopup('ศูนย์บริหารจัดการคุณภาพน้ำ อุทยานสิ่งแวดล้อมนานาชาติสิรินธร').addTo(groups.wma);
    
  
  
    //Marker กรมควบคุมมลพิษ
    L.marker([13.69810, 100.57737],{icon:iwis_logo}).bindPopup('สถานีสมุทรปราการ').addTo(groups.restaurants);
    L.marker([13.69534, 100.48883],{icon:iwis_logo}).bindPopup('สถานีดาวคะนอง').addTo(groups.restaurants);
    L.marker([13.70449, 100.49942],{icon:iwis_logo}).bindPopup('สถานีปากเกร็ด').addTo(groups.restaurants);
    L.marker([14.04134, 100.55539],{icon:iwis_logo}).bindPopup('สถานีสำแล').addTo(groups.restaurants);
    L.marker([14.20062, 100.51171],{icon:iwis_logo}).bindPopup('สถานีบางไทร').addTo(groups.restaurants);
    L.marker([14.36679, 100.53119],{icon:iwis_logo}).bindPopup('สถานึอยุธยา').addTo(groups.restaurants);
    L.marker([14.45026, 100.46032],{icon:iwis_logo}).bindPopup('สถานีป่าโมก').addTo(groups.restaurants);
    L.marker([14.60015, 100.46138],{icon:iwis_logo}).bindPopup('สถานีอ่างทอง').addTo(groups.restaurants);
    L.marker([14.89906, 100.40228],{icon:iwis_logo}).bindPopup('สถานีสิงห์บุรี').addTo(groups.restaurants);
    L.marker([15.17294, 100.12699],{icon:iwis_logo}).bindPopup('สถานีชัยนาท').addTo(groups.restaurants);
  
  
    //Mark การประปานครหลวง
    L.marker([14.238480, 100.575364],{icon:papa_logo}).bindPopup('สถานีวัดบ้านแป้ง').addTo(groups.dogs);
    L.marker([14.130558, 100.523788],{icon:papa_logo}).bindPopup('สถานีวัดโพธิ์แดงเหนือ').addTo(groups.dogs);
    L.marker([14.040830, 100.555875],{icon:papa_logo}).bindPopup('สถานีสำแล').addTo(groups.dogs);
    L.marker([14.00409, 100.54069],{icon:papa_logo}).bindPopup('สถานีวัดมะขาม').addTo(groups.dogs);
    L.marker([13.862707, 100.475875],{icon:papa_logo}).bindPopup('สถานีสะพานพระนั่งเกล้า').addTo(groups.dogs);
    L.marker([13.739180, 100.495000],{icon:papa_logo}).bindPopup('สถานึสะพานพระพุทธยอดฟ้า').addTo(groups.dogs);
    L.marker([13.66687, 100.53929],{icon:papa_logo}).bindPopup('สถานีคลองลัดโพธิ์').addTo(groups.dogs);
    L.marker([13.615763, 100.55948],{icon:papa_logo}).bindPopup('สถานีโรงไฟฟ้าพระนครใต้').addTo(groups.dogs);
    L.marker([13.972577, 100.571875],{icon:papa_logo}).bindPopup('สถานีรังสิตไซฟอน').addTo(groups.dogs);
    L.marker([13.851133, 100.544267],{icon:papa_logo}).bindPopup('สถานีพงษ์เพชร').addTo(groups.dogs);
    L.marker([13.775344, 100.530614],{icon:papa_logo}).bindPopup('สถานีโรงผลิตน้ำสามเสน').addTo(groups.dogs);
    L.marker([14.03729, 100.56375],{icon:papa_logo}).bindPopup('สถานีคลองน้ำอ้อม').addTo(groups.dogs);
  
  
  
  
    //Marker กรมชลประทาน - เจ้าพระยา
    L.marker([13.7852912, 100.5042497],{icon:chon_logo}).bindPopup('สถานีกรมชลประทานสามเสน').addTo(groups.cats);
    L.marker([13.8223588, 100.5010296],{icon:chon_logo}).bindPopup('สถานีวัดเขมาภิรตาราม').addTo(groups.cats);
    L.marker([13.8965228, 100.4855822],{icon:chon_logo}).bindPopup('สถานีวัดเชิงเลน').addTo(groups.cats);
    L.marker([14.0049999, 100.5349362],{icon:chon_logo}).bindPopup('สถานีวัดฉาง').addTo(groups.cats);
    L.marker([14.016377,  100.5319814],{icon:chon_logo}).bindPopup('สถานีวัดโสภาราม').addTo(groups.cats);
    L.marker([14.1149229, 100.5299554],{icon:chon_logo}).bindPopup('สถานีวัดกร่าง').addTo(groups.cats);
  
    //Marker กรมชลประทาน - ท่าจีน
    L.marker([13.6012152, 100.2271764],{icon:chon_logo}).bindPopup('สถานีวัดพันธุวงษ์').addTo(groups.cats);
    L.marker([13.643662,  100.2240164],{icon:chon_logo}).bindPopup('สถานีวัดอ่างทอง').addTo(groups.cats);
    L.marker([13.6553374, 100.2486013],{icon:chon_logo}).bindPopup('สถานีวัดตอนไก่ดี').addTo(groups.cats);
    L.marker([13.7004723, 100.241895],{icon:chon_logo}).bindPopup('สถานีวัดเทียนตัด').addTo(groups.cats);
    L.marker([13.7064997, 100.2069157],{icon:chon_logo}).bindPopup('สถานีปตร.คลองจินดา').addTo(groups.cats);
    L.marker([13.7194724, 100.2286877],{icon:chon_logo}).bindPopup('สถานีวัดท่าขาม').addTo(groups.cats);
    L.marker([13.74751004, 100.2735515],{icon:chon_logo}).bindPopup('สถานีวัดท่าพูด').addTo(groups.cats);
    L.marker([13.7674768, 100.2565292],{icon:chon_logo}).bindPopup('สถานีวัดทรงคนอง').addTo(groups.cats);
    L.marker([13.8108016, 100.181981],{icon:chon_logo}).bindPopup('สถานีวัดสัมปทวน').addTo(groups.cats);
  
  
  
    window.ExampleData = {
      LayerGroups: groups,
      Basemaps: basemaps
    };
  
  }());
  
  
  
  
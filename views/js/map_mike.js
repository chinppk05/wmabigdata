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
      py5: new L.LayerGroup(),
      py10: new L.LayerGroup(),
      py15: new L.LayerGroup(),
      tc5: new L.LayerGroup(),
      tc10: new L.LayerGroup(),
      tc15: new L.LayerGroup()
    };
  
   //กำหนดหน้าตา Custom Marker 
    var big_05 = L.icon({
      iconUrl: "icons/con5y.png",
    });
  
    var big_10 = L.icon({
      iconUrl: "icons/con10y.png",
    });
  
    var big_15 = L.icon({
      iconUrl: "icons/con15y.png",
    });
  
    var small_05 = L.icon({
      iconUrl: "icons/sm_5y.png",
    });

    var small_10 = L.icon({
      iconUrl: "icons/sm_10y.png",
    });

    var small_15 = L.icon({
      iconUrl: "icons/sm_15y.png",
    });
  
  
    //Marker WMA
    L.marker([ 15.31036348 , 100.08191810 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลคุ้งสำเภา ').addTo(groups.py15); 
    L.marker([ 15.11972750 , 100.27640529 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลโพนางดำออก ').addTo(groups.py15);
    L.marker([ 15.35209407 , 100.10177615 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลศิลาดาน ').addTo(groups.py15);   
    L.marker([ 15.14219512 , 100.25230723 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลหาดอาษา ').addTo(groups.py15);   
    L.marker([ 15.20775364 , 100.19960774 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลตลุก ').addTo(groups.py15);      
    L.marker([ 15.25288081 , 100.09635000 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลธรรมามูล ').addTo(groups.py15);  
    L.marker([ 14.99696645 , 100.23835893 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลโพงาม ').addTo(groups.py15);     
    L.marker([ 15.07422544 , 100.28260591 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลโพธิ์พิทักษ์ ').addTo(groups.py15);
    L.marker([ 15.60381429 , 100.65708912 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลไพศาลี ').addTo(groups.py15);
    L.marker([ 15.88662399 , 100.59906125 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลหนองบัว ').addTo(groups.py15);
    L.marker([ 15.69897031 , 100.11997422 ],{icon:big_15}).bindPopup('แผน 15 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลนครนครสวรรค์ (2) ').addTo(groups.py15);
    L.marker([ 15.23444649 , 100.35649154 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองตาคลี ').addTo(groups.py15);
    L.marker([ 15.75019031 , 100.24530220 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลทับกฤช ').addTo(groups.py10);
    L.marker([ 15.55436884 , 100.07126288 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลโกรกพระ ').addTo(groups.py15);
    L.marker([ 15.45617554 , 100.13525761 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลพยุหะ ').addTo(groups.py15);
    L.marker([ 15.42544357 , 100.14370102 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลท่าน้ำอ้อยม่วงหัก ').addTo(groups.py15);
    L.marker([ 13.82613284 , 100.48729201 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลบางไผ่ ').addTo(groups.py10);
    L.marker([ 13.83038084 , 100.38528183 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบ้านบางม่วง ').addTo(groups.py15);
    L.marker([ 13.85454388 , 100.43317534 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางเลน ').addTo(groups.py15);
    L.marker([ 13.85770874 , 100.45171356 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลบางรักน้อย ').addTo(groups.py10);
    L.marker([ 13.88502589 , 100.46610464 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลไทรม้า ').addTo(groups.py10);
    L.marker([ 13.88177558 , 100.37652721 ],{icon:big_15}).bindPopup('แผน 15 ปี, ระบบขนาด ใหญ่ <br>  องค์การบริหารส่วนตำบลบางแม่นาง ').addTo(groups.py15);
    L.marker([ 13.81467950 , 100.41517848 ],{icon:big_15}).bindPopup('แผน 15 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลตำบลปลายบาง ').addTo(groups.py15);
    L.marker([ 13.84561989 , 100.46134791 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองบางกร่าง ').addTo(groups.py15);
    L.marker([ 13.96603976 , 100.34730254 ],{icon:big_15}).bindPopup('แผน 15 ปี, ระบบขนาด ใหญ่ <br>  องค์การบริหารส่วนตำบลไทรน้อย ').addTo(groups.py15);
    L.marker([ 13.94345180 , 100.39166329 ],{icon:big_15}).bindPopup('แผน 15 ปี, ระบบขนาด ใหญ่ <br>  องค์การบริหารส่วนตำบลบางบัวทอง ').addTo(groups.py15);
    L.marker([ 13.84457900 , 100.48292427 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองบางศรีเมือง ').addTo(groups.py10);
    L.marker([ 13.87908352 , 100.39441254 ],{icon:big_15}).bindPopup('แผน 15 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลตำบลเสาธงหิน ').addTo(groups.py15);
    L.marker([ 13.91140333 , 100.36893300 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองบางคูรัด ').addTo(groups.py15);
    L.marker([ 13.90347264 , 100.39869200 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองบางรักพัฒนา ').addTo(groups.py15);
    L.marker([ 13.91967217 , 100.39235521 ],{icon:big_15}).bindPopup('แผน 15 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลเมืองพิมลราช ').addTo(groups.py15);
    L.marker([ 13.80437713 , 100.47563446 ],{icon:big_15}).bindPopup('แผน 15 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลเมืองบางกรวย ').addTo(groups.py15);
    L.marker([ 13.97836886 , 100.31336677 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลไทรน้อย ').addTo(groups.py15);
    L.marker([ 14.02494470 , 100.31527697 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลคลองขวาง ').addTo(groups.py15);
    L.marker([ 13.85205311 , 100.42380674 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางม่วง ').addTo(groups.py15);
    L.marker([ 14.00164618 , 100.27597610 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลขุนศรี ').addTo(groups.py15);
    L.marker([ 13.83725075 , 100.35927658 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางใหญ่ ').addTo(groups.py15);
    L.marker([ 14.08632960 , 100.30882041 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลไทรใหญ่ ').addTo(groups.py15);
    L.marker([ 14.10512708 , 100.32234814 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลราษฎร์นิยม ').addTo(groups.py15);
    L.marker([ 13.81103573 , 100.48760951 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางสีทอง ').addTo(groups.py10);
    L.marker([ 13.88807846 , 100.30576564 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลหนองเพรางาย ').addTo(groups.py15);
    L.marker([ 13.94748216 , 100.32048756 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลทวีวัฒนา ').addTo(groups.py15);
    L.marker([ 13.92451687 , 100.46882680 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางพลับ ').addTo(groups.py10);
    L.marker([ 13.81352269 , 100.33044331 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลศาลากลาง ').addTo(groups.py15);
    L.marker([ 13.90148874 , 100.54296435 ],{icon:big_10}).bindPopup('แผน 10 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลนครปากเกร็ด ').addTo(groups.py10);
    L.marker([ 13.91029793 , 100.42599963 ],{icon:big_15}).bindPopup('แผน 15 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลเมืองบางบัวทอง ').addTo(groups.py15);
    L.marker([ 13.86126293 , 100.52193321 ],{icon:big_05}).bindPopup('แผน 5 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลนครนนทบุรี  ').addTo(groups.py5);
    L.marker([ 14.06541992 , 100.64519065 ],{icon:big_15}).bindPopup('แผน 15 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลเมืองคลองหลวง ').addTo(groups.py15);
    L.marker([ 13.98870489 , 100.50271154 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางเดื่อ ').addTo(groups.py10);
    L.marker([ 13.96368609 , 100.54265490 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบ้านใหม่ ').addTo(groups.py5);
    L.marker([ 13.99749983 , 100.57578554 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบ้านกลาง ').addTo(groups.py10);
    L.marker([ 13.95610741 , 100.53432266 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางขะแยง ').addTo(groups.py5);
    L.marker([ 13.95819079 , 100.60123859 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลหลักหก ').addTo(groups.py10);
    L.marker([ 14.08969011 , 100.62346554 ],{icon:big_10}).bindPopup('แผน 10 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลเมืองท่าโขลง ').addTo(groups.py10);
    L.marker([ 13.95768793 , 100.49025934 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองบางคูวัด ').addTo(groups.py10);
    L.marker([ 13.99707164 , 100.58919957 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางพูน ').addTo(groups.py10);
    L.marker([ 14.07131769 , 100.86883673 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองสนั่นรักษ์ ').addTo(groups.py15);
    L.marker([ 13.99218911 , 100.64752622 ],{icon:big_15}).bindPopup('แผน 15 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลนครรังสิต ').addTo(groups.py15);
    L.marker([ 14.06690981 , 100.52269020 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลสามโคก ').addTo(groups.py10);
    L.marker([ 14.01161791 , 100.54097174 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางหลวง ').addTo(groups.py15);
    L.marker([ 13.98421070 , 100.55107233 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางกะดี ').addTo(groups.py10);
    L.marker([ 14.06587388 , 100.52262282 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางเตย ').addTo(groups.py10);
    L.marker([ 14.07949885 , 100.66433226 ],{icon:big_15}).bindPopup('แผน 15 ปี, ระบบขนาด ใหญ่ <br>  องค์การบริหารส่วนตำบลคลองสาม ').addTo(groups.py15);
    L.marker([ 14.46292452 , 100.36640974 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองผักไห่ ').addTo(groups.py10);
    L.marker([ 14.32772174 , 100.40442298 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองเสนา ').addTo(groups.py15);
    L.marker([ 14.36477058 , 100.58880295 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองอโยธยา ').addTo(groups.py5);
    L.marker([ 14.46212612 , 100.54562592 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางปะหัน ').addTo(groups.py15);
    L.marker([ 14.27815684 , 100.57268788 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลตลาดเกรียบ ').addTo(groups.py10);
    L.marker([ 14.19478786 , 100.55929867 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางกระสั้น ').addTo(groups.py10);
    L.marker([ 14.21309960 , 100.49759231 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางไทร ').addTo(groups.py10);
    L.marker([ 14.37526481 , 100.48527816 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางบาล ').addTo(groups.py10);
    L.marker([ 14.37281178 , 100.58782684 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลนครพระนครศรีอยุธยา ').addTo(groups.py5);
    L.marker([ 14.22338271 , 100.58060615 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางปะอิน ').addTo(groups.py10);
    L.marker([ 14.21521729 , 100.57853140 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลปราสาททอง ').addTo(groups.py10);
    L.marker([ 14.16957010 , 100.52608103 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลราชคราม ').addTo(groups.py5);
    L.marker([ 14.77120778 , 100.63909677 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลป่าตาล ').addTo(groups.py15);
    L.marker([ 14.80022717 , 100.62683571 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองลพบุรี ').addTo(groups.py15);
    L.marker([ 14.82401182 , 100.65692914 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองเขาสามยอด ').addTo(groups.py15);
    L.marker([ 14.89817485 , 100.61093526 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลเขาพระงาม ').addTo(groups.py15);
    L.marker([ 14.81467570 , 100.51192016 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลท่าวุ้ง ').addTo(groups.py15);
    L.marker([ 14.79282488 , 100.67024270 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลท่าศาลา ').addTo(groups.py15);
    L.marker([ 13.64099174 , 100.60882844 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลด่านสำโรง ').addTo(groups.py5);
    L.marker([ 13.66059156 , 100.53307203 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองพระประแดง ').addTo(groups.py5);
    L.marker([ 13.57021503 , 100.56262710 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลแหลมฟ้าผ่า ').addTo(groups.py5);
    L.marker([ 13.60079515 , 100.59656821 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลนครสมุทรปราการ ').addTo(groups.py5);
    L.marker([ 13.59487672 , 100.57905961 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลพระสมุทรเจดีย์ ').addTo(groups.py5);
    L.marker([ 13.61381931 , 100.61114576 ],{icon:big_05}).bindPopup('แผน 5 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลตำบลบางเมือง ').addTo(groups.py5);
    L.marker([ 13.64401814 , 100.57798910 ],{icon:big_05}).bindPopup('แผน 5 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลเมืองปู่เจ้าสมิงพราย ').addTo(groups.py5);
    L.marker([ 13.58439839 , 100.66724451 ],{icon:big_15}).bindPopup('แผน 15 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลเมืองแพรกษาใหม่ ').addTo(groups.py15);
    L.marker([ 13.60851776 , 100.65172624 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลเทพารักษ์ ').addTo(groups.py10);
    L.marker([ 13.66229947 , 100.71670451 ],{icon:big_10}).bindPopup('แผน 10 ปี, ระบบขนาด ใหญ่ <br>  องค์การบริหารส่วนตำบลราชาเทวะ ').addTo(groups.py10);
    L.marker([ 13.64183178 , 100.60352268 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลสำโรงเหนือ ').addTo(groups.py10);
    L.marker([ 13.63909949 , 100.66416196 ],{icon:big_10}).bindPopup('แผน 10 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลเมืองบางแก้ว ').addTo(groups.py10);
    L.marker([ 13.59058070 , 100.63886608 ],{icon:big_10}).bindPopup('แผน 10 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลเมืองปากน้ำสมุทรปราการ ').addTo(groups.py10);
    L.marker([ 13.63015215 , 100.53316774 ],{icon:big_05}).bindPopup('แผน 5 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลเมืองลัดหลวง ').addTo(groups.py5);
    L.marker([ 13.68803500 , 100.56279353 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลบางกะเจ้า ').addTo(groups.py5);
    L.marker([ 13.57535197 , 100.90581972 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางพลี ').addTo(groups.py15);
    L.marker([ 13.57091671 , 100.65366504 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลแพรกษา ').addTo(groups.py10);
    L.marker([ 13.57515899 , 100.53395520 ],{icon:big_05}).bindPopup('แผน 5 ปี, ระบบขนาด ใหญ่ <br>  องค์การบริหารส่วนตำบลในคลองบางปลากด ').addTo(groups.py5);
    L.marker([ 13.60977572 , 100.70278648 ],{icon:big_10}).bindPopup('แผน 10 ปี, ระบบขนาด ใหญ่ <br>  องค์การบริหารส่วนตำบลบางพลีใหญ่ ').addTo(groups.py10);
    L.marker([ 14.88668585 , 100.32333478 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองบางระจัน ').addTo(groups.py15);
    L.marker([ 14.85351071 , 100.37111709 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลโพสังโฆ ').addTo(groups.py15);
    L.marker([ 14.75818139 , 100.38870320 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลถอนสมอ ').addTo(groups.py15);
    L.marker([ 14.96181615 , 100.34598717 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลทับยา ').addTo(groups.py15);
    L.marker([ 15.00544461 , 100.32682564 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลอินทร์บุรี ').addTo(groups.py15);
    L.marker([ 14.77596394 , 100.45068023 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางน้ำเชี่ยว ').addTo(groups.py15);
    L.marker([ 14.84907831 , 100.44420473 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลพรหมบุรี ').addTo(groups.py15);
    L.marker([ 14.71879586 , 100.43643324 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลเกษไชโย ').addTo(groups.py15);
    L.marker([ 14.65585091 , 100.41112942 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลโพธิ์ทอง ').addTo(groups.py15);
    L.marker([ 14.49217320 , 100.44492311 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลป่าโมก ').addTo(groups.py15);
    L.marker([ 14.66684305 , 100.47007881 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลไชโย ').addTo(groups.py15);
    L.marker([ 14.56041834 , 100.45028946 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลโพสะ ').addTo(groups.py15);
    L.marker([ 13.75859969 , 100.30538596 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางกระทึก ').addTo(groups.tc5);
    L.marker([ 13.80246887 , 100.32090181 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลศาลายา ').addTo(groups.tc5);
    L.marker([ 13.85170191 , 100.04385086 ],{icon:big_10}).bindPopup('แผน 10 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลเมืองนครปฐม ').addTo(groups.tc10);
    L.marker([ 13.71914619 , 100.24427199 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลท่าข้าม ').addTo(groups.tc5);
    L.marker([ 13.98111721 , 100.07432828 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลสามง่าม ').addTo(groups.tc5);
    L.marker([ 13.73339412 , 100.21883846 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองสามพราน ').addTo(groups.tc5);
    L.marker([ 13.82471225 , 100.30946191 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลศาลายา ').addTo(groups.tc5);
    L.marker([ 13.74332228 , 100.32488804 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองกระทุ่มล้ม ').addTo(groups.tc5);
    L.marker([ 13.69989153 , 100.25816943 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลอ้อมใหญ่ ').addTo(groups.tc5);
    L.marker([ 13.96115728 , 100.22835588 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลลำพญา ').addTo(groups.tc5);
    L.marker([ 13.86814033 , 100.20923465 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลห้วยพลู ').addTo(groups.tc5);
    L.marker([ 14.12470130 , 100.11396163 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางหลวง ').addTo(groups.tc10);
    L.marker([ 13.78377907 , 100.16275563 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลท่ากระชับ ').addTo(groups.tc5);
    L.marker([ 14.00009019 , 99.99222025 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลกำแพงแสน ').addTo(groups.tc15);
    L.marker([ 13.81763543 , 100.09790953 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลธรรมศาลา ').addTo(groups.tc10);
    L.marker([ 13.78255327 , 100.22728776 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลขุนแก้ว ').addTo(groups.tc5);
    L.marker([ 13.86581741 , 100.07643791 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลมาบแค ').addTo(groups.tc10);
    L.marker([ 13.88930458 , 100.28654986 ],{icon:small_10}).bindPopup('แผน 10 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลคลองโยง ').addTo(groups.tc10);
    L.marker([ 13.84426359 , 100.06884030 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบ่อพลับ ').addTo(groups.tc15);
    L.marker([ 13.76882542 , 100.25843251 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลทรงคนอง ').addTo(groups.tc5);
    L.marker([ 13.38074774 , 100.00171254 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลบางจะเกร็ง ').addTo(groups.tc15);
    L.marker([ 13.51458135 , 100.32516728 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลโคกขาม ').addTo(groups.tc5);
    L.marker([ 13.70031059 , 100.32393774 ],{icon:big_05}).bindPopup('แผน 5 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลนครอ้อมน้อย ').addTo(groups.tc5);
    L.marker([ 13.63424186 , 100.27833981 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลนาดี ').addTo(groups.tc5);
    L.marker([ 13.52389762 , 100.25436153 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลท่าจีน (2) ').addTo(groups.tc5);
    L.marker([ 13.68128098 , 100.30853427 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลสวนหลวง ').addTo(groups.tc5);
    L.marker([ 13.65561903 , 100.16266546 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลเกษตรพัฒนา ').addTo(groups.tc5);
    L.marker([ 13.60175677 , 100.20403405 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลอำแพง ').addTo(groups.tc15);
    L.marker([ 13.63689570 , 100.26770954 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลดอนไก่ดี ').addTo(groups.tc5);
    L.marker([ 13.64823333 , 100.24381159 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองกระทุ่มแบน ').addTo(groups.tc5);
    L.marker([ 13.54879703 , 100.27761340 ],{icon:big_05}).bindPopup('แผน 5 ปี, ระบบขนาด ใหญ่ <br>  เทศบาลนครสมุทรสาคร ').addTo(groups.tc5);
    L.marker([ 13.68046210 , 100.26530450 ],{icon:small_05}).bindPopup('แผน 5 ปี, ระบบขนาด เล็ก <br>  องค์การบริหารส่วนตำบลท่าไม้ ').addTo(groups.tc5);
    L.marker([ 14.23064148 , 100.03894531 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลเมืองสองพี่น้อง ').addTo(groups.tc15);
    L.marker([ 14.32626724 , 99.86152994 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลจรเข้สามพัน ').addTo(groups.tc15);
    L.marker([ 14.74821670 , 100.09198826 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลสามชุก ').addTo(groups.tc15);
    L.marker([ 14.49362729 , 100.01533980 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลท่าเสด็จ ').addTo(groups.tc15);
    L.marker([ 14.36086206 , 99.88516374 ],{icon:small_15}).bindPopup('แผน 15 ปี, ระบบขนาด เล็ก <br>  เทศบาลตำบลท้าวอู่ทอง ').addTo(groups.tc15);
    

    
    window.ExampleData = {
      LayerGroups: groups,
      Basemaps: basemaps
    };
  
  }());
  
  
  
  
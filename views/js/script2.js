document.getElementById("make-pdf2").addEventListener("click",makePDF);


function makePDF(){

    var a = 73 ;
    var b = 22 ;
    var c = 16 ; 
    var d = 25 ;

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


    pdfMake.fonts = {
        Sarabun: {
            normal: "Sarabun-Regular.ttf",
            bold: "Sarabun-Bold.ttf",
            italics: "Sarabun-Italic.ttf",
            bolditalics: "Sarabun-BoldItalic.ttf",
        }
    };


    var docDefinition = {


        pageSize: 'A4',
        pageOrientation: 'landscape',

        content: [

        

            {
                text: 'รายงานคุณภาพน้ำเสียแบบครบวงจร\n',
                style: 'header',
                alignment: 'center'
            },
            {
                text: 'บนระบบสารสนเทศภูมิศาสตร์ Big Data\n\n',
                style: 'header',
                alignment: 'center'
            },
            
          
            {
                text: 'ข้อมูลคุณภาพน้ำวันที่ วันที่ '+today.getDate()+' เดือน '+month[today.getMonth()]+' พ.ศ. '+(today.getFullYear()+543)+'\n\n',
                style: 'header',
                alignment: 'center'  ,
              
            },

            {
                style: 'tableExample',
                table: {

                    widths: [200,  200, 100],
                    body: [
                        ['เปรียบเทียบเกณฑ์', 'จำนวน (สถานี)', ],
                        ['ผ่านเกณฑ์', a, ],
                        ['เฝ้าระวัง', b,  ],
                        ['ต่ำกว่าเกณฑ์', c, ],
                        ['ไม่มีข้อมูลอัพเดท', d, ],
                    ]
                },
                alignment: 'center'
            },

            {
                text:'\n\n',
            },

             {
                style: 'tableExample',
                table: {
                    headerRows: 2,
                    // dontBreakRows: true,
                    // keepWithHeaderRows: 1,
                    widths: [150,  50, 50 ,50, 50 ,50, 50, 230],
                    body: [
                        [{text: 'สถานี', style: 'tableHeader', rowSpan :2},{text: 'Do', style: 'tableHeader',colSpan:2},{}, {text: 'pH', style: 'tableHeader',colSpan:2}, {},{text: 'Temp', style: 'tableHeader',colSpan:2},{},{text: 'หมายเหตุ', style: 'tableHeader',rowSpan:2}],
                        [{text: '', style: 'tableHeader',},{text: 'ก่อน', style: 'tableHeader',}, {text: 'หลัง', style: 'tableHeader'}, {text: 'ก่อน', style: 'tableHeader',}, {text: 'หลัง', style: 'tableHeader'}, {text: 'ก่อน', style: 'tableHeader',}, {text: 'หลัง', style: 'tableHeader'},{text: '', style: 'tableHeader',} ],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                        ['test','test','test','test','test','test','test','test'],
                                                     
                    ] 
                },
                alignment: 'center'
            },

            {text: '', pageBreak: 'before', style: 'subheader'},

            {
                text: 'รายงานคุณภาพน้ำเสียแบบครบวงจร\n',
                style: 'header',
                alignment: 'center'
            },
            {
                text: 'บนระบบสารสนเทศภูมิศาสตร์ Big Data\n\n',
                style: 'header',
                alignment: 'center'
            },
            
          
           

            'จากข้อมูลคุณภาพน้ำของวันนี้ พบสถานีคุณภาพน้ำดีกว่าเกณฑ์ที่กำหนดจำนวน '+a+' สถานี คิดเป็นร้อยละ '+((a/(a+b+c+d))*100).toFixed(2)+' \n\n',

            'พบสถานีมีค่าคุณภาพน้ำเฝ้าระวังจำนวน '+b+' สถานี  คิดเป็นร้อยละ '+((b/(a+b+c+d))*100).toFixed(2)+' \n\n',

            'ได้แก่ สถานี \n\n',

            'พบสถานีมีค่าคุณภาพน้ำต่ำกว่าเกณฑ์จำนวน '+c+' สถานี คิดเป็นร้อยละ '+((c/(a+b+c+d))*100).toFixed(2)+'\n\n',

            'ได้แก่ สถานี \n\n',
        
           
 
            
        ],
        defaultStyle:{
            font: "Sarabun",
        }
    };

pdfMake.createPdf(docDefinition).open();

}

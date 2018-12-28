//创建驾车实例
var driving = new BMap.DrivingRoute(map, {
    renderOptions: {
        map: map,
        autoViewport: true
    }
});

//创建点对象
var myp1 = new BMap.Point(118.817139, 32.146839);    //1101
var myp2 = new BMap.Point(118.795552, 32.127325);    //1102
var myp3 = new BMap.Point(118.815034, 32.109938);    //1103
var myp4 = new BMap.Point(118.820486, 32.117184);    //1104


//创建驾车搜索
driving.search(myp1, myp4, { waypoints: [myp2, myp3] });//waypoints表示途经点


//绘制折线
driving.setSearchCompleteCallback(function () {
    var pts = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline = new BMap.Polyline([pts],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline);
})
var m1 = new BMap.Marker(myp1);         //创建4个marker
var m2 = new BMap.Marker(myp2);
var m3 = new BMap.Marker(myp3);
var m4 = new BMap.Marker(myp4);

map.addOverlay(m1);
map.addOverlay(m2);
map.addOverlay(m3);
map.addOverlay(m4);


var lab1 = new BMap.Label("燕子矶公园", { position: myp1 });        //创建4个label
var lab2 = new BMap.Label("长江观音景区", { position: myp2 });
var lab3 = new BMap.Label("重庆捞翻天火锅", { position: myp3 });
var lab4 = new BMap.Label("晓庄国际彩虹广场", { position: myp4 });
map.addOverlay(lab1);
map.addOverlay(lab2);
map.addOverlay(lab3);
map.addOverlay(lab4);

//创建驾车实例
var driving1 = new BMap.DrivingRoute(map, {
    renderOptions: {
        map: map,
        autoViewport: true
    }
});

//创建点对象
var myp5 = new BMap.Point(118.895116, 32.050862);    
var myp6 = new BMap.Point(118.901810, 32.056827);    
var myp7 = new BMap.Point(118.902530, 32.058679);    
var myp8 = new BMap.Point(118.901004, 32.056328);    


//创建驾车搜索
driving.search(myp5, myp8, { waypoints: [myp6, myp7] });//waypoints表示途经点


//绘制折线
driving.setSearchCompleteCallback(function () {
    var pts1 = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline1 = new BMap.Polyline([pts1],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline1);
})
var m5 = new BMap.Marker(myp5);         //创建4个marker
var m6 = new BMap.Marker(myp6);
var m7 = new BMap.Marker(myp7);
var m8 = new BMap.Marker(myp8);

map.addOverlay(m5);
map.addOverlay(m6);
map.addOverlay(m7);
map.addOverlay(m8);


var lab5 = new BMap.Label("花园城", { position: myp5 });        //创建4个label
var lab6 = new BMap.Label("幸福蓝海国际影城", { position: myp6 });
var lab7 = new BMap.Label("水沐足韵", { position: myp7 });
var lab8 = new BMap.Label("晋家门", { position: myp8 });
map.addOverlay(lab5);
map.addOverlay(lab6);
map.addOverlay(lab7);
map.addOverlay(lab8);

//创建驾车实例
var driving2 = new BMap.DrivingRoute(map, {
    renderOptions: {
        map: map,
        autoViewport: true
    }
});

//创建点对象
var myp9 = new BMap.Point(118.986526, 32.126561);
var myp10 = new BMap.Point(118.994913, 32.126274);
var myp11= new BMap.Point(118.992538, 32.127719);
var myp12 = new BMap.Point(118.993535, 32.126262);
var myp13 = new BMap.Point(118.992498, 32.127648);


//创建驾车搜索
driving.search(myp9, myp13, { waypoints: [myp10, myp11,myp12] });//waypoints表示途经点


//绘制折线
driving.setSearchCompleteCallback(function () {
    var pts2 = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline2 = new BMap.Polyline([pts2],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline2);
})
var m9 = new BMap.Marker(myp9);         //创建4个marker
var m10 = new BMap.Marker(myp10);
var m11 = new BMap.Marker(myp11);
var m12 = new BMap.Marker(myp12);
var m13 = new BMap.Marker(myp13);

map.addOverlay(m9);
map.addOverlay(m10);
map.addOverlay(m11);
map.addOverlay(m12);
map.addOverlay(m13);


var lab9 = new BMap.Label("仙林湖公园", { position: myp9 });        //创建4个label
var lab10 = new BMap.Label("诺丁牛排", { position: myp10 });
var lab11 = new BMap.Label("汉拿山", { position: myp11 });
var lab12 = new BMap.Label("星巴克", { position: myp12 });
var lab13 = new BMap.Label("大玩家", { position: myp13 });
map.addOverlay(lab9);
map.addOverlay(lab10);
map.addOverlay(lab11);
map.addOverlay(lab12);
map.addOverlay(lab13);

//创建驾车实例
var driving3 = new BMap.DrivingRoute(map, {
    renderOptions: {
        map: map,
        autoViewport: true
    }
});

//创建点对象
var myp14 = new BMap.Point(118.955669, 32.151090);
var myp15 = new BMap.Point(118.923225, 32.100099);
var myp16 = new BMap.Point(118.929337, 32.106705);
var myp17 = new BMap.Point(118.943848, 32.103931);


//创建驾车搜索
driving.search(myp14, myp17, { waypoints: [myp15, myp16] });//waypoints表示途经点


//绘制折线
driving.setSearchCompleteCallback(function () {
    var pts3 = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline3 = new BMap.Polyline([pts3],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline3);
})
var m14 = new BMap.Marker(myp14);         //创建4个marker
var m15 = new BMap.Marker(myp15);
var m16 = new BMap.Marker(myp16);
var m17 = new BMap.Marker(myp17);

map.addOverlay(m14);
map.addOverlay(m15);
map.addOverlay(m16);
map.addOverlay(m17);

var lab14 = new BMap.Label("栖霞山风景名胜区", { position: myp14 });        //创建4个label
var lab15 = new BMap.Label("金鹰湖滨天地", { position: myp15 });
var lab16= new BMap.Label("左庭右院鲜牛肉火锅", { position: myp16 });
var lab17 = new BMap.Label("南京师范大学仙林校区", { position: myp17 });
map.addOverlay(lab14);
map.addOverlay(lab15);
map.addOverlay(lab16);
map.addOverlay(lab17);

//创建驾车实例
var driving4 = new BMap.DrivingRoute(map, {
    renderOptions: {
        map: map,
        autoViewport: true
    }
});

//创建点对象
var myp18 = new BMap.Point(118.943353, 32.112223);
var myp19 = new BMap.Point(118.908978, 32.097554);
var myp20 = new BMap.Point(118.915785, 32.103545);
var myp21 = new BMap.Point(118.915590, 32.103414);


//创建驾车搜索
driving.search(myp18, myp21, { waypoints: [myp19, myp20] });//waypoints表示途经点


//绘制折线
driving.setSearchCompleteCallback(function () {
    var pts4 = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline4 = new BMap.Polyline([pts4],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline4);
})
var m18 = new BMap.Marker(myp18);         //创建4个marker
var m19 = new BMap.Marker(myp19);
var m20 = new BMap.Marker(myp20);
var m21 = new BMap.Marker(myp21);

map.addOverlay(m18);
map.addOverlay(m19);
map.addOverlay(m20);
map.addOverlay(m21);

var lab18 = new BMap.Label("羊山公园", { position: myp18 });        //创建4个label
var lab19 = new BMap.Label("东城汇", { position: myp19 });
var lab20 = new BMap.Label("唯爱主题KTV", { position: myp20 });
var lab21 = new BMap.Label("乱世佳人就把", { position: myp21 });
map.addOverlay(lab18);
map.addOverlay(lab19);
map.addOverlay(lab20);
map.addOverlay(lab21);

//创建驾车实例
var driving5 = new BMap.DrivingRoute(map, {
    renderOptions: {
        map: map,
        autoViewport: true
    }
});

//创建点对象
var myp22 = new BMap.Point(118.985903, 32.122109);
var myp23 = new BMap.Point(118.992498, 32.127648);
var myp24 = new BMap.Point(118.992538, 32.127719);
var myp25 = new BMap.Point(118.928525, 32.107726);
var myp26 = new BMap.Point(118.929631, 32.105761);


//创建驾车搜索
driving.search(myp22, myp26, { waypoints: [myp23, myp24,myp25] });//waypoints表示途经点


//绘制折线
driving.setSearchCompleteCallback(function () {
    var pts5 = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline5 = new BMap.Polyline([pts5],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline5);
})
var m22 = new BMap.Marker(myp22);         //创建4个marker
var m23 = new BMap.Marker(myp23);
var m24 = new BMap.Marker(myp24);
var m25 = new BMap.Marker(myp25);
var m26 = new BMap.Marker(myp26);

map.addOverlay(m22);
map.addOverlay(m23);
map.addOverlay(m24);
map.addOverlay(m25);
map.addOverlay(m26);

var lab22 = new BMap.Label("南京万达茂", { position: myp22 });        //创建4个label
var lab23 = new BMap.Label("大玩家", { position: myp23 });
var lab24 = new BMap.Label("汉拿山", { position: myp24 });
var lab25 = new BMap.Label("青春飞扬网咖", { position: myp25 });
var lab26 = new BMap.Label("卢米埃影院", { position: myp26 });

map.addOverlay(lab22);
map.addOverlay(lab23);
map.addOverlay(lab24);
map.addOverlay(lab25);
map.addOverlay(lab26);
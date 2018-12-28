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
var driving = new BMap.DrivingRoute(map, {
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

﻿//创建驾车实例
var driving1 = new BMap.DrivingRoute(map, {
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
driving1.search(myp1, myp4, { waypoints: [myp2, myp3] });//waypoints表示途经点


//绘制折线
driving1.setSearchCompleteCallback(function () {
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

//创建鼠标点击事件与框框显示
var route_x = new Array("118.817139");
var route_y = new Array("32.146839");
var route_title = new Array("江畔一日游");
var route_discribe1 = new Array("紧邻长江，将长江边上的燕子矶风光和长江观音风光一览无余之后，/n在城北的迈皋桥吃上一顿热火朝天的火锅，再到不远处的彩虹广场逛逛，美好的一天就这样结束了！");

function addroute(point, i) {
    
    //添加图标点击事件
    lab1.addEventListener("click", function () {
        var opts1 = {
            width: 250,     // 信息窗口宽度    
            height: 500,     // 信息窗口高度    
        }
        //添加信息窗口内容
        var content1 = '<div class="point_content_title">' + route_title[i] + '</div>' + '<br/>' +
                '<div class="point_content_discribe">' + '路线简介: ' + route_discribe1[i] ;
        // 创建信息窗口对象 		
        var infoWindow1 = new BMap.InfoWindow(content1, opts1);
        // 打开信息窗口   
        map.openInfoWindow(infoWindow1, map.getCenter());
    })
}
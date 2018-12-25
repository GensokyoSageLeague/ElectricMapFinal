//创建点对象
var myP1 = new BMap.Point(118.817139,32.146839);    //1101
var myP2 = new BMap.Point(118.795552,32.127325);    //1102
var myP3 = new BMap.Point(118.815034,32.109938);    //1103
var myP4 = new BMap.Point(118.820486,32.117184);    //1104

//创建驾车实例
var driving = new BMap.DrivingRoute(map, {
    renderOptions: {
        map: map,
        autoViewport: true
    }
});

//创建驾车搜索
driving.search(myp1, myp4, { waypoints: myp2,myp3});//waypoints表示途经点        
 

//绘制折线
driving.setSearchCompleteCallback(function(){
    var pts = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline = new BMap.Polyline([pts],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline);
})
var m1 = new BMap.Marker(myP1);         //创建4个marker
var m2 = new BMap.Marker(myP2);
var m3 = new BMap.Marker(myP3);
var m4 = new BMap.Marker(myP4);

map.addOverlay(m1);
map.addOverlay(m2);
map.addOverlay(m3);
map.addOverlay(m4);


var lab1 = new BMap.Label("燕子矶公园", { position: myP1 });        //创建4个label
var lab2 = new BMap.Label("长江观音景区", { position: myP2 });
var lab3 = new BMap.Label("重庆捞翻天火锅", { position: myP3 });
var lab4 = new BMap.Label("晓庄国际彩虹广场", { position: myP4 });
map.addOverlay(lab1);
map.addOverlay(lab2);
map.addOverlay(lab3);
map.addOverlay(lab4);
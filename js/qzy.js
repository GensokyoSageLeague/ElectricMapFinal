//创建点对象
var myP1 = new BMap.Point(118.817139,32.146839);    //1101
var myP2 = new BMap.Point(118.795552,32.127325);    //1102
var myP3 = new BMap.Point(118.815034,32.109938);    //1103
var myP4 = new BMap.Point(118.820486,32.117184);    //1104

//创建驾车实例
var driving = new BMap.DrivingRoute(map);    

//创建驾车搜索
driving.search(myP1, myP2);               
driving.search(myP2, myP3); 
driving.search(myP3, myP4); 

//绘制折线
driving.setSearchCompleteCallback(function(){
    var pts = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline = new BMap.Polyline(pts);     
    map.addOverlay(polyline);
})
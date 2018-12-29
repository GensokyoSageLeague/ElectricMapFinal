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
driving1.search(myp5, myp8, { waypoints: [myp6, myp7] });//waypoints表示途经点


//绘制折线
driving1.setSearchCompleteCallback(function () {
    var pts1 = driving1.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline1 = new BMap.Polyline([pts1],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline1);
})



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
driving2.search(myp9, myp13, { waypoints: [myp10, myp11,myp12] });//waypoints表示途经点


//绘制折线
driving2.setSearchCompleteCallback(function () {
    var pts2 = driving2.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline2 = new BMap.Polyline([pts2],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline2);
})



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
driving3.search(myp14, myp17, { waypoints: [myp15, myp16] });//waypoints表示途经点


//绘制折线
driving3.setSearchCompleteCallback(function () {
    var pts3 = driving3.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline3 = new BMap.Polyline([pts3],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline3);
})


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
driving4.search(myp18, myp21, { waypoints: [myp19, myp20] });//waypoints表示途经点


//绘制折线
driving4.setSearchCompleteCallback(function () {
    var pts4 = driving4.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline4 = new BMap.Polyline([pts4],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline4);
})


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
driving5.search(myp22, myp26, { waypoints: [myp23, myp24,myp25] });//waypoints表示途经点


//绘制折线
driving5.setSearchCompleteCallback(function () {
    var pts5 = driving5.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline5 = new BMap.Polyline([pts5],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline5);
})


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

//创建驾车实例
var driving6 = new BMap.DrivingRoute(map, {
    renderOptions: {
        map: map,
        autoViewport: true
    }
});

//创建点对象
var myp27 = new BMap.Point(118.955669, 32.151090);
var myp28 = new BMap.Point(118.965238, 32.158332);
var myp29 = new BMap.Point(118.965275, 32.157820);
var myp30 = new BMap.Point(118.992538, 32.127719);
var myp31 = new BMap.Point(118.985903, 32.122109);


//创建驾车搜索
driving6.search(myp27, myp31, { waypoints: [myp28, myp29, myp30] });//waypoints表示途经点


//绘制折线
driving6.setSearchCompleteCallback(function () {
    var pts6 = driving6.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline6 = new BMap.Polyline([pts6],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline6);
})

var lab27 = new BMap.Label("栖霞山风景名胜区", { position: myp27 });        //创建4个label
var lab28 = new BMap.Label("千佛斋素菜馆", { position: myp28 });
var lab29 = new BMap.Label("栖霞古寺", { position: myp29 });
var lab30 = new BMap.Label("汉拿山", { position: myp30});
var lab31 = new BMap.Label("南京万达茂", { position: myp31 });

map.addOverlay(lab27);
map.addOverlay(lab28);
map.addOverlay(lab29);
map.addOverlay(lab30);
map.addOverlay(lab31);

//创建驾车实例
var driving7 = new BMap.DrivingRoute(map, {
    renderOptions: {
        map: map,
        autoViewport: true
    }
});

//创建点对象
var myp32 = new BMap.Point(118.955669, 32.151090);
var myp33 = new BMap.Point(118.965238, 32.158332);
var myp34 = new BMap.Point(118.965275, 32.157820);
var myp35 = new BMap.Point(118.992538, 32.127719);

//创建驾车搜索
driving7.search(myp32, myp35, { waypoints: [myp33, myp34] });//waypoints表示途经点


//绘制折线
driving7.setSearchCompleteCallback(function () {
    var pts7 = driving7.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline7 = new BMap.Polyline([pts7],
{ strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline7);
})

var lab32 = new BMap.Label("八卦洲湿地公园", { position: myp32 });        //创建4个label
var lab33 = new BMap.Label("重庆老翻天火锅", { position: myp33 });
var lab34 = new BMap.Label("优力锋KTV", { position: myp34 });
var lab35 = new BMap.Label("玖古养生", { position: myp35 });

map.addOverlay(lab32);
map.addOverlay(lab33);
map.addOverlay(lab34);
map.addOverlay(lab35);


//创建驾车实例
var driving8 = new BMap.DrivingRoute(map, {
    renderOptions: {
            map: map,
            autoViewport: true
    }
    });

//创建点对象
    var myp36 = new BMap.Point(118.929631, 32.105761);
    var myp37 = new BMap.Point(118.923225, 32.100099);
    var myp38 = new BMap.Point(118.933079, 32.107585);
    var myp39 = new BMap.Point(118.923547, 32.098900);
    var myp40 = new BMap.Point(118.915590, 32.103414);

//创建驾车搜索
    driving8.search(myp36, myp40, { waypoints: [myp37, myp38,myp39] });//waypoints表示途经点


//绘制折线
driving8.setSearchCompleteCallback(function () {
    var pts8 = driving8.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline8 = new BMap.Polyline([pts8],
        { strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline8);
    })

var lab36 = new BMap.Label("卢米埃影院", { position: myp36 });        //创建4个label
var lab37 = new BMap.Label("金鹰湖滨天地", { position: myp37 });
var lab38 = new BMap.Label("川西集市", { position: myp38 });
var lab39 = new BMap.Label("九霄推理俱乐部", { position: myp39 });
var lab40 = new BMap.Label("乱世佳人酒吧", { position: myp40 });

map.addOverlay(lab36);
map.addOverlay(lab37);
map.addOverlay(lab38);
map.addOverlay(lab39);
map.addOverlay(lab40);

//创建驾车实例
var driving9 = new BMap.DrivingRoute(map, {
    renderOptions: {
                map: map,
                autoViewport: true
                }
            });

//创建点对象
    var myp41 = new BMap.Point(118.986526, 32.126561);
    var myp42 = new BMap.Point(118.929631, 32.105761);
    var myp43 = new BMap.Point(118.929546, 32.106421);
    var myp44 = new BMap.Point(118.923225, 32.100099);

//创建驾车搜索
    driving9.search(myp41, myp44, { waypoints: [myp42, myp43] });//waypoints表示途经点


//绘制折线
driving9.setSearchCompleteCallback(function () {
    var pts9 = driving9.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline9 = new BMap.Polyline([pts9],
        { strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline9);
    })

var lab41 = new BMap.Label("仙林湖公园", { position: myp41 });        //创建4个label
var lab42 = new BMap.Label("卢米埃影院", { position: myp42 });
var lab43 = new BMap.Label("咸亨酒店", { position: myp43 });
var lab44 = new BMap.Label("金鹰湖滨天地", { position: myp44 });

map.addOverlay(lab41);
map.addOverlay(lab42);
map.addOverlay(lab43);
map.addOverlay(lab44);

//创建驾车实例
var driving10 = new BMap.DrivingRoute(map, {
    renderOptions: {
                    map: map,
                    autoViewport: true
                }
    });

//创建点对象
    var myp45 = new BMap.Point(118.960047, 32.151708);
    var myp46 = new BMap.Point(118.964317, 32.155155);
    var myp47 = new BMap.Point(118.955669, 32.151090);
    var myp48 = new BMap.Point(118.965238, 32.158332);

//创建驾车搜索
    driving10.search(myp45, myp48, { waypoints: [myp46, myp47] });//waypoints表示途经点


//绘制折线
driving10.setSearchCompleteCallback(function () {
    var pts10 = driving10.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline10 = new BMap.Polyline([pts10],
        { strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline10);
    })

var lab45 = new BMap.Label("千佛岩", { position: myp45 });        //创建4个label
var lab46 = new BMap.Label("天开岩", { position: myp46 });
var lab47 = new BMap.Label("栖霞山风景名胜区", { position: myp47 });
var lab48 = new BMap.Label("千佛斋素菜馆", { position: myp48 });

map.addOverlay(lab45);
map.addOverlay(lab46);
map.addOverlay(lab47);
map.addOverlay(lab48);

//创建驾车实例
var driving11 = new BMap.DrivingRoute(map, {
    renderOptions: {
                        map: map,
                        autoViewport: true
                    }
                    });

//创建点对象
    var myp49 = new BMap.Point(118.960047, 32.151708);
    var myp50 = new BMap.Point(118.964317, 32.155155);
    var myp51 = new BMap.Point(118.955669, 32.151090);

//创建驾车搜索
    driving11.search(myp49, myp51, { waypoints: [myp50] });//waypoints表示途经点


//绘制折线
driving11.setSearchCompleteCallback(function () {
    var pts11 = driving11.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组

    var polyline11 = new BMap.Polyline([pts11],
        { strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
   );
    map.addOverlay(polyline11);
    })

var lab49 = new BMap.Label("八卦洲湿地公园", { position: myp49 });        //创建4个label
var lab50 = new BMap.Label("陌上花渡", { position: myp50 });
var lab51 = new BMap.Label("柠檬鱼", { position: myp51 });

map.addOverlay(lab49);
map.addOverlay(lab50);
map.addOverlay(lab51);

//添加框和鼠标事件
var marker = new BMap.Marker(myp1);
map.addOverlay(marker);
var opts = {
    width: 200,     // 信息窗口宽度
    height: 100,     // 信息窗口高度
    title: "江畔一日游", // 信息窗口标题
    
}
var infoWindow = new BMap.InfoWindow("紧邻长江，将长江边上的燕子矶风光和长江观音风光一览无余之后，\n在城北的迈皋桥吃上一顿热火朝天的火锅，再到不远处的彩虹广场逛逛，美好的一天就这样结束了", opts);  // 创建信息窗口对象 
marker.addEventListener("click", function () {
    map.openInfoWindow(infoWindow,marker); //开启信息窗口
});
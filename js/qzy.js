function addroot1() {
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
    var pts;

    //创建驾车搜索
    driving.search(myp1, myp4, { waypoints: [myp2, myp3] });//waypoints表示途经点
    //回调搜索的路线
    driving.setPolylinesSetCallback(function (lines) {
        addinformation(lines);
    })
    //处理回调的路线
    function addinformation(lines) {
        for (var line in lines) {
            myline = lines[line].getPolyline();
            myline.addEventListener("click", function () {
                var opts = {
                    width: 200,     // 信息窗口宽度    
                    height: 550,     // 信息窗口高度    
                }
                //添加信息窗口内容
                var content = '<div class="point_content_title">' + '江畔一日游\t评分：AAAA' + '</div>' + '<br/>' + '<div class="point_content_discribe">' + '攻略简介：紧邻长江，将长江边上的燕子矶风光和长江观音风光一览无余之后，在城北的迈皋桥吃上一顿热火朝天的火锅，\n再到不远处的彩虹广场逛逛，美好的一天就这样结束了!' + '</div>' + '<br/>' +
                   '<div class="point_content_discribe">' + '路线：燕子矶公园-长江观音景区-重庆捞翻天火锅-晓庄国际彩虹广场' + '</div>' + '<br/>' ;
                // 创建信息窗口对象 		
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }
    }

    var lab1 = new BMap.Label("燕子矶公园", { position: myp1 });        //创建4个label
    var lab2 = new BMap.Label("长江观音景区", { position: myp2 });
    var lab3 = new BMap.Label("重庆捞翻天火锅", { position: myp3 });
    var lab4 = new BMap.Label("晓庄国际彩虹广场", { position: myp4 });
    map.addOverlay(lab1);
    map.addOverlay(lab2);
    map.addOverlay(lab3);
    map.addOverlay(lab4);
}

addroot1();

function addroot2() {
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
    var pts1;

    //创建驾车搜索
    driving1.search(myp5, myp8, { waypoints: [myp6, myp7] });//waypoints表示途经点
    //回调搜索的路线
    driving.setPolylinesSetCallback(function (lines) {
        addinformation(lines);
    })
    //处理回调的路线
    function addinformation(lines) {
        for (var line in lines) {
            myline = lines[line].getPolyline();
            myline.addEventListener("click", function () {
                var opts = {
                    width: 200,     // 信息窗口宽度    
                    height: 550,     // 信息窗口高度    
                }
                //添加信息窗口内容
                var content = '<div class="point_content_title">' + '马群周边游\t评分：AAAA' + '</div>' + '<br/>' + '<div class="point_content_discribe">' + '攻略简介：这条线路适合生活在马群附近的朋友们，在钟山风景名胜区走走，\n晌午，到花园城吃一餐晋家门。走了一天肯定累了，再去按按脚吧。休息片刻，还有一场精彩绝伦的电影等着你和你的爱人！' + '</div>' + '<br/>' +
                   '<div class="point_content_discribe">' + '路线：花园城-幸福蓝海国际影城-水沐足韵-晋家门' + '</div>' + '<br/>';
                // 创建信息窗口对象 		
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }
    }

    var lab5 = new BMap.Label("花园城", { position: myp5 });        //创建4个label
    var lab6 = new BMap.Label("幸福蓝海国际影城", { position: myp6 });
    var lab7 = new BMap.Label("水沐足韵", { position: myp7 });
    var lab8 = new BMap.Label("晋家门", { position: myp8 });
    map.addOverlay(lab5);
    map.addOverlay(lab6);
    map.addOverlay(lab7);
    map.addOverlay(lab8);

}

addroot2();
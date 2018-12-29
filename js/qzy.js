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
                   '<div class="point_content_discribe">' + '路线：燕子矶公园-长江观音景区-重庆捞翻天火锅-晓庄国际彩虹广场' + '</div>' + '<br/>' + '<div class="point_content_discribe">' + '  祝您本次出行愉快，欢迎您在行程结束时返回页面为本次路线打分！';
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
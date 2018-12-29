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
                   '<div class="point_content_discribe">' + '路线：燕子矶公园-长江观音景区-重庆捞翻天火锅-晓庄国际彩虹广场' + '</div>' + '<br/>' + '<div class="point_content_discribe">'+'祝您本次出行一切顺利开心，欢迎您在行程结束后给本次线路规划评分！';
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
    driving1.setPolylinesSetCallback(function (lines) {
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
                   '<div class="point_content_discribe">' + '路线：花园城-幸福蓝海国际影城-水沐足韵-晋家门' + '</div>' + '<br/>' + '<div class="point_content_discribe">' + '祝您本次出行一切顺利开心，欢迎您在行程结束后给本次线路规划评分！';
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

function addroot3() {
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
    var myp11 = new BMap.Point(118.992538, 32.127719);
    var myp12 = new BMap.Point(118.993535, 32.126262);
    var myp13 = new BMap.Point(118.992498, 32.127648);


    //创建驾车搜索
    driving2.search(myp9, myp13, { waypoints: [myp10, myp11, myp12] });//waypoints表示途经点
    //回调搜索的路线
    driving2.setPolylinesSetCallback(function (lines) {
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
                var content = '<div class="point_content_title">' + '仙林度假游\t评分：AAAAA' + '</div>' + '<br/>' + '<div class="point_content_discribe">' + '攻略简介：美丽的仙林，值得我们不停探索。免费的仙林湖公园是天然氧吧，和伴侣、孩子、父母来都是极好的。不远处就是新开的万达茂了，我猜时尚年轻你一定喜欢英国的牛排，或者是韩国的烤肉！吃完这一餐，再来杯星巴克润润嗓子，别忘了，三楼还有一家大玩家等着你释放年轻的激情！' + '</div>' + '<br/>' +
                   '<div class="point_content_discribe">' + '路线：仙林湖公园-诺丁牛排-汉拿山-星巴克-大玩家' + '</div>' + '<br/>' + '<div class="point_content_discribe">' + '祝您本次出行一切顺利开心，欢迎您在行程结束后给本次线路规划评分！';
                // 创建信息窗口对象 		
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }
    }

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

}

addroot3();

function addroot4() {
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
    //回调搜索的路线
    driving3.setPolylinesSetCallback(function (lines) {
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
                var content = '<div class="point_content_title">' + '栖霞人文游\t评分：AAA' + '</div>' + '<br/>' + '<div class="point_content_discribe">' + '攻略简介：在栖霞山风景名胜区欣赏自然风光，放松心灵，之后来到仙林大学城，感受浓郁的大学氛围与青春气息。PS:没有什么事情是一顿火锅解决不了的！' + '</div>' + '<br/>' +
                   '<div class="point_content_discribe">' + '路线：栖霞山=金鹰湖滨天地-左庭右院鲜牛肉火锅-南京师范大学' + '</div>' + '<br/>' + '<div class="point_content_discribe">' + '祝您本次出行一切顺利开心，欢迎您在行程结束后给本次线路规划评分！';
                // 创建信息窗口对象 		
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }
    }

    var lab14 = new BMap.Label("栖霞山风景名胜区", { position: myp14 });        //创建4个label
    var lab15 = new BMap.Label("金鹰湖滨天地", { position: myp15 });
    var lab16 = new BMap.Label("左庭右院鲜牛肉火锅", { position: myp16 });
    var lab17 = new BMap.Label("南京师范大学仙林校区", { position: myp17 });
    map.addOverlay(lab14);
    map.addOverlay(lab15);
    map.addOverlay(lab16);
    map.addOverlay(lab17);

}

addroot4();

function addroot5() {
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
    //回调搜索的路线
    driving4.setPolylinesSetCallback(function (lines) {
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
                var content = '<div class="point_content_title">' + '青年休闲游\t评分：AAAAA' + '</div>' + '<br/>' + '<div class="point_content_discribe">' + '攻略简介：羊山公园作为原生态森林公园自然是开启元气满满的一天的首选，此外这里还有真人CS体验基地适合老中青三代在此度过美好时光，稍晚些可以来到东城汇，这里有火锅烧烤，有西餐快餐，KT与乱世佳人酒吧也可以让你的夜生活丰富多彩！' + '</div>' + '<br/>' +
                   '<div class="point_content_discribe">' + '路线：羊山公园-东城汇-唯爱主题KTV-乱世佳人酒吧' + '</div>' + '<br/>' + '<div class="point_content_discribe">' + '祝您本次出行一切顺利开心，欢迎您在行程结束后给本次线路规划评分！';
                // 创建信息窗口对象 		
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }
    }

    var lab18 = new BMap.Label("羊山公园", { position: myp18 });        //创建4个label
    var lab19 = new BMap.Label("东城汇", { position: myp19 });
    var lab20 = new BMap.Label("唯爱主题KTV", { position: myp20 });
    var lab21 = new BMap.Label("乱世佳人就把", { position: myp21 });
    map.addOverlay(lab18);
    map.addOverlay(lab19);
    map.addOverlay(lab20);
    map.addOverlay(lab21);

}

addroot5();

function addroot6() {
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
    driving5.search(myp22, myp26, { waypoints: [myp23, myp24, myp25] });//waypoints表示途经点
    //回调搜索的路线
    driving5.setPolylinesSetCallback(function (lines) {
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
                var content = '<div class="point_content_title">' + '懒癌患者游\t评分：AAA' + '</div>' + '<br/>' + '<div class="point_content_discribe">' + '攻略简介：不想一直走走走！那么这会是你最佳选择。在万达茂吃喝玩乐一应俱全，大玩家游戏城让你体验游戏的乐趣，汉拿山烧烤让你体验饱腹的快感，之后再和三五好友一起网上冲浪，看场电影，岂不快哉！' + '</div>' + '<br/>' +
                   '<div class="point_content_discribe">' + '路线：南京万达茂-大玩家-汉拿山-青春飞扬网咖-卢米埃影院' + '</div>' + '<br/>' + '<div class="point_content_discribe">' + '祝您本次出行一切顺利开心，欢迎您在行程结束后给本次线路规划评分！';
                // 创建信息窗口对象 		
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }
    }

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

}

addroot6();
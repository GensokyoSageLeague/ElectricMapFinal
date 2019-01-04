//========================================================搜索附近功能=======================================================
function G(id) {
	return document.getElementById(id);
}
//鼠标放在下拉列表上的事件
ac.addEventListener("onhighlight", function (e) {
	var str = "";
	var _value = e.fromitem.value;
	var value = "";
	if (e.fromitem.index > -1) {
		value = _value.province + _value.city + _value.district + _value.street + _value.business;
	}
	str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
	value = "";
	if (e.toitem.index > -1) {
		_value = e.toitem.value;
		value = _value.province + _value.city + _value.district + _value.street + _value.business;
	}
	str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
	G("searchResultPanel").innerHTML = str;
});
//鼠标点击下拉列表后的事件
var myValue;
ac.addEventListener("onconfirm", function (e) {
	var _value = e.item.value;
	myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
	G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
	searchevent();
});
//设置环形中心点图标
var icon = {
	url: "img/marker.png",
	width: 32,
	height: 44
};
//设置环形菜单图标
var menus = [{
	id: 1,
	icon: "img/1.png",
	title: "吃喝",
	target: "_blank",
	cb: callback1
},
{
	id: 2,
	icon: "img/2.png",
	title: "玩乐",
	cb: callback2
},
{
	id: 3,
	icon: "img/3.png",
	title: "景点",
	cb: callback3
},
{
	id: 4,
	icon: "img/4.png",
	title: "购物",
	cb: callback4
},
{
	id: 5,
	icon: "img/5.png",
	title: "攻略",
	cb: callback5
},
{
	id: 6,
	icon: "img/6.png",
	title: "安全中心",
	cb: callback
}];
// 环形菜单回调函数
function callback1(ele, data) {
    panduanfood();
    alert("结果已显示在地图中哟(＾Ｕ＾)ノ~ＹＯ");
}
function callback2(ele, data) {
    panduanplay();
    alert("结果已显示在地图中哟(＾Ｕ＾)ノ~ＹＯ");
}
function callback3(ele, data) {
    panduanscene();
    alert("结果已显示在地图中哟(＾Ｕ＾)ノ~ＹＯ");
}
function callback4(ele, data) {
    panduanshop();
    alert("结果已显示在地图中哟(＾Ｕ＾)ノ~ＹＯ");
}
var content_nakido_def;
var desp_nakido_def = ['',
'江畔一日游', '马群周边游', '仙林度假游', '栖霞人文游', '青年休闲游',
'懒癌患者游', '心灵净化游', '城乡养生游', '单身贵族游', '情侣虐狗游',
'好友欢脱游', '文艺赏景游'];
function callback5(ele, data) {
	var randomx = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		random = Math.ceil(Math.random() * 12);
		randomx[i] = random;
		map.clearOverlays();
		addRootsN(random);
	}
	var opts = {
		width: 320,
		height: 100,
	}
	content_nakido_def = '<table><tbody><tr class="ue-table-interlace-color-single firstRow"><td valign="top" style="word-break: break-all; border-width: 1px; border-style: solid; border-color: rgb(221, 221, 221);">线路一</td><td valign="top" style="word-break: break-all; border-width: 1px; border-style: solid; border-color: rgb(221, 221, 221);"> ' +
		'ttt' +
		'</td></tr><tr class="ue-table-interlace-color-double"><td valign="top" style="word-break: break-all; border-width: 1px; border-style: solid; border-color: rgb(221, 221, 221);">线路二</td><td valign="top" style="word-break: break-all; border-width: 1px; border-style: solid; border-color: rgb(221, 221, 221);">' +
		'ttt' +
		'</td></tr><tr class="ue-table-interlace-color-double"><td valign="top" style="word-break: break-all; border-width: 1px; border-style: solid; border-color: rgb(221, 221, 221);">线路三</td><td valign="top" style="word-break: break-all; border-width: 1px; border-style: solid; border-color: rgb(221, 221, 221);">' +
		'ttt';
	var infoWindow = new BMap.InfoWindow(content_nakido_def, opts);
	map.openInfoWindow(infoWindow, map.getCenter());
	alert('路线一：' + desp_nakido_def[randomx[0]] + '\r\n' +
		'路线二：' + desp_nakido_def[randomx[1]] + '\r\n' +
		'路线三：' + desp_nakido_def[randomx[2]]);
}
function callback(ele, data) {
	alert("id：" + data.id + ", lng：" + data.point.lng + ", lat：" + data.point.lat);
}

var mycircle;
//点击搜索按钮时调用的功能
function searchevent() {
	//以第一个搜索结果为中心点创建环形菜单
	function CreateMapPieMenu() {
		var pp = local.getResults().getPoi(0).point;
		new MapPieMenu({
			id: "container1",
			centerPoint: pp,
			points: [pp],
			menus: menus,
			type: "circle",
			radius: 90,
			width: 36,
			icon: icon,
			close: false,
			Maptype: ["地图", "卫星"],
			border: "2px dashed blue",
		});
		//添加圆形范围
	    mycircle = new BMap.Circle(pp, 2000,
        { fillColor: "blue", strokeWeight: 1, fillOpacity: 0.1, strokeOpacity: 0.3 });
        map.addOverlay(mycircle);
	}

	var local = new BMap.LocalSearch(map, {
		onSearchComplete: CreateMapPieMenu
	});
	local.search(myValue);
}
//判断在圆内的吃喝
function panduanfood() {
    //添加我们的point
    var foodpoint = [
        new BMap.Point(118.92319, 32.098621),
        new BMap.Point(118.897053, 32.138898),
        new BMap.Point(118.922949, 32.099666),
        new BMap.Point(118.933211, 32.106362),
        new BMap.Point(118.922561, 32.099716),
        new BMap.Point(118.92203, 32.100406),
        new BMap.Point(118.923793, 32.098557),
        new BMap.Point(118.929337, 32.106705),
        new BMap.Point(118.902542, 32.059818),
        new BMap.Point(118.81985, 32.109476),
        new BMap.Point(118.832943, 32.108481),
        new BMap.Point(118.992538, 32.127719),
        new BMap.Point(118.921267, 32.100146),
        new BMap.Point(118.902032, 32.056978),
        new BMap.Point(118.932428, 32.109136),
        new BMap.Point(118.894357, 32.133938),
        new BMap.Point(118.915556, 32.103929),
        new BMap.Point(118.900818, 32.057046),
        new BMap.Point(118.914316, 32.103286),
        new BMap.Point(118.922704, 32.100009),
        new BMap.Point(118.929546, 32.106421),
        new BMap.Point(118.991886, 32.126778),
        new BMap.Point(118.915536, 32.086418),
        new BMap.Point(118.929389, 32.106733),
        new BMap.Point(118.901004, 32.056328),
        new BMap.Point(118.922519, 32.100214),
        new BMap.Point(118.927994, 32.107687),
        new BMap.Point(118.902515, 32.059015),
        new BMap.Point(118.933079, 32.107585),
        new BMap.Point(118.815034, 32.109938),
        new BMap.Point(118.997847, 32.126983),
        new BMap.Point(118.992299, 32.127598),
        new BMap.Point(118.932714, 32.108706),
        new BMap.Point(118.931122, 32.126573),
        new BMap.Point(118.921038, 32.100589),
        new BMap.Point(118.994913, 32.126274),
        new BMap.Point(118.929514, 32.103246),
        new BMap.Point(118.915178, 32.098359),
        new BMap.Point(118.929225, 32.106543),
        new BMap.Point(118.992499, 32.127617),
        new BMap.Point(118.992862, 32.127733),
        new BMap.Point(118.86375, 32.116754),
        new BMap.Point(118.880228, 32.129286),
        new BMap.Point(118.932676, 32.108721),
        new BMap.Point(118.915242, 32.104205),
        new BMap.Point(118.993535, 32.126262),
        new BMap.Point(118.965238, 32.158332),
        new BMap.Point(118.818864, 32.181397),

    ];
    //判断点是否在圆内
    for (var i = 0, pointsLen = foodpoint.length; i < pointsLen; i++) {
        if (BMapLib.GeoUtils.isPointInCircle(foodpoint[i], mycircle)) {
          //替换点的图标
                if ((i >= 0 && i < 5) || i == 26 || i == 27 || i == 46) {
                    myIcon = new BMap.Icon("img/icon/面包甜点.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
                    addfood(point, i);
                }
                else if ((i >= 5 && i < 10) || i == 28 || i == 29 || i == 30 || i == 48) {
                    myIcon = new BMap.Icon("img/icon/火锅.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
                    addfood(point, i);
                }
                else if ((i >= 10 && i < 15) || i == 35 || i == 42 || i == 43) {
                    myIcon = new BMap.Icon("img/icon/烧烤.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
                    addfood(point, i);
                }
                else if (i >= 15 && i < 20) {
                    myIcon = new BMap.Icon("img/icon/快餐.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
                    addfood(point, i);
                }
                else if ((i >= 20 && i < 25) || i == 39 || i == 40 || i == 41 || i == 44 || i == 45) {
                    myIcon = new BMap.Icon("img/icon/地方菜.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
                    addfood(point, i);
                }
                else if (i == 31 || i == 25) {
                    myIcon = new BMap.Icon("img/icon/地方菜.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
                    addfood(point, i);
                }

                else if (i == 47) {
                    myIcon = new BMap.Icon("img/icon/素食.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
                    addfood(point, i);
                }

                else {
                    myIcon = new BMap.Icon("img/icon/外国菜.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
                    addfood(point, i);
                }
            }
        }
}
//判断在圆内的玩乐
function panduanplay() {
    var playpoint = [
        new BMap.Point(118.913797, 32.103625),
        new BMap.Point(118.929631, 32.105761),
        new BMap.Point(118.933773, 32.108941),
        new BMap.Point(118.90181, 32.056877),
        new BMap.Point(118.923621, 32.098598),
        new BMap.Point(118.921064, 32.102422),
        new BMap.Point(118.915785, 32.103545),
        new BMap.Point(118.901634, 32.05722),
        new BMap.Point(118.818982, 32.112931),
        new BMap.Point(118.87442, 32.111305),
        new BMap.Point(118.946532, 32.110063),
        new BMap.Point(118.923122, 32.098989),
        new BMap.Point(118.929919, 32.123146),
        new BMap.Point(118.90253, 32.058679),
        new BMap.Point(118.908254, 32.038408),
        new BMap.Point(118.917626, 32.102513),
        new BMap.Point(118.91678, 32.10251),
        new BMap.Point(118.826786, 32.120075),
        new BMap.Point(118.915325, 32.103252),
        new BMap.Point(118.919988, 32.10341),
        new BMap.Point(118.928525, 32.107726),
        new BMap.Point(118.917938, 32.103884),
        new BMap.Point(118.836935, 32.110653),
        new BMap.Point(118.923167, 32.097933),
        new BMap.Point(118.937043, 32.10938),
        new BMap.Point(118.992498, 32.127648),
    ];
    for (var i = 0, pointsLen = playpoint.length; i < pointsLen; i++) {
        if (BMapLib.GeoUtils.isPointInCircle(playpoint[i], mycircle)) {
          if (i >= 0 && i < 5) {
                    myIcon = new BMap.Icon("img/icon/电影院.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
                    addplay(point, i);
                }
                else if (i >= 5 && i < 10) {
                    myIcon = new BMap.Icon("img/icon/KTV.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
                    addplay(point, i);
                }
                else if (i == 10) {
                    myIcon = new BMap.Icon("img/icon/真人CS.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
                    addplay(point, i);
                }
                else if (i == 11 || i == 12) {
                    myIcon = new BMap.Icon("img/icon/推理类.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
                    addplay(point, i);
                }
                else if (i >= 13 && i < 18) {
                    myIcon = new BMap.Icon("img/icon/养生类.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
                    addplay(point, i);
                }
                else if (i >= 18 && i < 20) {
                    myIcon = new BMap.Icon("img/icon/酒吧.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
                    addplay(point, i);
                }
                else if (i >= 20 && i < 23) {
                    myIcon = new BMap.Icon("img/icon/网吧.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
                    addplay(point, i);
                }
                else if (i == 24) {
                    myIcon = new BMap.Icon("img/icon/茶吧.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
                    addplay(point, i);
                }
                else {
                    myIcon = new BMap.Icon("img/icon/游戏城.png", new BMap.Size(48, 48), {
                        anchor: new BMap.Size(10, 25),
                        imageOffset: new BMap.Size(0, 0)
                    });
                    var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
                    addplay(point, i);
                }
        }
    }
}
//判断在圆内的景点
function panduanscene() {
    var scenepoint = [
        new BMap.Point(118.955669, 32.15109),
        new BMap.Point(118.964317, 32.155155),
        new BMap.Point(118.960047, 32.151708),
        new BMap.Point(118.817139, 32.146839),
        new BMap.Point(118.822117, 32.207718),
        new BMap.Point(118.795552, 32.127325),
        new BMap.Point(118.813834, 32.144368),
        new BMap.Point(118.809886, 32.140989),
        new BMap.Point(118.943353, 32.112223),
        new BMap.Point(118.986526, 32.126561),
        new BMap.Point(118.846836, 32.153924),
        new BMap.Point(118.803277, 32.154106),
        new BMap.Point(118.965275, 32.15782),
    ];
    for (var i = 0, pointsLen = scenepoint.length; i < pointsLen; i++) {
        if (BMapLib.GeoUtils.isPointInCircle(scenepoint[i], mycircle)) { 
            myIcon = new BMap.Icon("img/icon/景区.png", new BMap.Size(48, 48), {
                anchor: new BMap.Size(10, 25),
                imageOffset: new BMap.Size(0, 0)
            });
        }
    }
}
//判断在圆内的购物类
function panduanshop() {
    var shoppoint = [
        new BMap.Point(118.929972, 32.106072),
        new BMap.Point(118.908978, 32.097554),
        new BMap.Point(118.820486, 32.117184),
        new BMap.Point(118.895116, 32.050862),
        new BMap.Point(118.928669, 32.108045),
        new BMap.Point(118.985903, 32.122109),
    ];
    for (var i = 0, pointsLen = shoppoint.length; i < pointsLen; i++) {
        if (BMapLib.GeoUtils.isPointInCircle(shoppoint[i], mycircle)) {
                myIcon = new BMap.Icon("img/icon/商场.png", new BMap.Size(48, 48), {
                    anchor: new BMap.Size(10, 25),
                    imageOffset: new BMap.Size(0, 0)
                });
        }
    }
}

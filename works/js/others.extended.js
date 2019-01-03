﻿//========================================================搜索附近功能=======================================================
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
	cb: callback
},
{
	id: 3,
	icon: "img/3.png",
	title: "景点",
	cb: callback
},
{
	id: 4,
	icon: "img/4.png",
	title: "购物",
	cb: callback
},
{
	id: 5,
	icon: "img/5.png",
	title: "钱包",
	cb: callback
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
function panduanfood() {
    //添加我们的point
    var foodpoint = [
        new BMap.Point(118.92319, 32.098621),
        new BMap.Point(118.897053, 32.138898),
        new BMap.Point(118.922949, 32.099666),
    ];
    //判断点是否在圆内
    for (var i = 0, pointsLen = foodpoint.length; i < pointsLen; i++) {
        if (BMapLib.GeoUtils.isPointInCircle(foodpoint[i], mycircle)) {
            var marker = new BMap.Marker(foodpoint[i]); //将点转化成标注点
            map.addOverlay(marker);  //将标注点添加到地图上
        }
    }
}
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
	title: "目标",
	href: "https://www.baidu.com",
	target: "_blank",
	cb: callback
},
{
	id: 2,
	icon: "img/2.png",
	title: "购物车",
	cb: callback
},
{
	id: 3,
	icon: "img/3.png",
	title: "主页",
	cb: callback
},
{
	id: 4,
	icon: "img/4.png",
	title: "VIP",
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
function callback(ele, data) {
	alert("id：" + data.id + ", lng：" + data.point.lng + ", lat：" + data.point.lat);
}
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
		var mycircle = new BMap.Circle(pp, 2000,
        { fillColor: "blue", strokeWeight: 1, fillOpacity: 0.1, strokeOpacity: 0.3 });
		map.addOverlay(mycircle);
		/**

          * 判断点是否在圆形内,这里还需要一个循环遍历所有类的点
          
          * j  计数

          * param {Point} ourpoint 点对象

          * param {Circle} circle 圆形对象

          * returns {Boolean} 点在圆形内返回true,否则返回false

        */
		BMapLib.GeoUtils.isPointInCircle = function (ourpoint, mycircle, j) {
			//point与圆心距离小于圆形半径，则点在圆内，否则在圆外
			var c = mycircle.getCenter();
			var r = 2000;//设置的圆的半径
			var dis = BMapLib.GeoUtils.getDistance(point, c);
			if (dis >= r)//添加圆内的覆盖物
			{
				addfood(ourpoint, j)
				return true;
			}
			else//或者删除圆外覆盖物
			{
				return false;
			}
		}
	}

	var local = new BMap.LocalSearch(map, {
		onSearchComplete: CreateMapPieMenu
	});
	local.search(myValue);
}

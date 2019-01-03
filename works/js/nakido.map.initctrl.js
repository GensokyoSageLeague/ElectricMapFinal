function addSwitch(title, offset) {
	// 定义一个控件类,即function
	function foodSwitch() {
		// 默认停靠位置和偏移量
		this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
		this.defaultOffset = new BMap.Size(10 + 120 * offset, 10);
	}

	// 通过JavaScript的prototype属性继承于BMap.Control
	foodSwitch.prototype = new BMap.Control();

	// 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
	// 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
	foodSwitch.prototype.initialize = function (map) {
		// 创建一个DOM元素
		var div = document.createElement("div");
		// 添加文字说明
		//div.appendChild(document.createTextNode(title));
		// 设置样式
		//div.style.cursor = "pointer";
		//div.style.border = "1px solid gray";
		//div.style.backgroundColor = "white";

		var button = document.createElement("button");
		button.innerHTML = title;
		// 自定义按钮
		// var button2 = document.createElement("span");
		// button2.className = "face";
		div.appendChild(button);

		// 绑定事件,点击一次放大两级
		div.onclick = () => {
			//map.clearOverlays();
			toggleOverlay(offset);
		}
		// 添加DOM元素到地图中
		map.getContainer().appendChild(div);
		// 将DOM元素返回
		return div;
	}

	// 创建控件
	// var myZoomCtrl = new foodSwitch();
	// 添加到地图当中
	map.addControl(new foodSwitch());
}

var overlayStates = [false, false, false, false, false];

function toggleOverlay(type) {
	overlayStates[4] = false;
	overlayStates[type] = !overlayStates[type];
	if (overlayStates[4]) {
		overlayStates = [false, false, false, false, true];
	}
	map.clearOverlays();
	if (overlayStates[0]) {
		addFood();
	}
	if (overlayStates[1]) {
		addPlay();
	}
	if (overlayStates[2]) {
		addShop();
	}
	if (overlayStates[3]) {
		addScene();
	}
	if (overlayStates[4]) {
		addRoots();
	}
}

//初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom();
map.centerAndZoom(new BMap.Point(118.92319, 32.098621), 17);
map.addControl(new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_LARGE }));

addSwitch("Food", 0);
addSwitch("Play", 1);
addSwitch("Shop", 2);
addSwitch("Scene", 3);
addSwitch("Guides", 4);

// ---提交表单按钮---
function shareSwitch() {
	this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
	this.defaultOffset = new BMap.Size(10, 50);
}
// 通过JavaScript的prototype属性继承于BMap.Control
shareSwitch.prototype = new BMap.Control();
shareSwitch.prototype.initialize = function (map) {
	var div = document.createElement("div");
	var button = document.createElement("button");
	button.innerHTML = "Share";
	button.setAttribute("data-toggle", "modal");
	button.setAttribute("data-target", "modal-share");
	div.appendChild(button);
	// 绑定事件
	div.onclick = () => {
		var opts = {
			width: 320,
			height: 200,
		}
		var content = '<p style="text-align: center;">    <span class="point_content_title" style="font-size: 20px;">分享线路</span></p><table class="table table-bordered" width="-440" align="center" style="font-size: 16px;">    <tbody>        <tr class="firstRow">            <td valign="top" style="word-break: break-all; border-color: rgb(221, 221, 221); border-width: 1px; border-style: solid;" width="65">                线路名            </td>            <td valign="top" style="word-break: break-all; border-color: rgb(221, 221, 221); border-width: 1px; border-style: solid;" width="240">                <input style="display: inline; text-align: left; width: 240; outline: none; border-width: 0;" title="文本框" value="" name="iNewField" />            </td>        </tr>        <tr>            <td valign="top" style="word-break: break-all; border-color: rgb(221, 221, 221); border-width: 1px; border-style: solid;" width="65">                类型            </td>            <td valign="top" style="word-break: break-all; border-color: rgb(221, 221, 221); border-width: 1px; border-style: solid;" width="41">                <span title="selectit" name="iNewField">				<input style="display: inline;" name="iNewField" value="吃" type="radio"/>吃&nbsp;				<input style="display: inline;" name="iNewField" value="喝" type="radio"/>喝&nbsp;				<input style="display: inline;" name="iNewField" value="玩" type="radio"/>玩&nbsp;				<input style="display: inline;" name="iNewField" value="乐" type="radio"/>乐&nbsp;				<input style="display: inline;" name="iNewField" value="购" type="radio"/>购&nbsp;</span>            </td>        </tr>    </tbody></table><p align="center">    <textarea title="多行文本" name="iNewField" value="" style="font-size: 12px; width: 315px; height: 56px; margin: 0px;">在这里写入详情</textarea></p><p align="center"><button>提交！</button></p>';
		// 创建信息窗口对象 		
		var infoWindow = new BMap.InfoWindow(content, opts);
		// 打开信息窗口   
		map.openInfoWindow(infoWindow, map.getCenter());
	}
	map.getContainer().appendChild(div);
	return div;
}
map.addControl(new shareSwitch());

// ---提交表单按钮测试---
var button = document.createElement("button");
button.innerHTML = "Share";
button.setAttribute("data-toggle", "modal");
button.setAttribute("data-target", "#modal-share");
document.getElementById("fooooot").appendChild(button);

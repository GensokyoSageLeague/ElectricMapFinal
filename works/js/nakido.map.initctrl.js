function addSwitch(title, offset) {
	// 定义一个控件类,即function
	function foodSwitch() {
		// 默认停靠位置和偏移量
		this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
		this.defaultOffset = new BMap.Size(10 + 120 * offset, 70);
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
map.addControl(new BMap.NavigationControl());

addSwitch("Food", 0);
addSwitch("Play", 1);
addSwitch("Shop", 2);
addSwitch("Scene", 3);
addSwitch("Guides", 4);

function addSwitch(title, offset, e) {
	// 定义一个控件类,即function
	function foodSwitch() {
		// 默认停靠位置和偏移量
		this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
		this.defaultOffset = new BMap.Size(10, 10 + 20 * offset);
	}

	// 通过JavaScript的prototype属性继承于BMap.Control
	foodSwitch.prototype = new BMap.Control();

	// 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
	// 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
	foodSwitch.prototype.initialize = function (map) {
		// 创建一个DOM元素
		var div = document.createElement("div");
		// 添加文字说明
		div.appendChild(document.createTextNode(title));
		// 设置样式
		div.style.cursor = "pointer";
		div.style.border = "1px solid gray";
		div.style.backgroundColor = "white";
		// 绑定事件,点击一次放大两级
		div.onclick = () => {
			map.clearOverlays();
			e();
		}
		// 添加DOM元素到地图中
		map.getContainer().appendChild(div);
		// 将DOM元素返回
		return div;
	}

	// 创建控件
	var myZoomCtrl = new foodSwitch();
	// 添加到地图当中
	map.addControl(myZoomCtrl);
}

addSwitch("Show me the food", 0, addFood);
addSwitch("Show me the playgrounds", 1, addPlay);
addSwitch("Show me the shops", 2, addShop);
addSwitch("Show me the scene", 3, addScene);
addSwitch("Show me the lines", 4, addRoots);

// //创建地图实例
var map = new BMap.Map("container1");
var ac = new BMap.Autocomplete(
{
	"input": "suggestId",
	"location": map
});

//初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom();
map.centerAndZoom(new BMap.Point(118.92319, 32.098621), 17);
map.addControl(new BMap.NavigationControl());

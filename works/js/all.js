// //创建地图实例
var map = new BMap.Map("container1");
var ac = new BMap.Autocomplete(
{
    "input": "suggestId"
    , "location": map
});
var centre = new BMap.Point(118.92319, 32.098621);
//初始化地图，设置中心点坐标和地图级别
map.centerAndZoom(centre, 17);
map.addControl(new BMap.NavigationControl());

//========================================================美食类标注点击事件及消息窗口=======================================================
var foodpoint_x = new Array("118.92319", "118.897053", "118.922949", "118.933211", "118.922561", "118.92203", "118.923793", "118.929337", "118.902542", "118.81985", "118.832943", "118.992538", "118.921267", "118.900882", "118.932428", "118.894357", "118.914238", "118.900818", "118.914316", "118.922704", "118.929546", "118.991886", "118.915536", "118.929389", "118.901004", "118.922704", "118.927994", "118.902515", "118.933079", "118.815034", "118.997847", "118.992299", "118.932714", "118.931122", "118.921038", "118.994913", "118.929514", "118.915178", "118.929225", "118.992499", "118.992862", "118.86375", "118.880228", "118.932676", "118.914341", "118.993535", "118.965238", "118.818864");
var foodpoint_y = new Array("32.098621", "32.138898", "32.099666", "32.106362", "32.099716", "32.100406", "32.098557", "32.106705", "32.059818", "32.109476", "32.108481", "32.127719", "32.100146", "32.056775", "32.109136", "32.133938", "32.103649", "32.057046", "32.103286", "32.100009", "32.106421", "32.126778", "32.086418", "32.106733", "32.056328", "32.100009", "32.107687", "32.059015", "32.107585", "32.109938", "32.126983", "32.127598", "32.108706", "32.126573", "32.100589", "32.126274", "32.103246", "32.098359", "32.106543", "32.127617", "32.127733", "32.116754", "32.129286", "32.108721", "32.103696", "32.126262", "32.158332", "32.181397");
var foodpoint_title = new Array("homie", "Patrick Wang私房甜品", "西尾抹茶", "爸爸糖手工吐司", "恒信牛奶甜品专家", "鲜入围煮·港式打边炉", "海底捞火锅", "左庭右院鲜牛肉火锅", "海子口鲜牛火锅", "小小河边鱼", "炉火江湖", "汉拿山", "雅比斯烤肉", "和风食堂", "新石器烤肉", "小辛家快餐店", "一禾轻食", "黄豆仙人·豆花轻食", "斯塔提抓饭", "马丁豆豆", "咸亨酒店", "蛙小侠", "北京烤鸭", "醉云喃", "晋家门", "大通冰室", "木头人创意手工蛋糕", "彤德莱火锅(马群店) ", "川西集市（仙林金鹰店）", "重庆捞翻天火锅", "多伦多海鲜自助餐厅", "翼日式料理", "水林间", "灵语溪烧烤店", "麻喜大", "诺丁牛排", "Moirai轻蔬味哥本餐厅", "Axis墨西哥餐厅", "桃花源记", "川味青年派", "宝胜家", "晓勇龙虾烧烤馆", "龍行天虾", "鸽味轩(仙林金鹰店)", "壹心潮汕粥", "星巴克", "千佛斋素菜馆", "柠檬鱼");
var foodpoint_discribe1 = new Array("高颜值网红甜品店", "每一款都仿佛艺术品般精美", "抹茶主题甜品店", "香甜可口的纯手工吐司", "小而温馨的广式甜品店", "食材超新鲜的粤式火锅", "服务态度超好的人气火锅店", "鲜牛肉火锅领鲜品牌", "牛肉主题火锅店", "爱吃鱼的你不容错过", "价格实惠的东北烧烤", "超赞的韩国风情烧烤", "肉食者不能错过的烤肉店", "日式和风烧烤店", "超经典的韩式烤肉店", "深藏功与名的韩国小餐馆", "低卡健康饮食看这里", "小小豆花不一样的花样", "有着浓浓新疆特色的小餐馆", "热门小吃让人欲罢不能", "绍兴菜百年老店", "热辣如火的川菜", "正宗的北京烤鸭", "极具风情的云南菜", "感受西北大草原的粗犷魅力", "假装在香港", "手工蛋糕，网红之选", "分量超足，满足大胃王", "逛集市吃火锅，开在集市里的火锅", "重庆捞翻天，让你嗨翻天", "享受自由海鲜趴", "食在仙林，享如东京", "自助式锅物料理", "韩式烤肉，经济实惠", "超好吃，实名推荐", "价位合适，体验舒适", "轻食系列，健康之选", "我们的初衷是有心，有情，有温暖", "特色湘菜，挑战你的味蕾", "一菜一格，传承用心", "淮扬风味", "喝酒撸串吃龙虾", "吃喝玩乐，尽在龍行天虾", "吃鸽爽，吃鸽快乐", "养生之选", "全球最大的咖啡连锁店", "口味超赞的素斋馆", "吃鱼就到柠檬鱼");
var foodpoint_discribe2 = new Array("13：00—19：00", "全天", "10：30—21：30", "10：00—21：30", "10：30—22：30", "11：00—24：00", "9：00—次日7：00", "11：00—22：00", "全天", "10：00—次日2：00", "16：00—次日2：00", "11：00—22:00", "11：00—14：00，16：00—22：00", "11：30—20：30", "11：00—22：00", "11：00—14：00，16：00—20：00", "10：00—21：00", "10：00—22：00", "11：00—19：30", "10：00—21：30", "11：00—14：00 17：00—22：00", "11：00—14：00 16：30—21：00", "9：00—21：00", "11：00—22：00", "11：00—14：00 16：30—21：00", "10:00 — 21:00", "9:30 — 21:00", "10:30 — 22:30", "11:00 — 15:00 17:00 — 次日02:00", "10:00 — 次日03:00", "11:00 — 21:30", "10:00 — 14:00 16:00 — 21:30", "11:00 — 22:00", "10:30 — 14:00 16:30 — 21:30", "11:30 — 14:00 17:00 — 24:00", "10:00 — 22:00", "周二-周日 09:00 — 20:30", "11:00 — 22:00", "11:00 — 14:30 16:30 — 21:00", "10:00 — 14:00 17:00 — 22:00", "10:30 — 22:00", "11:00 — 次日2:00", "16：00 — 次日2:00", "11:00 — 14:00 17:00 — 21:00", "10:00 — 22:00", "08:00-22:00", "10：30-14：00，17：00-22：00", "10：00-23：00");
var foodpoint_discribe3 = new Array("仙林大道梦天地商厦北塔楼1419-1420室", "翠林北路金地明悦", "仙林大学城学衡路亚东商业街", "仙林学津路1号仙林金鹰湖滨天地二期B1F-43", "仙林街道学衡路5号1-43室", "学衡路中段苏果超市向北100米泸溪河楼上", "仙林街道学衡路1号九霄梦天地商厦4层5号", "学津路1号金鹰湖滨天地B区四层D-09", "马群新街101号(电信局侧对面)", "华电路长营村38幢", "北苑东路28号", "仙林大道181号南京仙林万达茂3F3026商铺", "文范路苏果超市后面(康桥圣菲对面)", "中山门大街招商花园城1楼", "仙林大学城学海路1号金鹰奥莱城D馆G层", "尧化街道前新塘丽池花园03幢16室", "仙林街道仙林大学城文苑路以南文苑广场之1-107商铺", "马群地铁站1号口中山门大街招商花园城一层122铺", "仙林大学城文苑路8号东城汇1层(东城汇广场)", "学衡路5号(水平方美食广场S-19-4)", "学海路1号金鹰湖滨天地B座四层D-14号", "仙林大道万达茂三楼", "仙鹤门地铁站紫东创意园商业街G3幢", "学则路金鹰B座4楼D-27", "中山门大街699号花园城购物中心3层", "学衡路5号水平方美食广场一楼", "杉湖西路9号香樟园31栋16室南京银行旁第一家", "马群新街89号 ", "南京市栖霞区仙林学海路1号金鹰奥莱城F2", "迈皋桥广场和燕路275号二楼", "江苏省南京市栖霞区仙林大道181号万达茂C座三楼", "江苏省南京市栖霞区守敬路南京万达茂3层", "江苏省南京市栖霞区学海路1号金鹰湖滨天地2F-D05号", "江苏省南京市栖霞区仙林街道学海路28号南邮广场美食街1幢103", "江苏省南京市栖霞区文范路9号康桥圣菲2栋103室", "仙林大道万达茂广场1号门3楼", "学津路8号高科中心负一楼011号", "江苏省南京市栖霞区仙隐北路12号亚东商业广场底商", "仙林大学城学津路1号金鹰湖滨天地B区3楼", "江苏省南京市栖霞区仙林大道181号万达茂3053A", "江苏省南京市栖霞区广志路南京万达茂三楼3020B3021A", "南京市栖霞区华银路20号9栋105室", "栖霞区金尧路11-2号", "江苏省南京市栖霞区学海路1号6-102号附近", "南京市栖霞区文苑路8号东城汇B1", "南京万达茂一楼", "栖霞街88号(近栖霞大道)栖霞山风景名胜区内", "江苏省南京市栖霞区八卦洲街道丽岛新城9幢1080室");
var foodpoint_foodname1 = new Array("布朗尼", "三拼卷", "抹茶冰淇淋", "巧克力吐司", "双皮奶", "日式蟹柳", "招牌虾滑", "吊龙", "牛肉炒饭", "兴化鲜鱼丸", "东北特色涮肚锅", "烤五花肉", "泡菜饼", "日式照烧脆皮豆腐", "招牌调味五花肉", "糖醋肉", "东南亚辣酱三文鱼波奇饭", "椰香鲜果豆花", "新疆老酸奶", "剔骨乌鸡爪", "咸亨臭豆腐", "烤牛蛙", "北京烤鸭", "云南现烤鲜花饼", "烤包子", "丝袜奶茶", "提拉米苏", "羔羊肉", "毛肚", "招牌毛肚", "三文鱼", "三文鱼刺身", "天妇罗炸虾", "冷面", "嫩豆腐汤", "招牌牛排", "盐烤秋葵三文鱼沙拉", "啤酒玛格丽特", "小米椒爱上小公鸡", "双味鱼头", "口水鸡", "羊蝎子火锅", "十三香龙虾", "金牌乳鸽", "水晶虾饺", "外观", "烤麸", "土豆粉");
var foodpoint_foodname2 = new Array("红丝绒", "咸奶油裸蛋糕", "抹茶千层", "招牌吐司", "姜汁撞奶", "热气牛肉", "捞派滑牛肉", "蟹籽鲜虾滑", "牛酥", "茴香小油条", "牛肥瘦", "烤全牛", "烤五花肉", "日式照烧鸡排饭", "秘制梅肉", "锅包肉", "冷拌一禾面", "荔浦香芋豆花", "碎肉手抓饭", "爆蛋鸡柳", "干菜焖肉", "青椒紫苏味牛蛙", "椒盐鸭架", "建水汽锅鸡", "烤羊排", "茶走", "豆乳盒子", "虾滑", "红糖糍粑", "雪花肥牛", "大虾", "蟹棒", "果彩缤纷卷", "石锅拌饭", "海鲜葱饼", "美式沙朗牛排", "盐焦鸡肉沙拉", "至尊奶酪玉米片", "海鲜大咖", "宫保鸡丁", "糖醋里脊", "蒜泥龙虾", "咸蛋黄龙虾", "鸽子汤", "皮蛋瘦肉粥", "星冰乐", "素面", "柠檬鱼");
var foodpoint_foodname3 = new Array("荔浦芋头", "芒果西米流心慕斯", "抹茶提拉米苏", "皇冠芝士吐司", "椰丝牛奶砖", "爱跳舞的大鲍鱼", "无刺巴沙鱼", "鲜牛杂鸳鸯锅", "鲜切肥牛", "野生黄辣丁", "碳烤鸡子蚝", "烤黑牛雪花肉", "烤猪排", "日式豚骨拉面", "芝士牛肉石锅拌饭", "鸡蛋卷", "虾仁荞麦面", "陈皮红豆豆花", "羊排", "黄金豆豆", "绍兴全家福", "麻辣味牛蛙", "绿茶佛饼", "版纳香茅草烤鱼", "羊肉串", "鸡蛋仔", "雪媚娘", "鸭肠", "虾滑", "麻辣牛肉", "牛排", "鲍鱼", "综合刺身拼盘", "芝士年糕", "烤五花肉", "黑椒牛排", "蔬菜沙拉", "香烤青柠虾", "石锅番茄牛腩", "鱼香肉丝", "蓝莓山药", "麻辣龙虾", "红烧龙虾", "鹿儿岛虾球", "豉汁凤爪", "甜点", "素鸡", "酸菜鱼");

function addfood(point, i) {
    var mk = new BMap.Marker(point, { icon: myIcon });
    map.addOverlay(mk);
    //添加图标点击事件
    mk.addEventListener("click", function () {
        var opts = {
            width: 200,     // 信息窗口宽度    
            height: 550,     // 信息窗口高度    
        }
        //添加信息窗口内容
        var number = 401 + i;
        var foodpoint_link1 = "img/4-美食类/" + number + "-" + foodpoint_foodname1[i] + ".jpg";
        var foodpoint_link2 = "img/4-美食类/" + number + "-" + foodpoint_foodname2[i] + ".jpg";
        var foodpoint_link3 = "img/4-美食类/" + number + "-" + foodpoint_foodname3[i] + ".jpg";
        var content = '<div class="point_content_title">' + foodpoint_title[i] + '</div>' + '<br/>' +
                '<div class="point_content_discribe">' + '简介: ' + foodpoint_discribe1[i] + '</div>' +
                '<div class="point_content_discribe">' + '营业时间: ' + foodpoint_discribe2[i] + '</div>' +
                '<div class="point_content_discribe">' + '地址: ' + foodpoint_discribe3[i] + '</div>' +
                '<div class="point_content_picture"><img src = ' + foodpoint_link1 + ' class="food_picture" width="150px" height="100"><div>' +
                '<div class="point_content_name">' + foodpoint_foodname1[i] + '</div>' +
                '<div class="point_content_picture"><img src = ' + foodpoint_link2 + ' class="food_picture" width="150px" height="100"><div>' +
                '<div class="point_content_name">' + foodpoint_foodname2[i] + '</div>' +
                '<div class="point_content_picture"><img src = ' + foodpoint_link3 + ' class="food_picture" width="150px" height="100"><div>' +
                '<div class="point_content_name">' + foodpoint_foodname3[i] + '</div>';
        // 创建信息窗口对象 		
        var infoWindow = new BMap.InfoWindow(content, opts);
        // 打开信息窗口   
        map.openInfoWindow(infoWindow, map.getCenter());
    })
}

for (var i = 0; i < foodpoint_x.length; i++) {
    if ((i >= 0 && i < 5) || i == 26 || i == 27 || i == 46) {
        var myIcon = new BMap.Icon("img/icon/面包甜点.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
        addfood(point, i);
    }
    else if ((i >= 5 && i < 10) || i == 28 || i == 29 || i == 30 || i == 48) {
        var myIcon = new BMap.Icon("img/icon/火锅.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
        addfood(point, i);
    }
    else if ((i >= 10 && i < 15) || i == 35 || i == 42 || i == 43) {
        var myIcon = new BMap.Icon("img/icon/烧烤.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
        addfood(point, i);
    }
    else if (i >= 15 && i < 20) {
        var myIcon = new BMap.Icon("img/icon/快餐.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
        addfood(point, i);
    }
    else if ((i >= 20 && i < 25) || i == 39 || i == 40 || i == 41 || i == 44 || i == 45) {
        var myIcon = new BMap.Icon("img/icon/地方菜.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
        addfood(point, i);
    }
    else if (i == 31 || i == 25) {
        var myIcon = new BMap.Icon("img/icon/地方菜.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
        addfood(point, i);
    }

    else if (i == 47) {
        var myIcon = new BMap.Icon("img/icon/素食.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
        addfood(point, i);
    }

    else {
        var myIcon = new BMap.Icon("img/icon/外国菜.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(foodpoint_x[i], foodpoint_y[i]);
        addfood(point, i);
    }
};

//========================================================休闲娱乐类标注点击事件及消息窗口=======================================================
var playpoint_x = new Array("118.913797", "118.929631", "118.933773", "118.90181", "118.923621", "118.921064", "118.915785", "118.901634", "118.818982", "118.87442", "118.946532", "118.923547", "118.929919", "118.90253", "118.908254", "118.917626", "118.91732", "118.826786", "118.91559", "118.919988", "118.928525", "118.917938", "118.836935", "118.923594", "118.937043", "118.992498");
var playpoint_y = new Array("32.103625", "32.105761", "32.108941", "32.056877", "32.098598", "32.102422", "32.103545", "32.05722", "32.112931", "32.111305", "32.110063", "32.0989", "32.123146", "32.058679", "32.038408", "32.102513", "32.102513", "32.120075", "32.103414", "32.10341", "32.107726", "32.103884", "32.110653", "32.098193", "32.10938", "32.127648");
var playpoint_title = new Array("中影UL城市影院", "卢米埃影院 ", "中影国际影城", "幸福蓝海国际影城", "仙林上影联合影城", "千千歌", "唯爱主题KTV", "台北乐趴KTV", "优力锋KTV", "悦飞扬量贩式KTV", "羊山公园真人CS基地", "九霄推理俱乐部", "KeyClub密匙联盟", "水沐足韵", "沐槿宫韩式汗蒸水汇", "臻善纳米汗蒸理疗馆", "星辰纳米汗蒸馆", "玖古养生", "SCARLET乱世佳人酒吧", "404bistro音乐餐酒吧", "青春飞扬网咖", "云健网咖", "青春飞扬网咖", "DFY桌游吧", "颐和茶吧", "大玩家");
var playpoint_discribe1 = new Array("将国际流行趋势与快乐、时尚的主题元素融合在一起，坚持便捷、实惠和舒适的观影理念。", "力求带来智能化观影体验。配置了顶级的放映设施和声效设备。", "内设九个专业放映厅，为栖霞区的电影展映等以电影为主的文化活动提供全方位的服务。", "以最先进的放映设备配合国际化的服务理念，使广大观众尽享超一流的娱乐视听体验。", "电影院中的“头等舱”", "以先进的音响视听设备、星级的服务、崭新的娱乐理念、为宾客提供尊贵独享的舒适空间", "有不同主体的房间，环境良好，集吃饭、唱歌、休息于一体。", "复古风装修，曲库齐全。", "价格便宜，服务态度好，曲库全，支持扫码在手机上点歌。", "拥有专业级、智能化、人性化的数码视听唱效果，海量歌库实时更新！", "适合团队建设，亲身体验CS的乐趣与团队合作的重要性。", "店家十分亲和，游戏代入感极强，游戏体验极好。", "机关应有尽有，但装修有些简陋，气氛到位。", "南京连锁店，技师按摩到位，价格公道。", "环境漂亮，有3间汗蒸房，点餐方便。", "采用安然纳米空调被及制作，源于自然、绿色环保、对人体没有任何毒副作用。", "可以让您享受到与众不同、前所未有的健康沐浴体验", "技师专业，服务不错", "南京乃至整个江苏娱乐界的先驱。有着丰富经验的积累和对夜生活的独到见解。", "周围环境有些杂乱，但店里干净，仿佛世外桃源", "犒劳自己的佳处。在青春飞扬网咖，一切让你快乐的事都是如此简单。", "经过一次次改造升级，环境提升，人气很高。", "犒劳自己的佳处。在青春飞扬网咖，一切让你快乐的事都是如此简单。", "游戏种类繁多，堪称桌游玩家的聚集地。", "环境不错，茶吧位置优越，消费合理，停车免费，适合洽谈业务。", "整体感觉优，年轻时尚，适合情侣，装饰酷炫。");
var playpoint_discribe2 = new Array("9:00-22:00", "9:00-24:00", "9:00-23:00", "10:00-21:00", "9:30-23:30", "12:00-2:00", "全天", "12:00-5:00", "12:00-2:00", "12:00-2:00", "9:00-17:00", "13:00-23:00", "10:00-22:00", "11:00-00:00", "8:00-2:00", "春秋冬10:00-22:00   夏季：12:00-22:00", "11:30-22:30", "12:00-2:00", "18:00-4:00", "17:00-2:00", "全天", "全天", "全天", "12:00-23:30", "9:00-22:00", "10:00-21:30");
var playpoint_discribe3 = new Array("仙林大学城文苑路8号", "仙林学津路1号金鹰湖滨天地店B区4层", "仙林大学城学海路1号金鹰奥莱城C馆2层", "马群街道中山门大街699号招商花园城3楼", "仙林街道学衡路1号九霄梦天地四层", "仙林大学城学衡路11号", "仙林文苑路8号东城汇后敬文街仙林医院对面", "马群新街1号招商花园城3楼", "和燕路346号沃尔玛五楼", "尧化门太龙路三元祠99-5号D九街区", "仙林齐贤镇环镇西路", "九霄梦天地A座1806", "仙林街道文枢东路7号晴天美食广场3楼", "马群新街79号紫金尚园对面", "花港路与祈福中路口牡丹园1幢", "文枢东路仙林新村北区18栋3单元106", "仙境路29号学仕风华6栋1单元102室", "和燕路396号名都汇6号楼1楼", "文苑路8号东城汇内", "文枢东路晴天美食广场3楼", "文苑路108号大成名店3楼", "仙林新村17栋1楼门面房", "营苑北路8号祥和佳园10栋", "学衡路九霄梦天地B楼1311", "学典路六号新地酒店大堂", "西岗街道广志路万达茂综合楼三楼");
var playpoint_link = new Array("img/3-休闲娱乐类/301-中影UL城市影院（南京店）.jpg", "img/3-休闲娱乐类/302-卢米埃影院（金鹰湖滨天地B区）.jpg", "img/3-休闲娱乐类/303-中影国际影城（仙林金鹰店）.jpg", "img/3-休闲娱乐类/304-幸福蓝海国际影城（花园城店）.jpg", "img/3-休闲娱乐类/305-仙林上影联合影城.jpg", "img/3-休闲娱乐类/306-千千歌.jpg", "img/3-休闲娱乐类/307-唯爱主题KTV.jpg", "img/3-休闲娱乐类/308-台北乐趴KTV（马群店）.jpg", "img/3-休闲娱乐类/309-优力锋KTV（迈皋桥店）.jpg", "img/3-休闲娱乐类/310-悦飞扬量贩式KTV.jpg", "img/3-休闲娱乐类/311-羊山公园真人CS基地.jpg", "img/3-休闲娱乐类/312-九霄推理俱乐部.jpg", "img/3-休闲娱乐类/313-Key Club密匙联盟（仙林店）.jpg", "img/3-休闲娱乐类/314-水沐足韵（马群店）.jpg", "img/3-休闲娱乐类/315-沐槿宫韩式汗蒸水汇.jpg", "img/3-休闲娱乐类/316-臻善纳米汗蒸理疗馆（仙林新村店）.jpg", "img/3-休闲娱乐类/317-星辰纳米汗蒸馆.jpg", "img/3-休闲娱乐类/318-玖古养生（和燕路店）.jpg", "img/3-休闲娱乐类/319-SCARLET乱世佳人酒吧.jpg", "img/3-休闲娱乐类/320-404bistro音乐餐酒吧.jpg", "img/3-休闲娱乐类/321-青春飞扬网咖（文苑路大成名百年店）.jpg", "img/3-休闲娱乐类/322-云健网咖.jpg", "img/3-休闲娱乐类/323-青春飞扬网咖（祥和家园店）.jpg", "img/3-休闲娱乐类/324-DFY桌游吧.jpg", "img/3-休闲娱乐类/325-颐和茶吧.jpg", "img/3-休闲娱乐类/326-大玩家（仙林万达茂店）.jpg");

function addplay(point, i) {
    var mk = new BMap.Marker(point, { icon: myIcon });
    map.addOverlay(mk);
    //添加图标点击事件
    mk.addEventListener("click", function () {
        var opts = {
            width: 250,     // 信息窗口宽度    
            height: 500,     // 信息窗口高度    
        }
        //添加信息窗口内容
        var content = '<div class="point_content_title">' + playpoint_title[i] + '</div>' + '<br/>' +
                '<div class="point_content_discribe">' + '简介: ' + playpoint_discribe1[i] + '</div>' +
                '<div class="point_content_discribe">' + '营业时间: ' + playpoint_discribe2[i] + '</div>' +
                '<div class="point_content_discribe">' + '地址: ' + playpoint_discribe3[i] + '</div>' +
                '<div class="point_content_picture"><img src = ' + playpoint_link[i] + ' class="play_picture" width="225px" height="150"><div>';
        // 创建信息窗口对象 		
        var infoWindow = new BMap.InfoWindow(content, opts);
        // 打开信息窗口   
        map.openInfoWindow(infoWindow, map.getCenter());
    })
}

for (var i = 0; i < playpoint_x.length; i++) {
    if (i >= 0 && i < 5) {
        var myIcon = new BMap.Icon("img/icon/电影院.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
        addplay(point, i);
    }
    else if (i >= 5 && i < 10) {
        var myIcon = new BMap.Icon("img/icon/KTV.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
        addplay(point, i);
    }
    else if (i == 10) {
        var myIcon = new BMap.Icon("img/icon/真人CS.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
        addplay(point, i);
    }
    else if (i == 11 || i == 12) {
        var myIcon = new BMap.Icon("img/icon/推理类.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
        addplay(point, i);
    }
    else if (i >= 13 && i < 18) {
        var myIcon = new BMap.Icon("img/icon/养生类.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
        addplay(point, i);
    }
    else if (i >= 18 && i < 20) {
        var myIcon = new BMap.Icon("img/icon/酒吧.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
        addplay(point, i);
    }
    else if (i >= 20 && i < 23) {
        var myIcon = new BMap.Icon("img/icon/网吧.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
        addplay(point, i);
    }
    else if (i == 24) {
        var myIcon = new BMap.Icon("img/icon/茶吧.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
        addplay(point, i);
    }
    else {
        var myIcon = new BMap.Icon("img/icon/游戏城.png", new BMap.Size(48, 48), {
            anchor: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0)
        });
        var point = new BMap.Point(playpoint_x[i], playpoint_y[i]);
        addplay(point, i);
    }
};

//========================================================购物类标注点击事件及消息窗口=======================================================
var shoppoint_x = new Array("118.923225", "118.908978", "118.820486", "118.895116", "118.922238", "118.985903");
var shoppoint_y = new Array("32.100099", "32.097554", "32.117184", "32.050862", "32.101662", "32.122109");
var shoppoint_title = new Array("金鹰湖滨天地", "东城汇", "宇业·晓庄国际彩虹广场", "花园城", "大成名店公园", "南京万达茂");
var shoppoint_discribe1 = new Array("F1：美食，F2：美食，F3：运动，F4：服装，F5：服装", "B1：美食，F1：丽人，F2：娱乐，F3：亲子，F4：美食，F5：影院", "B1：美食，F1：丽人，F2：运动，F3：娱乐，F4：美食", "B1：美食，F1：数码，F2：丽人，F3：美食", "B1：美食，F1：数码，F2：美食，F3：服装，F4：运动", "F1：丽人，F2：运动，F3：美食");
var shoppoint_discribe2 = new Array("周一到周日：10:00-21:30", "周一到周日：10:00-21:00", "周日到周四：10:00—21:00 周五到周六：10:00—21:30", "周一到周四：10:30-22:00  周五到周日：10:00-22:30", "周一到周日：10:00-22:00", "周一到周日：10:00-22:30");
var shoppoint_discribe3 = new Array("学津路与杉湖西路交叉口", "文苑路8号", "和燕路408号", "中山门大街699号", "文苑路108号", "仙林大道与守敬路交汇处");
var shoppoint_link = new Array("img/1-购物类/101-金鹰湖滨天地（1）.jpg", "img/1-购物类/102-东城汇（2）.jpg", "img/1-购物类/103-宇业·晓庄国际彩虹广场（2）.jpg", "img/1-购物类/104-花园城（1）.jpg", "img/1-购物类/105-大成名店公园（1）.jpg", "img/1-购物类/106-南京万达茂（1）.jpg");

function addshop(point, i) {
    var mk = new BMap.Marker(point, { icon: myIcon });
    map.addOverlay(mk);
    //添加图标点击事件
    mk.addEventListener("click", function () {
        var opts = {
            width: 250,     // 信息窗口宽度    
            height: 500,     // 信息窗口高度    
        }
        //添加信息窗口内容
        var content = '<div class="point_content_title">' + shoppoint_title[i] + '</div>' + '<br/>' +
                '<div class="point_content_discribe">' + '简介: ' + shoppoint_discribe1[i] + '</div>' +
                '<div class="point_content_discribe">' + '营业时间: ' + shoppoint_discribe2[i] + '</div>' +
                '<div class="point_content_discribe">' + '地址: ' + shoppoint_discribe3[i] + '</div>' +
                '<div class="point_content_picture"><img src = ' + shoppoint_link[i] + ' class="play_picture" width="225px" height="150"><div>';
        // 创建信息窗口对象 		
        var infoWindow = new BMap.InfoWindow(content, opts);
        // 打开信息窗口   
        map.openInfoWindow(infoWindow, map.getCenter());
    })
}

for (var i = 0; i < shoppoint_x.length; i++) {
    var myIcon = new BMap.Icon("img/icon/商场.png", new BMap.Size(48, 48), {
        anchor: new BMap.Size(10, 25),
        imageOffset: new BMap.Size(0, 0)
    });
    var point = new BMap.Point(shoppoint_x[i], shoppoint_y[i]);
    addshop(point, i);

};

//========================================================景点类标注点击事件及消息窗口=======================================================
var scenepoint_x = new Array("118.955669", "118.964317", "118.960047", "118.817139", "118.822117", "118.795552", "118.813834", "118.809886", "118.943353", "118.986526", "118.846836", "118.803277", "118.965275");
var scenepoint_y = new Array("32.15109", "32.155155", "32.151708", "32.146839", "32.207718", "32.127325", "32.144368", "32.140989", "32.112223", "32.126561", "32.153924", "32.154106", "32.15782");
var scenepoint_title = new Array("栖霞山风景名胜区", "天开岩", "千佛岩", "燕子矶公园", "陌上花渡", "长江观音景区", "观音阁", "头台洞", "羊山公园", "仙林湖公园", "二桥公园", "八卦洲湿地公园", "栖霞古寺");
var scenepoint_discribe1 = new Array("国家4A级景点，中国四大赏枫胜地之一。", "沿千佛岩北侧公路而上，离桃花涧上行百余步便到话山亭和天开岩", "位于南京栖霞山栖霞寺东北侧山崖上", "长江三大名矶之首，有着“万里长江第一矶”的称号。", "位于八卦洲街道的休闲农业综合体。", "中国长江沿线第一个以观音文化为主题的景区。", "观音阁临江耸立，势若俯坠。", "位于幕府山北面，距观音阁西约500米。", "以羊山和人工湖为主体建设，是仙林副城内最重要的原生态森林公园。", "以仙林湖为中心的湖景公园", "南京长江第二大桥由南、北汊大桥组成，有当今中华第一斜拉桥美誉", "保持着自然田园特色，环境幽静、水系纵横，是南京都市圈中难得的“世外桃源”。", "清净之地");
var scenepoint_discribe2 = new Array("8:30-16:30", "8:30-16:30", "8:30-16:30", "6:00-20:00", "9:00-17:00", "8:30-17:00", "8:30-17:00", "8:30-17:00", "00:00-24:00", "00:00-24:00", "00:00-24:00", "00:00-24:00", "7：00-17：00");
var scenepoint_discribe3 = new Array("40元起", "包含在栖霞山景区门票内", "包含在栖霞山景区门票内", "免费", "40元起", "30元起", "免费", "免费", "免费", "免费", "免费", "免费", "包含在栖霞山景区门票内");
var scenepoint_discribe4 = new Array("栖霞街88号(近栖霞大道)", "栖霞街88号(近栖霞大道)", "栖霞街88号(近栖霞大道)", "临江街3号", "八卦洲街道中心路", "永济大道9号", "永济大道9号", "永济大道9号", "环园路与九乡河西路交汇处", "仙林湖路西", "太新路101号", "东至柳林山庄,北至大同机站套闸,南西侧面临长江,内侧至主江堤", "栖霞街88号栖霞山风景名胜区内");
var scenepoint_link = new Array("img/2-景区类/201-栖霞山风景名胜区.jpg", "img/2-景区类/202-天开岩.jpg", "img/2-景区类/203-千佛岩.jpg", "img/2-景区类/204-燕子矶公园.jpg", "img/2-景区类/205-陌上花渡.jpg", "img/2-景区类/206-长江观音景区.jpg", "img/2-景区类/207-观音阁.jpg", "img/2-景区类/208-头台洞.jpg", "img/2-景区类/209-羊山公园.jpg", "img/2-景区类/210-仙林湖公园.jpg", "img/2-景区类/211-二桥公园.jpg", "img/2-景区类/212-八卦洲湿地公园.jpg", "img/2-景区类/213-栖霞寺.jpg");

function addscene(point, i) {
    var mk = new BMap.Marker(point, { icon: myIcon });
    map.addOverlay(mk);
    //添加图标点击事件
    mk.addEventListener("click", function () {
        var opts = {
            width: 250,     // 信息窗口宽度    
            height: 500,     // 信息窗口高度    
        }
        //添加信息窗口内容
        var content = '<div class="point_content_title">' + scenepoint_title[i] + '</div>' + '<br/>' +
                '<div class="point_content_discribe">' + '简介: ' + scenepoint_discribe1[i] + '</div>' +
                '<div class="point_content_discribe">' + '营业时间: ' + scenepoint_discribe2[i] + '</div>' +
                '<div class="point_content_discribe">' + '门票: ' + scenepoint_discribe3[i] + '</div>' +
                '<div class="point_content_discribe">' + '地址: ' + scenepoint_discribe4[i] + '</div>' +
                '<div class="point_content_picture"><img src = ' + scenepoint_link[i] + ' class="play_picture" width="225px" height="150"><div>';
        // 创建信息窗口对象 		
        var infoWindow = new BMap.InfoWindow(content, opts);
        // 打开信息窗口   
        map.openInfoWindow(infoWindow, map.getCenter());
    })
}

for (var i = 0; i < scenepoint_x.length; i++) {
    var myIcon = new BMap.Icon("img/icon/景区.png", new BMap.Size(48, 48), {
        anchor: new BMap.Size(10, 25),
        imageOffset: new BMap.Size(0, 0)
    });
    var point = new BMap.Point(scenepoint_x[i], scenepoint_y[i]);
    addscene(point, i);

};
//========================================================一站式线路类类标注点击事件及消息窗口=======================================================
function labsetStyle(lab) {
    lab.setStyle({
        color: "blue", //字体颜色
        fontSize: "16px",//字体大小 　　
        backgroundColor: "0.05", //文本标注背景颜色　
        border: "0",
        fontWeight: "bold" //字体加粗});
    });
}
function addroot1() {
    //创建驾车实例
    var driving = new BMap.DrivingRoute(map, {
        renderOptions: {
            map: map,
            autoViewport: true
        },
        onMarkersSet: function (routes) {
            map.removeOverlay(routes[0].marker); //删除起点
            map.removeOverlay(routes[routes.length - 1].marker);
            for (var m = 1; m < routes.length - 1; m++) {
                var mm = routes[m].Nm;
                map.removeOverlay(mm)
            }
        }//删除经点、终点

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
                    width: 250,     // 信息窗口宽度    
                    height: 600,     // 信息窗口高度    
                }
                //添加信息窗口内容
                var content = '<div class="point_content_title">' + '江畔一日游' + '</div>' + '<br/>' + '<div class="point_content_title">' + '评分：【4.7】' + '</div>' + '<br/>' + '<div class="point_content_name">' + '攻略简介：' + '<div class="point_content_discribe">' + '紧邻长江，将长江边上的燕子矶风光和长江观音风光一览无余之后，在城北的迈皋桥吃上一顿热火朝天的火锅，\n再到不远处的彩虹广场逛逛，美好的一天就这样结束了!' + '</div>' + '<br/>' +
                '<div class="point_content_name">' + '路线：' + '<div class="point_content_discribe">' + '燕子矶公园-长江观音景区-重庆捞翻天火锅-晓庄国际彩虹广场' + '</div>' + '<br/>' + '<div class="point_content_name">' + '给我评分：' + '<br/>' + '<div id="wrapper">' +
            '<input type="radio" id="star1" name="star" />' +
            '<label for="star1"></label>' +
            '<input type="radio" id="star2" name="star" />' +
            '<label for="star2"></label>' +
            '<input type="radio" id="star3" name="star" checked="checked"/>' +
            '<label for="star3"></label>' +
            '<input type="radio" id="star4" name="star" />' +
            '<label for="star4"></label>' +
            '<input type="radio" id="star5" name="star" />' +
            '<label for="star5"></label>' +
            '</div>' + '<br/>' + '<div class="point_content_picture"><img src ="img/信息窗口动图/1101.gif"><div>'
                // 创建信息窗口对象 		
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }



        var myIcon = new BMap.Icon("img/icon/一站式路线图标/110/1101.png", new BMap.Size(100, 100));
        var marker = new BMap.Marker(myp1, { icon: myIcon });
        map.addOverlay(marker);

        var myIcon2 = new BMap.Icon("img/icon/一站式路线图标/110/1102.png", new BMap.Size(100, 100));
        var marker2 = new BMap.Marker(myp2, { icon: myIcon2 });
        map.addOverlay(marker2);

        var myIcon3 = new BMap.Icon("img/icon/一站式路线图标/110/1103.png", new BMap.Size(100, 100));
        var marker3 = new BMap.Marker(myp3, { icon: myIcon3 });
        map.addOverlay(marker3);

        var myIcon4 = new BMap.Icon("img/icon/一站式路线图标/110/1104.png", new BMap.Size(100, 100));
        var marker4 = new BMap.Marker(myp4, { icon: myIcon4 });
        map.addOverlay(marker4);

    }

    var lab1 = new BMap.Label("燕子矶公园", { position: myp1 });        //创建4个label
    var lab2 = new BMap.Label("长江观音景区", { position: myp2 });
    var lab3 = new BMap.Label("重庆捞翻天火锅", { position: myp3 });
    var lab4 = new BMap.Label("晓庄国际彩虹广场", { position: myp4 });
    labsetStyle(lab1);
    labsetStyle(lab2);
    labsetStyle(lab3);
    labsetStyle(lab4);
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
        },
        onMarkersSet: function (routes) {
            map.removeOverlay(routes[0].marker); //删除起点
            map.removeOverlay(routes[routes.length - 1].marker);
            for (var m = 1; m < routes.length - 1; m++) {
                var mm = routes[m].Nm;
                map.removeOverlay(mm)
            }
        }//删除经点、终点
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
                var content = '<div class="point_content_title">' + '马群周边游' + '</div>' + '<br/>' + '<div class="point_content_title">' + '评分：【4.5】' + '</div>' + '<br/>' + '<div class="point_content_name">' + '攻略简介：' + '<div class="point_content_discribe">' + '这条线路适合生活在马群附近的朋友们，在钟山风景名胜区走走，\n晌午，到花园城吃一餐晋家门。走了一天肯定累了，再去按按脚吧。休息片刻，还有一场精彩绝伦的电影等着你和你的爱人！' + '</div>' + '<br/>' +
                '<div class="point_content_name">' + '路线：' + '<div class="point_content_discribe">' + '花园城-幸福蓝海国际影城-水沐足韵-晋家门' + '</div>' + '<br/>' + '<div class="point_content_name">' + '给我评分：' + '<br/>' + '<div id="wrapper">' +
            '<input type="radio" id="star1" name="star" />' +
            '<label for="star1"></label>' +
            '<input type="radio" id="star2" name="star" />' +
            '<label for="star2"></label>' +
            '<input type="radio" id="star3" name="star" checked="checked"/>' +
            '<label for="star3"></label>' +
            '<input type="radio" id="star4" name="star" />' +
            '<label for="star4"></label>' +
            '<input type="radio" id="star5" name="star" />' +
            '<label for="star5"></label>' +
            '</div>' + '<div class="point_content_picture"><img src ="img/信息窗口动图/120.gif"><div>';
                // 创建信息窗口对象 		
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }

        var myIcon5 = new BMap.Icon("img/icon/一站式路线图标/120/1201.png", new BMap.Size(100, 100));
        var marker5 = new BMap.Marker(myp5, { icon: myIcon5 });
        map.addOverlay(marker5);

        var myIcon6 = new BMap.Icon("img/icon/一站式路线图标/120/1202.png", new BMap.Size(100, 100));
        var marker6 = new BMap.Marker(myp6, { icon: myIcon6 });
        map.addOverlay(marker6);

        var myIcon7 = new BMap.Icon("img/icon/一站式路线图标/120/1203.png", new BMap.Size(100, 100));
        var marker7 = new BMap.Marker(myp7, { icon: myIcon7 });
        map.addOverlay(marker7);

        var myIcon8 = new BMap.Icon("img/icon/一站式路线图标/120/1204.png", new BMap.Size(100, 100));
        var marker8 = new BMap.Marker(myp8, { icon: myIcon8 });
        map.addOverlay(marker8);

    }

    var lab5 = new BMap.Label("花园城", { position: myp5 });        //创建4个label
    var lab6 = new BMap.Label("幸福蓝海国际影城", { position: myp6 });
    var lab7 = new BMap.Label("水沐足韵", { position: myp7 });
    var lab8 = new BMap.Label("晋家门", { position: myp8 });
    labsetStyle(lab5);
    labsetStyle(lab6);
    labsetStyle(lab7);
    labsetStyle(lab8);
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
        },
        onMarkersSet: function (routes) {
            map.removeOverlay(routes[0].marker); //删除起点
            map.removeOverlay(routes[routes.length - 1].marker);
            for (var m = 1; m < routes.length - 1; m++) {
                var mm = routes[m].Nm;
                map.removeOverlay(mm)
            }
        }//删除经点、终点
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
                var content = '<div class="point_content_title">' + '仙林度假游' + '</div>' + '<br/>' + '<div class="point_content_title">' + '评分：【4.9】' + '</div>' + '<br/>' + '<div class="point_content_name">' + '攻略简介：' + '<div class="point_content_discribe">' + '美丽的仙林，值得我们不停探索。免费的仙林湖公园是天然氧吧，和伴侣、孩子、父母来都是极好的。不远处就是新开的万达茂了，我猜时尚年轻你一定喜欢英国的牛排，或者是韩国的烤肉！吃完这一餐，再来杯星巴克润润嗓子，别忘了，三楼还有一家大玩家等着你释放年轻的激情!' + '</div>' + '<br/>' +
                '<div class="point_content_name">' + '路线：' + '<div class="point_content_discribe">' + '仙林湖公园-诺丁牛排-汉拿山-星巴克-大玩家' + '</div>' + '<br/>' + '<div class="point_content_name">' + '给我评分：' + '<br/>' + '<div id="wrapper">' +
            '<input type="radio" id="star1" name="star" />' +
            '<label for="star1"></label>' +
            '<input type="radio" id="star2" name="star" />' +
            '<label for="star2"></label>' +
            '<input type="radio" id="star3" name="star" checked="checked"/>' +
            '<label for="star3"></label>' +
            '<input type="radio" id="star4" name="star" />' +
            '<label for="star4"></label>' +
            '<input type="radio" id="star5" name="star" />' +
            '<label for="star5"></label>' +
            '</div>' + '<br/>' + '<div class="point_content_picture"><img src ="img/信息窗口动图/130.gif"><div>'
                // 创建信息窗口对象 		
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }

        var myIcon9 = new BMap.Icon("img/icon/一站式路线图标/130/1301.png", new BMap.Size(100, 100));
        var marker9 = new BMap.Marker(myp9, { icon: myIcon9 });
        map.addOverlay(marker9);

        var myIcon10 = new BMap.Icon("img/icon/一站式路线图标/130/1302.png", new BMap.Size(100, 100));
        var marker10 = new BMap.Marker(myp10, { icon: myIcon10 });
        map.addOverlay(marker10);

        var myIcon11 = new BMap.Icon("img/icon/一站式路线图标/130/1303.png", new BMap.Size(100, 100));
        var marker11 = new BMap.Marker(myp11, { icon: myIcon11 });
        map.addOverlay(marker11);

        var myIcon12 = new BMap.Icon("img/icon/一站式路线图标/130/1304.png", new BMap.Size(100, 100));
        var marker12 = new BMap.Marker(myp12, { icon: myIcon12 });
        map.addOverlay(marker12);

        var myIcon13 = new BMap.Icon("img/icon/一站式路线图标/130/1305.png", new BMap.Size(100, 100));
        var marker13 = new BMap.Marker(myp13, { icon: myIcon13 });
        map.addOverlay(marker13);
    }

    var lab9 = new BMap.Label("仙林湖公园", { position: myp9 });        //创建4个label
    var lab10 = new BMap.Label("诺丁牛排", { position: myp10 });
    var lab11 = new BMap.Label("汉拿山", { position: myp11 });
    var lab12 = new BMap.Label("星巴克", { position: myp12 });
    var lab13 = new BMap.Label("大玩家", { position: myp13 });
    labsetStyle(lab9);
    labsetStyle(lab10);
    labsetStyle(lab11);
    labsetStyle(lab12);
    labsetStyle(lab13)
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
        },
        onMarkersSet: function (routes) {
            map.removeOverlay(routes[0].marker); //删除起点
            map.removeOverlay(routes[routes.length - 1].marker);
            for (var m = 1; m < routes.length - 1; m++) {
                var mm = routes[m].Nm;
                map.removeOverlay(mm)
            }
        }//删除经点、终点
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
                var content = '<div class="point_content_title">' + '栖霞人文游' + '</div>' + '<br/>' + '<div class="point_content_title">' + '评分：【4.2】' + '</div>' + '<br/>' + '<div class="point_content_name">' + '攻略简介：' + '<div class="point_content_discribe">' + '在栖霞山风景名胜区欣赏自然风光，放松心灵，之后来到仙林大学城，感受浓郁的大学氛围与青春气息。PS:没有什么事情是一顿火锅解决不了的！' + '</div>' + '<br/>' +
                '<div class="point_content_name">' + '路线：' + '<div class="point_content_discribe">' + '栖霞山-金鹰湖滨天地-左庭右院鲜牛肉火锅-南京师范大学' + '</div>' + '<br/>' + '<div class="point_content_name">' + '给我评分：' + '<br/>' + '<div id="wrapper">' +
            '<input type="radio" id="star1" name="star" />' +
            '<label for="star1"></label>' +
            '<input type="radio" id="star2" name="star" />' +
            '<label for="star2"></label>' +
            '<input type="radio" id="star3" name="star" checked="checked"/>' +
            '<label for="star3"></label>' +
            '<input type="radio" id="star4" name="star" />' +
            '<label for="star4"></label>' +
            '<input type="radio" id="star5" name="star" />' +
            '<label for="star5"></label>' +
            '</div>' + '<br/>' + '<div class="point_content_picture"><img src ="img/信息窗口动图/210.gif"><div>'
                // 创建信息窗口对象 				
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }

        var myIcon14 = new BMap.Icon("img/icon/一站式路线图标/210/2101.png", new BMap.Size(100, 100));
        var marker14 = new BMap.Marker(myp14, { icon: myIcon14 });
        map.addOverlay(marker14);

        var myIcon15 = new BMap.Icon("img/icon/一站式路线图标/210/2102.png", new BMap.Size(100, 100));
        var marker15 = new BMap.Marker(myp15, { icon: myIcon15 });
        map.addOverlay(marker15);

        var myIcon16 = new BMap.Icon("img/icon/一站式路线图标/210/2103.png", new BMap.Size(100, 100));
        var marker16 = new BMap.Marker(myp16, { icon: myIcon16 });
        map.addOverlay(marker16);

        var myIcon17 = new BMap.Icon("img/icon/一站式路线图标/210/2104.png", new BMap.Size(100, 100));
        var marker17 = new BMap.Marker(myp17, { icon: myIcon17 });
        map.addOverlay(marker17);


    }

    var lab14 = new BMap.Label("栖霞山风景名胜区", { position: myp14 });        //创建4个label
    var lab15 = new BMap.Label("金鹰湖滨天地", { position: myp15 });
    var lab16 = new BMap.Label("左庭右院鲜牛肉火锅", { position: myp16 });
    var lab17 = new BMap.Label("南京师范大学仙林校区", { position: myp17 });
    labsetStyle(lab14);
    labsetStyle(lab15);
    labsetStyle(lab16);
    labsetStyle(lab17);
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
        },
        onMarkersSet: function (routes) {
            map.removeOverlay(routes[0].marker); //删除起点
            map.removeOverlay(routes[routes.length - 1].marker);
            for (var m = 1; m < routes.length - 1; m++) {
                var mm = routes[m].Nm;
                map.removeOverlay(mm)
            }
        }//删除经点、终点
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
                var content = '<div class="point_content_title">' + '青年休闲游' + '</div>' + '<br/>' + '<div class="point_content_title">' + '评分：【4.8】' + '</div>' + '<br/>' + '<div class="point_content_name">' + '攻略简介：' + '<div class="point_content_discribe">' + '羊山公园作为原生态森林公园自然是开启元气满满的一天的首选，此外这里还有真人CS体验基地适合老中青三代在此度过美好时光，稍晚些可以来到东城汇，这里有火锅烧烤，有西餐快餐，KT与乱世佳人酒吧也可以让你的夜生活丰富多彩！' + '</div>' + '<br/>' +
                '<div class="point_content_name">' + '路线：' + '<div class="point_content_discribe">' + '羊山公园-东城汇-唯爱主题KTV-乱世佳人酒吧' + '</div>' + '<br/>' + '<div class="point_content_name">' + '给我评分：' + '<br/>' + '<div id="wrapper">' +
            '<input type="radio" id="star1" name="star" />' +
            '<label for="star1"></label>' +
            '<input type="radio" id="star2" name="star" />' +
            '<label for="star2"></label>' +
            '<input type="radio" id="star3" name="star" checked="checked"/>' +
            '<label for="star3"></label>' +
            '<input type="radio" id="star4" name="star" />' +
            '<label for="star4"></label>' +
            '<input type="radio" id="star5" name="star" />' +
            '<label for="star5"></label>' +
            '</div>' + '<br/>' + '<div class="point_content_picture"><img src ="img/信息窗口动图/220.gif"><div>'
                // 创建信息窗口对象 
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }

        var myIcon18 = new BMap.Icon("img/icon/一站式路线图标/220/2201.png", new BMap.Size(100, 100));
        var marker18 = new BMap.Marker(myp18, { icon: myIcon18 });
        map.addOverlay(marker18);

        var myIcon19 = new BMap.Icon("img/icon/一站式路线图标/220/2202.png", new BMap.Size(100, 100));
        var marker19 = new BMap.Marker(myp19, { icon: myIcon19 });
        map.addOverlay(marker19);

        var myIcon20 = new BMap.Icon("img/icon/一站式路线图标/220/2203.png", new BMap.Size(100, 100));
        var marker20 = new BMap.Marker(myp20, { icon: myIcon20 });
        map.addOverlay(marker20);

        var myIcon21 = new BMap.Icon("img/icon/一站式路线图标/220/2204.png", new BMap.Size(100, 100));
        var marker21 = new BMap.Marker(myp21, { icon: myIcon21 });
        map.addOverlay(marker21);

    }

    var lab18 = new BMap.Label("羊山公园", { position: myp18 });        //创建4个label
    var lab19 = new BMap.Label("东城汇", { position: myp19 });
    var lab20 = new BMap.Label("唯爱主题KTV", { position: myp20 });
    var lab21 = new BMap.Label("乱世佳人就把", { position: myp21 });
    labsetStyle(lab18);
    labsetStyle(lab19);
    labsetStyle(lab20);
    labsetStyle(lab21);
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
        },
        onMarkersSet: function (routes) {
            map.removeOverlay(routes[0].marker); //删除起点
            map.removeOverlay(routes[routes.length - 1].marker);
            for (var m = 1; m < routes.length - 1; m++) {
                var mm = routes[m].Nm;
                map.removeOverlay(mm)
            }
        }//删除经点、终点
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
                var content = '<div class="point_content_title">' + '懒癌患者游' + '</div>' + '<br/>' + '<div class="point_content_title">' + '评分：【4.1】' + '</div>' + '<br/>' + '<div class="point_content_name">' + '攻略简介：' + '<div class="point_content_discribe">' + '不想一直走走走！那么这会是你最佳选择。在万达茂吃喝玩乐一应俱全，大玩家游戏城让你体验游戏的乐趣，汉拿山烧烤让你体验饱腹的快感，之后再和三五好友一起网上冲浪，看场电影，岂不快哉！' + '</div>' + '<br/>' +
                '<div class="point_content_name">' + '路线：' + '<div class="point_content_discribe">' + '南京万达茂-大玩家-汉拿山-青春飞扬网咖-卢米埃影院' + '</div>' + '<br/>' + '<div class="point_content_name">' + '给我评分：' + '<br/>' + '<div id="wrapper">' +
            '<input type="radio" id="star1" name="star" />' +
            '<label for="star1"></label>' +
            '<input type="radio" id="star2" name="star" />' +
            '<label for="star2"></label>' +
            '<input type="radio" id="star3" name="star" checked="checked"/>' +
            '<label for="star3"></label>' +
            '<input type="radio" id="star4" name="star" />' +
            '<label for="star4"></label>' +
            '<input type="radio" id="star5" name="star" />' +
            '<label for="star5"></label>' +
            '</div>' + '<br/>' + '<div class="point_content_picture"><img src ="img/信息窗口动图/230.gif"><div>'
                // 创建信息窗口对象 		
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }

        var myIcon22 = new BMap.Icon("img/icon/一站式路线图标/230/2301.png", new BMap.Size(100, 100));
        var marker22 = new BMap.Marker(myp22, { icon: myIcon22 });
        map.addOverlay(marker22);

        var myIcon23 = new BMap.Icon("img/icon/一站式路线图标/230/2302.png", new BMap.Size(100, 100));
        var marker23 = new BMap.Marker(myp23, { icon: myIcon23 });
        map.addOverlay(marker23);

        var myIcon24 = new BMap.Icon("img/icon/一站式路线图标/230/2303.png", new BMap.Size(100, 100));
        var marker24 = new BMap.Marker(myp24, { icon: myIcon24 });
        map.addOverlay(marker24);

        var myIcon25 = new BMap.Icon("img/icon/一站式路线图标/230/2304.png", new BMap.Size(100, 100));
        var marker25 = new BMap.Marker(myp25, { icon: myIcon25 });
        map.addOverlay(marker25);

        var myIcon26 = new BMap.Icon("img/icon/一站式路线图标/230/2305.png", new BMap.Size(100, 100));
        var marker26 = new BMap.Marker(myp26, { icon: myIcon26 });
        map.addOverlay(marker26);
    }

    var lab22 = new BMap.Label("南京万达茂", { position: myp22 });        //创建4个label
    var lab23 = new BMap.Label("大玩家", { position: myp23 });
    var lab24 = new BMap.Label("汉拿山", { position: myp24 });
    var lab25 = new BMap.Label("青春飞扬网咖", { position: myp25 });
    var lab26 = new BMap.Label("卢米埃影院", { position: myp26 });
    labsetStyle(lab22);
    labsetStyle(lab23);
    labsetStyle(lab24);
    labsetStyle(lab25);
    labsetStyle(lab26);
    map.addOverlay(lab22);
    map.addOverlay(lab23);
    map.addOverlay(lab24);
    map.addOverlay(lab25);
    map.addOverlay(lab26);

}

addroot6();

function addroot7() {
    //创建驾车实例
    var driving6 = new BMap.DrivingRoute(map, {
        renderOptions: {
            map: map,
            autoViewport: true
        },
        onMarkersSet: function (routes) {
            map.removeOverlay(routes[0].marker); //删除起点
            map.removeOverlay(routes[routes.length - 1].marker);
            for (var m = 1; m < routes.length - 1; m++) {
                var mm = routes[m].Nm;
                map.removeOverlay(mm)
            }
        }//删除经点、终点
    });

    //创建点对象
    var myp27 = new BMap.Point(118.955669, 32.151090);
    var myp28 = new BMap.Point(118.965238, 32.158332);
    var myp29 = new BMap.Point(118.965275, 32.157820);
    var myp30 = new BMap.Point(118.992538, 32.127719);
    var myp31 = new BMap.Point(118.985903, 32.122109);


    //创建驾车搜索
    driving6.search(myp27, myp31, { waypoints: [myp28, myp29, myp30] });//waypoints表示途经点
    //回调搜索的路线
    driving6.setPolylinesSetCallback(function (lines) {
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
                var content = '<div class="point_content_title">' + '心灵净化游' + '</div>' + '<br/>' + '<div class="point_content_title">' + '评分：【4.6】' + '</div>' + '<br/>' + '<div class="point_content_name">' + '攻略简介：' + '<div class="point_content_discribe">' + '在栖霞山看完美不胜收的红叶不如体验一下正宗素斋，下午再游玩栖霞古寺来一场净化心灵之旅。购物和吃肉的狂欢就偷偷留给夜晚~' + '</div>' + '<br/>' +
                '<div class="point_content_name">' + '路线：' + '<div class="point_content_discribe">' + '栖霞山-千佛寨素菜馆-栖霞古寺-汉拿山-南京万达茂' + '</div>' + '<br/>' + '<div class="point_content_name">' + '给我评分：' + '<br/>' + '<div id="wrapper">' +
            '<input type="radio" id="star1" name="star" />' +
            '<label for="star1"></label>' +
            '<input type="radio" id="star2" name="star" />' +
            '<label for="star2"></label>' +
            '<input type="radio" id="star3" name="star" checked="checked"/>' +
            '<label for="star3"></label>' +
            '<input type="radio" id="star4" name="star" />' +
            '<label for="star4"></label>' +
            '<input type="radio" id="star5" name="star" />' +
            '<label for="star5"></label>' +
            '</div>' + '<br/>' + '<div class="point_content_picture"><img src ="img/信息窗口动图/310.gif"><div>'
                // 创建信息窗口对象 		
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }

        var myIcon27 = new BMap.Icon("img/icon/一站式路线图标/310/3101.png", new BMap.Size(100, 100));
        var marker27 = new BMap.Marker(myp27, { icon: myIcon27 });
        map.addOverlay(marker27);

        var myIcon28 = new BMap.Icon("img/icon/一站式路线图标/310/3102.png", new BMap.Size(100, 100));
        var marker28 = new BMap.Marker(myp28, { icon: myIcon28 });
        map.addOverlay(marker28);

        var myIcon29 = new BMap.Icon("img/icon/一站式路线图标/310/3103.png", new BMap.Size(100, 100));
        var marker29 = new BMap.Marker(myp29, { icon: myIcon29 });
        map.addOverlay(marker29);

        var myIcon30 = new BMap.Icon("img/icon/一站式路线图标/310/3104.png", new BMap.Size(100, 100));
        var marker30 = new BMap.Marker(myp30, { icon: myIcon30 });
        map.addOverlay(marker30);

        var myIcon31 = new BMap.Icon("img/icon/一站式路线图标/310/3105.png", new BMap.Size(100, 100));
        var marker31 = new BMap.Marker(myp31, { icon: myIcon31 });
        map.addOverlay(marker31);

    }

    var lab27 = new BMap.Label("栖霞山风景名胜区", { position: myp27 });        //创建4个label
    var lab28 = new BMap.Label("千佛斋素菜馆", { position: myp28 });
    var lab29 = new BMap.Label("栖霞古寺", { position: myp29 });
    var lab30 = new BMap.Label("汉拿山", { position: myp30 });
    var lab31 = new BMap.Label("南京万达茂", { position: myp31 });
    labsetStyle(lab27);
    labsetStyle(lab28);
    labsetStyle(lab29);
    labsetStyle(lab30);
    labsetStyle(lab31);
    map.addOverlay(lab27);
    map.addOverlay(lab28);
    map.addOverlay(lab29);
    map.addOverlay(lab30);
    map.addOverlay(lab31);

}

addroot7();

function addroot8() {
    //创建驾车实例
    var driving7 = new BMap.DrivingRoute(map, {
        renderOptions: {
            map: map,
            autoViewport: true
        },
        onMarkersSet: function (routes) {
            map.removeOverlay(routes[0].marker); //删除起点
            map.removeOverlay(routes[routes.length - 1].marker);
            for (var m = 1; m < routes.length - 1; m++) {
                var mm = routes[m].Nm;
                map.removeOverlay(mm)
            }
        }//删除经点、终点
    });

    //创建点对象
    var myp32 = new BMap.Point(118.955669, 32.151090);
    var myp33 = new BMap.Point(118.965238, 32.158332);
    var myp34 = new BMap.Point(118.965275, 32.157820);
    var myp35 = new BMap.Point(118.992538, 32.127719);

    //创建驾车搜索
    driving7.search(myp32, myp35, { waypoints: [myp33, myp34] });//waypoints表示途经点

    //回调搜索的路线
    driving7.setPolylinesSetCallback(function (lines) {
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
                var content = '<div class="point_content_title">' + '城乡养生游' + '</div>' + '<br/>' + '<div class="point_content_title">' + '评分：【4.4】' + '</div>' + '<br/>' + '<div class="point_content_name">' + '攻略简介：' + '<div class="point_content_discribe">' + '美好的早晨就在湿地公园享受一下清新自然的味道吧。接下来回到闹市，火锅K歌大保健一条龙，让我们红尘作伴活得潇潇洒洒。' + '</div>' + '<br/>' +
                '<div class="point_content_name">' + '路线：' + '<div class="point_content_discribe">' + '八卦洲湿地公园-重庆捞翻天火锅-优力锋KTV-玖古养生' + '</div>' + '<br/>' + '<div class="point_content_name">' + '给我评分：' + '<br/>' + '<div id="wrapper">' +
            '<input type="radio" id="star1" name="star" />' +
            '<label for="star1"></label>' +
            '<input type="radio" id="star2" name="star" />' +
            '<label for="star2"></label>' +
            '<input type="radio" id="star3" name="star" checked="checked"/>' +
            '<label for="star3"></label>' +
            '<input type="radio" id="star4" name="star" />' +
            '<label for="star4"></label>' +
            '<input type="radio" id="star5" name="star" />' +
            '<label for="star5"></label>' +
            '</div>' + '<br/>' + '<div class="point_content_picture"><img src ="img/信息窗口动图/320.gif"><div>'
                // 创建信息窗口对象 		 		
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }

        var myIcon32 = new BMap.Icon("img/icon/一站式路线图标/320/3201.png", new BMap.Size(100, 100));
        var marker32 = new BMap.Marker(myp32, { icon: myIcon32 });
        map.addOverlay(marker32);

        var myIcon33 = new BMap.Icon("img/icon/一站式路线图标/320/3202.png", new BMap.Size(100, 100));
        var marker33 = new BMap.Marker(myp33, { icon: myIcon33 });
        map.addOverlay(marker33);

        var myIcon34 = new BMap.Icon("img/icon/一站式路线图标/320/3203.png", new BMap.Size(100, 100));
        var marker34 = new BMap.Marker(myp34, { icon: myIcon34 });
        map.addOverlay(marker34);

        var myIcon35 = new BMap.Icon("img/icon/一站式路线图标/320/3204.png", new BMap.Size(100, 100));
        var marker35 = new BMap.Marker(myp35, { icon: myIcon35 });
        map.addOverlay(marker35);

    }

    var lab32 = new BMap.Label("八卦洲湿地公园", { position: myp32 });        //创建4个label
    var lab33 = new BMap.Label("重庆老翻天火锅", { position: myp33 });
    var lab34 = new BMap.Label("优力锋KTV", { position: myp34 });
    var lab35 = new BMap.Label("玖古养生", { position: myp35 });
    labsetStyle(lab32);
    labsetStyle(lab33);
    labsetStyle(lab34);
    labsetStyle(lab35);
    map.addOverlay(lab32);
    map.addOverlay(lab33);
    map.addOverlay(lab34);
    map.addOverlay(lab35);

}

addroot8();

function addroot9() {
    //创建驾车实例
    var driving8 = new BMap.DrivingRoute(map, {
        renderOptions: {
            map: map,
            autoViewport: true
        },
        onMarkersSet: function (routes) {
            map.removeOverlay(routes[0].marker); //删除起点
            map.removeOverlay(routes[routes.length - 1].marker);
            for (var m = 1; m < routes.length - 1; m++) {
                var mm = routes[m].Nm;
                map.removeOverlay(mm)
            }
        }//删除经点、终点
    });

    //创建点对象
    var myp36 = new BMap.Point(118.929631, 32.105761);
    var myp37 = new BMap.Point(118.923225, 32.100099);
    var myp38 = new BMap.Point(118.933079, 32.107585);
    var myp39 = new BMap.Point(118.923547, 32.098900);
    var myp40 = new BMap.Point(118.915590, 32.103414);

    //创建驾车搜索
    driving8.search(myp36, myp40, { waypoints: [myp37, myp38, myp39] });//waypoints表示途经
    //回调搜索的路线
    driving8.setPolylinesSetCallback(function (lines) {
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
                var content = '<div class="point_content_title">' + '单身贵族游' + '</div>' + '<br/>' + '<div class="point_content_title">' + '评分：【5.0】' + '</div>' + '<br/>' + '<div class="point_content_name">' + '攻略简介：' + '<div class="point_content_discribe">' + '一个人的一天也要精彩又尽兴。看完电影买买买，再吃顿火锅好好犒劳自己。下午变身神探加入推理俱乐部，夜晚以一群人的狂欢收尾。' + '</div>' + '<br/>' +
                '<div class="point_content_name">' + '路线：' + '<div class="point_content_discribe">' + '卢米埃影院-金鹰湖滨天地-川西集市-九霄推理俱乐部-乱世佳人酒吧' + '</div>' + '<br/>' + '<div class="point_content_name">' + '给我评分：' + '<br/>' + '<div id="wrapper">' +
            '<input type="radio" id="star1" name="star" />' +
            '<label for="star1"></label>' +
            '<input type="radio" id="star2" name="star" />' +
            '<label for="star2"></label>' +
            '<input type="radio" id="star3" name="star" checked="checked"/>' +
            '<label for="star3"></label>' +
            '<input type="radio" id="star4" name="star" />' +
            '<label for="star4"></label>' +
            '<input type="radio" id="star5" name="star" />' +
            '<label for="star5"></label>' +
            '</div>' + '<br/>' + '<div class="point_content_picture"><img src ="img/信息窗口动图/330.gif"><div>'
                // 创建信息窗口对象 		
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }


        var myIcon36 = new BMap.Icon("img/icon/一站式路线图标/330/3301.png", new BMap.Size(100, 100));
        var marker36 = new BMap.Marker(myp36, { icon: myIcon36 });
        map.addOverlay(marker36);

        var myIcon37 = new BMap.Icon("img/icon/一站式路线图标/330/3302.png", new BMap.Size(100, 100));
        var marker37 = new BMap.Marker(myp37, { icon: myIcon37 });
        map.addOverlay(marker37);

        var myIcon38 = new BMap.Icon("img/icon/一站式路线图标/330/3303.png", new BMap.Size(100, 100));
        var marker38 = new BMap.Marker(myp38, { icon: myIcon38 });
        map.addOverlay(marker38);

        var myIcon39 = new BMap.Icon("img/icon/一站式路线图标/330/3304.png", new BMap.Size(100, 100));
        var marker39 = new BMap.Marker(myp39, { icon: myIcon39 });
        map.addOverlay(marker39);

        var myIcon40 = new BMap.Icon("img/icon/一站式路线图标/330/3304.png", new BMap.Size(100, 100));
        var marker40 = new BMap.Marker(myp40, { icon: myIcon40 });
        map.addOverlay(marker40);

    }

    var lab36 = new BMap.Label("卢米埃影院", { position: myp36 });        //创建4个label
    var lab37 = new BMap.Label("金鹰湖滨天地", { position: myp37 });
    var lab38 = new BMap.Label("川西集市", { position: myp38 });
    var lab39 = new BMap.Label("九霄推理俱乐部", { position: myp39 });
    var lab40 = new BMap.Label("乱世佳人酒吧", { position: myp40 });
    labsetStyle(lab36);
    labsetStyle(lab37);
    labsetStyle(lab38);
    labsetStyle(lab39);
    labsetStyle(lab40);
    map.addOverlay(lab36);
    map.addOverlay(lab37);
    map.addOverlay(lab38);
    map.addOverlay(lab39);
    map.addOverlay(lab40);

}


addroot9();

function addroot10() {
    //创建驾车实例
    var driving9 = new BMap.DrivingRoute(map, {
        renderOptions: {
            map: map,
            autoViewport: true
        },
        onMarkersSet: function (routes) {
            map.removeOverlay(routes[0].marker); //删除起点
            map.removeOverlay(routes[routes.length - 1].marker);
            for (var m = 1; m < routes.length - 1; m++) {
                var mm = routes[m].Nm;
                map.removeOverlay(mm)
            }
        }//删除经点、终点
    });

    //创建点对象
    var myp41 = new BMap.Point(118.986526, 32.126561);
    var myp42 = new BMap.Point(118.929631, 32.105761);
    var myp43 = new BMap.Point(118.929546, 32.106421);
    var myp44 = new BMap.Point(118.923225, 32.100099);

    //创建驾车搜索
    driving9.search(myp41, myp44, { waypoints: [myp42, myp43] });//waypoints表示途经点
    //回调搜索的路线
    driving9.setPolylinesSetCallback(function (lines) {
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
                var content = '<div class="point_content_title">' + '情侣虐狗游' + '</div>' + '<br/>' + '<div class="point_content_title">' + '评分：【4.5】' + '</div>' + '<br/>' + '<div class="point_content_name">' + '攻略简介：' + '<div class="point_content_discribe">' + '和亲爱的TA要怎么度过闲暇时光呢？不如和TA一起到仙林湖划划船，到影院看一部甜蜜爱情片，最后再一起饱餐一顿。' + '</div>' + '<br/>' +
                '<div class="point_content_name">' + '路线：' + '<div class="point_content_discribe">' + '仙林湖公园-卢米埃影院-咸亨酒店-金鹰湖滨天地' + '</div>' + '<br/>' + '<div class="point_content_name">' + '给我评分：' + '<br/>' + '<div id="wrapper">' +
            '<input type="radio" id="star1" name="star" />' +
            '<label for="star1"></label>' +
            '<input type="radio" id="star2" name="star" />' +
            '<label for="star2"></label>' +
            '<input type="radio" id="star3" name="star" checked="checked"/>' +
            '<label for="star3"></label>' +
            '<input type="radio" id="star4" name="star" />' +
            '<label for="star4"></label>' +
            '<input type="radio" id="star5" name="star" />' +
            '<label for="star5"></label>' +
            '</div>' + '<br/>' + '<div class="point_content_picture"><img src ="img/信息窗口动图/410.gif"><div>'
                // 创建信息窗口对象 	
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }

        var myIcon41 = new BMap.Icon("img/icon/一站式路线图标/410/4101.png", new BMap.Size(100, 100));
        var marker41 = new BMap.Marker(myp41, { icon: myIcon41 });
        map.addOverlay(marker41);

        var myIcon42 = new BMap.Icon("img/icon/一站式路线图标/410/4102.png", new BMap.Size(100, 100));
        var marker42 = new BMap.Marker(myp42, { icon: myIcon42 });
        map.addOverlay(marker42);

        var myIcon43 = new BMap.Icon("img/icon/一站式路线图标/410/4103.png", new BMap.Size(100, 100));
        var marker43 = new BMap.Marker(myp43, { icon: myIcon43 });
        map.addOverlay(marker43);

        var myIcon44 = new BMap.Icon("img/icon/一站式路线图标/410/4104.png", new BMap.Size(100, 100));
        var marker44 = new BMap.Marker(myp44, { icon: myIcon44 });
        map.addOverlay(marker44);


    }

    var lab41 = new BMap.Label("仙林湖公园", { position: myp41 });        //创建4个label
    var lab42 = new BMap.Label("卢米埃影院", { position: myp42 });
    var lab43 = new BMap.Label("咸亨酒店", { position: myp43 });
    var lab44 = new BMap.Label("金鹰湖滨天地", { position: myp44 });
    labsetStyle(lab41);
    labsetStyle(lab42);
    labsetStyle(lab43);
    labsetStyle(lab44);
    map.addOverlay(lab41);
    map.addOverlay(lab42);
    map.addOverlay(lab43);
    map.addOverlay(lab44);

}

addroot10();

function addroot11() {
    //创建驾车实例
    var driving11 = new BMap.DrivingRoute(map, {
        renderOptions: {
            map: map,
            autoViewport: true
        },
        onMarkersSet: function (routes) {
            map.removeOverlay(routes[0].marker); //删除起点
            map.removeOverlay(routes[routes.length - 1].marker);
            for (var m = 1; m < routes.length - 1; m++) {
                var mm = routes[m].Nm;
                map.removeOverlay(mm)
            }
        }//删除经点、终点
    });

    //创建点对象
    var myp49 = new BMap.Point(118.960047, 32.151708);
    var myp50 = new BMap.Point(118.964317, 32.155155);
    var myp51 = new BMap.Point(118.955669, 32.151090);

    //创建驾车搜索
    driving11.search(myp49, myp51, { waypoints: [myp50] });//waypoints表示途经点
    //回调搜索的路线
    driving11.setPolylinesSetCallback(function (lines) {
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
                var content = '<div class="point_content_title">' + '好友欢脱游' + '</div>' + '<br/>' + '<div class="point_content_title">' + '评分：【4.7】' + '</div>' + '<br/>' + '<div class="point_content_name">' + '攻略简介：' + '<div class="point_content_discribe">' + '和好友的欢聚时光，就应该是吃吃喝喝，而不用考虑其它的事。' + '</div>' + '<br/>' +
                '<div class="point_content_name">' + '路线：' + '<div class="point_content_discribe">' + '八卦洲湿地公园-陌上花渡-柠檬鱼' + '</div>' + '<br/>' + '<div class="point_content_name">' + '给我评分：' + '<br/>' + '<div id="wrapper">' +
            '<input type="radio" id="star1" name="star" />' +
            '<label for="star1"></label>' +
            '<input type="radio" id="star2" name="star" />' +
            '<label for="star2"></label>' +
            '<input type="radio" id="star3" name="star" checked="checked"/>' +
            '<label for="star3"></label>' +
            '<input type="radio" id="star4" name="star" />' +
            '<label for="star4"></label>' +
            '<input type="radio" id="star5" name="star" />' +
            '<label for="star5"></label>' +
            '</div>' + '<br/>' + '<div class="point_content_picture"><img src ="img/信息窗口动图/420.gif"><div>'
                // 创建信息窗口对象 	
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }

        var myIcon49 = new BMap.Icon("img/icon/一站式路线图标/420/4201.png", new BMap.Size(100, 100));
        var marker49 = new BMap.Marker(myp49, { icon: myIcon49 });
        map.addOverlay(marker49);

        var myIcon50 = new BMap.Icon("img/icon/一站式路线图标/420/4202.png", new BMap.Size(100, 100));
        var marker50 = new BMap.Marker(myp50, { icon: myIcon50 });
        map.addOverlay(marker50);

        var myIcon51 = new BMap.Icon("img/icon/一站式路线图标/420/4203.png", new BMap.Size(100, 100));
        var marker51 = new BMap.Marker(myp51, { icon: myIcon51 });
        map.addOverlay(marker51);

    }

    var lab49 = new BMap.Label("八卦洲湿地公园", { position: myp49 });        //创建4个label
    var lab50 = new BMap.Label("陌上花渡", { position: myp50 });
    var lab51 = new BMap.Label("柠檬鱼", { position: myp51 });
    labsetStyle(lab49);
    labsetStyle(lab50);
    labsetStyle(lab51);
    map.addOverlay(lab49);
    map.addOverlay(lab50);
    map.addOverlay(lab51);

}

addroot11();

function addroot12() {
    //创建驾车实例
    var driving10 = new BMap.DrivingRoute(map, {
        renderOptions: {
            map: map,
            autoViewport: true
        },
        onMarkersSet: function (routes) {
            map.removeOverlay(routes[0].marker); //删除起点
            map.removeOverlay(routes[routes.length - 1].marker);
            for (var m = 1; m < routes.length - 1; m++) {
                var mm = routes[m].Nm;
                map.removeOverlay(mm)
            }
        }//删除经点、终点
    });

    //创建点对象
    var myp45 = new BMap.Point(118.960047, 32.151708);
    var myp46 = new BMap.Point(118.964317, 32.155155);
    var myp47 = new BMap.Point(118.955669, 32.151090);
    var myp48 = new BMap.Point(118.965238, 32.158332);

    //创建驾车搜索
    driving10.search(myp45, myp48, { waypoints: [myp46, myp47] });//waypoints表示途经点
    //回调搜索的路线
    driving10.setPolylinesSetCallback(function (lines) {
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
                var content = '<div class="point_content_title">' + '文艺赏景游' + '</div>' + '<br/>' + '<div class="point_content_title">' + '评分：【4.4】' + '</div>' + '<br/>' + '<div class="point_content_name">' + '攻略简介：' + '<div class="point_content_discribe">' + '这是个赏秋景最美的地方，有红枫也有情怀。' + '</div>' + '<br/>' +
                '<div class="point_content_name">' + '路线：' + '<div class="point_content_discribe">' + '千佛岩-天开岩-栖霞山-千佛寨素菜馆' + '</div>' + '<br/>' + '<div class="point_content_name">' + '给我评分：' + '<br/>' + '<div id="wrapper">' +
            '<input type="radio" id="star1" name="star" />' +
            '<label for="star1"></label>' +
            '<input type="radio" id="star2" name="star" />' +
            '<label for="star2"></label>' +
            '<input type="radio" id="star3" name="star" checked="checked"/>' +
            '<label for="star3"></label>' +
            '<input type="radio" id="star4" name="star" />' +
            '<label for="star4"></label>' +
            '<input type="radio" id="star5" name="star" />' +
            '<label for="star5"></label>' +
            '</div>' + '<br/>' + '<div class="point_content_picture"><img src ="img/信息窗口动图/430.gif"><div>'
                // 创建信息窗口对象 	
                var infoWindow = new BMap.InfoWindow(content, opts);
                // 打开信息窗口   
                map.openInfoWindow(infoWindow, map.getCenter());
            })
            map.addOverlay(myline);
        }

        var myIcon45 = new BMap.Icon("img/icon/一站式路线图标/430/4301.png", new BMap.Size(100, 100));
        var marker45 = new BMap.Marker(myp45, { icon: myIcon45 });
        map.addOverlay(marker45);

        var myIcon46 = new BMap.Icon("img/icon/一站式路线图标/430/4302.png", new BMap.Size(100, 100));
        var marker46 = new BMap.Marker(myp46, { icon: myIcon46 });
        map.addOverlay(marker46);

        var myIcon47 = new BMap.Icon("img/icon/一站式路线图标/430/4303.png", new BMap.Size(100, 100));
        var marker47 = new BMap.Marker(myp47, { icon: myIcon47 });
        map.addOverlay(marker47);

        var myIcon48 = new BMap.Icon("img/icon/一站式路线图标/430/4304.png", new BMap.Size(100, 100));
        var marker48 = new BMap.Marker(myp48, { icon: myIcon48 });
        map.addOverlay(marker48);
    }

    var lab45 = new BMap.Label("千佛岩", { position: myp45 });        //创建4个label
    var lab46 = new BMap.Label("天开岩", { position: myp46 });
    var lab47 = new BMap.Label("栖霞山风景名胜区", { position: myp47 });
    var lab48 = new BMap.Label("千佛斋素菜馆", { position: myp48 });
    labsetStyle(lab45);
    labsetStyle(lab46);
    labsetStyle(lab47);
    labsetStyle(lab48);
    map.addOverlay(lab45);
    map.addOverlay(lab46);
    map.addOverlay(lab47);
    map.addOverlay(lab48);

}

addroot12();

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

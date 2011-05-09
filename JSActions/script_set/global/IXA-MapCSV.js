// IXA-地図のデータをCSVファイルに

var userAgent = 'Mozilla/5.0 (Windows; U; Windows NT 6.0; ja; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 ( .NET CLR 3.5.30729; .NET4.0E)';

var Land = function( no, x, y, c, landname, lordname, population, pos, alli, distance, stars, resources, attr ) {
	this.no         = no;		//number
	this.posx       = x;		//座標 x
	this.posy       = y;		//座標 y
	this.mapc       = c;		//マップ番号
	this.landname   = landname;		//領地名称
	this.lordname   = lordname;		//城主
	this.population = population;	//人口
	this.pos        = pos;			//位置
	this.alli       = alli;			//同盟名
	this.distance   = distance;		//距離
	this.stars      = stars;		//☆の数
	this.resources  = resources;	//資源
	this.attr       = attr;			//属性 0:capital,fall_capital
									//     1:r
									//     2:s
	this.profurl    = null;		//プロフィールURL
	this.alliurl    = null;		//同盟URL
	
	this.toString = function() {
		return this.posx + "," + 	this.posy + "," + this.mapc + "," + this.landname + "," +
				this.lordname + "," + this.population + "," + this.alli + "," + this.distance + "," +
				this.stars + "," + this.resources + "," + this.attr;
	}
	this.en_listing = function() {
		if ("r" == this.attr[1] || "ga" == this.attr[1]) {
			return this.alli + "," + this.lordname + "," + this.no;
		} else {
			return null;
		}
	}
	this.fr_listing = function() {
		if ("r" == this.attr[1] || "ga" == this.attr[1]) {
			return this.alli + "," + this.lordname + "," + this.no;
		} else {
			return null;
		}
	}
}

var lands = new Array(0);

jsa_IXA_CSV();

function jsa_IXA_CSV(){

	var server = document.location.host;
	if (document.URL.indexOf('.sengokuixa.jp/map.php') < 0) {
		alert("not map url");
		return;
	}
	var mapsAll;
	if (mapsAll = document.getElementById("ig_mapsAll")) {
		var kw = '([^/]+png)(?=" class="mapAll([0-9]+)")';
		var lands = mapsAll.innerHTML.match(kw,'g');  //地図の画像ファイル名
		kw = 'x=(-?[0-9]+)&amp;y=(-?[0-9]+)&amp;c=([0-9]+)'
		var poss = document.getElementById("mapOverlayMap").innerHTML.match(kw,'g');
		var ra;
		// x,y 座標の取得
		for (var i = 0; i < poss.length; i++) {
			ra = poss[i].match(kw);
			poss[i] = RegExp.$1+','+RegExp.$2;
		}
		kw = '(.+)_(iron|cotton|wood|rice|b|g|ga|r|p)_(.+)\.png';
		var attr = new Array(1);
		for (var i = 0; i < poss.length; i++) {
			var la = lands[i].match(kw);
			if (la == null) {
				if ("field.png" == lands[i]) {
					attr[i] = new Array( "field", "f", " " );			// 原っぱ
				} else if ("field_all.png" == lands[i]) {
					attr[i] = new Array( "field", "all", " " );		// ☆７
				} else {
					alert("null:"+i.toString()+":"+lands[i]);
				}
			} else {
				attr[i] = new Array(RegExp.$1, RegExp.$2, RegExp.$3);
			}
		}
		kw = 'x=(-?[0-9]+)&amp;y=(-?[0-9]+)&amp;c=([0-9]+)" title="(.+)" alt="(.+)" onmouseover="(.+)"';
		var kw2 = "rewrite\\('([^']+)', '([^']+)', '([^']+)', '([^']+)', '([^']+)', '([^']*)', '([^']*)', ('([^']*)', '([^']*)', '([^']*)', '([^']*)')";
		var kw3 = "'([^']*)', '([^']*)', '([^']*)', '([^']*)'";
		var fd = document.getElementById("mapOverlayMap").innerHTML.match(kw,"g");
		if (fd != null) {
			for (var i = 0; i < fd.length; i++) {
				var la = fd[i].match(kw);
				var x = RegExp.$1;
				var y = RegExp.$2;
				var c = RegExp.$3;
				var ttl = RegExp.$4;
				var alt = RegExp.$5;
				var omo = RegExp.$6;
				var ra = omo.match(kw2);
				if (ra != null) {
					var pname = RegExp.$1;			//領地名称
					var lname = RegExp.$2;			//城主
					var population = RegExp.$3;		//人口
					var pos = RegExp.$4;			//座標
					pos = pos.substring(1,pos.length-1);
					var alli = RegExp.$5;			//同盟名
					var distance = RegExp.$7;		//距離
					var stars =RegExp.$6;			//☆の数
					var resources = RegExp.$8;		//資源
					var va = resources.match(kw3);
					if (va != null) {
						resources = RegExp.$1 + RegExp.$2 + RegExp.$3 + RegExp.$4;
					} else {
						resources = " ";
					}
					lands[i] = new Land(i, x, y, c, pname, lname, population, pos, alli, distance, stars, resources, attr[i]);
					//alert("i:"+i+",x="+x+",y="+y);
				} else {
					alert("cannot split");  //普通は起こらないはず
				}
			}
			var ldata = new Array(0);
			var px = 0;
			for (var i = 0; i < lands.length; i++) {
				var s = lands[i].en_listing();
				if (s != null) {
					ldata[px] = s;
					px++;
				}
			}
			ldata.sort();
			alert("ldata.length:"+ldata.length);
			for (var n = 0; n < ldata.length; n++) {
				var pp = ldata[n].split(',');
				var url = 'http://' + window.location.host + '/land.php?x=' + x +'&y=' + y + '&c=' + c;
				report(pp[2], url);
			}
		} else {
			alert("not match");  //普通は起こらないはず
		}

	} else {
		alert("there is no map");
	}
}


function report(a, b) {
	alert("a:"+a+", b:"+b);
}

function requestLand(n, url) {
	var req = new XMLHttpRequest();
	req.open('GET', url, true);
	req.setRequestHeader('User-agent', userAgent);
	req.setRequestHeader('Accept','application/atom+xml,application/xml,text/xml');
	//	onload: function(responseDetails) {
	//		var table = getTags(responseDetails.responseText,"div","ig_battle_damagelist1");
	//		alert(table);
	//	}
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if(req.status == 200) {
				//GM_log("table:"+table);
			} else {
				alert( "#" + n + " Error loading page\n");
				repflag = false;
			}
		}
	};
	req.send(null); 

	return;
}


function pickJoshuProfData(n, joshulink) {
	//GM_log("joshulink:" + joshulink);
	GM_xmlhttpRequest({
		method: 'GET',
		url: joshulink,
		headers: { //'User-agent': 'Mozilla/5.0 (compatible) Greasemonkey/0.3',
		'User-agent': userAgent,
					'Accept': 'application/atom+xml,application/xml,text/xml',
		},
		onload: function(responseDetails) {
			var table = '<?xml version="1.0" encoding="UTF-8" ?><field>'
			             +getTags(responseDetails.responseText,"table","common_table1 center").toString()
						 + "</field>";
			//GM_log("table:"+table);
			var parser = new DOMParser();
			var xmldoc = parser.parseFromString(table,"text/xml");
			var trLinks = xmldoc.evaluate(
			'//tr[@class]',
			xmldoc,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null);
			terricount = trLinks.snapshotLength;
			//GM_log("lksLen:"+lksLen);
			var thisLink, s, re;
			var territory = new Array(4);
			if (terricount > 0) {
				lordnn.trnum = terricount;
				lordnn.trptr = trcnt;
			} else {
				lordnn.trnum = 0;
				lordnn.trptr = -1;
			}
			var territ0 = trcnt;
			trcnt += terricount;
			for (var i = 0; i < terricount; i++) {
				thisLink = trLinks.snapshotItem(i);
				//GM_log("thisLink"+i.toString()+";"+thisLink.textContent);
				re = /\n\t/gm;
				s = thisLink.textContent.replace(re, "\t");
				s = trim(rmvTabs(s));
				re = /\t(\-*\d+,\-*\d+)\t/;
				s = s.replace(re, "\t$1\t");
				re = /\t(\(\u672C\u62E0\u5730\))\t/;
				s = s.replace(re, "$1\t");
				territory = s.split("\t");
				//種類、名前、座標、人口
				trtbl[territ0+i] = new Territ(territory[0], territory[1], territory[2], territory[3]);
				gtcnt += 1;
			}
			//GM_log("lordnn.toString():"+lordnn.toString());
		}
	});
	return;
}


// ==UserScript==
// @name           Dokochika
// @version        1.22
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    どこ近 Ver. 1.22 20110714
// @include        http://*.sengokuixa.jp/land.php?*
// @match          http://*.sengokuixa.jp/land.php?*
// @copyright      2011, brahmint@gmail.com
// ==/UserScript==

// 一番近い近い拠点はどこ？
//
// 2011/06/27 1.0  初版 FireFox + GreaseMonkey でのみ動作
//                 Chrome では DOMParserの部分でエラー
// 2011/06/28 1.1  Chrome 対応 DOMParserを使わない処理に書換
// 2011/06/29 1.2  land.php のURLにも対応
//                 GM_xmlhttpRequest から $.ajax へ変更 (Chrome単独でも実行可)
// 2011/06/30 1.21 map.php はやめてland.phpでのみ動作に変更
//                 Chrome単独では mapのonmouseイベントに影響あるため
// 2011/07/14 1.22 IXAホスト名w013→w213へ変更に対応、Intervalでの読み込み待ちの部分を改訂
//                 距離判定の部分 ixaPos オブジェクト化 他への流用も鑑みて
//                 おまけに合戦報告書（拠点）へのリンク

//
// Mokoと同じjQuery初期化
//


function bara_addJQuery(callback) {
    if (typeof(unsafeWindow.tb_init)!='undefined') {
        tb_init = unsafeWindow.tb_init;
    }

    if (typeof(unsafeWindow.jQuery)!='undefined') {
        jQuery = unsafeWindow.jQuery;
        callback(unsafeWindow.jQuery);
    } else {
        var script = document.createElement("script");
        script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js");
        script.addEventListener('load', function() {
            var script = document.createElement("script");
            script.textContent = "(" + callback.toString() + ")(jQuery);";
            document.body.appendChild(script);
        }, false);
        document.body.appendChild(script);
    }
}


function chika_main($) {
    // ここにメインの処理を書く

	var gifdoko = 'data:image/gif;base64,'+
	'R0lGODlhNwAYAMQAAP////n5+e7u7tfX18zMzMXFxb29vbW1ta2traWlpZmZmZSUlIyMjIWFhXp6'+
	'enNzc2tra2ZmZlpaWlFRUUpKSkJCQjk5OTMzMykpKSEhIRgYGBMTEwkJCQAAAAAAAAAAACH5BAEH'+
	'AAAALAAAAAA3ABgAAAX/ICCOZGmeaKqSBKIoh5sUdGEgCXLsMb0niYPhANzRDAbfQZErDEwCF4LA'+
	'fL0ItQIxyEMiY7kdLpi02XYvYEJAQrjS44Ri6kXidELvGYgYFg9HNAo2VgpsAFpLMHMEBlYFeAlJ'+
	'YESAdTd/d302X45WBCI3OjAFLwwTExIJDg0ZHH1fQTlJdQcMD5E5ChIYC3RpCqE2Y0sFDR0dEAoZ'+
	'HREdGVhHOggMDA6SjsgVchIVG8gdHAyEViKANC4EQMcd1wwcGxISLwvg9h3jNhDIEQ7gGRQeqFFX'+
	'DoAbOzOW+MMHJEIEIFYuXGAGzkKDTQYkZDhwDEOfLXI8vRChIweOUgrq/zWDgOGZHCtBKFLwRQlJ'+
	'ATnhMOjUSYGRnALmTM6igkDDvQ5BCilgYEEBwh0NUE24dbQDhitMEoQSNcaRBA7INlTIVwALgwvz'+
	'DmCZ5EYCuAZuLxBwpuqNGxxb7bhZ0LLDhXElxRyYEK4BjEY1ljxg5qBChwkK6IJ0A4PkJjAUwkE4'+
	'5zTrjm8RlGYp1XJfB8POImjp6sIyLCTI5pm0UlIBMgijHmVpCXbDC8IRvMQYE3Q4IG1qElBhgIBG'+
	'gm8cJNxyIGHChayEwTnAQVgCp9VytrqplJ3DToqqTIGt6stxuLA7d3Iwo0UrAOF9cEC4cDTDNSJL'+
	'QUDBgA71MwcDHVSggIsFVVl1jhcikJHEXVw8ddAQnrQwB1sNbWFLAw04wACIWdUhgjqb2GDSa6LE'+
	'cE4pLpTyBQ931UgEAR6OZ8AT5rjhw02yvOZiDF68gNILO3hRxBtANILHcCQI8EMnw+mol4sGvFQI'+
	'Dnn4ocsLNQJhwCEs2FHLNEJyAUYhkNxRBw6OoNkcjyvUaeedJ4QAADs=';

	var Territ = function ( ttype, tname, pos, population, cond, map) {
		this.ttype      = ttype;		//種類 (本領/所領)
		this.tname      = tname;		//名前
		this.pos        = pos;			//座標
		this.population = population;	//人口
		this.condition  = cond;			//状態
		this.map        = map;			//c
	}

	var ixaPos = new Object();
	ixaPos.txtFall  = "陥落中";
	ixaPos.txtLand  = "領地";
	ixaPos.txtNorm  = "通常拠点";
	ixaPos.txtFalen = "陥落拠点";
	ixaPos.txtDist = "距離";
	ixaPos.txtE  = "東";
	ixaPos.txtNE = "北東";
	ixaPos.txtN  = "北";
	ixaPos.txtNW = "北西";
	ixaPos.txtW  = "西";
	ixaPos.txtSW = "南西";
	ixaPos.txtS  = "南";
	ixaPos.txtSE = "南東";
	ixaPos.txtTo   = "へ";
	ixaPos.txtFrom = "から";
	ixaPos.x = '0';		//x座標
	ixaPos.y = '0';		//y座標
	ixaPos.c = '12';	//領地
	ixaPos.dokochikaStr = function(data, stype) {
		function pos2str(x0,y0,x1,y1) {
			// ２点の座標から、方向と距離を示す文字列を作成
			// [方向] へ 距離 [n.nn]
			var dx = x1 - x0;
			var dy = y1 - y0;
			var dist = Math.sqrt(dx*dx + dy*dy);
			var sd;
			var ss = null;
			if (dx == 0.0 && dy == 0.0) {
				ss = " " + ixaPos.txtDist + " " + num2diststr(dist);
			} else if (dx == 0.0) {
				if (dy > 0.0) sd = ixaPos.txtN;
				else          sd = ixaPos.txtS;
			} else if (dy == 0.0) {
				if (dx > 0.0) sd = ixaPos.txtE;
				else          sd = ixaPos.txtW;
			} else {
				var v = Math.atan2(dy,dx);
				if (v < -Math.PI * 7/8) sd = ixaPos.txtSW;
				else if (v <= -Math.PI * 5/8) sd = ixaPos.txtSW;
				else if (v < -Math.PI * 3/8)  sd = ixaPos.txtS;
				else if (v <= -Math.PI /8)    sd = ixaPos.txtSE;		
				else if (v < Math.PI /8)      sd = ixaPos.txtE;
				else if (v <= Math.PI*3/8)    sd = ixaPos.txtNE;		
				else if (v < Math.PI * 5/8)   sd = ixaPos.txtN;
				else if (v <= Math.PI*7/8)    sd = ixaPos.txtNW;
				else sd = ixaPos.txtW;
			}
			if (ss == null) {
				ss = " " + sd + " " + ixaPos.txtTo + " " + ixaPos.txtDist + " " + num2diststr(dist);
			}
			return ss;
		}
		//距離を示す文字列を作成（小数点以下２桁)
		function num2diststr(d) {
			var x = d * 100.0 + 1000000.5;
			var s = String(parseInt(x));
			s = s.substr(1);
			var len = s.length;
			s = s.substr(0,len-2) + "." + s.substr(len-2);
			while (s.substr(0,1) == "0") s = s.substr(1);
			if (s.substr(0,1) == ".") s = "0"+s;
			return s;
		}

		var x0 = Number(this.x);
		var y0 = Number(this.y);
		var cn = Number(this.c);
		var dnmin = new Array(999,999,999);	//通常拠点最短距離
		var dlmin = new Array(999,999,999);	//領地最短距離
		var dfmin = new Array(999,999,999);	//陥落拠点最短距離
		var dpx   = -1;
		var dnorm = new Array(-1,-1,-1);
		var dland = new Array(-1,-1,-1);
		var dfall = new Array(-1,-1,-1);
		var x1,y1,d;
		var pos;
		var px = -1;
		for (var i = 0; i < data.length; i++) {
			//alert("cn:"+cn + "  : "+ teridata[i].map);
			//try {
				if (cn == Number(data[i].map)) {	//同じマップの拠点であること
					pos = data[i].pos.split(",");
					x1 = parseFloat(pos[0]);
					y1 = parseFloat(pos[1]);
					d = Math.sqrt((x1-x0)*(x1-x0) + (y1-y0)*(y1-y0));
					//alert("x1="+x1+"\n"+ "y1="+y1+"\n" + "x0="+x0+"\n" + "y0="+y0+"\n"+ "d="+d);
					//if (data[i].condition == this.txtFall) {
					if (data[i].condition.indexOf(this.txtFall) == 0) {
						//alert(txtFall +" "+ i);
						if (d <= dfmin[0]) {
							dfmin[2]=dfmin[1]; dfmin[1]=dfmin[0]; dfmin[0] = d;
							dfall[2]=dfall[1]; dfall[1]=dfall[0]; dfall[0] = i;
						}
					//} else if (data[i].ttype == this.txtLand) {
					} else if (data[i].ttype.indexOf(this.txtLand) == 0) {
						//alert(txtLand +" "+ i);
						if (d <= dlmin[0]) {
							dlmin[2]=dlmin[1]; dlmin[1]=dlmin[0]; dlmin[0] = d;
							dland[2]=dland[1]; dland[1]=dland[0]; dland[0] = i;
						}
					} else {
						//alert(txtNorm +" "+ i);
						if (d <= dnmin[0]) {
							dnmin[2]=dnmin[1]; dnmin[1]=dnmin[0]; dnmin[0] = d;
							dnorm[2]=dnorm[1]; dnorm[1]=dnorm[0]; dnorm[0] = i;
						}
					}
					
				}
			//} catch(e) {
			//	alert("error i="+i + "\nterridata.length="+teridata.length);
			//}
		}
		for (var i=0; i < dlmin.length; i++) { if (dnmin[0] <= dlmin[i]) dlmin[i] = 999; }
		for (var i=0; i < dfmin.length; i++) { if (dnmin[0] <= dfmin[i]) dfmin[i] = 999; }
		if (stype == 1) {
			var s = "<<< ("+x0+","+y0+") への攻略検討 >>>";
			for (var i=0; i < dnmin.length; i++) {
				if (dnmin[i] < 999) {
					pos = data[dnorm[i]].pos.split(",");
					x1 = parseFloat(pos[0]);
					y1 = parseFloat(pos[1]);
					s += "\n" + data[dnorm[i]].tname + "("+ pos[0] + "," + pos[1] + ")"+this.txtFrom+pos2str(x1,y1,x0,y0);
				}
			}
			for (var i=0; i < dfmin.length; i++) {
				if (dfmin[i] < 999) {
					pos = data[dfall[i]].pos.split(",");
					x1 = parseFloat(pos[0]);
					y1 = parseFloat(pos[1]);
					s += "\n[" + this.txtFalen +"]" + data[dfall[i]].tname + "("+ pos[0] + "," + pos[1] + ")"+this.txtFrom+pos2str(x1,y1,x0,y0);
				}
			}
			for (var i=0; i < dlmin.length; i++) {
				if (dlmin[i] < 999) {
					pos = data[dland[i]].pos.split(",");
					x1 = parseFloat(pos[0]);
					y1 = parseFloat(pos[1]);
					s += "\n["+ this.txtLand +"]" + data[dland[i]].tname + "("+ pos[0] + "," + pos[1] + ")"+this.txtFrom+pos2str(x1,y1,x0,y0);
				}
			}
			return s;
		} else {
			var s = "";
			var ns = null;
			if (dnmin[0] < 999) {
				s += num2diststr(dnmin[0]);
			} else {
				s += "*";
			}
			if (dlmin[0] < 999) {
				ns = num2diststr(dlmin[0]);
			}
			if (ns == null && dfmin[0] < 999) {
				ns = num2diststr(dfmin[0]);
			}
			if (ns != null) {
				s += '(' + ns + ')';
			}
			return s;
		}
	}

	var teridata = new Array();   //城主の拠点データ
	//alert("teridata.length="+teridata.length);
	var trcnt;
	var tericount;
	var profTeriDoneflag = false;	//拠点情報読み込み完了フラグ
	var dokojob = false;			//実行中フラグ
	
	var dokoId;
	var dokocnt;


	//
	// 自分の拠点のデータを元に、ixaPosの地点までのどこ近を表示します
	//
	function showAdvice() {
		//alert("teridata.length="+teridata.length);
		var s = ixaPos.dokochikaStr(teridata, 0);
		alert(s);
	}

	//
	// どこ近メイン
	//
	function calc_dokochika(){
		if (dokojob) return;
		dokojob = true;
		if (document.URL.match(/(map|land)\.php\?x=(-?[0-9]+)&y=(-?[0-9]+)(&type=[123])?&c=([0-9]+)/) != null) {
			ixaPos.x = RegExp.$2;
			ixaPos.y = RegExp.$3;
			ixaPos.c = RegExp.$5;
			var utype = RegExp.$1;

			trcnt     = 0;
			tericount = 0;
			profTeriDoneflag = false;
			pickJoshuProfData('http://' + window.location.host + '/user/');
			//alert('teridata.length='+teridata.length);
			dokocnt = 0;
			dokoId = setInterval( function() { 
										dokocnt++;
										if (profTeriDoneflag) {
											clearInterval(dokoId);
											showAdvice();
											dokojob = false;
										} else if ( dokocnt > 30 ) {
											clearInterval(dokoId);
											dokojob = false;
										}
										dokocnt;
									}, 1000);
		} else {
			alert("ここはどこ？");
		}
	}

	// 城主プロフィール（自分の）から拠点データを収集する
	// 結果は teridataに
	// callback は alertで結果を出したい場合に指定
	//    x,y,c は callbackする場合の攻撃先座標
	//
	function pickJoshuProfData(profUrl) {
		$.ajax({
			url: profUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				var tbltxt = getTags(html,"table","common_table1 center").toString();
				//var mts =getIxaHrefs(tbltxt);
				var trs = getClassTags(tbltxt,'tr','fs[0-9]+');
				tericount = trs.length;
				//alert('tericount=' + tericount);
				var thisTr, s, re;
				var territ0 = 0;
				var ctp;
				trcnt += tericount;
				for (var i = 0; i < tericount; i++) {
					thisTr = trim(rmvTabs(trs[i]));
					var tds = getTags(thisTr,'td',null);
					var ttype = getTagText(tds[0],'td');
					var tss1 = getTaggedContent(tds[1],'td',null);
					var tvill = getTag(tss1,'a',null);
					var textn = trim(tss1.substring(tvill.length));
					var tname = trim(getTagText(tss1,'a'));
					var tss2 = getTag(tds[2],'td',null);
					var mts =getHref(tss2);
					var tpos  = getTagText(tss2,'a');
					var thref = getHref(tds[1]);
					var tpopu = getTagText(tds[3],'td');
					var tcond = trim(getTagText(tds[4],'span'));
					ctp = ctype(mts);	//c=1～12
					teridata[territ0+i] = new Territ(ttype, tname+textn, tpos, tpopu, tcond, ctp);
				}
				profTeriDoneflag = true;
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax pickJoshuProfData("'+profUrl+'") error');
				//console.log(textStatus);
			}
		});	
		return;
	}


	function ctype(urlstr) {
		var reg = new RegExp("c=([0-9]+)$","i");
		var tag = urlstr.match(reg);
		return (tag) ? RegExp.$1 : "";
	}


	// Removes leading whitespaces
	function LTrim( value ) {
		var re = /\s*((\S+\s*)*)/;
		return value.replace(re, "$1");
	}

	// Removes ending whitespaces
	function RTrim( value ) {
		var re = /((\s*\S+)*)\s*/;
		return value.replace(re, "$1");
	}

	// Removes leading and ending whitespaces
	function trim( value ) {
		return LTrim(RTrim(value));
	}
	
	function trimRmv( value) {
		var re = /(\S+)(\s+)(\S+)/;
		return trim(value).replace(re,"$1$3");
	}

	function rmvTabs( value ) {
		var re = /(\t)\t+/mg;
		return value.replace(re, "$1");
	}

	// innerHTML to URL
	function inURL(s) {
		var sub = s.split("href=\"");
		var sub2 = sub[1].split("\">");
		return sub2[0];
	}


	// XML assist
	function getTags(html, tagName, className){
	  var cls = "";
	  if(className){
		cls = "[^>]*?class=\"" + className + "\"";
	  }
	  var reg = new RegExp("<" + tagName + cls + "(\\s|.)*?>([^<]*)</" + tagName + ">", "ig");
	  return html.match(reg);
	}

	function getTag(html, tagName, className){
	  var cls = "";
	  if(className){
		cls = "[^>]*?class=\"" + className + "\"";
	  }
	  var reg = new RegExp("<" + tagName + cls + "(\\s|.)*?>([^<]*)</" + tagName + ">", "i");
	  var tags = html.match(reg);
	  return (tags && tags.length) ? tags[0] : "";
	}

	function getTaggedContent(html, tagName, className){
	  var cls = "";
	  if(className){
		cls = "[^>]*?class=\"" + className + "\"";
	  }
	  var reg = new RegExp("(<" + tagName + cls + "(\\s|[^>])*?>)((\\s|.)*)(</" + tagName + ">)", "i");
	  var tags = html.match(reg);
	  return (tags && tags.length) ? trim(RegExp.$3) : "";
	}

	function getBody(html){
	  var reg = new RegExp("<body((\\s|.)*)</body>", "i");
	  return html.match(reg);
	}

	function getAttrTags(html, tagName, attrName, attrStr){
		var cls = "";
		if(attrName){
			if (attrStr) {
				cls = '[^>]*?' + attrName + '="' + attrStr + '"';
			} else {
				cls = '[^>]*?' + attrName + '="[^"]*"';
			}
		}
		var reg = new RegExp("<" + tagName + cls + "(\\s|.)*?>([^<]*)</" + tagName + ">", "ig");
		return html.match(reg);
	}

	function getAttrTag(html, tagName, attrName, attrStr){
	  var tags = getClassTags(html, tagName, attrName, attrStr);
	  return (tags && tags.length) ? tags[0] : "";
	}

	function getAttrTagText(html, tagName, attrName, attrStr){
	  return getAttrTag(html, tagName, attrName, attrStr) ? RegExp.$2 : "";
	}

	function getClassTags(html, tagName, className){
	  var cls = "";
	  if(className){
		cls = '[^>]*?class="' + className + '"';
	  }
	  var reg = new RegExp("<" + tagName + cls + "(\\s|.)*?>([^<]*)</" + tagName + ">", "ig");
	  return html.match(reg);
	}

	function getClassTag(html, tagName, className){
	  var tags = getClassTags(html, tagName, className);
	  return (tags && tags.length) ? tags[0] : "";
	}

	function getClassTagText(html, tagName, className){
	  return getClassTag(html, tagName, className) ? RegExp.$2 : "";
	}


	function getTagText(html,tagName) {
		var reg = new RegExp("<" + tagName + "(\\s|.)*?>([^<]*)</" + tagName + ">", "i");
		var tag = html.match(reg);
		return (tag) ? RegExp.$2 : "";
	}

	function getIdTags(html, tagName, idName){
	  var ids = "";
	  if(idName){
		ids = '[^>]*?id="' + idName + '"';
	  }
	  var reg = new RegExp("<" + tagName + ids + "(\\s|.)*?>([^<]*)</" + tagName + ">", "ig");
	  return html.match(reg);
	}

	function getIdTag(html, tagName, idName){
	  var tags = getIdTags(html, tagName, idName);
	  return (tags && tags.length) ? tags[0] : "";
	}

	function getIdTagText(html, tagName, idName){
	  return getIdTag(html, tagName, idName) ? RegExp.$2 : "";
	}

	function getSrc(html, flg) {
		if (flg == 0) {
			var src = '<img src="([^"]*)/([^"/]+)"';
		} else {
			var src = '<(img src=)"([^"]*)"';	//フル
		}
		var ans = html.match(src,"ig");
		return (ans && ans.length) ? RegExp.$2 : "";
	}

	function getIxaHrefs(html) {
		var src = '<a href="([^"]*)(?=")';	//フル
		var ans = html.match(src,"ig");
		for (var i= 0; i < ans.length; i++) {
			ans[i] = ans[i].substring(9);
		}
		return ans;
	}

	function getHref(html) {
		var src = '<a href="([^"]*)"';	//フル
		var ans = html.match(src,"i");
		return (ans && ans.length) ? RegExp.$1 : "";
	}


	function replaceAmp(s) {
		return s.replace(/&amp;/g,'&');
	}

	function replaceNbsp(s) {
		return s.replace(/&nbsp;/g,' ');
	}


	//---------------------------
	// main
	//---------------------------

    function cmd_dokochika() {
		var tmp;
		if (document.URL.match('map\.php')) {
			tmp = '<a href="javascript:void(0);" onclick="return false;" id="do_dokochika"><img src="' + gifdoko + '" alt="どこ近" style="position: relative; top: +8px; "></a>';
	        $('div#ig_map_country').find('p:last').after(tmp);
		} else if (document.URL.match('land\.php')) {
			var re = document.URL.match(/(map|land)\.php\?x=(-?[0-9]+)&y=(-?[0-9]+)(&type=[123])?&c=([0-9]+)/);
			var x = RegExp.$2;
			var y = RegExp.$3;
			tmp = '<span style="font-weight: normal; font-size: 12px; float:right; position: relative; top: 5px; right: 10px;"><a href="/war/list.php?m=&s=1&name=lord&word=&coord=map&x='+x+'&y='+y+'">[合戦報告書(拠点)]</a></span>';
			$('div.ig_mappanel_maindataarea h3').append(tmp);
			tmp = '<a href="javascript:void(0);" onclick="return false;" id="do_dokochika"><img src="' + gifdoko + '" alt="どこ近" style="position: relative; top: +1px; "></a>';
	        $('div.ig_mappanel_function_mid').find('a:last').after(tmp);
		}
        $('#do_dokochika').live('click',function() {
			//calc_dokochika();
			setTimeout(calc_dokochika, 100);
			//alert('now clicked dokochika');
        });
    }

	cmd_dokochika();

}

bara_addJQuery(chika_main);

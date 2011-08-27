// ==UserScript==
// @name           Informer
// @version        1.02
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    Informer Ver. 1.02 20110827
// @include        http://*.sengokuixa.jp/facility/send_troop.php*
// @match          http://*.sengokuixa.jp/facility/send_troop.php*
// @copyright      2011, brahmint@gmail.com
// ==/UserScript==

// 攻撃時間申告
//
// 2011/07/02 1.0	初版 FireFox + GreaseMonkey でのみ動作
// 2011/07/18 1.01	IXAホスト名変更に対応
// 2011/08/20 1.02	jQueryライブラリを使用してソースをコンパクトに
//					半下がり等刻み用マップリンク追加
//					Chrome対応 @matchを …/send_troop.php#ptop → …/send_troop.php*
//
// Mokoと同じjQuery初期化
//

function info_addJQuery(callback) {
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


function info_main($) {
    // ここにメインの処理を書く
	
//---------------------------
// 婆羅門機能追加分 ここから
//---------------------------
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
		this.pos        = pos;			//座標 'x,y'
		this.population = population;	//人口
		this.condition  = cond;			//状態
		this.map        = map;			//c
	}

	var ixaPos = new Object();
	ixaPos.txtFall  = "陥落中";
	ixaPos.txtLand  = "領地";
	ixaPos.txtNorm  = "通常拠点";
	ixaPos.txtFalen = "陥落拠点";
	ixaPos.txtDist  = "距離";
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
	ixaPos.setPosition = function(x0, y0, c0) {
		this.x = x0;
		this.y = y0;
		this.c = c0;
	}
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
			if (cn == Number(data[i].map)) {	//同じマップの拠点であること
				pos = data[i].pos.split(",");
				x1 = parseFloat(pos[0]);
				y1 = parseFloat(pos[1]);
				d = Math.sqrt((x1-x0)*(x1-x0) + (y1-y0)*(y1-y0));
				//alert("x1="+x1+"\n"+ "y1="+y1+"\n" + "x0="+x0+"\n" + "y0="+y0+"\n"+ "d="+d);
				//if (data[i].condition == this.txtFall) {
				if (data[i].condition.indexOf(this.txtFall) == 0) {		//陥落中
					//alert(txtFall +" "+ i);
					if (d <= dfmin[0]) {
						//dfmin[2]=dfmin[1]; dfmin[1]=dfmin[0]; dfmin[0] = d;
						dfmin.unshift(d); dfmin.pop();
						//dfall[2]=dfall[1]; dfall[1]=dfall[0]; dfall[0] = i;
						dfall.unshift(i); dfall.pop();
					}
				//} else if (data[i].ttype == this.txtLand) {
				} else if (data[i].ttype.indexOf(this.txtLand) == 0) {	//領地
					//alert(txtLand +" "+ i);
					if (d <= dlmin[0]) {
						//dlmin[2]=dlmin[1]; dlmin[1]=dlmin[0]; dlmin[0] = d;
						dlmin.unshift(d); dlmin.pop();
						//dland[2]=dland[1]; dland[1]=dland[0]; dland[0] = i;
						dland.unshift(i); dland.pop();
					}
				} else {
					//alert(txtNorm +" "+ i);
					if (d <= dnmin[0]) {
						//dnmin[2]=dnmin[1]; dnmin[1]=dnmin[0]; dnmin[0] = d;
						dnmin.unshift(d); dnmin.pop();
						//dnorm[2]=dnorm[1]; dnorm[1]=dnorm[0]; dnorm[0] = i;
						dnorm.unshift(i); dnorm.pop();
					} else {
						if (dnmin[0] != 0.0) {
							if ((d <= 10.0) || (d/dnmin[0] > 1.25)) {
								if (d <= dnmin[1]) {
									dnmin[2]=dnmin[1]; dnmin[1]=d;
									dnorm[2]=dnorm[1]; dnorm[1]=i;
								}
							} else {
								if ((d <= 10.0) || (d/dnmin[0] > 1.25)) {
									dnmin[2]=d;
									dnorm[2]=i;
								}
							}
						}
					}
				}
				
			}
			//	alert("error i="+i + "\nterridata.length="+teridata.length);
			//}
		}
		for (var i=1; i < dnmin.length; i++) {
			if (dnmin[i] > 10 && dnmin[i] > dnmin[0]*1.25) {
				dnmin[i] = 999;
			}
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

	var profTeriDoneflag = false;	//拠点情報読み込み完了フラグ
	var dokojob = false;			//実行中フラグ
	
	var dokoId;
	var dokocnt;


	//
	// 城主プロフィール（自分の）から拠点データを収集する
	// 結果は dataに　(teridataが参照されてる）
	//
	function pickJoshuProfData(profUrl, data) {
		data.splice(0,data.length);		//データがあったらクリア
		$.ajax({
			url: profUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				var tbls = $(html).find("table.common_table1.center");
				//var mts =getIxaHrefs(tbltxt);
				var trs = tbls.find('tr.fs14');
				//alert('tericount=' + tericount);
				var s, re;
				var territ0 = 0;
				var ctp;
				for (var i = 0; i < trs.length; i++) {
					var tds = trs.eq(i).find('td');
					var ttype = tds.eq(0).text();		//本領・所領 など
					var tname = trim(tds.eq(1).find('a').text());
					var tpos  = tds.eq(2).find('a').text();
					var tland = tds.eq(2).find('a').attr('href');
					var tpopu = tds.eq(3).text();
					var tcond = tds.eq(4).find('span').text();
					if (tcond == undefined ) tcond = "";
					ctp = ctype(tland);	//c=1～12
					data[territ0+i] = new Territ(ttype, tname, tpos, tpopu, tcond, ctp);
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
	
	function setViser(viserId, timeVise, cond, func )
	{
		viserId = setInterval( function() { 
									//GM_log("setViser:"+"trcnt="+trcnt+",gtcnt="+gtcnt);
									if ( cond() ) {
										clearInterval(viserId);
										func();
									}
								}, timeVise);
	}


	function job_informer(){
		var msg;
		if (document.URL.match(/send_troop\.php/)) {
			var spans = $("div#ig_gofightconfirmboxtitle table td span");
			var place = trim(rmvTabs(spans.eq(0).html()));
			var distance = trim(rmvTabs(spans.eq(1).html()));
			var ttime = trim(rmvTabs(spans.eq(2).html())).match(/([0-9]+):([0-9]+):([0-9]+)/);
			var hh = RegExp.$1;
			var mm = RegExp.$2;
			var ss = RegExp.$3;
			if ("00" == hh) {
				ttime = mm + ":" + ss;
			} else {
				ttime = hh + ":" + mm + ":" + ss;
			}
			
			alert( place+" まで 距離["+distance+"] "+ttime);
		} else {
			alert("ここはどこ？");
		}
	}

	var extflag = false;

	function job_extra(){
		var vId;
		if (extflag) return;
		profTeriDoneflag = false;
		pickJoshuProfData('http://' + window.location.host + '/user/', teridata);
		setViser(vId, 200, function() { return profTeriDoneflag; }, function() {
			var msg;
			if (document.URL.match(/send_troop\.php/)) {
				var spans = $("div#ig_gofightconfirmboxtitle table td span");
				var toplace   = trim(rmvTabs(spans.eq(0).html()));		//目的地
				var re = toplace.match(/\s*\((-?\d+,-?\d+)\)/);
				var topos     = RegExp.$1;		//目的地座標
				toplace = RegExp.leftContext;
				var distance  = trim(rmvTabs(spans.eq(1).html()));		//距離
				var ttime     = trim(rmvTabs(spans.eq(2).html())).match(/([0-9]+):([0-9]+:[0-9]+)/);	//到達時間
				var fromplace = $('div.sideBoxInner.basename li.on span').eq(0).attr('title');			//出陣地
				re = fromplace.match(/\s*\((-?\d+,-?\d+)\)/);
				var frompos = RegExp.$1;		//出陣座標
				fromplace = RegExp.leftContext;
				var found = -1;
				for (var i = 0; i < teridata.length; i++) {
					if (teridata[i].tname == fromplace) {
						found = i;
						break;
					}
				}
				var c = teridata[i].map;
				var d = parseFloat(distance);
				var p0 = frompos.split(",");
				var p1 = topos.split(",");
				var dx = parseFloat(p1[0]) - parseFloat(p0[0]);
				var dy = parseFloat(p1[1]) - parseFloat(p0[1]);
				//alert(	"frompos:"+frompos+"\n"+
				//			"fromplace:"+fromplace+"\n"+
				//			"c:"+c+"\n"+
				//			"topos:"+topos+"\n"+
				//			"toplace:"+toplace+"\n"+
				//			"distance:"+distance+"\n"
				//		);
				var cutpoz = function( cname, cd, sg) {
					this.cd    = cd;
					this.cname = cname;
					this.sg    = sg;
				}
				var cuttbl = new Array();
				cuttbl[0] = new cutpoz( "-5", (d-5.0)/d ,"-");
				cuttbl[1] = new cutpoz( "-10", (d-10.0)/d,"-" );
				cuttbl[2] = new cutpoz( "-20", (d-20.0)/d,"-" );
				cuttbl[3] = new cutpoz( "-30", (d-30.0)/d,"-" );
				cuttbl[4] = new cutpoz( "-1/3", 2.0/3.0, "-");
				cuttbl[5] = new cutpoz( "半下がり", 0.5, "*");
				cuttbl[6] = new cutpoz( "+1/3", 1.0/3.0, "+" );
				cuttbl[7] = new cutpoz( "+30", 30.0/d, "+" );
				cuttbl[8] = new cutpoz( "+20", 20.0/d, "+" );
				cuttbl[9] = new cutpoz( "+10", 10.0/d, "+" );
				cuttbl.sort( function( a, b) { return b.cd - a.cd; } );
				
				var tmp = "";
				for (var i=0; i< cuttbl.length; i++) {
					if (cuttbl[i].cd > 0.0 && cuttbl[i].cd < 1.0) {
						if ((cuttbl[i].sg == "*") || (cuttbl[i].sg == "-" && cuttbl[i].cd > 0.5) || (cuttbl[i].sg == "+" && cuttbl[i].cd < 0.5) ) {
							x = Number(p0[0]) + Math.round(dx*cuttbl[i].cd);
							y = Number(p0[1]) + Math.round(dy*cuttbl[i].cd);
							tmp += '　<a href="/map.php?x='+x+'&y='+y+'&c='+c+' style="font-size:12px;">'+cuttbl[i].cname+'</a>';
						}
					}
				}
				$('div.ig_decksection_top').append(tmp);
				extflag = true;
			} else {
				alert("ここはどこ？");
			}
		});
	}

	//---------------------------
	// main
	//---------------------------
	
    function cmd_informer() {
		if (document.URL.match('#ptop$')) {		// for only "http://*.sengokuixa.jp/facility/send_troop.php#ptop"
			var tmp;
			//tmp = '<div><a href="javascript:void(0);" onclick="return false;" id="do_attackinfo"><img src="' + gifdoko + '" alt="Inf_attack" style="position: relative; top: +0px; "></a></div>';
			tmp = '　<a><input type="button" name="string" value="inform" id="do_attackinfo" onclick="javascript:void(0);"></a>';
			tmp += '　<a><input type="button" name="string" value="+" id="do_attackext" onclick="javascript:void(0);"></a>';
			$('div.ig_decksection_top').append(tmp);
			var spans = $("div#ig_gofightconfirmboxtitle table td span");
			var place = trim(rmvTabs(spans.eq(0).html()));
			var distance = trim(rmvTabs(spans.eq(1).html()));
			var ttime = trim(rmvTabs(spans.eq(2).html())).match(/([0-9]+):([0-9]+:[0-9]+)/);
			var frompos = $('div.sideBoxInner.basename li.on span').eq(0).attr('title');
			var re = frompos.match(/\((-?\d+,-?\d+)\)/);
			var startpos = RegExp.$1;
			//tmp = '　　　<b style="font-size:12px; vertical-align: middle ! important;　font-weight:normal ! important;">'+RegExp.leftContext+'</b><a href="/village_change.php?village_id=16970&from=menu&page=/facility/send_troop.php"> @ </a>';
			tmp = '　　　<a style="font-size:12px; vertical-align: middle ! important;　font-weight:normal ! important;">'+RegExp.leftContext+'</a>';
			$('div.ig_fightunit_title3 h3').append(tmp);
	
			$('#do_attackinfo').live('click',function() {
				job_informer();
			});
			$('#do_attackext').live('click',function() {
				job_extra();
			});
		}
	}

	cmd_informer();

}

info_addJQuery(info_main);

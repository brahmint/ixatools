// ==UserScript==
// @name           Dorechika
// @version        1.03
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    どれ近 Ver. 1.03	20110717
// @include        http://*.sengokuixa.jp/user/?user_id=*
// @match          http://*.sengokuixa.jp/user/?user_id=*
// @include        http://*.sengokuixa.jp/war/fight_history.php*
// @match          http://*.sengokuixa.jp/war/fight_history.php*
// @copyright      2011, brahmint@gmail.com
// ==/UserScript==

// 近い拠点はどれ？
//
// 2011/06/29 1.0  初版 
// 2011/07/14 1.01 IXAホスト名変更に対応
// 2011/07/16 1.02 プロフィール画面のどれ近対応
// 2011/07/17 1.03 敵襲状況のどれ近対応

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


function dore_main($) {
    // ここにメインの処理を書く

	var gifdore = 'data:image/gif;base64,'+
	'R0lGODlhNwAYAOYAAP/////2+f/w9f/s8v/l7v/i7P/D1/++1P+yzP+wyv+rx/+mxP+hwP+cve+c'+
	'uP+Wuv+St++Us/+Os9+Wrv+Mre+MrN+NqP+Dre+Hqv9/qe+Cpv96ps+Hn/90o996m/9wn7+Cl+9y'+
	'nP9rnN91mL97kc91k/9mme9kkr9zjK91id9kjc9pi+9gj69yh79tib9qhs9hht9Zhr9igp9rfL9Z'+
	'fJ9jd79Veb9Sdq9Scb9OdI9Za59Qa39YZa9Ja39TYp9HZI9LYp9AX39KXI9BW39FWG9IVY89WW9E'+
	'Un9AVX86UW85S38zTG81SF82RG8vRF8yQW8sQ18tPk8xOz8oL08hMD8gKj8aJy8eJC8aIS8UHR8V'+
	'GB8RFh8PFB8MEw8HCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5'+
	'BAEHAAAALAAAAAA3ABgAAAf/gACCg4SFhoeIiYqECBcfJhAZJh0KCwwMDxcbFw+dDxkLCxAUGxsS'+
	'DRKlEhChDQ0KDBIPkxcLB4YDFyIXCJMfIiIfCJYMC6kbEMmnDaESGR0ZnRfQp7DMqBImIh2lBYMC'+
	'F7ofHx2aHR0mFArXCw2knA/s7ccUnRsZEhKhD6Ef6yYAPwwQZCybiQe7FMwKtiADBAcWin0ytYGf'+
	'q32akEHQFO5avFMAASYQ1CBcNn3AVCRJEqSDjRZYvFhgxsADEiI0OLW7FGsFDnilMngQMqXEBVgA'+
	'0QmSOE1EtgUvvnzpYSLLFyBfsCCARUJqhQwXIDTgyUFqlA1Dn3CR+sWLinW//wAK4ndJkoINHWRI'+
	'pdFBhZcuQ4ZoWwBCaggJJWho4NdOh1QgNNhiUYLj3AYE6LQJAutqmjERkb+4OPejBzQRUKZ4kdqk'+
	'ilQvMi5c83ElQtQqFFCVQtcgpAlBYTdQIKUAIIvHO1xnQSfCClu2W1hrOhVqQ2EvVbJnZ2KC1wYT'+
	'CuYKf9eg1wUtz6WaCgmFrQ4GR75UWSUDyRIkKnKkl1oFYPFzS5UUDjcIGbHaF104sUIoCmwVw2pe'+
	'lDCMD19McUEGQrAlgxFfUIEAD18QIRwwmjxD0iWfZJDBCc5VmMICFKSSzwUYWPWFFQchIMUXRSzw'+
	'gAc3WGXDE18sIQKFQkBQiv8IFGTwwQPAySaKJkq0tQNjB5mAFwZYsIUjQM75wOAHru0gFQwfgCim'+
	'BNNsUNJvAISjk4+PibDJBo+YgM8PUjlXBQRgfuFDBDMooIBrq23xSBKCosjmNB0IkspGFSlg1j14'+
	'JmACCxMYysUPFE7RWwfOZdFFFRgU8ZwNFHSwhKDrMDORCAGa1IEEqrZVxRRVdBniBiLoCaIVjZhA'+
	'BHREtiXVFlZU0Wx2XrTTzAYBGpMBAxlsoMMU+2FRQ0XfvfrlOjok8UMGLnwRhQc77iefPu24IkhF'+
	'l8C4ya0PMFCSKeF0ckqwCUiSwSvOlAKEktGg8MILNqAggwwj3CMrlAAgINyPKwptoqIrroDFpgSV'+
	'LNCdCQt84Eo+smgynCoSUNJyRSY1cAsAAjgDiigL3JOKbJc4M+MlDYwjsjYmrAKBvvdsNA45Cbgj'+
	'S4oCDEJAPm520kAkbDrEcTgbndJBngDtYgpPSt4T0HADdvDAQIUcgAnP+rIZCdxKrsLm1wEtEM7F'+
	'O7XKwC6P1mLAIoQXbngigQAAOw==';

	var mapcs = Array ('  ','織田家','足利家','武田家','上杉家','徳川家','毛利家',
							 '伊達家','北条家','長宗我部家','島津家','豊臣家','最上家');

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
		//var pmsg = "";
		//for (var i = 0; i < dnmin.length; i++) {
		//	pmsg += "i:"+i+" "+num2diststr(dnmin[i])+","+dnorm[i]+"  "+num2diststr(dfmin[i])+","+dfall[i]+" "+num2diststr(dlmin[i])+","+dland[i]+"\n";
		//}
		//alert(pmsg);
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

	var dorejob = false;			//実行中フラグ
	var doreId;
	var dorecnt;
	//
	//
	//
	var rowDispFlag = false;
	var doreType = 0;	// 0:プロフィール 1:敵襲状況


	//
	//  どれ近のメイン処理
	//
	function calc_dorechika(dtype){
		if (dorejob) return;
		dorejob = true;
		doreType = dtype;

		profTeriDoneflag = false;
		pickJoshuProfData('http://' + window.location.host + '/user/', teridata);

		//alert('teridata.length='+teridata.length);
		dorecnt = 0;
		doreId = setInterval( function() { 
									dorecnt++;
									if (profTeriDoneflag) {
										clearInterval(doreId);
										if (doreType == 0) showDorechika_p();
										else               showDorechika_f();
										dorejob = false;
									} else if ( dorecnt > 120 ) {
										clearInterval(doreId);
										dorejob = false;
									}
									dorecnt;
								}, 500);
	}

	//
	// 画面の表に距離を付け加える プロフィール
	//
	function showDorechika_p() {
		var trs = $('div.common_box3bottom table tr.fs14');
		for (var i = 0; i < trs.length; i++) {
			var reg = trs.eq(i).find('a').eq(0).attr('href').match(/\?x=(-?[0-9]+)&y=(-?[0-9]+)&c=([0-9]+)/);
			ixaPos.setPosition(RegExp.$1,RegExp.$2,RegExp.$3);
			var s = ixaPos.dokochikaStr(teridata,0);		//近い所の距離を文字列化しものを得る
			trs.eq(i).find('td:last').text(s);
		}
	}

	//
	// 画面の表に距離を付け加える 敵襲状況
	//
	function showDorechika_f() {
		//$('table.ig_battle_table tr:nth-child(2)').find('td:last').text("aaa");
		var atwar = $('div#ig_battle_report_top p').text().match(/　(.+家)/);
		var warplace = RegExp.$1;
		var c = mapcs.indexOf(warplace).toString();
		var trs = $('div#ig_battle_report_mid table.ig_battle_table tr');
		for (var i = 1; i < trs.length; i++) {
			//var reg = trs.eq(i).find('td').eq(0).attr('href').match(/\((-?[0-9]+),(-?[0-9]+)\)$/);
			//alert( trs.eq(i).find('td').eq(3).text());
			var reg = trs.eq(i).find('td').eq(3).text().match(/\((-?[0-9]+),(-?[0-9]+)\)/);
			var x = RegExp.$1;
			var y = RegExp.$2;
			ixaPos.setPosition(x,y,c);
			var s = ixaPos.dokochikaStr(teridata,0);		//近い所の距離を文字列化しものを得る
			//alert(" x="+x+"\n y="+y +"\n s="+s);
			trs.eq(i).find('td:last').text(s);
		}
	}


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
				var tbltxt = getTags(html,"table","common_table1 center").toString();
				//var mts =getIxaHrefs(tbltxt);
				var trs = getClassTags(tbltxt,'tr','fs[0-9]+');
				//alert('tericount=' + tericount);
				var thisTr, s, re;
				var territ0 = 0;
				var ctp;
				for (var i = 0; i < trs.length; i++) {
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
					data[territ0+i] = new Territ(ttype, tname+textn, tpos, tpopu, tcond, ctp);
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
	
    function cmd_dorechika() {
		var tmp;
		if (document.URL.match('fight_history\.php')) {
			//tmp = '   <a href="javascript:void(0);" onclick="return false;" id="do_mukakin" style="color: #ff0000;">無課金同盟</a>':
			tmp = '<a href="javascript:void(0);" onclick="return false;" id="do_dorechika_f"><img src="' + gifdore + '" alt="どれ近" style="position: relative; top: 0px; right: 10px; float:right;"></a>';
		    $('div#ig_battle_report_top p').append(tmp);
		} else {
			tmp = '<a href="javascript:void(0);" onclick="return false;" id="do_dorechika_p"><img src="' + gifdore + '" alt="どれ近" style="position: relative; top: 0px; right: 10px;"></a>';
		    $('div.ig_decksection_top').eq(1).append(tmp);
		}
        $('#do_dorechika_f').live('click',function() {
			if (!rowDispFlag) {
				var tmp = '<th class="w30">距離</th>';
				$('table.ig_battle_table').find('tr:first').append(tmp);
				tmp = '<td>-</td>';
				$('table.ig_battle_table').find('tr td:last-child').after(tmp);
				rowDispFlag = true;
			}
			calc_dorechika(1);
			//setTimeout(calc_dokochika, 10);
        });
        $('#do_dorechika_p').live('click',function() {
			if (!rowDispFlag) {
				var tmp = '<th class="w30">距離</th>';
				$('div.common_box3bottom table').find('tr:first').append(tmp);
				tmp = '<td>*</td>';
				$('div.common_box3bottom table tr.fs14').find('td:last-child').after(tmp);
				rowDispFlag = true;
			}
			//alert('now clicked dorechika p');
			calc_dorechika(0);
        });
    }

	cmd_dorechika();

}

bara_addJQuery(dore_main);

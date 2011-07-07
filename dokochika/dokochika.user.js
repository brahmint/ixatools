// ==UserScript==
// @name           Dokochika
// @version        1.21
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    どこ近 Ver. 1.21
// @include        http://w0*.sengokuixa.jp/land.php?*
// @copyright      2011+, brahmint@gmail.com
// ==/UserScript==

// 一番近い近い拠点はどこ？
//
// 2011/06/27 1.0 初版 FireFox + GreaseMonkey でのみ動作
//                Chrome では DOMParserの部分でエラー
// 2011/06/28 1.1 Chrome 対応 DOMParserを使わない処理に書換
// 2011/06/29 1.2 land.php のURLにも対応
//                GM_xmlhttpRequest から $.ajax へ変更 (Chrome単独でも実行可)
// 2011/06/30 1.21 map.php はやめてland.phpでのみ動作に変更
//                 Chrome単独では mapのonmouseイベントに影響あるため

//
// Mokoと同じjQuery初期化
//


function chika_addJQuery(callback) {
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
	
	var gifdare = 'data:image/gif;base64,'+
	'R0lGODlhNwAYAPcAAP////f/9+7/7uX/5fD66+z55uL12b3/vbL/sq3/raT/pJn/mZX/lcPrsIv/'+
	'i4P/g77qqHz/fHL/crXmpWv/a7LlmWb/Zq3kkqvjj4XvhX/vf6bhiaThhXLvcpzee5XccZLbbp7U'+
	'g3zffI/ZanXfdYvYZJfSeZTRdmTfZIPWWofPh4zOalnfWXzTUXrTTXHPcXfSSnLQQ2vOOXnIUpC6'+
	'fHLGSGbMM4DAYHu/e4y5d23EQny+W4e3b2q/amK/YmTBNVe/V2+5SVK/Umu5Q4SscE6/ToKrbWS2'+
	'O3upZFqvWnOmWmesRFKvUk2vTW2kUmGqPGufa2ShRmKgQ1SfVFmdN0ifSFWcMkyZJlmPWVSRNUuP'+
	'SzmPOVl/WVx+S1N/U0+ENEqDLkp/SlZ8Q0B/QDp/OjV/NVhySlRxRlJwQkZvRj90JEtuOkRvREds'+
	'NEVsMjhvODRvNEFrLSxvLEhiPDhnIDNmGT1fPTJfMi1fLTJbHjhSKjFPMTRQJSBPICk/KSNAFSA/'+
	'ICFAEhk/GSk4ISM2GiI1GR40ExkyDR4vHhYvFiAqGxspFRgnEBQmCxAfEA8aCQwZBggPCAYMAwAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHAAAALAAAAAA3ABgA'+
	'AAj/AAEIHEiwoMGDCBMqJHgghQQbDFpYiJFggwIODFJESMEABIMRDzgoAOHARYQRC0pIcOEAhIIN'+
	'CzwkwPhhYsgDBx/IeFBhogQZExFYFDkiQgsGHz7GvOjAIccPD2JEKLEAgwIPVx2MsCBjZQQDBB+U'+
	'oBCD7AMYEmJYKJEAq1sHMB4kdasAQ8oILJOaLMFA5IeLEuzasGBDwkAFIxgM/kAhRYKaXTdEcCly'+
	'Q8aTEf56WOD37OSMElI8cMvAgwMPhAknEOhBrGIGGyjIIEOnTOEYKsRE4sFZwY4xbnxwhCnS9BIm'+
	'HEFEiLsjzKAXjjkQfijwJWgZDmwomDQpDwUbWyaN/1EUicZMHNxXbCx9cQEP7nhciFhz5xH3SZFQ'+
	'2C07WOBfkRJdEIEO3IVBRyJ59DEJGX+wIIMCRnDXwQgvUKHBXzB1wZ0WVNzHyBtZpBVBBQ9xJdAD'+
	'KcQUlR/3tQiIDlvoEIEMcgwSCXd6AMJdJMItABMaiJzQwySAUDWCBC08tMBg/QHAUQtNRTCHIJBw'+
	'B0ccSQyx0kMUGNIid47geNZpL0UQYSSAGAIIIYDkYUEKCMBgAQYCRRRlihXIMYkfLqAwByD2TdID'+
	'k3pyhwUHbBDJlxRj0DHGEUV8yR0gg13gk0AcLCCaSkc10p0CQew4iB85IIABC5JMIskLFSiAxiSE'+
	'PP/QQhj3+aDGJIEgYMYkbUz1nawRxCBQbx8YFcEP3DHBQQJIaHDkCE1l4OkkgkBUwR6TpIHRDkJ4'+
	'asUdk5QhgxeThKFcCxSUECwDAqVAJggPuJAEdzMwgIYdVygWbAaL3GdIaodMgsZFCcSg4xTcPSHB'+
	'rgODJFVrNpxYglwXMaDHJIxQMAR3TQzmLhjcCUIkCISJ7IUJUFyQQCGqTvLIQ2RM4oVfTUVlGADq'+
	'wntUCBu64AN3RKiGQQKPVHEGrEtKEHAjjhiSwRwtAqFSHQK35eN11bXGVwxjcHfDAzXc2OIYQKXA'+
	'BbUVPGBD12DysSN3jwhCiCCFrBkJTBapiylnTSnr8EUig1wE6hhqEuIHGBFZQPUhqnmABR1VtDAk'+
	'HjdgK+kkhThg0WYfCJTZVQqo61BimY6OIlKnfYeARC1U1dRKWpzLgBI9OCGEEj5EQUILEWCVlEAk'+
	'UjX0B6EZFVNM63Fk1QZvWrCBBJtBm5hGJTjAe/UUHXmUaChBMBBILdTVl1ERjcbUURNn6sFPCgwG'+
	'VGKake9QVzEgYFpi8KZQELQuLDBXRlECwfFEAy+UxKBE7otXXzgTkdBMp3ruOmDnDDIBBUAFK5ma'+
	'WP56oxy+TOyAg4mBAkQDAzJhRSUcaExGUKSABizkhTCMYUICAgA7';

	var giftomo = 'data:image/gif;base64,'+
	'R0lGODlhNwAYAPcAAP////H8//H5/973/+b1/9T3/9/y/8/s/5Lp/4nn/3vl/5zX/3Pj/2vh/5PU'+
	'/2Hf/4vR/1re/1Lc/0rb/33L/2TT70LZ/3PH/znX/2vE/zHW/2XH3ynU/2LA/yHT/z7L7xjR/1q9'+
	'/xDP/1K6/wjO/zq+3wDM/0q3/1iz7y6830Kz/zmw/wTA7yC53zmxzzGt/02pvxG231efzymp/yWt'+
	'zyGm/zqlvwCy3xij/1mXv0+crzGjvzqd3zWb3w2ozyihvxSh/yWgvxCf/wCmzxyevwic/0qMvRKd'+
	'v0CMvwCZ/wmavwOavzqKvweS7yiMzzuLnzGGvxGN3yGJzxSQrwCP7yiCvxiGzyGGnwWNryWCv0B5'+
	'nwCG3xqEnxl8vx55jw95vxt4jzdxfzptjzFwfxdyrzVrjwN0vydufz9mfz1lfyNtfwd0jxxrnwBy'+
	'jxZqfzNhfxJpfxthjyldfwRnfzRXbyFZfwBfnxRdbxVdby9VbytUbytVXwlZjxVQXwhPfw5PXwxP'+
	'XwBMfyFGTw5IbwNNXwVFbxdCXwBDbxk4PxA2PxsxPw81Pwg0PwIwTwAyPxAsPxcqLxEpLwgpPwgn'+
	'LwAmPwAmLwkgLwQeLw0bHwYaHwAZHwQUHwYNDwcMDwEMDwEJDwAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHAAAALAAAAAA3ABgA'+
	'AAj/AAEIHEiwoMGDCBMqHCggwQoRRSbMMIGDQYYHGSS88PBCwgkJKjRkaHACQw0PKiSs8FADw4kG'+
	'Fzsw6DBhhAkgIhEIKGhAgxAMFChCNCFEwcWRKjzMmPBRxYMOMC3MADHDowYcHFZEuBiiQQcLKoiC'+
	'OHlgIAENK0gIIYFDQw0ROEysmNmgaweTGj5ChZpxZcsRE2pknTByBEwRF4uYSCLCgMAGKiYkMXGC'+
	'xAsGNosg5vCyA0YJM1B66LyVpNvRGjliMNxBQggLNicnUSDw7grJhNXG8DPHDgghDUZsxfhARYs6'+
	'RJxIiPkUg5QpHU+w1MDjzCMXlzssFpFE4OcXIoRY/0jSAAooUFiSkGhJAShdJOe5vJjg2bOM84Bq'+
	'lJDTZ9N5UJ3EkEEEa00mUGcPTHSBBzgEcV4XIMRVBAhAEIUIHWOcF9kMLsH0gBjngdHFf5bcQYYI'+
	'QHhAAQiTCSGQBi88EMJVkJEwIig24OBBFDcAwUERQ/wn5BkldXTRG5GgsAMojKwAklIsRiCbCQLN'+
	'x+FGGSzGwnlxXCEJKJdwp1Ybg0ACCieKLNKFS25hwJcHOQDIiCSJPMLIICa8oEANJlwgEGgYbBRj'+
	'UC9gIuR5M1hQRBugVEIJKHl4FcFGt2Xhhh9wRLHEoeclotgFN4FQ26RoUSVBEWt8cp4mhdCQAQMX'+
	'KP+gCCiHVAKKGhTAgEIFTGAwwxn//cAHKI0okAYodXiQVhEazMABEH96dgIHoTXByHmK6JABBkmp'+
	'EKganILyxHlaSNCDEpeA8kUfoMxRRBigjCHdDCSswIEQElTpJkkm4QGKJ2ws10ASEiThARBM+fDG'+
	'eY46ssUeoCDyqhDXXnGeFSKgAcobkGGQ4ggaFCEQBitoYFhGXK7XLHcmJMqnZucxsRgJZpwHKwOP'+
	'gKLqJtzBAUoYUBV5lQgCrVRSVRmc94dgbwVFxQav1gBCBpqAIghjSRCC6Ad6CHnECiD4sTEDIWwF'+
	'mgciAyAjWhPggEEe53kiCSKPTHJesorNoMDCoGT/Qgkn5xWCgSHnAQ7KJo48knidnBzVwEqjbjtD'+
	'gh6UgQinljxRA2iLmRBI1edFwocIM9gAyh88CBIuKI9YMJJnIwg02lOPcwRCSq1tFFJVI2AQAgmz'+
	'TYS0VCx5Ma8ERuzAhBJIBFFFCs4a9pFAFCj7wAWYcUStBMKFwMF8842U5QsmZCBC2d6mRKmvyloA'+
	'BAMqmPqCBipE4IBABOwOE2FKSWQyRlKZwArcJKPwDMwEionMCGTUP/AIAS4KCAG3rPICAgykAN6q'+
	'wQNOMIEQSCRQnHkKqU5AvwgAgWWKEYJb6IMRiSgFgSIY4AswgAMRjGAABoHABn2HkQgMkIQviEDQ'+
	'IJQlQBqyDDgzbIldHvCQDlhmAvObQQMWsJAqWvGKCQkIADs=';

	var Territ = function ( ttype, tname, pos, population, cond, map) {
		this.ttype      = ttype;		//種類 (本領/所領)
		this.tname      = tname;		//名前
		this.pos        = pos;			//座標
		this.population = population;	//人口
		this.condition  = cond;			//状態
		this.map        = map;			//c
		this.toString = function() {
			return this.ttype + "," + 	this.tname + ",[" + this.pos + "]," + this.population + ","+ this.map;
		}
	}
	
	var txtFall  = "陥落中";
	var txtLand  = "領地";
	var txtNorm  = "通常拠点";
	var txtFalen = "陥落拠点";
	var txtDist  = "距離";
	var txtE  = "東";
	var txtNE = "北東";
	var txtN  = "北";
	var txtNW = "北西";
	var txtW  = "西";
	var txtSW = "南西";
	var txtS  = "南";
	var txtSE = "南東";
	var txtTo   = "へ";
	var txtFrom = "から";
	var teridata = new Array(1);
	var trcnt = 0;
	var tericount = 0;
	var profDoneflag = false;
	
	function calc_dokochika(){
		if (document.URL.match(/(map|land)\.php\?x=(-?[0-9]+)&y=(-?[0-9]+)(&type=[123])?&c=([0-9]+)/) != null) {
			var x = RegExp.$2;
			var y = RegExp.$3;
			var c = RegExp.$5;
			var utype = RegExp.$1;
			pickJoshuProfData('http://' + window.location.host + '/user/',showAdvice, x,y,c);
	
		} else {
			alert("ここはどこ？");
		}
	}
	
	// 城主プロフィール（自分の）から拠点データを収集する
	// callback は alertで結果を出したい場合に指定
	//    x,y,c は callbackする場合の攻撃先座標
	//
	function pickJoshuProfData(profUrl,callback,x,y,c) {
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
				profDoneflag = true;
				if (callback != null) {		//showAdvice(x,y,c);
						callback(x,y,c);
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax error');
				//console.log(textStatus);
			}
		});	
		return;
	}
	
	
	function showAdvice(x0,y0,c) {
		var s = "<<< ("+x0+","+y0+") への攻略検討 >>>";
		var cn = Number(c);
		var dnmin = 999;	//通常拠点最短距離
		var dlmin = 999;	//領地最短距離
		var dfmin = 999;	//陥落拠点最短距離
		var dpx = -1;
		var dnorm = -1;
		var dland = -1;
		var dfall = -1;
		var x,y,d;
		var pos;
		var px = -1;
		for (var i = 0; i < teridata.length; i++) {
			//alert("cn:"+cn + "  : "+ teridata[i].map);
			//try {
				if (cn == Number(teridata[i].map)) {	//同じマップの拠点であること
					pos = teridata[i].pos.split(",");
					x = parseFloat(pos[0]);
					y = parseFloat(pos[1]);
					d = Math.sqrt((x-x0)*(x-x0) + (y-y0)*(y-y0));
					if (teridata[i].condition == txtFall) {
						//alert(txtFall +" "+ i);
						if (d < dfmin) {
							dfmin = d;
							dfall = i;
						}
					} else if (teridata[i].ttype == txtLand) {
						//alert(txtLand +" "+ i);
						if (d < dlmin) {
							dlmin = d;
							dland = i;
						}
					} else {
						//alert(txtNorm +" "+ i);
						if (d < dnmin) {
							dnmin = d;
							dnorm = i;
						}
					}
					
				}
			//} catch(e) {
			//	alert("error i="+i + "\nterridata.length="+teridata.length);
			//}
		}
		if (dnmin <= dlmin) dlmin = 999;
		if (dnmin <= dfmin) dfmin = 999;
		if (dnmin < 999) {
			pos = teridata[dnorm].pos.split(",");
			x = parseFloat(pos[0]);
			y = parseFloat(pos[1]);
			s = s + "\n" + teridata[dnorm].tname + "("+ pos[0] + "," + pos[1] + ")"+txtFrom+pos2str(x,y,x0,y0);
		}
		if (dfmin < 999) {
			pos = teridata[dfall].pos.split(",");
			x = parseFloat(pos[0]);
			y = parseFloat(pos[1]);
			s = s + "\n[" + txtFalen +"]" + teridata[dfall].tname + "("+ pos[0] + "," + pos[1] + ")"+txtFrom+pos2str(x,y,x0,y0);
		}
		if (dlmin < 999) {
			pos = teridata[dland].pos.split(",");
			x = parseFloat(pos[0]);
			y = parseFloat(pos[1]);
			s = s + "\n["+ txtLand +"]" + teridata[dland].tname + "("+ pos[0] + "," + pos[1] + ")"+txtFrom+pos2str(x,y,x0,y0);
		}
		alert(s);
	}
	
	function pos2str(x0,y0,x1,y1) {
		var x = x1 - x0;
		var y = y1 - y0;
		var d = Math.sqrt(x*x + y*y);
		var s;
		var ss = null;
		if (x == 0.0 && y == 0.0) {
			ss = " " + txtDist + " " + num2str(d);
		} else if (x == 0.0) {
			if (y > 0.0) s = txtN;
			else         s = txtS;
		} else if (y == 0.0) {
			if (x > 0.0) s = txtE;
			else         s = txtW;
		} else {
			var v = Math.atan2(y,x);
			if (v < -Math.PI * 7/8) s = txtSW;
			else if (v <= -Math.PI * 5/8) s = txtSW;
			else if (v < -Math.PI * 3/8) s = txtS;
			else if (v <= -Math.PI /8) s = txtSE;		
			else if (v < Math.PI /8) s = txtE;
			else if (v <= Math.PI*3/8) s = txtNE;		
			else if (v < Math.PI * 5/8) s = txtN;
			else if (v <= Math.PI*7/8) s = txtNW;
			else s = txtW;
		}
		if (ss == null) {
			ss = " " + s + " " + txtTo + " " + txtDist + " " + num2str(d);
		}
		return ss;
	}
	
	function num2str(d) {
		var x = d * 100.0 + 1000000.5;
		var s = String(parseInt(x));
		s = s.substr(1);
		var len = s.length;
		s = s.substr(0,len-2) + "." + s.substr(len-2);
		while (s.substr(0,1) == "0") s = s.substr(1);
		if (s.substr(0,1) == ".") s = "0"+s;
		return s;
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
			tmp = '<a href="javascript:void(0);" onclick="return false;" id="do_dokochika"><img src="' + gifdoko + '" alt="どこ近" style="position: relative; top: +1px; "></a>';
	        $('div.ig_mappanel_function_mid').find('a:last').after(tmp);
		}
        $('#do_dokochika').live('click',function() {
			//calc_dokochika();
			setTimeout(calc_dokochika, 10);
			//alert('now clicked dokochika');
        });
    }

	cmd_dokochika();

}

chika_addJQuery(chika_main);

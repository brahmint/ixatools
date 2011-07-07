// ==UserScript==
// @name           Helpme
// @version        1.0
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    Helpme ver. 1.0 20110626
// @include        http://w013.sengokuixa.jp/village.php
// @copyright      2011+, brahmint@gmail.com
// ==/UserScript==

//新章13+14鯖 敵襲状況
//   
//
// 2011/06/04 1.0 初版リリース

// Mokoと同じjQuery初期化を使用
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

function helpme_main($) {
	
	var locationhost = "w013.sengokuixa.jp";		// w013専用
	//var locationhost = window.location.host;
	//alert(document.cookie);
	
	
	var lordname = getIdTagText(document.body.innerHTML, "li", "lordName");
	
	//alert('shortlord='+shortlord+'\njintorymode='+jintorymode);
	
	var AttackPlace = function( placename, pos, lord, frompos, fromlord, fromname, time, ext ) {
		this.placename = placename;	//場所名
		this.pos       = pos;		//座標
		this.lord      = lord;		//城主名
		this.frompos   = frompos;	//どこから（座標）
		this.fromlord  = fromlord;	//誰から
		this.fromname  = fromname;	//どこから（場所）
		this.time      = time;		//時刻
		this.ext       = ext;		//その他
		this.newflag   = true;		//新規フラグ
		this.double    = false;	//ダブり
		this.newer     = true;		//新しいから残すフラグ
		this.toString  = function() {
			return this.placename + ",("+this.pos + ")," + 	this.lord + "," + "("+this.frompos + ")," + this.fromlord + "," + this.fromname + ","
					+ this.time + "," + this.ext + "[" + this.newflag + ":" + this.double + ":" + this.newer + "]";
		}
	}
		
	//alert('jintory='+jintory);
	
	var atkDoneflag   = false;
	var mycount    = 0;
	var myattacks  = new Array(1);

	var utm = getUnixTime();
	var justnow = formatIxaTime(utm);

	if (document.body.innerHTML.match(/dmo=sortie/)) {		//攻撃中なら
		pickKougekiData('http://' + locationhost + '/facility/unit_status.php?dmo=enemy');  	//敵襲
		setKougekiViser( 3000 );
	}	
	
	
	// 時刻 hh:mm:ss → hh:mm へ
	function checkTime(str) {
		var e = str.match(/[0-9]+/g);
		if (!e) {
			return "";
		}
		if (e.length < 1 || e.length > 3) {
			return "";
		}
		var h = Number(e[0]);
		var m = 0;
		if (e.length > 1) {
			m = Number(e[1]);
		}
		var s = 0;
		if ( e.length == 3) {
			s = Number(e[2]);
			if (s > 0) m++;
		}
		if (m > 59) {
			m = 0;
			h++;
		}
		if (h > 23) {
			h = 0;
		}
		return (h+100).toString().substr(-2) +":" + (m+100).toString().substr(-2);
	}
	
	//全角数字・記号を半角に
	function zenToHan(s){
		var wd = s;
		if (s) {
			var zen = '０１２３４５６７８９－ー';
			var han = '0123456789--';
			for(var i = 0; i <zen.length; i++){
				var re = new RegExp(zen[i],"gm");
				wd = wd.replace(re,han[i]);
			}
		}
		return wd;
	}
	
	//敵襲の座標、獲得時刻データを得る
	function pickAttackedData(aUrl) {
		//alert('ajax');
		$.ajax({
			url: aUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				//alert('ajax get');
				var en = getTags(html,"div","ig_fightunit_title2");
				var s = getTags(html,"table","paneltable table_fightlist");
				mycount = 0;
				//var re = /<span>[0-9]+\-[0-9]+\-[0-9]+\s([0-9]+:[0-9]+:[0-9]+)/;
				for (var i = 0; i < s.length; i++) {
					var em = getTagText(en[i],"a");					
					var dm = s[i].match(/<span>[0-9]+\-[0-9]+\-[0-9]+\s([0-9]+:[0-9]+:[0-9]+:?[0-9]*)/);
					if (dm) {
						var placenm = "";
						var dt = checkTime(RegExp.$1);
						var ss = getClassTags(s[i], "td", "td_bggray");
						var fps = ss[0].match(/\s+\((\-*[0-9]+,\-*[0-9]+)\)/);
						var fpz = RegExp.$1;
						var tps = ss[1].match(/\s+\((\-*[0-9]+,\-*[0-9]+)\)/);
						var tpz = RegExp.$1;
						if (null == shortlord) { 
							myplaces[mycount] = new AttackPlace(placenm, tpz, lordname, fpz, lordname, "", dt, "");
						} else {
							myplaces[mycount] = new AttackPlace(placenm, tpz, shortlord, fpz, shortlord, "", dt, "");
						}
						//alert(myplaces[mycount].toString());
						mycount++;
					} else {
						//alert("i="+i);
					}
				}
				atkDoneflag = true;
				//GM_log("lordnn.toString():"+lordnn.toString());
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax error');
				//console.log(textStatus);
			}
		});	
		return;
	}
	
	
	
	// 時刻比較 dest > src ならば true
	function compTime(src, dest) {
		src.match(/([0-9]+):([0-9]+)/);
		var sh = Number(RegExp.$1);
		var sm = Number(RegExp.$2);
		dest.match(/([0-9]+):([0-9]+)/);
		var dh = Number(RegExp.$1);
		var dm = Number(RegExp.$2);
		var sx = sh*60 + sm;
		var dx = dh*60 + dm;
		if (dx > sx) {
			if ((dx - sx) >= 900) {  //１５時間以上差
				return false;
			} else {
				return true;
			}
		} else {
			if ((sx - dx) >= 900) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	function myCompTime(src,dest) {
		var ans = compTime( src, dest);
		alert(src + " ? " + dest + " = " + ans);
		return ans;
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
	
	function rmvComma( value ) {
		var re = /,/mg;
		return value.replace(re, "");
	}
	
	
	// innerHTML to URL
	function inURL(s) {
		var sub = s.split("href=\"");
		var sub2 = sub[1].split("\">");
		return sub2[0];
	}
	
	// XML assist
	
	function getBody(html){
	  var reg = new RegExp("<body((\\s|.)*)</body>", "ig");
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
	
	//function getTagText(html,tagName) {
	//	var reg = new RegExp("<" + tagName + "(\\s|.)*?>([^<]*)</" + tagName + ">", "i");
	//	var tag = html.match(reg);
	//	alert(tag.length);
	//	alert("tag="+tag);
	//	return (tag) ? RegExp.$2 : "";
	//}
	
	function getTags(html,tagName) {
		var reg = new RegExp("<" + tagName + "(\\s|.)*?>([^<]*)</" + tagName + ">", "ig");
		return html.match(reg);
	}
	
	function getTagText(html,tagName) {
		//var reg = new RegExp("<" + tagName + "(\\s|.)*?>([^<]*)</" + tagName + ">", "i");
		var reg = new RegExp("<" + tagName + "(\\s|.)*?>((\\s|.)*?)</" + tagName + ">", "i");
		var tag = html.match(reg);
		var txt = RegExp.$2;
		if (tag) {
			// 2重以上のタグ構造になってる場合を考慮
			var regsub = new RegExp("<([^>^\\s]+)(\\s|.)*?>((\\s|.)*?)</" + tagName + ">","i");
			var subtag = txt.match(regsub);
			if (subtag) {
				txt = getTagText(txt, RegExp.$1);
			}
			//reg = new RegExp("<" + tagName + "(\\s|.)*?><.*>([^<]*)<.*></" + tagName + ">", "i");
		}
		return (tag) ? txt : "";
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
	
	
	function getHref(html) {
		var src = '<a href="([^"]*)"';	//フル
		var ans = html.match(src,"i");
		return (ans && ans.length) ? RegExp.$1 : "";
	}
	
	function getAlt(html) {
		var src = '<img src="([^"]*)"(\\s|.)*?alt="([^"]*)"';	//フル
		var ans = html.match(src,"i");
		return (ans && ans.length) ? RegExp.$3 : "";
	}
	
	
	function replaceAmp(s) {
		return s.replace(/&amp;/g,'&');
	}
	
	function replaceBr(s) {
		return (s.replace(/<br>/g,'')).replace(/<br \/>/g,'');
	}
	
	function replaceWbr(s) {
		return s.replace(/<wbr>/g,'');
	}
	
	//
	// ixa-moko から一部拝借
	//
	function getUnixTime() {
		return ~~(new Date/1000);
	}
	
	function formatTime(sec) {
		var h = Math.floor(sec / 3600);
		var m = Math.floor((sec - h*3600 ) / 60 );
		var s = Math.floor(sec - h*3600 - m*60 );
		var tim = (((h+9) % 24)+100).toString().substr(-2) + ":" +
				  (m+100).toString().substr(-2)  + ":" +
				  (s+100).toString().substr(-2);
		return tim;
	}
	
	function formatIxaTime(sec) {
		var h = Math.floor(sec / 3600);
		var m = Math.floor((sec - h*3600 ) / 60 );
		var s = Math.floor(sec - h*3600 - m*60 );
		var tim = (((h+9) % 24)+100).toString().substr(-2) + ":" +
				  (m+100).toString().substr(-2);
		return tim;
	}

}

bara_addJQuery(helpme_main);

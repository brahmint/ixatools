// IXA-報告書（領主名）
// 2010-11-11 初期バージョン
var	userAgent = 'Mozilla/5.0 (Windows; U; Windows NT 6.0; ja; rv:1.9.2.12) Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729; .NET4.0E)';
var gotland;

jsa_IXA_ReportL();

function jsa_IXA_ReportL(){
	if(!_jsaCScript.context.onLink) return;
	var lnkURL = _jsaCScript.context.link.href;	
	var pos = lnkURL.indexOf("land.php");
	if (pos < 0) return;
	if (lnkURL.match(/x=(-?[0-9]+)&y=(-?[0-9]+)&c=([0-9]+)/) != null) {
		var x = RegExp.$1;
		var y = RegExp.$2;
		var c = RegExp.$3;
		var kw = 'x='+x.toString()+'&amp;y='+y.toString()+'&amp;c='+c.toString()+'" title="(.+)" alt="(.+)" onmouseover="(.+)"';
		var fd = window.document.body.innerHTML.match(kw);
		if (fd != null) {
			var ttl = RegExp.$1;
			var alt = RegExp.$2;
			var omo = RegExp.$3;
			kw = "rewrite\\('([^']+)', '([^']+)', '([^']+)', '([^']+)', '([^']+)'";
			var ra = omo.match(kw);
			if (ra != null) {
				var pname = RegExp.$1;  //領地名称
				var lname = RegExp.$2;  //城主
				var population = RegExp.$3;  //人口
				var pos = RegExp.$4;    //座標
				pos = pos.substring(1,pos.length-1);
				var alli = RegExp.$5;   //同盟名
				if (lname.match(/\s/) == null) {
					//http://w014.sengokuixa.jp/user/ranking.php?m=war_point&find_rank=&find_name=xxxxx&c=0
					var landURL = 'http://' + window.location.host + '/land.php?x=' + x + '&y=' + y + '&c=' + c;
					//gBrowser.loadOneTab(profURL,null,null,null,false,true);
					gotland = false;
					alert(landURL);
					requestLand(landURL);
				}
			} else {
				alert("cannot split");  //普通は起こらないはず
			}
		} else {
			alert("not match");  //普通は起こらないはず
		}
	}else {
		alert("no match");  //普通は起こらないはず
	}
}

function requestLand(url) {
	var req = new XMLHttpRequest();
	req.open('GET', encodeURI(url), true);
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
				gotland = true;
				var ldt = getClassTags(req.responseText, "div", "ig_mappanel_dataarea");
				if (ldt) {
					var cc = getHrefs(ldt[0]);
					var alli     = getHrefText(cc[1]);
					var aliiLink = getHref(cc[1]);
					//alert("ldt != null ;"+joshuProfLink);
					var url = 'http://' + window.location.host + alliLink;
					alert(url);
					//alert("url:"+url);
					gBrowser.loadOneTab(url,null,null,null,false,true);
				} else {
					alert("ldt == null");
				}
			} else {
				alert(" Error loading land page\n");
			}
		}
	};
	req.send(null); 

	return;
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

function getClassTags(html, tagName, className){
  var cls = "";
  if(className){
    cls = '[^>]*?class="' + className + '"';
  }
  //alert("cls="+cls);
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

function getHrefs(html) {
	var src = '<a href="(\\s|.)*?>([^<]*)</a>';	//フル
	var ans = html.match(src,"ig");
	return ans;
}

function getHref(html) {
	var src = '<a href="([^"]*)"';	//フル
	var ans = html.match(src,"ig");
	return (ans && ans.length) ? RegExp.$1 : "";
}

function getHrefText(html) {
	var src = '<a href="(\\s|.)*?>([^<]*)</a>';	//フル
	var ans = html.match(src,"ig");
	return (ans && ans.length) ? RegExp.$2 : "";
}

function replaceAmp(s) {
	return s.replace(/&amp;/g,'&');
}

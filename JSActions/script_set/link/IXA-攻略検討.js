// IXA-攻略検討（拠点）
// 2010/12/16 1.0

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

var txtTTL   = _jsaCScript.convertCharCodeTo("<<<攻略検討>>>","shift_jis");
var txtFall  = _jsaCScript.convertCharCodeTo("陥落中","shift_jis");
var txtLand  = _jsaCScript.convertCharCodeTo("領地","shift_jis");
var txtNorm  = _jsaCScript.convertCharCodeTo("通常拠点","shift_jis");
var txtFalen = _jsaCScript.convertCharCodeTo("陥落拠点","shift_jis");
var txtDist  = _jsaCScript.convertCharCodeTo("距離","shift_jis");
var txtE  = _jsaCScript.convertCharCodeTo("東","shift_jis");
var txtNE = _jsaCScript.convertCharCodeTo("北東","shift_jis");
var txtN  = _jsaCScript.convertCharCodeTo("北","shift_jis");
var txtNW = _jsaCScript.convertCharCodeTo("北西","shift_jis");
var txtW  = _jsaCScript.convertCharCodeTo("西","shift_jis");
var txtSW = _jsaCScript.convertCharCodeTo("南西","shift_jis");
var txtS  = _jsaCScript.convertCharCodeTo("南","shift_jis");
var txtSE = _jsaCScript.convertCharCodeTo("南東","shift_jis");
var txtTo   = _jsaCScript.convertCharCodeTo("へ","shift_jis");
var txtFrom = _jsaCScript.convertCharCodeTo("から","shift_jis");
var teridata = new Array(1);
var trcnt = 0;
var tericount = 0;

jsa_IXA_ReportAtack();

function jsa_IXA_ReportAtack(){
	if(!_jsaCScript.context.onLink) return;
	var lnkURL = _jsaCScript.context.link.href;	
	var idx = lnkURL.indexOf("land.php");
	if (idx >= 0) {
		if (lnkURL.match(/land.php\?x=(-?[0-9]+)&y=(-?[0-9]+)&c=([0-9]+)/) != null) {
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
					pos = pos.substring(1,pos.length-1);  //括弧を外す
					var alli = RegExp.$5;   //同盟名
					pickJoshuProfData('http://' + window.location.host + '/user/',x,y,c);
				} else {
					alert("cannot split");  //普通は起こらないはず
				}
			} else {
				alert("not match");  //普通は起こらないはず
			}
		}
	} else {
		;
	}
}

function pickJoshuProfData(profUrl,x,y,c) {
	var req = new XMLHttpRequest();
	req.open('GET', profUrl, true);
	req.setRequestHeader('User-agent', navigator.userAgent);
	req.setRequestHeader('Accept','application/atom+xml,application/xml,text/xml');
	//	onload: function(responseDetails) {
	//		var table = getTags(responseDetails.responseText,"div","ig_battle_damagelist1");
	//		alert(table);
	//	}
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if(req.status == 200) {
				//alert("get!!!");
				var tbltxt = getTags(req.responseText,"table","common_table1 center").toString();
				//alert(tbltxt);  //コード表示
				//"/land.php?x=28&amp;y=-25&amp;c=12"
				//var mts = tbltxt.match(/land.php\?x=(-?[0-9]+)&y=(-?[0-9]+)&c=([0-9]+)/,"g");
				var mts =getIxaHrefs(tbltxt);
				var table = '<?xml version="1.0" encoding="UTF-8" ?><field>'
							 +getTags(replaceNbsp(req.responseText),"table","common_table1 center").toString()
							 + "</field>";
				var parser = new DOMParser();
				var xmldoc = parser.parseFromString(table,"text/xml");
				var trLinks = xmldoc.evaluate(
				'//tr[@class]',
				xmldoc,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);
				tericount = trLinks.snapshotLength;
				//alert('tericount=' + tericount);
				var thisLink, s, re;
				var territory = new Array(4);
				var territ0 = 0;
				var ctp;
				trcnt += tericount;
				for (var i = 0; i < tericount; i++) {
					thisLink = trLinks.snapshotItem(i);
					//alert("thisLink"+i.toString()+":"+thisLink.attributes.length);
					//GM_log("thisLink"+i.toString()+";"+thisLink.textContent);
					re = /\n\t/gm;
					s = thisLink.textContent.replace(re, "\t");
					s = trim(rmvTabs(s));
					re = /\t(\-*\d+,\-*\d+)\t/;
					s = s.replace(re, "\t$1\t");
					re = /\t(\(\u672C\u62E0\u5730\))\t/;	//本拠地
					s = s.replace(re, "$1\t");
					territory = s.split("\t");	//種類、名前、座標、人口
					ctp = ctype(mts[i*2 + 1]);	//c=1～12
					//alert("i="+i+"\nterritory="+territory);
					teridata[territ0+i] = new Territ(territory[0], territory[1], territory[2], territory[3], territory[4], ctp);
					//alert(teridata[territ0+i].toString());
				}
			} else {
				alert( "#" + n + " Error loading page\n");
			}
			showAdvice(x,y,c);
		}
	};
	req.send(null); 

	return;
}


function showAdvice(x0,y0,c) {
	var s = txtTTL;
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


function ctype(url) {
	var re = 'c=([0-9]+)$';
	url.match(re);
	return RegExp.$1;
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
	var ans = html.match(src,"ig");
	return (ans && ans.length) ? RegExp.$1 : "";
}


function replaceAmp(s) {
	return s.replace(/&amp;/g,'&');
}

function replaceNbsp(s) {
	return s.replace(/&nbsp;/g,' ');
}

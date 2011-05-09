// IXA-合戦報告書被害兵数集計

var Report = function(no, bh, wl, url, datetime) {
	this.no = no;				//number
	this.bh = bh;				//攻撃／防御 b/h
	this.wl = wl;				//勝ち負け w/l
	this.url = url;				//URL
	this.dt  = datetime;		//日時
	this.b_alli = null;		//攻撃 同盟名
	this.b_alli_lnk = null;	//     同盟名リンク
	this.b_name = null;		//     名称
	this.b_name_lnk = null;	//     名称リンク
	this.b_place = null;		//     拠点
	this.b_place_lnk = null;	//     拠点リンク
	this.b_lance = 0;			//攻撃 槍
	this.b_bowman = 0;			//　　 弓兵
	this.b_horse = 0;			//　　 騎馬
	this.b_weapon = 0;			//　　 器
	this.h_alli = null;		//攻撃 同盟名
	this.h_alli_lnk = null;	//　　 同盟名リンク
	this.h_name = null;		//     名称
	this.h_name_lnk = null;	//     名称リンク
	this.h_place = null;		//     拠点
	this.h_place_lnk = null;	//     拠点リンク
	this.h_lance = 0;			//防御 槍
	this.h_bowman = 0;			//　　 弓兵
	this.h_horse = 0;			//　　 騎馬
	this.h_weapon = 0;			//　　 器
	this.done = 0;				//検索終了
}

var reports;
var reportscount;
var repcount;
var repflag;
var urltop;

jsa_IXA_ReportAnalyse();

function jsa_IXA_ReportAnalyse(){
	
	urltop = 'http://' + window.location.host + '/war/';
	
	if (document.URL.indexOf(urltop + 'list.php') < 0) {
		alert(_jsaCScript.convertCharCodeTo("合戦報告書一覧のページではありません","shift_jis"));
		return;
	}
	
	reports = new Array(0);
	repcount = 0;
	repflag = true;
	
	GetReportsTitlesSource();
	
	function GetReportsTitlesSource() {
		var dom = document.evaluate(
		'//table[@class="ig_battle_table"]',
		document,
		null,
		XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
		null);
		var icount = dom.snapshotLength;

		var ss = dom.snapshotItem(0).getElementsByTagName("td");
		reportscount = ss.length / 3;
		for (var i = 0; i < reportscount; i++) {
			reports[i] = new Report(i, (getSrc(ss[i*3].innerHTML,0).indexOf("battle") < 0) ? "h":"b", 
										(getSrc(ss[i*3+1].innerHTML,0).indexOf("win") < 0) ? "l":"w",
										replaceAmp(getHref(ss[i*3+1].innerHTML)), trim(ss[i*3+2].textContent));
			RequestAReport(i);
		}
	}
}

function showReports() {
	var fr_lance = 0, fr_bowman = 0, fr_horse = 0, fr_weapon = 0;
	var en_lance = 0, en_bowman = 0, en_horse = 0, en_weapon = 0;
	for (var i = 0; i < reportscount; i++) {
		if ("b" == reports[i].bh) {
			fr_lance  += reports[i].b_lance;
			fr_bowman += reports[i].b_bowman;
			fr_horse  += reports[i].b_horse;
			fr_weapon += reports[i].b_weapon;
			//alert("b:" + i + "\n" + reports[i].b_lance + "\n" + reports[i].b_bowman + "\n" + reports[i].b_horse + "\n" + reports[i].b_weapon + "\n");
			//alert("b:" + i + "\n" + (0 + reports[i].b_lance + reports[i].b_bowman + reports[i].b_horse + reports[i].b_weapon).toString() + "\n");
			en_lance  += reports[i].h_lance;
			en_bowman += reports[i].h_bowman;
			en_horse  += reports[i].h_horse;
			en_weapon += reports[i].h_weapon;
		} else {
			fr_lance  += reports[i].h_lance;
			fr_bowman += reports[i].h_bowman;
			fr_horse  += reports[i].h_horse;			
			fr_weapon += reports[i].h_weapon;			
			//alert("h:" + i + "\n" + reports[i].h_lance + "\n" + reports[i].h_bowman + "\n" + reports[i].h_horse + "\n" + reports[i].h_weapon + "\n");
			//alert("h:" + i + "\n" + (0 + reports[i].h_lance + reports[i].h_bowman + reports[i].h_horse + reports[i].h_weapon).toString() + "\n");
			en_lance  += reports[i].b_lance;
			en_bowman += reports[i].b_bowman;
			en_horse  += reports[i].b_horse;			
			en_weapon += reports[i].b_weapon;			
		}	
	}
	var fr_total = fr_lance + fr_bowman + fr_horse + fr_weapon;
	var en_total = en_lance + en_bowman + en_horse + en_weapon;
	var s = "味方兵損失 " + numFormat(fr_total, 9) + "\n";
	s += "槍 " + numFormat(fr_lance, 9) + "\n";
	s += "弓 " + numFormat(fr_bowman, 9) + "\n";
	s += "騎 " + numFormat(fr_horse, 9) + "\n";
	s += "器 " + numFormat(fr_weapon, 9) + "\n\n";
	s += "敵兵損失 " + numFormat(en_total, 9) + "\n";
	s += "槍 " + numFormat(en_lance, 9) + "\n";
	s += "弓 " + numFormat(en_bowman, 9) + "\n";
	s += "騎 " + numFormat(en_horse, 9) + "\n";
	s += "器 " + numFormat(en_weapon, 9) + "\n\n";
	s = _jsaCScript.convertCharCodeTo(s,"shift_jis"); 
	alert(s);
}


function _numFormat(n) {
	var s = "" + n;
	s = s.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	return s;
}

function numFormat(n, digits) {
	var s = _numFormat(n);
	if (s.length < digits) {
		s = ("            ").substr(0, digits - s.length - 1) + s;
	}
	return s;
}

function RequestAReport(n) {
	var req = new XMLHttpRequest();
	req.open('GET', urltop + reports[n].url, true);
	req.setRequestHeader('User-agent', navigator.userAgent);
	req.setRequestHeader('Accept','application/atom+xml,application/xml,text/xml');
	//	onload: function(responseDetails) {
	//		var table = getTags(responseDetails.responseText,"div","ig_battle_damagelist1");
	//		alert(table);
	//	}
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if(req.status == 200) {
				//GM_log("table:"+table);
				var ids = getClassTags(req.responseText, "div", "ig_battle_damagelist2");
				reports[n].b_lance   = eval(rmvComma(getTagText(ids[0],"div")));
				reports[n].h_lance   = eval(rmvComma(getTagText(ids[1],"div")));
				ids = getClassTags(req.responseText, "div", "ig_battle_damagelist3");
				reports[n].b_bowman  = eval(rmvComma(getTagText(ids[0],"div")));
				reports[n].h_bowman  = eval(rmvComma(getTagText(ids[1],"div")));
				ids = getClassTags(req.responseText, "div", "ig_battle_damagelist4");
				reports[n].b_horse   = eval(rmvComma(getTagText(ids[0],"div")));
				reports[n].h_horse   = eval(rmvComma(getTagText(ids[1],"div")));
				ids = getClassTags(req.responseText, "div", "ig_battle_damagelist5");
				reports[n].b_weapon  = eval(rmvComma(getTagText(ids[0],"div")));
				reports[n].h_weapon  = eval(rmvComma(getTagText(ids[1],"div")));
				var tbl = getClassTags(req.responseText, "div", "ig_battle_reportunit");
				ids = getAttrTags(tbl[0], "a", "href", "");
				reports[n].b_alli      = getTagText(ids[0],"a");
				reports[n].b_alli_lnk  = getHref(ids[0]);
				reports[n].b_name      = getTagText(ids[1],"a");
				reports[n].b_name_lnk  = getHref(ids[1]);
				reports[n].b_place     = getTagText(ids[2],"a");
				reports[n].b_place_lnk = getHref(ids[2]);
				ids = getAttrTags(tbl[1], "a", "href", "");
				reports[n].h_alli      = getTagText(ids[0],"a");
				reports[n].h_alli_lnk  = getHref(ids[0]);
				reports[n].h_name      = getTagText(ids[1],"a");
				reports[n].h_name_lnk  = getHref(ids[1]);
				reports[n].h_place     = getTagText(ids[2],"a");
				reports[n].h_place_lnk = getHref(ids[2]);
				repcount++;
			} else {
				alert( "#" + n + " Error loading page\n");
				repflag = false;
			}
			if (repcount == reportscount) {
				showReports();
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


function getHref(html) {
	var src = '<a href="([^"]*)"';	//フル
	var ans = html.match(src,"ig");
	return (ans && ans.length) ? RegExp.$1 : "";
}


function replaceAmp(s) {
	return s.replace(/&amp;/g,'&');
}


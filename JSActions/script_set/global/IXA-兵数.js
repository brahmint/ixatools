// IXA-兵数集計
// 2011/05/03 カード200枚に対応

var soldiers = new Array(9);

jsa_IXA_SoldiersCount();

function jsa_IXA_SoldiersCount(){
	
	urltop = 'http://' + window.location.host + '/facility/set_unit_list.php?show_num=100';
	
	if (document.URL.indexOf('.sengokuixa.jp') < 0) {
		alert(_jsaCScript.convertCharCodeTo("戦国IXAのページではありません","shift_jis"));
		return;
	}
	
	soldiers[0] = 0;
	soldiers[1] = 0;
	soldiers[2] = 0;
	soldiers[3] = 0;
	soldiers[4] = 0;
	soldiers[5] = 0;
	soldiers[6] = 0;
	soldiers[7] = 0;
	soldiers[8] = 0;
	soldiers[9] = 0;
	soldiers[10] = 0;
	soldiers[11] = 0;
	soldiers[12] = 0;
	soldiers[13] = 0;
	
	RequestSoldiers(urltop);
	
}

function setSoldierNum(atype, no) {
	//alert(atype + ":" + no);
	var stype = _jsaCScript.convertCharCodeFrom(atype,"shift_jis");
	var num = parseInt(no);
	switch (stype) {
		case '':
		break;
	case '足軽':
		soldiers[0] += num;
		break;
	case '長槍足軽':
		soldiers[1] += num;
		break;
	case '武士':
		soldiers[2] += num;
		break;
	case '弓足軽':
		soldiers[3] += num;
		break;
	case '長弓兵':
		soldiers[4] += num;
		break;
	case '弓騎馬':
		soldiers[5] += num;
		break;
	case '騎馬兵':
		soldiers[6] += num;
		break;
	case '精鋭騎馬':
		soldiers[7] += num;
		break;
	case '赤備え':
		soldiers[8] += num;
		break;
	case '破城槌':
		soldiers[9] += num;
		break;
	case '攻城櫓':
		soldiers[10] += num;
		break;
	case '大筒兵':
		soldiers[11] += num;
		break;
	case '鉄砲足軽':
		soldiers[12] += num;
		break;
	case '騎馬鉄砲':
		soldiers[13] += num;
		break;
	default:
		alert(atype + _jsaCScript.convertCharCodeTo("が見つかりません","shift_jis"));
	}
	
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

function RequestSoldiers(url) {
	var req = new XMLHttpRequest();
	req.open('GET', url, true);
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
				var tbl = getClassTags(req.responseText, "table", "common_table1 center mt10");
				var tds = getClassTags(tbl[0],"td","");
				var pgs = getClassTags(req.responseText, "li","last");
				var pg2 = -1;
				if (pgs.length != 0) {
					pg2 = pgs[0].indexOf("show_num=100&amp;p=2");	//最初のページで101枚以上カードがあるかチェック
				}
				for (var i = 0; i < tds.length/7; i++) {
					var s = tds[i*7 + 3];
					//alert(i + ":\n" + s);
					var alt = getAlt(s);
					var units = getIdTagText(s, "span", "now_unit_cnt_[0-9]+");
					var leads = getIdTagText(s, "span", "lead_unit_[0-9]+");
					//alert(alt + "\n" + units + "\n" + leads);
					setSoldierNum(alt,units);
				}
				if (pg2 != -1) {	//first pageで２ページ目がある場合
					RequestSoldiers(urltop+"&p=2");
				} else {	// last page の場合（１ページしかない場合も含む）
					alert(	_jsaCScript.convertCharCodeTo("足軽　　","shift_jis") + ":" + soldiers[0] + "\n" +
							_jsaCScript.convertCharCodeTo("長槍足軽","shift_jis") + ":" + soldiers[1] + "\n" +
							_jsaCScript.convertCharCodeTo("武士　　","shift_jis") + ":" + soldiers[2] + "\n" +
							_jsaCScript.convertCharCodeTo("弓足軽　","shift_jis") + ":" + soldiers[3] + "\n" +
							_jsaCScript.convertCharCodeTo("長弓兵　","shift_jis") + ":" + soldiers[4] + "\n" +
							_jsaCScript.convertCharCodeTo("弓騎馬　","shift_jis") + ":" + soldiers[5] + "\n" +
							_jsaCScript.convertCharCodeTo("騎馬兵　","shift_jis") + ":" + soldiers[6] + "\n" +
							_jsaCScript.convertCharCodeTo("精鋭騎馬","shift_jis") + ":" + soldiers[7] + "\n" +
							_jsaCScript.convertCharCodeTo("赤備え　","shift_jis") + ":" + soldiers[8] + "\n" +
							_jsaCScript.convertCharCodeTo("破城槌　","shift_jis") + ":" + soldiers[9] + "\n" +
							_jsaCScript.convertCharCodeTo("攻城櫓　","shift_jis") + ":" + soldiers[10] + "\n" +
							_jsaCScript.convertCharCodeTo("大筒兵　","shift_jis") + ":" + soldiers[11] + "\n" +
							_jsaCScript.convertCharCodeTo("鉄砲足軽","shift_jis") + ":" + soldiers[12] + "\n" +
							_jsaCScript.convertCharCodeTo("騎馬鉄砲","shift_jis") + ":" + soldiers[13] + "\n" +
							"------------------------------------\n" +
							_jsaCScript.convertCharCodeTo("合計　　","shift_jis") + ":" +
															(0 + soldiers[0] + soldiers[1] + soldiers[2] + soldiers[3] + 
															soldiers[4] + soldiers[5] + soldiers[6] + soldiers[7] +
															soldiers[8] + soldiers[9] + soldiers[10] + soldiers[11] +
															soldiers[12] + soldiers[13] ).toString()
					);
				}
			} else {
				alert( "#" + n + " Error loading page\n");
				repflag = false;
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

function getAlt(html) {
	var src = '<img src="([^"]*)"(\\s|.)*?alt="([^"]*)"';	//フル
	var ans = html.match(src,"ig");
	return (ans && ans.length) ? RegExp.$3 : "";
}


function replaceAmp(s) {
	return s.replace(/&amp;/g,'&');
}


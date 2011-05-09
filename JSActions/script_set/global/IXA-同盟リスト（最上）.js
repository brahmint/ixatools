// IXA-兵数集計
// 2011/05/03 カード200枚に対応

var soldiers = new Array(9);

jsa_IXA_SoldiersCount();

function jsa_IXA_SoldiersCount(){
	
	urltop = 'http://' + window.location.host + '/alliance/list.php?c=12&p=';
	
	if (document.URL.indexOf('.sengokuixa.jp') < 0) {
		alert(_jsaCScript.convertCharCodeTo("戦国IXAのページではありません","shift_jis"));
		return;
	}
	
	RequestDoumei(urltop,1);
	
}


function RequestDoumei(urlbase, num) {
	var url = urlbase + num;
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
				//alert(tbl);
				var pager = getClassTags(req.responseText, "ul", "pager")
				alert(pager);
				var span = getTagText(pager,"span");
				alert(span);
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

//function getTagText(html,tagName) {
//	var reg = new RegExp("<" + tagName + "(\\s|.)*?>([^<]*)</" + tagName + ">", "i");
//	var tag = html.match(reg);
//	alert(tag.length);
//	alert("tag="+tag);
//	return (tag) ? RegExp.$2 : "";
//}

function getTagText(html,tagName) {
	alert("html="+html+"\n"+"tagName="+tagName);
	var reg = new RegExp('<' + tagName + '>([^<]*)</' + tagName + '>', 'ig');
	var tag = html.match(reg);
	alert(tag.length);
	alert("tag="+tag);
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


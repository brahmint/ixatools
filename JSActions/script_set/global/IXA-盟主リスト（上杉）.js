// IXA-盟主リスト

var Territ = function ( ttype, tname, pos, population) {
	this.ttype      = ttype;       //種類 (本領/所領/陣/出城/領地)
	this.tname      = tname;       //名前
	this.pos        = pos;         //座標
	this.population = population;  //人口/所属土地
}
var trcnt = 0;
var gtcnt = 0;
var trtbl = new Array(1);
var Lord = function( rank, lnk, joshuname, points, tribute, level, trnum, attl, trnow) {
	this.rank      = rank;		//同盟内順位
	this.lnk       = lnk;		//プロフィールへのリンク
	this.joshuname = joshuname;	//城主名
	this.senkou    = 0;			//戦功
	this.points    = points;	//同盟ポイント
	this.tribute   = tribute;	//総貢物数
	this.level     = level;		//城主レベル
	this.trnum     = trnum;		//拠点数
	this.attl      = attl;		//役職
	this.trptr     = trnow;		//拠点データの配列番号
	this.toString = function() {
		return this.rank + "," + 	this.lnk + "," + this.joshuname + "," + this.points + "," +
		 	    this.tribute + "," + this.level + "," + this.trnum + "," + this.attl;
	}
}

var Alli = function( alliname, rank, lnk, leader, leadersprof, members, senkou, atktotal, deftotal, poputotal, totallyp, allinow) {
	this.alliname    = alliname;	//同盟名称
	this.rank        = rank;		//同盟の順位
	this.lnk         = lnk;		    //同盟情報へのリンク
	this.leader      = leader;	    //盟主名
	this.leadersprof = leadersprof;	//盟主のプロフィール
	this.palacename  = "";			//本領名
	this.palacepos   = "";         //盟主の本領座標
	this.palacepopu  = "";			//盟主の本領人口
	this.members     = members;		//同盟員数
	this.senkou      = senkou;     //戦功
	this.pointstotal = 0;          //同盟ポイント
	this.atktotal    = atktotal;   //攻撃P
	this.deftotal    = deftotal;	//防御P
	this.poputotal   = poputotal;	//人口
	this.totallyp    = totallyp;   //総合
	this.allipx      = allinow;		//同盟データの配列番号
	this.toString = function() {
		return this.rank + "," + 	this.lnk + "," + this.leader + "," + this.leadersprof + "," + this.senkou + "," +
		 	    this.atktotal + "," + this.deftotal + "," + this.poputotal + "," + this.totallyp + "," + this.allipx;
	}

}

var pgMax = 10;       // 表示する同盟の頁数、同盟数としてはこの10倍になる
var alliance = new Array(pgMax * 10);
var doneflg = new Array(pgMax);
var profcount = 0;
var allicount = 0;
var doumeiViserCount = 10;
var profViserCount = 20;
var alliViserCount = 20;
var intervalTime = 3000;	// msec

//var HONRYO = "\u672C\u9818";  //本領
//var SHORYO = "\u6240\u9818";  //所領
//var DEJIRO = "\u51FA\u57CE";  //出城
var lords = new Array(1);
var lordcount;     //同盟員の数


jsa_IXA_SoldiersCount();

function jsa_IXA_SoldiersCount(){

	if (document.URL.indexOf('.sengokuixa.jp') < 0) {
		alert(_jsaCScript.convertCharCodeTo("戦国IXAのページではありません","shift_jis"));
		return;
	}

	
	var urltop = 'http://' + window.location.host + '/alliance/list.php?c=4&p=';
		
	//alert("alliance[0].alliname="+alliance[0].alliname);
	
	for (var i=0; i<pgMax; i++) {
		doneflg[i] = false;
		requestDoumeiRank(urltop,i+1);
	}
	setDoumeiViser(intervalTime);
}

// 同盟ランキングの頁データが全部読み込まれたかをチェック
function checkDoumeiDatas()
{
	doumeiViserCount--;
	//alert("doumeiViserCount="+doumeiViserCount);
	if (doumeiViserCount >= 0) {
		var cnt = 0;
		for (var i = 0; i < pgMax; i++) {
			if (doneflg[i]) cnt++;
		}
		if (cnt < pgMax) {
			//alert("cnt="+cnt);
			return;			//全部読み込んでない
		}
		clearDoumeiViser();	//インターバル解除
		//alert("all alliance read");
		for (var i = 0; i < 10*pgMax; i++) {
			requestLeadersProf(i);
		}
		setProfViser(intervalTime);
	} else {
		clearDoumeiViser();
	}
	return;
}

// プロフィールの頁データが全部読み込まれたかをチェック
function checkProfDatas()
{
	profViserCount--;
	//alert("profViserCount="+profViserCount);
	if (profViserCount >= 0) {
		//alert("profViserCount="+profViserCount);
		if (profcount < pgMax*10) {
			return;   //全部読み込んでいない
		}
		clearProfViser();
		//alert("all profile read");
		for (var i = 0; i < 10*pgMax; i++) {
			requestAlliInfo(i);
		}
		setAlliViser();
	} else {
		clearProfViser();
	}
	return;
}


// 同盟情報の頁データが全部読み込まれたかをチェック
function checkAlliDatas()
{
	alliViserCount--;
	//alert("alliViserCount="+alliViserCount);
	if (alliViserCount >= 0) {
		//alert("alliViserCount="+alliViserCount);
		if (allicount < pgMax*10) {
			return;   //全部読み込んでいない
		} else {
			clearAlliViser();
		}
		alert("all alliance info read");
		writeToTable();
	} else {
		clearAlliViser();
	}
	return;
}


//HTMLコードを書き出す
function writeToTable()
{
	// get the reference for the body
	var body = document.getElementsByTagName("body")[0];

	// creates a <table> element and a <tbody> element
	var tbl     = document.createElement("table");
	var tblBody = document.createElement("tbody");
	var hrow = document.createElement("tr");
	var htitle = new Array("順位","城主名","プロフィールリンク","同盟名","同盟員","同盟ポイント","戦功","本領名","座標","人口");
	var hwidth = new Array(100,     200,        300,              200,     100,    100,           200,    400,    200,   100);
	for (i = 0; i < htitle.length; i++) {
		var hcell = document.createElement("th");
		hcell.appendChild(document.createTextNode(_jsaCScript.convertCharCodeTo(htitle[i],"shift_jis")));
		hcell.width = hwidth[i];
		hrow.appendChild(hcell);
	}
	tblBody.appendChild(hrow);
	
	// creating all cells
	for (var j = 0; j < alliance.length; j++) {
		// creates a table row
		var row = document.createElement("tr");
		for (var i = 0; i < htitle.length; i++) {
			//	// Create a <td> element and a text node, make the text
			//	// node the contents of the <td>, and put the <td> at
			//	// the end of the table row
			var itemText;
			switch (i) {
			case 0:
				itemText = alliance[j].rank;
				break;
			case 1:
				itemText = alliance[j].leader;
				break;
			case 2:
				itemText = alliance[j].lnk;
				break;
			case 3:
				itemText = alliance[j].alliname;
				break;
			case 4:
				itemText = alliance[j].members;
				break;
			case 5:
				itemText = alliance[j].pointstotal;
				break;
			case 6:
				itemText = alliance[j].senkou;
				break;
			case 7:
				itemText = alliance[j].palacename;
				break;
			case 8:
				itemText = alliance[j].palacepos;
				break;
			case 9:
				itemText = alliance[j].palacepopu;
				break;
			default:
				itemText = "?????";
				break;
			}
			var cellText = document.createTextNode(itemText);
			var cell = document.createElement("td");
			cell.appendChild(cellText);		//td要素
			cell.width = hwidth[i];
			row.appendChild(cell);			//tr要素
		}
		// add the row to the end of the table body
		tblBody.appendChild(row);		//tbody要素	
	}
	// put the <tbody> in the <table>
	tbl.appendChild(tblBody);		//table要素

	// appends <table> into <body>
	body.appendChild(tbl);
	// sets the border attribute of tbl to 2;
	tbl.setAttribute("border", "1");
}


//同盟情報頁を読む
function requestAlliInfo(num)
{
	var url = alliance[num].lnk;
	//alert("url="+url);
	var req = new XMLHttpRequest();

	req.open('GET', url, true);
	req.setRequestHeader('User-agent', navigator.userAgent);
	req.setRequestHeader('Accept','application/atom+xml,application/xml,text/xml');
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if(req.status == 200) {
				//GM_log("table:"+table);
				var tbl = getClassTags(req.responseText, "table", "common_table1 center");
				//alert(tbl);
				var tds = getTags(tbl.join(""), "td");
				//
				//alert("trs.length="+trs.length+"\n" + "trs="+trs.join(","));
				//if (num == 0) {
				//	alert("tds.length="+tds.length + "\n"
				//		   + "tds[0] ="+tds[0] + "\n"
				//		   + "tds[1] ="+tds[1] + "\n"
				//		   + "tds[2] ="+tds[2] + "\n"
				//		   + "tds[3] ="+tds[3] + "\n"
				//		   + "tds[4] ="+tds[4] + "\n"
				//		   + "tds[5] ="+tds[5] + "\n"
				//		   + "tds[6] ="+tds[6] + "\n"
				//		   + "\n"
				//		   + "url=" + url
				//		   );
				//}
				var points = 0;
				var pstr;
				for (var i = 0; i < tds.length/7; i++) {
					pstr =  trim(getTagText(tds[i*7 + 2],"td")).replace(/,/i,"");
					points += Number(pstr);
					//if (num == 0) {
					//	alert("points["+i+"]=" + pstr );
					//}

				}
				alliance[num].pointstotal = points;
				//if (num == 0) {
				//	alert("points=" + alliance[num].points );
				//}
				allicount++;
				//alert("done "+ (num - 1));
				//for(
			} else {
				alert( "#" + n + " Error loading loeader's profile page\n");
			}
		}
	};
	req.send(null);

	return;
}


//盟主のプロフィール頁を読む
function requestLeadersProf(num)
{
	var url = alliance[num].leadersprof;
	//alert("url="+url);
	var req = new XMLHttpRequest();

	req.open('GET', url, true);
	req.setRequestHeader('User-agent', navigator.userAgent);
	req.setRequestHeader('Accept','application/atom+xml,application/xml,text/xml');
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if(req.status == 200) {
				//GM_log("table:"+table);
				var tbl = getClassTags(req.responseText, "table", "common_table1 center");
				//alert(tbl);
				var tds = getTags(tbl.join(""), "td");
				//
				//alert("trs.length="+trs.length+"\n" + "trs="+trs.join(","));
				//alert("tds.length="+tds.length + "\n"
				//	   + "tds[0] ="+tds[0] + "\n"
				//	   + "tds[1] ="+tds[1] + "\n"
				//	   + "tds[2] ="+tds[2] + "\n"
				//	   + "\n"
				//	   + "profurl=" + profurl
				//	   );
				alliance[num].palacename = trim(getTagText(tds[1],"td"));
				alliance[num].palacepos  = getTagText(tds[2],"td");
				alliance[num].palacepopu = getTagText(tds[3],"td");
				//if (num == 0) alert("name=" + alliance[num].palacename + "\n" + "pos="+alliance[num].palacepos + "\n" + "population=" + alliance[num].palacepopu );
				profcount++;
				//alert("done "+ (num - 1));
				//for(
			} else {
				alert( "#" + n + " Error loading loeader's profile page\n");
			}
		}
	};
	req.send(null);

	return;
}


//同盟ランキング num頁目を読む
function requestDoumeiRank(urltop, num) {
	var url = urltop + num;
	//alert("url="+url);
	var req = new XMLHttpRequest();

	req.open('GET', url, true);
	req.setRequestHeader('User-agent', navigator.userAgent);
	req.setRequestHeader('Accept','application/atom+xml,application/xml,text/xml');
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if(req.status == 200) {
				//GM_log("table:"+table);
				var tbl = getClassTags(req.responseText, "table", "common_table1 center mt10");
				//alert(tbl);
				var pager = getClassTags(req.responseText, "ul", "pager")
				//alert("pager.length = "+pager.length + "\n" + pager);
				var span = "";
				for (var i=0; i < pager.length; i++) {
					//alert("pager["+i+"]:\n" + pager[i]);
					span = getTagText(pager[i],"span");
					if (span != "") break;
				}
				var trs = getClassTags(tbl.join(""), "tr", "fs12( now)?");
				var px = -1;
				if (span != "") {
					px = Number(span);
				}
				//
				var	alliname;
				var	rank;
				var	lnk;
				var	leader;
				var	leadersprof;
				var	members;
				var	senkou;
				var	atktotal;
				var	deftotal;
				var	poputotal;
				var	totallyp;
				//
				//alert("trs.length="+trs.length+"\n" + "trs="+trs.join(","));
				for (var i = 0; i < trs.length; i++) {
					// var tds = getClassTags(trs[i], "td", "fs1[02]");  // fs10 と fs12 が対象
					var tds = getTags(trs[i], "td");
					//alert("tds.length="+tds.length + "\n"
					//       + "tds[0] ="+tds[0] + "\n"
					//       + "tds[1] ="+tds[1] + "\n"
					//       + "tds[2] ="+tds[2] + "\n"
					//       + "tds[3] ="+tds[3] + "\n"
					//       + "tds[4] ="+tds[4] + "\n"
					//       + "tds[5] ="+tds[5] + "\n"
					//       + "tds[6] ="+tds[6] + "\n"
					//       + "tds[7] ="+tds[7] + "\n"
					//       + "tds[8] ="+tds[8] + "\n"
					//	   );
					alliname = getTagText(tds[1],"td");
					rank = getTagText(tds[0],"td");
					lnk = replaceAmp('http://' + window.location.host + getHref(tds[1]));
					leader = getTagText(tds[2],"td");
					leadersprof = replaceAmp('http://' + window.location.host + getHref(tds[2]));
					members = getTagText(tds[3],"td");
					senkou = getTagText(tds[4],"td");
					atktotal = getTagText(tds[5],"td");
					deftotal = getTagText(tds[6],"td");
					poputotal = getTagText(tds[7],"td");
					totallyp = getTagText(tds[8],"td");
					alliance[(span-1)*10 + i] = new Alli(alliname, rank, lnk, leader, leadersprof, members, senkou, atktotal, deftotal, poputotal, totallyp, (span-1)*10 + i);
					//alert(alliance[(span-1)*10 + i].toString());
				}
				doneflg[num - 1] = true;
				//alert("done "+ (num - 1));
				//for(
			} else {
				alert( "#" + n + " Error loading page\n");
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
		var regsub = new RegExp("<([^>^\\s]+)(\\s|.)*?>((\\s|.)*?)</","i");
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


////////////////////////////////////////
//
//  ループ(forまたはwhile)を使ったウェイト関数
//  一定時間ウェイト中は処理を返さない。
//  （ビジー）
function loopWait( timeWait )
{
    var timeStart = new Date().getTime();
    var timeNow = new Date().getTime();
    while( timeNow < (timeStart + timeWait ) )
    {
        timeNow = new Date().getTime();
    }
    return;
}

var doumeiViserId;
var profViserId;
var alliViserId;

function setDoumeiViser(timeVise)
{
    doumeiViserId = setInterval( function() { 
								checkDoumeiDatas(); 			// 表示関数をここに
							}, timeVise);
}

function setProfViser(timeVise)
{
    profViserId = setInterval( function() { 
								checkProfDatas(); 				// 表示関数をここに
							}, timeVise);
}


function setAlliViser(timeVise)
{
    alliViserId = setInterval( function() { 
								checkAlliDatas(); 				// 表示関数をここに
							}, timeVise);
}

function clearDoumeiViser()
{
	clearInterval(doumeiViserId);
}

function clearProfViser()
{
	clearInterval(profViserId);
}

function clearAlliViser()
{
	clearInterval(alliViserId);
}
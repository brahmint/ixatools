// ==UserScript==
// @name           doumei members
// @version        1.2
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    同盟メンバー拠点情報 ver. 1.2 20110707
// @include        http://w0*.sengokuixa.jp/alliance/info.php*&m=*
// @copyright  2011+, brahmint@gmail.com
// ==/UserScript==
//
// オプション：
//   &m=1  すべて
//   &m=2  攻撃側拠点
//   &m=3  本拠地のみ
//
// 2011/05/21 1.1 戦功が表示されないのを修正
//                &m=[123] オプションに対応
// 2011/07/07 1.2 jQuery対応
//

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

//-------------------------------------------------
// Main
//-------------------------------------------------
function members_main($) {

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
	
	var HONRYO = "本領";        //本領
	var SHORYO = "所領";        //所領
	var DEJIRO = "出城";        //出城
	var KAITAKU= "開拓地";  //開拓地
	
	var dispoption = 0;			//出力オプション　1:すべて, 2:攻撃側のだけ, 3:本拠地だけ
	var lords = new Array(1);
	var lordcount;     //同盟員の数
	
	var doumeiname = getDoumeiShortName();   //同盟名称
	
	var dmy = document.URL.match(/&m=([123])$/i);
	
	if (dmy) {
		switch (RegExp.$1) {
		case '1':
			dispoption = 1;
			break;
		case '2':
			dispoption = 2;
			break;
		case '3':
			dispoption = 3;
			break;
		default:
			alert("&m='+RegExp.$1+' ←オプションが不明");		//ここにくることは有り得ないんだけど念のため
			break;
		}
		getDoumeiMembersProf();
		setViser( 3000 );
	} else {
		alert("URLの末尾にオプションが必要\n"
			+ "&m=1  すべて\n"
			+ "&m=2  攻撃側拠点\n"
			+ "&m=3  本拠地のみ"
			);
	}
	
	
	// 現在同盟情報のページなので、メンバーのプロフィールを読んで
	// メンバー情報 （同盟内順位、プロフィールへのリンク、城主名、同盟ポイント、
	// 　　　　　　　 総貢物数、城主レベル、拠点数、役職、拠点データの配列番号）
	// を収集して Lord 配列へ格納
	function getDoumeiMembersProf() {
		var xmldt = document.evaluate(
			'//tr[@class]',
			document,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null);
		var xmlsub,rank, joshu, joshulnk, points, tribute, level, trnum, attl;
		lordcount = xmldt.snapshotLength;
		//GM_log(lordcount);
		if (lordcount > 0) {
			loads = new Array(lordcount);
			for (var i = 0; i < lordcount; i++) {
				xmlsub   = xmldt.snapshotItem(i);
				rank     = trim(xmlsub.cells[0].textContent);
				joshu    = trim(xmlsub.cells[1].textContent);
				joshulnk = 'http://' + window.location.host + inURL(xmlsub.cells[1].innerHTML.toString());
				
				points  = trim(xmlsub.cells[2].textContent.replace(",",""));
				tribute = trim(xmlsub.cells[3].textContent.replace(",",""));
				level   = trim(xmlsub.cells[4].textContent);
				trnum   = trim(xmlsub.cells[5].textContent);
				attl    = trim(xmlsub.cells[6].textContent);
				
				//s = rank + ',' + joshulnk + ',' + joshu + ',' + points + ',' + tribute + ',' + level + ',' + trnum + ',' + attl;
				lords[i] = new Lord(rank,joshulnk,joshu,points,tribute,level,trnum,attl,trcnt);
				//GM_log(lords[i].toString());
				
				pickJoshuProfData(lords[i], lordcount, joshulnk);
				// do something with thisElement
			}
		}
	}
	
	//同盟の略称を得る
	function getDoumeiShortName() {
		var dom = document.evaluate(
		'//p[@class="alli_inputtext mb10"]',
		document,
		null,
		XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
		null);
		var icount = dom.snapshotLength;
		return dom.snapshotItem(1).textContent;
	}
	
	
	//城主のプロフィールからデータを得る
	function pickJoshuProfData(lordnn, n, profUrl) {
		//GM_log("profUrl:" + profUrl);
		$.ajax({
			url: profUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				var s = '<?xml version="1.0" encoding="UTF-8" ?><field>'
							 +getTags(html,"table","common_table1 center").toString()
							 + "</field>";
				var re = /&nbsp;/;               //開拓地の人口欄が&nbsp;なので正しく処理されない為の苦肉の策
				var table = s.replace(re, "-");  //"&nbsp;"なら"-"で置き換える
				//GM_log("table:"+table);
				var parser = new DOMParser();
				var xmldoc = parser.parseFromString(table,"text/xml");
				var trLinks = xmldoc.evaluate('//tr[@class]',
												xmldoc,
												null,
												XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
												null);
				terricount = trLinks.snapshotLength;
				//GM_log("terricount:"+terricount);
				var details = getTags(html, "p", "family_rank_detail");
				var senkou = 0;
				if (details == null) {
					senkou = 0;
				} else {
						details[0].match(/([0-9]+)\u4F4D/);	//戦功 'nn位'
						senkou = Number(RegExp.$1);
				}
				//alert("senkou="+senkou);
				lordnn.senkou = senkou;
				var thisLink;
				var territory = new Array(4);
				if (terricount > 0) {
					lordnn.trnum = terricount;
					lordnn.trptr = trcnt;
				} else {
					lordnn.trnum = 0;
					lordnn.trptr = -1;
				}
				var territ0 = trcnt;
				trcnt += terricount;
				var ix = 0;
				for (var i = 0; i < terricount; i++) {
					thisLink = trLinks.snapshotItem(i);
					//GM_log("thisLink"+i.toString()+";"+thisLink.textContent);
					re = /\n\t/gm;
					s = thisLink.textContent.replace(re, "\t");
					s = trim(rmvTabs(s));
					re = /\t(\-*\d+,\-*\d+)\t/;
					s = s.replace(re, "\t$1\t");
					re = /\t(\(\u672C\u62E0\u5730\))\t/;    //本拠地
					s = s.replace(re, "$1\t");
					territory = s.split("\t");
					//種類、名前、座標、人口
					//alert(checkTType(territory[0]));
					trtbl[territ0+i] = new Territ(territory[0], territory[1], territory[2], territory[3]);
					gtcnt += 1;
				}
				//GM_log("lordnn.toString():"+lordnn.toString());
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax pickJoshuProfData error');
				//console.log(textStatus);
			}
		});	
		return;
	}
	
	// 文字列が非表示対象の時はtrue → つまりtrueのとき表示されないようにする
	function isHideType(s)
	{
		if (dispoption == 1) {    //全部表示
			return false;
		} else if (dispoption == 2) {	//本領・所領・開拓地は非表示
			if (s == HONRYO) {
				return true;
			}
			if (s == SHORYO) {
				return true;
			}
			if (s == KAITAKU) {
				return true;
			}
		} else {					//本領だけ表示
			if (s == HONRYO) {
				return false;
			}
			return true;
		}
		return false;
	}
	
	// 文字列が本領/出城の時はtrue
	function checkProfShowType(s)
	{
		if (s == HONRYO) {
			return true;
		}
		if (s == DEJIRO) {
			return true;
		}
		return false;
	}
	
	
	// データ表示
	function dispDatas()
	{
		writetable(lords);
	}
	
	
	//HTMLコードを書き出す
	function writetable(lordarray) {	
		// get the reference for the body
		var body = document.getElementsByTagName("body")[0];
	
		// creates a <table> element and a <tbody> element
		var tbl     = document.createElement("table");
		var tblBody = document.createElement("tbody");
		var hrow = document.createElement("tr");
		var hstrs = new Array("城主名","プロフィールリンク","同盟名","同盟内順位-城主Lv.<戦功順位>","領地種別","領地名","座標","人口");
		var hwidth = new Array( 200,        500,              200,      100,                          200,      400,     200,    100);
		for (i = 0; i < hstrs.length; i++) {
			var hcell = document.createElement("th");
			hcell.appendChild(document.createTextNode(hstrs[i]));
			hcell.width = hwidth[i];
			hrow.appendChild(hcell);
		}
		tblBody.appendChild(hrow);
		
		// creating all cells
		for (var j = 0; j < lordarray.length; j++) {
			// creates a table row
			for (var lno = 0; lno < lordarray[j].trnum; lno++) {
				if (!isHideType(getLordItem(4, lno, lordarray[j]))) {		//出力するべきものなら出力
					var row = document.createElement("tr");
					for (var i = 0; i < hstrs.length; i++) {
					//	// Create a <td> element and a text node, make the text
					//	// node the contents of the <td>, and put the <td> at
					//	// the end of the table row
						var itemText = getLordItem(i, lno, lordarray[j]);
						var cellText = document.createTextNode(itemText);
						var cell = document.createElement("td");
						cell.appendChild(cellText);		//td要素
						cell.width = hwidth[i];
						row.appendChild(cell);			//tr要素
					}
					// add the row to the end of the table body
					tblBody.appendChild(row);		//tbody要素	
				}
			}
		}
		// put the <tbody> in the <table>
		tbl.appendChild(tblBody);		//table要素
	
	　	// appends <table> into <body>
		body.appendChild(tbl);
		// sets the border attribute of tbl to 2;
		tbl.setAttribute("border", "1");
	}
	
	//城主のデータを取り出す
	function getLordItem(itemno, n, lord) {
		var itemText;
		switch(itemno) {
			case 0:
				//var cellText = document.createTextNode("セルは "+j+" 行 "+i+" 列 です");
				//cell.appendChild(cellText);
				itemText = lord.joshuname;   //城主名
				break;
			case 1:
				if (checkProfShowType(trtbl[lord.trptr+n].ttype)) {
					itemText = lord.lnk; 		//城主プロフィールへのリンク
				} else {
					itemText = "";
				}
				break;
			case 2:
				itemText = doumeiname;			//同盟名
				break;
			case 3:
				if (checkProfShowType(trtbl[lord.trptr+n].ttype)) {
					itemText = lord.rank + "/"+ lordcount.toString() + "-" + lord.level + "<" + lord.senkou + ">";			//城主レベル
				} else {
					itemText = "";
				}
				break;
			case 4:
				itemText = trtbl[lord.trptr+n].ttype;	//領地種類 （本領/所領）
				break;
			case 5:
				itemText = trtbl[lord.trptr+n].tname;	//領地名
				break;
			case 6:
				itemText = trtbl[lord.trptr+n].pos;		//座標
				break;
			case 7:
				itemText = trtbl[lord.trptr+n].population;	//人口
				break;
			default:
				itemText = "???";
		}
		return itemText;
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
	  var tags = getTags(html, tagName, className);
	  return (tags && tags.length) ? tags[0] : "";
	}
	
	function getTagText(html, tagName, className){
	  return getTag(html, tagName, className) ? RegExp.$2 : "";
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
	
	var viserId;
	
	function setViser(timeVise)
	{
		viserId = setInterval( function() { 
									//GM_log("setViser:"+"trcnt="+trcnt+",gtcnt="+gtcnt);
									if ( trcnt == gtcnt ) {
										clearInterval(viserId);
										dispDatas();
									}
								}, timeVise);
	}
	
}

bara_addJQuery(members_main);

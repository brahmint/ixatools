// ==UserScript==
// @name           leadersList
// @version        1.0
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    盟主リスト version 1.0 2011/07/07
// @include        http://*.sengokuixa.jp/alliance/list.php?c=*&m=*
// ==/UserScript==

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


function leaders_main($) {
    // ここにメインの処理を書く

	var leaderz	= new Object();
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
	}

	leaderz.pgMax       = 5;	// 表示する同盟の頁数、同盟数としてはこの10倍になる
	leaderz.pgDoneCount = 0;	// requestDoumeiRankPage 読み込み数
	leaderz.alliance    = new Array();
	leaderz.doneflg     = new Array();
	leaderz.profMax     = function() {
		return leaderz.pgMax * 10;
	}
	leaderz.profcount   = 0;
	leaderz.alliMax     = function() {
		return leaderz.pgMax * 10;
	}
	leaderz.allicount   = 0;
	
	leaderz.lords = new Array();
	leaderz.lordcount   = 0;     //同盟員の数
	
	//
	// main of main
	//	
	function leadersList(){
		//alert('leadersList');
		var msg = null;
		var c;
		var m;
		var urlreg = document.URL.match(/c=([0-9]+)&m=([0-9]+)$/);
		if (null == urlreg) {
			msg ='m=1から10を指定ください';
		} else {
			c = Number(RegExp.$1);
			m = Number(RegExp.$2);
			if (c < 1 || c > 12) {
				msg = "c=1 から 12 を指定してください";
			}
			if (m < 1 || m > 10) {
				msg = "m=1 から 10 を指定してください";
			}
		}
		if (msg) {
			alert("<<< 盟主リスト >>>\n" + msg);
			return;
		}
		//alert("c="+c+", m="+m);
		leaderz.pgMax = m;
		var urlbase = 'http://' + window.location.host + '/alliance/list.php?c=' + c + '&p=';
			
		//alert("alliance[0].alliname="+alliance[0].alliname);

		leaderz.pgDoneCount = 0;
		for (var i=0; i<leaderz.pgMax; i++) {
			leaderz.doneflg[i] = false;
			requestDoumeiRankPage(urlbase,i);
		}
		//setDoumeiViser(intervalTime);
	}
	
	
	//同盟ランキング num頁目を読む
	function requestDoumeiRankPage(urltop, num) {
		var rankUrl = urltop + (num+1).toString();
		//alert("url="+url);
		$.ajax({
			url: rankUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				//GM_log("table:"+table);
				var tbls=$(html).find("table.common_table1.center.mt10");
				//alert(tbl);
				var trs = tbls.find("tr.fs12");
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
					var tds = trs.eq(i).find("td");
					alliname = tds.eq(1).text();
					rank =  tds.eq(0).text().replace(/筆頭/,'1');
					lnk = 'http://' + window.location.host + tds.eq(1).find('a').attr('href');
					leader = tds.eq(2).text();
					leadersprof = 'http://' + window.location.host + tds.eq(2).find('a').attr('href');
					members = tds.eq(3).text();
					senkou = tds.eq(4).text();
					atktotal = tds.eq(5).text();
					deftotal = tds.eq(6).text();
					poputotal = tds.eq(7).text();
					totallyp = tds.eq(8).text();
					leaderz.alliance[Number(rank)-1] = new Alli(alliname, rank, lnk, leader, leadersprof, members, senkou, atktotal, deftotal, poputotal, totallyp, Number(rank)-1);
				}
				leaderz.doneflg[num] = true;
				leaderz.pgDoneCount++;
				if (leaderz.pgDoneCount >= leaderz.pgMax) {
					//alert("requestDoumeiRankPage() all("+leaderz.pgDoneCount+") read");
					doneDoumeiDatas();
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax requestDoumeiRank(urltop,'+num+') error');
				//console.log(textStatus);
			}
		});	
	
		return;
	}
	
	// 同盟ランキングの頁データが全部読み込まれたときの処理
	function doneDoumeiDatas()
	{
		leaderz.profcount = 0;
		for (var i = 0; i < 10*leaderz.pgMax; i++) {
			requestLeadersProf(i);
		}
		return;
	}
	
	//盟主のプロフィール頁を読む
	function requestLeadersProf(num)
	{
		var leaderUrl = leaderz.alliance[num].leadersprof;
		//alert("url="+url);
		$.ajax({
			url: leaderUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				//GM_log("table:"+table);
				var tbls = $(html).find("table.common_table1.center");
				//alert(tbl);
				var trs = tbls.find("tr.fs14");
				leaderz.alliance[num].palacename = trim(trs.eq(0).find("td").eq(1).text().replace(/\(本拠地\)/,''));
				leaderz.alliance[num].palacepos  = trs.eq(0).find("td").eq(2).text();
				leaderz.alliance[num].palacepopu = trs.eq(0).find("td").eq(3).text();
				leaderz.profcount++;
				//alert("prof "+leaderz.alliance[num].palacename+"  done "+num + "  profcount = "+ leaderz.profcount);
				if (leaderz.profcount >= leaderz.profMax()) {
					//alert("leaders profs ("+leaderz.profcount+") read");
					doneProfDatas();
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax requestLeadersProf('+num+') error');
				leaderz.alliance[num].palacename = '-';
				leaderz.alliance[num].palacepos  = '-';
				leaderz.alliance[num].palacepopu = '-';
				leaderz.profcount++;
				//alert("prof "+leaderz.alliance[num].palacename+"  done "+num + "  profcount = "+ leaderz.profcount);
				if (leaderz.profcount >= leaderz.profMax()) {
					//alert("leaders profs ("+leaderz.profcount+") read");
					doneProfDatas();
				}
				//console.log(textStatus);
			}
		});	
	
		return;
	}
	
	// プロフィールの頁データが全部読み込まれたときの処理
	function doneProfDatas()
	{
		leaderz.allicount = 0;
		for (var i = 0; i < 10*leaderz.pgMax; i++) {
			requestAlliInfo(i);
		}
		return;
	}
	
	
	//同盟情報頁を読む
	function requestAlliInfo(num)
	{
		var alliUrl = leaderz.alliance[num].lnk;
		//alert("url="+url);
		$.ajax({
			url: alliUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				var tbls = $(html).find("table.common_table1.center");
				var tds = tbls.find("td");
				var points = 0;
				var pstr;
				for (var i = 0; i < tds.length/7; i++) {
					pstr =  trim(tds.eq(i*7 + 2).text()).replace(/,/ig,"");
					points += Number(pstr);
				}
				leaderz.alliance[num].pointstotal = points;
				leaderz.allicount++;
				if (leaderz.allicount >= leaderz.alliMax()) {
					doneAlliDatas();
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax requestAlliInfo('+num+') error');
				leaderz.alliance[num].pointstotal = 0;
				leaderz.allicount++;
				if (leaderz.allicount >= leaderz.alliMax()) {
					doneAlliDatas();
				}
				//console.log(textStatus);
			}
		});	
	
		return;
	}
	
	
	// 同盟情報の頁データが全部読み込まれたときの処理
	function doneAlliDatas()
	{
		writeToTable();
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
			hcell.appendChild(document.createTextNode(htitle[i]));
			hcell.width = hwidth[i];
			hrow.appendChild(hcell);
		}
		tblBody.appendChild(hrow);
		
		// creating all cells
		for (var j = 0; j < leaderz.alliance.length; j++) {
			// creates a table row
			var row = document.createElement("tr");
			for (var i = 0; i < htitle.length; i++) {
				//	// Create a <td> element and a text node, make the text
				//	// node the contents of the <td>, and put the <td> at
				//	// the end of the table row
				var itemText;
				switch (i) {
				case 0:
					itemText = leaderz.alliance[j].rank;
					break;
				case 1:
					itemText = leaderz.alliance[j].leader;
					break;
				case 2:
					itemText = leaderz.alliance[j].lnk;
					break;
				case 3:
					itemText = leaderz.alliance[j].alliname;
					break;
				case 4:
					itemText = leaderz.alliance[j].members;
					break;
				case 5:
					itemText = leaderz.alliance[j].pointstotal;
					break;
				case 6:
					itemText = leaderz.alliance[j].senkou;
					break;
				case 7:
					itemText = leaderz.alliance[j].palacename;
					break;
				case 8:
					itemText = leaderz.alliance[j].palacepos;
					break;
				case 9:
					itemText = leaderz.alliance[j].palacepopu;
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


	//libraries
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
	
	//
	leadersList();
		
}

bara_addJQuery(leaders_main);

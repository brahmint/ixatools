// ==UserScript==
// @name           Suppa
// @version        1.02
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    Suppa 1.02 20110720
// @include        http://*.sengokuixa.jp/facility/unit_list.php
// @match          http://*.sengokuixa.jp/facility/unit_list.php
// ==/UserScript==
//
// 20110715 1.01	初版
// 20110720 1.02	すべての武将がデッキのある時に集計されない問題対応

//
// Mokoと同じjQuery初期化
//


//function bara_addJQuery(callback) {
//    if (typeof(unsafeWindow.tb_init)!='undefined') {
//        tb_init = unsafeWindow.tb_init;
//    }
//    
//    if (typeof(unsafeWindow.jQuery)!='undefined') {
//		var links = document.createElement('link');
//		links.rel = 'stylesheet';
//		links.href = 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/base/jquery-ui.css';
//		document.getElementsByTagName('head')[0].appendChild(links);
//        var script = document.createElement("script");
//        script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js");
//        document.body.appendChild(script);
//
//        jQuery = unsafeWindow.jQuery;
//        callback(unsafeWindow.jQuery);
//    } else {
//        var script = document.createElement("script");
//        script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js");
//        script.addEventListener('load', function() {
//            var script = document.createElement("script");
//            script.textContent = "(" + callback.toString() + ")(jQuery);";
//            document.body.appendChild(script);
//        }, false);
//        document.body.appendChild(script);
//    }
//}
//


(function (d, func) {
    var h = d.getElementsByTagName('head')[0];
	var links = d.createElement('link');
	links.setAttribute("rel", "stylesheet");
	links.setAttribute("type", "text/css");
	links.setAttribute("href", "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/base/jquery-ui.css");
	var ui = d.createElement("script");
	ui.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.js");
    var s1 = d.createElement("script");
    s1.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js");
    s1.addEventListener('load', function() {
        var s2 = d.createElement("script");
        s2.textContent = "jQuery.noConflict();(" + func.toString() + ")(jQuery);";
        h.appendChild(s2);
    }, false);
	h.appendChild(s1);
    h.appendChild(links);
	h.appendChild(ui);
})(document, function($) {
    // ここにメインの処理を書く
//    $('#button').click(function(){
//        alert('clicked!');
//    });

//function suppa_main($) {

	var gifsuppa = 'data:image/gif;base64,'+
	'R0lGODlhNwAYAOYAAP////f8/O75+eX39+L19cPr673p6bLl5a3k5KTh4Zze3pXc3IvY2IPW1nzT'+
	'03fS0nLQ0I/FxWvOznvJyWbMzH6/v4y5uXW8vGC/v4C1tWi4uGS2tm2vr1uzs3upqXmoqHClpW2k'+
	'pFuoqGShoXKaml+fn1mdnVKamkyZmVyUlGiMjGSMjFKQkEuNjVmHh2GAgFCFhVl9fUaBgUOAgEB/'+
	'f1lyckd3d1RxcU9vb0pubjlyckRraztpaUVhYTNmZjZcXDFaWkJVVTpTUzFQUCdMTCxDQyo4OCM2'+
	'Nh40NBozMx8pKRkoKBMmJhAaGgwZGQgNDQcMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5'+
	'BAEHAAAALAAAAAA3ABgAAAf/gACCg4SFhoeIiYqEBg0QFAsOFBAICZYLDQ4NC5yYlwwODgwKDA8P'+
	'DAuWqgmckw0JBocNEg0HkxASuQeroA6dowqWDI6bmBCiCpXBCQwMFBLHDoUNs7kQDQ8QjwwIwcul'+
	'xcuWpKGokaIMl5aUChTuEIOsC+4LtAjzuQm+q5ii+wnLMJnihI1aQFLt3FFAIEhBg2aQEljDNUkG'+
	'iR5GVMSIsOLID1CbEmCMoWBECRMjQIAooeGhAgWYKr2jIOiSIwjOmDnA1QEKlCZRlkQxIiSKkE2a'+
	'FhiJ8kFBlKdQo+ww9WCBAnYUaQJIZUkSgp0N7j3YgCRqlBZKjJYoEaJCCaEx/zw8LdqkbA5MmbQ5'+
	'OPDomSCDDiGwkpDtHg+ziJ/uSPxh6GIeoxZQpZDQ3d9IzRwgUAjuAgugUZzMAPK0xtMeI3gAHXI4'+
	'ilwkN6LUCMUpFIVaDxYKwgxSga2wOz0wMQvl6Yyn445EGbHgKZHQSWQfALnA2cJbNR1SO1YPmj4a'+
	'UZo8iRIk6vAluyKkFZrYx4ED1UXlyrSz4ctzDqAdsxRhR5EoT6SQAnvOLVAeVKCZoOAQUfgggTLn'+
	'SAAKBAv81UAw/VQTUmyIiQAVChToANUKCTxFzU3Z7CIMA8c4pNVDIckTigSaaOBEFEwwyAQKEtz4'+
	'xDwYdBDdBwg81UsDP7Qwif+KrDRzkyCg9LNANwqEEoqHUb3gwHNPxTAJBdGh4MBTqbB44wb5AIQh'+
	'NhJk9xCL6RDkgAIXwABaFFDcGN5TP3QwwnAnNHAaDjj8gKczxayiU3bMvBKKOA6UAFUPZT1FAwbD'+
	'MWEBVBs40ANiP7RDUDP8CPKPTo6gAlADPLgwQTE7RCABBQfY0IEDONwQAjYPcBDCWiBkgAoE2tGH'+
	'YYUAHHBKMmJRM+dLVW6ySSUJ3EZBAsSS0kw/maFDyQLcUWNVLFBmog5tmrykU3XpAKRNtc9AwglA'+
	'tN2kzQGkdEJNIZnBZBUmmVn1krguaaPQM5lwxYqV7zh5E7KFGADThd5sC9gawqg0Y/AkCVCzrCos'+
	'SiQtNQkUsMjJKKecSCAAOw==';

	var sdata = "足軽,1,1:長槍足軽,1,2:武士,1,4:弓足軽,2,1:長弓兵,2,2:弓騎馬,2,4:騎馬兵,3,1:精鋭騎馬,3,2:赤備え,3,4:破城槌,4,1:攻城櫓,4,2:大筒兵,4,4:鉄砲足軽,5,2:騎馬鉄砲,5,4:国人衆,1,3:海賊衆,2,3:母衣衆,3,3:雑賀衆,5,3:";

	var SoldData = function ( sname, stype, sclass, nums) {
		this.sname     = sname;		//名前 足軽、武士とか		
		this.stype     = Number(stype);		//兵種　槍1弓2馬3器4砲5
		this.sclass    = Number(sclass);	//兵級　下級1中級2秘境3上級4
		this.numwait   = Number(nums);		//陣屋・長屋 待機兵数
		this.numtrain  = 0;		//兵舎で訓練中の兵数
		this.numdeck   = 0;		//デッキ搭載中の兵数
		this.numstdby  = 0;		//カード搭載中の兵数
	}
	
	//デッキ搭載中の兵数
	var DeckData = function ( name, cost, sname, numdeck) {
		this.name    = name;		//武将名
		this.cost    = cost;		//コスト
		this.sname   = sname;		//兵名
		this.numdeck = numdeck;		//兵数
	}

	//カード搭載中の兵数
	var StdbyData = function ( name, sname, numstdby) {
		this.name     = name;		//武将名
		this.sname    = sname;		//兵名
		this.numstdby = numstdby;	//兵数
	}

	var suppajob  = false;
	var soldiers  = new Array();
	var decksold  = new Array();
	var stdbysold = new Array();
	var decksoldcount  = 0;
	var stdbysoldcount = 0;
	var rdysold    = false;
	var rdydeck    = false;
	var rdystdby   = false;
	var deckjobs   = 0;


	//訓練中の兵をデータに集計
	function addNumTrain(sname0,num) {
		var sname = sname0.replace('鎚','槌');
		for (var i = 0; i < soldiers.length; i++) {
			if (soldiers[i].sname == sname) {
				soldiers[i].numtrain += Number(num);
				return;
			}
		}
		soldiers[soldiers.length - 1].numtrain += Number(num);	//不明のものはここへ
		return;
	}

	//デッキの兵をデータに集計
	function addNumDeck(sname0,num) {
		var sname = sname0.replace('鎚','槌');
		for (var i = 0; i < soldiers.length; i++) {
			if (soldiers[i].sname == sname) {
				soldiers[i].numdeck += Number(num);
				return;
			}
		}
		soldiers[soldiers.length - 1].numdeck += Number(num);	//不明のものはここへ
		return;
	}
	
	
	//待機中の兵をデータに集計
	function addNumStdby(sname0,num) {
		var sname = sname0.replace('鎚','槌');
		for (var i = 0; i < soldiers.length; i++) {
			if (soldiers[i].sname == sname) {
				soldiers[i].numstdby += Number(num);
				return;
			}
		}
		soldiers[soldiers.length - 1].numstdby += Number(num);		//不明のものはここへ
		return;
	}

	function _numFormat(n) {
		var s = "" + n;
		s = s.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		return s;
	}
	
	function numFormat(n, digits) {
		var s = _numFormat(n);
		if (s.length < digits) {
			s = ("            ").substr(0, digits - s.length) + s;
		}
		return s;
	}
	
	function strFormat(s, width) {
		if (s.length < width) {
			s = s + ("　　　　　　　　　").substr(0, width - s.length);
		}
		return s;
	}
	

	//
	//
	//
	//
	
	function mergeAndShow() {
		for (var i = 0; i < decksoldcount; i++) {
			addNumDeck(decksold[i].sname, decksold[i].numdeck);
		}
		for (var i = 0; i < stdbysoldcount; i++) {
			addNumDeck(stdbysold[i].sname, stdbysold[i].numstdby);
		}
				
		var msg = "";
		var total = 0;
		for (var i = 0; i < soldiers.length; i++) {
			msg += numFormat(i,2) + "：" + strFormat(soldiers[i].sname,4) + numFormat(soldiers[i].numwait + soldiers[i].numtrain + soldiers[i].numdeck + soldiers[i].numstdby,8) + "\n";
			total += soldiers[i].numwait + soldiers[i].numtrain + soldiers[i].numdeck + soldiers[i].numstdby;
		}
		msg += "  "+"：" + "＊合計＊" + numFormat(total,8);
		alert(msg);
		suppajob = false;
	}
	
	//
	//待機中の兵士、訓練中の兵士の数を数える
	//
	function countWaitAndTrainin() {
		var ulUrl = 'http://' + window.location.host + '/facility/unit_list.php';
		$.ajax({
			url: ulUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				var tbls = getTags(html,"table","paneltable table_fightlist2");
				//var mts =getIxaHrefs(tbltxt);
				var ths = getTags(tbls[0],'th','');
				var thcount = ths.length;
				for (var i = 0; i < thcount; i++) {
					ths[i] = getTagText(ths[i],'th');
				}
				var tds = getTdTags(tbls[0]);
				var tdcount = tds.length;
				for (var i = 0; i < tdcount; i++) {
					tds[i] = getTdText(tds[i]);
				}
				//無用な物は削除
				for (var i = 0; i < tdcount; i++) {
					if (tds[tdcount - i - 1] == "") tds.splice(tdcount - i - 1,1);
				}
				for (var i = 0; i < thcount; i++) {
					var sname = ths[i].replace('鎚','槌');
					var re = new RegExp(sname+",([1-5]),([1-5]):");
					var sreg = sdata.match(re);
					if (null == sreg) {
						soldiers[i] = new SoldData(sname,"-1", "-1", tds[i]);
					} else {
						soldiers[i] = new SoldData(sname,RegExp.$1, RegExp.$2, tds[i]);
					}
				}
				soldiers[soldiers.length] = new SoldData("不明","-1", "-1", "0");		//最後に不明欄を加える

				//
				for(var j = 1; j < tbls.length; j++) {
					var trs = getTags(tbls[j],"tr","");
					//alert("trs.length="+trs.length);
					if (null == trs) continue;		//通常はありえない
					for (var i = 1; i < trs.length; i++) {
						tds = getTags(trs[i],"td","");
						var nb = getTagText(tds[1],"td","");
						trs[i].match(/alt="(.*)"/);
						addNumTrain(RegExp.$1, nb);
					}
				}
				rdysold = true;		//準備完了
				//				

				//var msg = "";
				//for (var i = 0; i < soldiers.length; i++) {
				//	msg += i + ":" + soldiers[i].sname + "[" + soldiers[i].stype + "," + soldiers[i].sclass + "]," + soldiers[i].numwait + "," + soldiers[i].numtrain + "," + soldiers[i].numdeck + "," + soldiers[i].numstdby + "\n";
				//}
				//alert(msg);
				//alert('count='+thcount+ '\n'+ths);
				//alert('count='+tdcount+ '\n'+tds);
				//alert('tericount=' + tericount);
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax countWaitAndTrainin() error');
				//console.log(textStatus);
			}
		});	

	}

	//
	//デッキに配置したカードの兵を集計する
	//
	function countOnDeck(n) {
		var dkUrl = 'http://' + window.location.host + '/card/deck.php?ano=' + n;
		//alert("dkUrl="+dkUrl);
		$.ajax({
			url: dkUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				var reg = new RegExp('<span class="ig_deck_unitdata_leader">([^<]*)<span><img[^>]*>([^<]*)</span><br[^<]*<img[^>]*alt="([^"]*)"[^>]*>([^<]*)人</span>', 'im');
				var kkk = html.match(reg);
				if (null != kkk) {
					//alert(kkk[0]);
					var leader = RegExp.$1;
					var cost   = RegExp.$2;
					var sname  = RegExp.$3;
					var snum   = RegExp.$4;
					leader = trim(leader);
					cost   = trim(cost);
					sname  = trim(sname);
					snum   = trim(snum);
					//alert(leader +"," +cost + "," + sname +"," + snum);
					decksold[decksoldcount] = new DeckData(leader, cost, sname, snum);
					decksoldcount++;
		
					var reg2 = new RegExp('<span class="ig_deck_unitdata_subleader">([^<]*)<span><img[^>]*>([^<]*)</span><br[^<]*<img[^>]*alt="([^"]*)"[^>]*>([^<]*)人</span>', 'igm');
					var kks = html.match(reg2);
					if (null != kks) {
						for (var i=0; i< kks.length; i++) {
							kkk = kks[i].match(reg2);
							//alert(kkk);
							var subleader = RegExp.$1;
							cost   = RegExp.$2;
							sname  = RegExp.$3;
							snum   = RegExp.$4;
							subleader = trim(subleader);
							cost      = trim(cost);
							sname     = trim(sname);
							snum      = trim(snum);
							//alert(subleader +"," +cost + "," + sname +"," + snum);
							decksold[decksoldcount] = new DeckData(subleader, cost, sname, snum);
							decksoldcount++;
						}
					}
				}
				deckjobs++;
				if (deckjobs >= 5) {
					rdydeck = true;		//準備完了
					//var msg = "";
					//for (var i = 0; i < decksoldcount; i++) {
					//	msg += "\n"+ decksold[i].name + "," + decksold[i].cost + "," + decksold[i].sname + "," + decksold[i].numdeck;
					//}
					//alert("Msg:"+msg);
				}

			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax countOnDeck('+n+') error');
				//console.log(textStatus);
			}
		});	
	}

	//
	//待機武将のカードに搭載された兵士を数える
	//
	function countStdby() {
		var ulUrl = 'http://' + window.location.host + '/facility/set_unit_list.php?show_num=100';
		$.ajax({
			url: ulUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				//GM_log("table:"+table);
				var reg = new RegExp('<table class="common_table1 center mt10">','im');
				//alert("1");
				var tbl = html.match(reg);
				//alert("tbl.length="+tbl.length);
				var txt = RegExp.rightContext;
				reg = new RegExp('</table>','im');
				tbl = txt.match(reg);
				txt = RegExp.leftContext;
				var tds = getClassTags(txt,"td","");
				//alert("tds.length="+tds.length);
				//alert("3");
				if (tds.length > 1) {
					var pgs = html.match(/<li class="last">.*<\/li>/img);
					//alert("4: pgs[0]="+pgs[0]);
					var pg2 = null;
					if (pgs.length != 0) {
						pg2 = pgs[0].match(/show_num=100&amp;(_=[0-9]+&amp;)?p=2/);	//最初のページで101枚以上カードがあるかチェック
					}
					//alert("pg2="+pg2);
					for (var i = 0; i < tds.length/7; i++) {
						var name = getTagText( tds[i*7],"a","");
						name = trim(name);
						var s = tds[i*7 + 3];
						var alt = getAlt(s);
						var units = getIdTagText(s, "span", "now_unit_cnt_[0-9]+");
						var leads = getIdTagText(s, "span", "lead_unit_[0-9]+");
						//alert(alt + "\n" + units + "\n" + leads);
						stdbysold[stdbysoldcount] = new StdbyData(name,alt,units);
						stdbysoldcount++;
					}
					if (pg2 != null) {	//first pageで２ページ目がある場合
						var ulUrl2 = ulUrl + '&p=2';
						$.ajax({
							url: ulUrl2, 
							cache: false, 
							dataType: "text",
							success: function (html){
								//GM_log("table:"+table);
								var reg = new RegExp('<table class="common_table1 center mt10">','im');
								//alert("1");
								var tbl = html.match(reg);
								var txt = RegExp.rightContext;
								reg = new RegExp('</table>','im');
								tbl = txt.match(reg);
								txt = RegExp.leftContext;
								var tds = getClassTags(txt,"td","");
								for (var i = 0; i < tds.length/7; i++) {
									var name = getTagText( tds[i*7],"a","");
									name = trim(name);
									var s = tds[i*7 + 3];
									var alt = getAlt(s);
									var units = getIdTagText(s, "span", "now_unit_cnt_[0-9]+");
									var leads = getIdTagText(s, "span", "lead_unit_[0-9]+");
									//alert(alt + "\n" + units + "\n" + leads);
									stdbysold[stdbysoldcount] = new StdbyData(name,alt,units);
									stdbysoldcount++;
								}
								rdystdby = true;	//準備完了
								//var msg = "";
								//for (var i = 0; i < stdbysoldcount; i++) {
								//	msg += "\n"+ stdbysold[i].name + "," + stdbysold[i].sname + "," + stdbysold[i].numstdby;
								//}
								//alert("Msg:"+msg);
							},
							error: function (XMLHttpRequest, textStatus, errorThrown) {
								alert('$.ajax countStdby() pg2 error');
								//console.log(textStatus);
							}
						});	
	
					} else {
						rdystdby = true;	//準備完了
						//var msg = "";
						//for (var i = 0; i < stdbysoldcount; i++) {
						//	msg += "\n"+ stdbysold[i].name + "," + stdbysold[i].sname + "," + stdbysold[i].numstdby;
						//}
						//alert("Msg:"+msg);
					}
				} else {
					rdystdby = true;	//件数０で、準備完了
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax countStdby() error');
				//console.log(textStatus);
			}
		});	

		return;
	}


	//------------------------------
	//
	//
	function getTdTags(html) {
		var reg = new RegExp('<td width="70">([^<]*)</td>', "ig");
		var tags = html.match(reg);
		return tags;
	}

	function getTdText(html) {
		var reg = new RegExp('<td width="70">([^<]*)</td>', "i");
		var tag = html.match(reg);
		return (tag) ? RegExp.$1 : "";
	}

	//------------------------------
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

	function getAlt(html) {
		var src = '<img src="([^"]*)"(\\s|.)*?alt="([^"]*)"';	//フル
		var ans = html.match(src,"ig");
		return (ans && ans.length) ? RegExp.$3 : "";
	}



	function replaceAmp(s) {
		return s.replace(/&amp;/g,'&');
	}

	function replaceNbsp(s) {
		return s.replace(/&nbsp;/g,' ');
	}

	var wtcnt;
	var viserId;

	function setViser(timeVise)
	{
		wtcnt = 0;
		viserId = setInterval( function() {
									wtcnt++;
									if ( rdysold && rdydeck && rdystdby ) {
										clearInterval(viserId);
										mergeAndShow();
									} else {
										if (wtcnt>30) {
											clearInterval(viserId);
										}
									}
								}, timeVise);
	}
	//
	//  ボタンの表示
	//
	function setbutton() {
		var tmp = '<a href="javascript:void(0);" onclick="return false;" id="do_suppa"><img src="' + gifsuppa + '" alt="数把" style="position: relative; top: 0px; left: -10px"></a>';
		$('div.ig_decksection_top').append(tmp);
		
	}


	//
	// main
	//

	setbutton();	//ボタンの表示


	$('#do_suppa').live('click',function() {
		if (suppajob) return false;		//実行中はなにもしない
		suppajob  = true;
		rdysold   = false;		//
		rdydeck   = false;
		rdystdby  = false;
		soldiers.splice(0,soldiers.length);
		decksold.splice(0,decksold.length);
		stdbysold.splice(0,stdbysold.length);
		decksoldcount  = 0;
		deckjobs       = 0;
		stdbysoldcount = 0;

		countWaitAndTrainin();		//待機中の兵士と訓練中の兵士を数える
		//alert('countWaitAndTrainin() done');

		countOnDeck(0);		//デッキの兵を数える
		countOnDeck(1);
		countOnDeck(2);
		countOnDeck(3);
		countOnDeck(4);
		//alert('countOnDeck(n) done');

		countStdby();		//兵士編成100件x2頁で数える
		//alert('countStdby() done');

		setViser(250);
		//calc_dokochika();
		//setTimeout(calc_dokochika, 10);
		return false;
	});

});


//bara_addJQuery(suppa_main);

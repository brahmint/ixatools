// ==UserScript==
// @name           Count NOS
// @version        1.0
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    ＮＯＳ伯爵 version 1.0 20110708
// @include        http://w013.sengokuixa.jp/facility/unit_list.php
// @copyright      2011+, brahmint@gmail.com
// ==/UserScript==

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

function count_main($) {
    // ここにメインの処理を書く
	var gifdore = 'data:image/gif;base64,'+
	'R0lGODlhNwAYAOYAAP/////2+f/w9f/s8v/l7v/i7P/D1/++1P+yzP+wyv+rx/+mxP+hwP+cve+c'+
	'uP+Wuv+St++Us/+Os9+Wrv+Mre+MrN+NqP+Dre+Hqv9/qe+Cpv96ps+Hn/90o996m/9wn7+Cl+9y'+
	'nP9rnN91mL97kc91k/9mme9kkr9zjK91id9kjc9pi+9gj69yh79tib9qhs9hht9Zhr9igp9rfL9Z'+
	'fJ9jd79Veb9Sdq9Scb9OdI9Za59Qa39YZa9Ja39TYp9HZI9LYp9AX39KXI9BW39FWG9IVY89WW9E'+
	'Un9AVX86UW85S38zTG81SF82RG8vRF8yQW8sQ18tPk8xOz8oL08hMD8gKj8aJy8eJC8aIS8UHR8V'+
	'GB8RFh8PFB8MEw8HCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5'+
	'BAEHAAAALAAAAAA3ABgAAAf/gACCg4SFhoeIiYqECBcfJhAZJh0KCwwMDxcbFw+dDxkLCxAUGxsS'+
	'DRKlEhChDQ0KDBIPkxcLB4YDFyIXCJMfIiIfCJYMC6kbEMmnDaESGR0ZnRfQp7DMqBImIh2lBYMC'+
	'F7ofHx2aHR0mFArXCw2knA/s7ccUnRsZEhKhD6Ef6yYAPwwQZCybiQe7FMwKtiADBAcWin0ytYGf'+
	'q32akEHQFO5avFMAASYQ1CBcNn3AVCRJEqSDjRZYvFhgxsADEiI0OLW7FGsFDnilMngQMqXEBVgA'+
	'0QmSOE1EtgUvvnzpYSLLFyBfsCCARUJqhQwXIDTgyUFqlA1Dn3CR+sWLinW//wAK4ndJkoINHWRI'+
	'pdFBhZcuQ4ZoWwBCaggJJWho4NdOh1QgNNhiUYLj3AYE6LQJAutqmjERkb+4OPejBzQRUKZ4kdqk'+
	'ilQvMi5c83ElQtQqFFCVQtcgpAlBYTdQIKUAIIvHO1xnQSfCClu2W1hrOhVqQ2EvVbJnZ2KC1wYT'+
	'CuYKf9eg1wUtz6WaCgmFrQ4GR75UWSUDyRIkKnKkl1oFYPFzS5UUDjcIGbHaF104sUIoCmwVw2pe'+
	'lDCMD19McUEGQrAlgxFfUIEAD18QIRwwmjxD0iWfZJDBCc5VmMICFKSSzwUYWPWFFQchIMUXRSzw'+
	'gAc3WGXDE18sIQKFQkBQiv8IFGTwwQPAySaKJkq0tQNjB5mAFwZYsIUjQM75wOAHru0gFQwfgCim'+
	'BNNsUNJvAISjk4+PibDJBo+YgM8PUjlXBQRgfuFDBDMooIBrq23xSBKCosjmNB0IkspGFSlg1j14'+
	'JmACCxMYysUPFE7RWwfOZdFFFRgU8ZwNFHSwhKDrMDORCAGa1IEEqrZVxRRVdBniBiLoCaIVjZhA'+
	'BHREtiXVFlZU0Wx2XrTTzAYBGpMBAxlsoMMU+2FRQ0XfvfrlOjok8UMGLnwRhQc77iefPu24IkhF'+
	'l8C4ya0PMFCSKeF0ckqwCUiSwSvOlAKEktGg8MILNqAggwwj3CMrlAAgINyPKwptoqIrroDFpgSV'+
	'LNCdCQt84Eo+smgynCoSUNJyRSY1cAsAAjgDiigL3JOKbJc4M+MlDYwjsjYmrAKBvvdsNA45Cbgj'+
	'S4oCDEJAPm520kAkbDrEcTgbndJBngDtYgpPSt4T0HADdvDAQIUcgAnP+rIZCdxKrsLm1wEtEM7F'+
	'O7XKwC6P1mLAIoQXbngigQAAOw==';

	var sdata = "足軽,1,1:長槍足軽,1,2:武士,1,4:弓足軽,2,1:長弓兵,2,2:弓騎馬,2,4:騎馬兵,3,1:精鋭騎馬,3,2:赤備え,3,4:破城槌,4,1:攻城櫓,4,2:大筒兵,4,4:鉄砲足軽,5,2:騎馬鉄砲,5,4:国人衆,1,3:海賊衆,2,3:母衣衆,3,3:雑賀衆,5,3:";
	var SoldData = function ( sname, stype, sclass, nums) {
		this.sname     = sname;		//名前 足軽、武士とか		
		this.stype     = Number(stype);		//兵種　槍1弓2馬3器4砲5
		this.sclass    = Number(sclass);	//兵級　下級1中級2秘境3上級4
		this.numwait   = Number(nums);			//待機兵数
		this.numbuild  = 0;		//兵舎の兵数
		this.numdeck   = 0;		//デッキ搭載中の兵数
		this.numstdby  = 0;		//カード搭載中の兵数
	}
	
	var DeckData = function ( name, cost, sname, numdeck) {
		this.name    = name;		//武将名
		this.cost    = cost;		//コスト
		this.sname   = sname;		//兵名
		this.numdeck = numdeck;		//兵数
	}

	var StdbyData = function ( name, sname, numstdby) {
		this.name     = name;		//武将名
		this.sname    = sname;		//兵名
		this.numstdby = numstdby;	//兵数
	}

	var soldiers = new Array (1);
	var decksold = new Array (1);
	var stdbysold = new Array(1);
	var decksoldcount = 0;
	var deckjobcount = 0;
	var stdbysoldcount = 0;


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

	function addNumbuild(name,num) {
		var sname = name.replace('鎚','槌');
		for (var i = 0; i < soldiers.length; i++) {
			if (soldiers[i].sname == sname) {
				soldiers[i].numbuild += Number(num);
				return;
			}
		}
		soldiers[soldiers.length - 1].numbuild += Number(num);
		return;
	}

	function addNumdeck(name,num) {
		var sname = name.replace('鎚','槌');
		for (var i = 0; i < soldiers.length; i++) {
			if (soldiers[i].sname == sname) {
				soldiers[i].numdeck += Number(num);
				return;
			}
		}
		soldiers[soldiers.length - 1].numbuild += Number(num);
		return;
	}
	
	
	//
	//待機中の兵士、訓練中の兵士の数を数える
	//
	function unit_list_count() {
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
				soldiers[soldiers.length] = new SoldData("不明","-1", "-1", "0");

				//
				for(var j = 1; j < tbls.length; j++) {
					var trs = getTags(tbls[j],"tr","");
					//alert("trs.length="+trs.length);
					if (null == trs) continue;		//通常はありえない
					for (var i = 1; i < trs.length; i++) {
						tds = getTags(trs[i],"td","");
						var nb = getTagText(tds[1],"td","");
						trs[i].match(/alt="(.*)"/);
						addNumbuild(RegExp.$1, nb);
					}
				}
				//				
				
				var msg = "";
				for (var i = 0; i < soldiers.length; i++) {
					msg += i + ":" + soldiers[i].sname + "[" + soldiers[i].stype + "," + soldiers[i].sclass + "]," + soldiers[i].numwait + "," + soldiers[i].numbuild + "\n";
				}
				alert(msg);
				//alert('count='+thcount+ '\n'+ths);
				//alert('count='+tdcount+ '\n'+tds);
				//alert('tericount=' + tericount);
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax unit_list_count() error');
				//console.log(textStatus);
			}
		});	

	}

	//
	//デッキに配置したカードの兵を集計する
	//
	function unit_on_deck(n) {
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
				deckjobcount++;
				if (deckjobcount >= 5) {
					var msg = "";
					for (var i = 0; i < decksoldcount; i++) {
						msg += "\n"+ decksold[i].name + "," + decksold[i].cost + "," + decksold[i].sname + "," + decksold[i].numdeck;
					}
					alert("Msg:"+msg);
				}

			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax unit_on_deck('+n+') error');
				//console.log(textStatus);
			}
		});	
	}

	//
	//待機武将のカードに搭載された兵士を数える
	//
	function set_unit_list() {
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
				var txt = RegExp.rightContext;
				reg = new RegExp('</table>','im');
				tbl = txt.match(reg);
				txt = RegExp.leftContext;
				var tds = getClassTags(txt,"td","");
				//alert("3");
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
							var msg = "";
							for (var i = 0; i < stdbysoldcount; i++) {
								msg += "\n"+ stdbysold[i].name + "," + stdbysold[i].sname + "," + stdbysold[i].numstdby;
							}
							alert("Msg:"+msg);
						},
						error: function (XMLHttpRequest, textStatus, errorThrown) {
							alert('$.ajaxset_unit_list() pg2 error');
							//console.log(textStatus);
						}
					});	

				} else {
					var msg = "";
					for (var i = 0; i < stdbysoldcount; i++) {
						msg += "\n"+ stdbysold[i].name + "," + stdbysold[i].sname + "," + stdbysold[i].numstdby;
					}
					alert("Msg:"+msg);
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax set_unit_list() error');
				//console.log(textStatus);
			}
		});	
		
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

	//
	//  ボタンの表示
	//
	function setbutton() {
		var tmp = '<a href="javascript:void(0);" onclick="return false;" id="do_countnos"><img src="' + gifdore + '" alt="NOS伯爵" style="position: relative; top: 0px; left: -10px"></a>';
		$('div.ig_decksection_top').append(tmp);
	}


	//
	// main
	//
	setbutton();	//ボタンの表示
	
	$('#do_countnos').live('click',function() {
		unit_list_count();		//待機中の兵士と訓練中の兵士を数える
	
		unit_on_deck(0);		//デッキの兵を数える
		unit_on_deck(1);
		unit_on_deck(2);
		unit_on_deck(3);
		unit_on_deck(4);
	
		set_unit_list();		//兵士編成100件x2頁で数える
		//calc_dokochika();
		//setTimeout(calc_dokochika, 10);
	});
	
}

bara_addJQuery(count_main);

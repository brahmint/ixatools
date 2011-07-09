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

	var soldiers = new Array (1);
	var decksold = new Array (1);
	var decksoldcount = 0;
	var deckjobcount = 0;


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

	
	function getDoubleSpanTags(html, className){
		var reg = new RegExp('<span class="'+ className + '">([^<]*)<span>(<img.*)</span>(.*)</span>', "ig");
		return html.match(reg);
	}


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
		
					var reg = new RegExp('<span class="ig_deck_unitdata_subleader">([^<]*)<span><img[^>]*>([^<]*)</span><br[^<]*<img[^>]*alt="([^"]*)"[^>]*>([^<]*)人</span>', 'igm');
					var kks = html.match(reg);
					//alert(kks.length);
					for (var i=0; i< kks.length; i++) {
						kkk = kks[i].match(reg);
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
	
	
	function replaceAmp(s) {
		return s.replace(/&amp;/g,'&');
	}
	
	function replaceNbsp(s) {
		return s.replace(/&nbsp;/g,' ');
	}


	//
	// main
	//
	unit_list_count();

	unit_on_deck(0);
	unit_on_deck(1);
	unit_on_deck(2);
	unit_on_deck(3);
	unit_on_deck(4);
	
	

//	var my_no = 2;
//	function myselectAssignNo(){$("select_assign_no").value=my_no;$("deck_mode").value="nomal";document.forms.assign_form.submit();return true}
//
//	setTimeout(myselectAssignNo,100);


}

bara_addJQuery(count_main);

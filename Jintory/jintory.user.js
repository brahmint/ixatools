// ==UserScript==
// @name           Jintory
// @version        1.42
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    Jintory ver. 1.42 20110703
// @include        http://w013.sengokuixa.jp/bbs/res_view.php?thread_id=*&m=new
// @include        http://w013.sengokuixa.jp/bbs/res_view.php?thread_id=*&m=&p=1#ptop
// @include        http://w013.sengokuixa.jp/bbs/res_view.php?p=1&thread_id=*
// @include        http://w013.sengokuixa.jp/user/
// @include        http://w013.sengokuixa.jp/user/#ptop
// @copyright      2011+, brahmint@gmail.com
// ==/UserScript==

//新章13+14鯖 無課金同盟 陣取りかぶり防止用
//   陣張り・領地獲得宣言スレ書き込み支援ツール
//
// 2011/06/04 1.0 初版リリース
// 2011/06/10 1.1 textarea に投稿コメントを自動表示
//                jintory 変数で、陣張りのみ、領地取り含むを選べる
// 2011/06/16 1.11 thread_id 8 → 11 に暫定対応
// 2011/06/20 1.2  【城主名略称】
//                 【Jintory】2     に対応
// 2011/06/22 1.21 【城主名略称】等オプションの凍結
// 2011/06/26 1.3   全体を (function() {})(); 宣言にしてグローバル領域に影響を与えないようにした
//                  オプションはプロファイル画面だけで完結させるようにした
//                  GM_getValue(), GM_setValue() でオプション値を保持・参照するようにした
// 2011/07/01 1.4   GM_getValue(), GM_setValue() Chrome版との互換性実現
// 2011/07/01 1.41  ライブラリが動かないので、try catch で実現
//                  jQuery ライブラリ一部対応
// 2011/07/03 1.42  メンバ名変更(name→lord)の確認ミス 


//
// main
//

// Mokoと同じjQuery初期化を使用
function jintory_addJQuery(callback) {
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

function jintory_main($) {
	
	var locationhost = "w013.sengokuixa.jp";		// w013専用
	//var locationhost = window.location.host;
	//alert(document.cookie);
	
	
	var lordname = getIdTagText(document.body.innerHTML, "li", "lordName");
	var shortlord;
	var jintorymode;
	
	try {
		shortlord = GM_getValue('shortlord',null);
	} catch (e) {
		shortlord = window.localStorage.getItem('shortlord');
	}
	
	try {
		jintorymode = GM_getValue('jintorymode',null);
	} catch (e) {
		jintorymode = window.localStorage.getItem('jintorymode');
	}
	
	//alert('shortlord='+shortlord+'\njintorymode='+jintorymode);
	
	var threadname = $('div.ig_decksection_top').text();
	
	var AttackPlace = function( placename, pos, lord, frompos, fromlord, fromname, time, ext ) {
		this.placename = placename;	//場所名
		this.pos       = pos;		//座標
		this.lord      = lord;		//城主名
		this.frompos   = frompos;	//どこから（座標）
		this.fromlord  = fromlord;	//誰から
		this.fromname  = fromname;	//どこから（場所）
		this.time      = time;		//時刻
		this.ext       = ext;		//その他
		this.newflag   = true;		//新規フラグ
		this.double    = false;	//ダブり
		this.newer     = true;		//新しいから残すフラグ
		this.toString  = function() {
			return this.placename + ",("+this.pos + ")," + 	this.lord + "," + "("+this.frompos + ")," + this.fromlord + "," + this.fromname + ","
					+ this.time + "," + this.ext + "[" + this.newflag + ":" + this.double + ":" + this.newer + "]";
		}
	}
	
	var Place = function( pos, lord, time, ext ) {
		this.pos      = pos;		//座標
		this.lord     = lord;		//城主名
		this.time     = time;		//時刻
		this.ext      = ext;	 	//その他
		this.newflag  = true;      //新規フラグ
		this.double   = false;		//ダブり
		this.newer    = true;      //新しいから残すフラグ
		this.toString = function() {
			return "("+this.pos + ")," + 	this.lord + "," + this.time + "," + this.ext 
					+ "[" + this.newflag + ":" + this.double + ":" + this.newer + "]";
		}
	}
	
	var jintory    = true;			// 陣張りのみの場合 true;
	if ('2' == jintorymode) {
		jintory = false;
	}
	
	//alert('jintory='+jintory);
	
	var kougekiDoneflag   = false;
	var mycount    = 0;
	var myplaces   = new Array(1);
	var placecount = 0;
	var places     = new Array(1);
	var dblcount   = 0;
	var outcount   = 0;
	var outlines   = new Array(1);
	var msgno      = -1;
	
	// プロフィールから略称取得
	var utm = getUnixTime();
	var justnow = formatIxaTime(utm);
	
	
	if (document.URL.match(/\/user\/(#ptop)?$/)) {    //プロフィール頁なら
		// プロフィール頁からオプション取得・設定
		checkUsersProf();
	} else {
		//alert('threadname='+threadname);
		if (threadname.match("^陣張り")) {
			//alert('陣張り');
			if (document.body.innerHTML.match(/dmo=sortie/)) {		//攻撃中なら
				pickKougekiData('http://' + locationhost + '/facility/unit_status.php?dmo=sortie');  	//攻撃中
				setKougekiViser( 3000 );
			}
		}
	}
	
	
	// 陣のデータをチェックする
	function checkJintory() {
		if (0 < mycount) {
			pickBoardData();		// 掲示板の最後の発言のデータを読み込む
	
			//陣張り予定時刻を調べ、陣張り終わったのは消す
			for (var i = 0; i < placecount; i++) {
				if ("" != places[i].pos) {
					if ("" != justnow,places[i].time) {
						if (!compTime(justnow,places[i].time)) {
							places[i].newer = false;
						}
					}
				}
			}
	
			//自分の陣張り予定位置をチェック
			checkMyPos();
	
			var tmp = "";
			if (dblcount > 0) {			//かぶり警告
				for (var i = 0; i < mycount; i++) {
					if (true == myplaces[i].double) {
						if ("" != tmp) {
							tmp += "\n";
						}
						tmp += myplaces[i].pos + " がかぶりです！";
					}
				}
				alert(tmp + "\nキャンセルしてください");
			}
		
			for (var i = 0; i < mycount; i++) {
				if (true == myplaces[i].newflag) {
					outlines[outcount] = myplaces[i].pos + ' ' + myplaces[i].lord + ' ' + myplaces[i].time;
					if ("" != myplaces[i].ext) {
						outlines[outcount] += ' ' + myplaces[i].ext;
					}
					outcount++;
				}
			}
			var bptr = outcount;
			if (outcount > 0) {
				for (var i = 0; i < placecount; i++) {
					if (true == places[i].newer) {
						if ("" == places[i].pos) {
							if ("" != places[i].ext) {
								outlines[outcount] = places[i].ext;
								outcount++;
							}
						} else {
							outlines[outcount] = places[i].pos + ' ' +  places[i].lord + ' ' + places[i].time;
							if ("" != places[i].ext) {
								 outlines[outcount] += ' ' + places[i].ext;
							}
							outcount++;
						}
					}
				}
			
				tmp = "";
				for (var i = 0; i < outcount; i++) {
					if (0 != i) {
						tmp += "\n";
					}
					tmp += outlines[i];
					if (i == bptr) {
						tmp += " " + msgno;
					}
				}
				var pl5Node = document.getElementById("textfield");
				//alert("pl5Node.textContent=" + pl5Node.textContent);
				if ("" == pl5Node.textContent) {
					var textNode = document.createTextNode(tmp);
					pl5Node.appendChild(textNode);
				}
				//alert(document.getElementById("textfield").innerHTML);
				//alert("length =" +pl5Nodes.length);
				//alert(tmp);
			}
		}
	}
	
	
	//自分の取得予定座標データを、掲示板のデータと突き合わせてチェックする
	function checkMyPos() {
		//var tmp = "";
		for (var i = 0; i < mycount; i++) {
			for (var j = 0; j < placecount; j++) {
				if (true == places[j].newer) {
					if (places[j].pos == myplaces[i].pos) {
						if ((places[j].lord == lordname) || ((null != shortlord) && (places[j].lord == shortlord))) {
							myplaces[i].newflag = false;	    //自分のが登録済みだったら 新しくないものとする
							places[j].time = myplaces[i].time;	//再取得もありうるので、取得予定時刻は入れ替えておく
							//tmp += "already "+myplaces[i].pos + "\n";
						} else {
							if (false == myplaces[i].double) {
								myplaces[i].double = true;			//ダブりですよ
								dblcount++;
								//tmp += "double "+myplaces[i].pos + "\n";
							} else {
								//tmp += "double + "+places[j].pos + "\n";
							}
						}
					} else {
						//tmp += "ok " + j + ":" + i + "\n";
					}
				}
			}
		}
		//alert("checkMyPos()\n" + tmp);
	}
	
	//掲示板の最初のレスからデータを拾う
	// places にデータが入る
	// msgno に掲示板のメッセージ番号
	function pickBoardData() {
		var tbls = getClassTags(document.body.innerHTML,"table","chat_spacetable");
		var found = -1;
		for (var i = 1; i < tbls.length; i++) {
			var tgs = getClassTags(tbls[i], "td", "pl10 comment_wbr");
			if (null != tgs) {
				var s = getClassTagText(replaceWbr(replaceBr(tgs[0])),"td", "pl10 comment_wbr");
				var lines = s.split('\n');
				//alert("lines.length="+lines.length);
				//var tmp = "";    //拾ったデータを見るときはこのtmpを見て確認
				for (var j = 0; j < lines.length; j++) {
					var sd = checkLine(lines[j]);
					placecount++;
					if (sd[3].match(/\s*▼[0-9]+$/)) {
						sd[3] = RegExp.leftContext;
					}
					places[j] = new Place(sd[0],sd[1],sd[2],sd[3]);
					//alert('j='+j+':places[j]='+places[j].toString());
					//tmp += places[j].toString() +"\n";
				}
				var msgtg = getClassTags(tbls[i],"td","fs10 center");
				msgno = getClassTagText(msgtg[0],"td","fs10 center").replace("No\.","▼");
				found = i;
				break;
			}
		}
		//alert("i=" + i + "\nmsgno=" + msgno);
		//alert(tmp);
		//alert("tg="+tg+"\ns="+s+"\nlines="+lines);
	}
	
	//前の掲示の行の確認
	function checkLine(s) {
		var ans = new Array(1);
		var savesp = "";
		var re = s.match(/^\s*\(?\s*((\-|－|ー)?[0-9０-９]+)\s*(,|，|\.|．|､|、|・)\s*((\-|－|ー)?[0-9０-９]+)\s*\)?\s+([^\s.]+)\s+([;:：；・．.時分秒0-9０-９]+)(\s*(頃|ころ|ごろ)?)/);
		if (re) {
			//alert("re→"+re.join('|'));
			var x = RegExp.$1;
			var y = RegExp.$4;
			var ld = RegExp.$6;		//lord
			var tm = RegExp.$7;		//time
			savesp = RegExp.$8;
			var rightContext = RegExp.rightContext;
			ans[0] = zenToHan(x) + "," + zenToHan(y);
			ans[1] = ld;
			ans[2] = checkTime(zenToHan(tm));
			if (ans[2] == "") {
				ans[3] = tm + savesp + rightContext;
			} else {
				ans[3] = rightContext;
			}
		} else {
			re = s.match(/^\s*\(?\s*((\-|－|ー)?[0-9０-９]+)\s*(,|，|\.|．|､|、|・)\s*((\-|－|ー)?[0-9０-９]+)\s*\)?/);
			if (re) {
				var x = RegExp.$1;
				var y = RegExp.$4;
				var rightContext = RegExp.rightContext;
				var rx = rightContext.match(/^\s*([^\s.]+)\s+(明日)?\s*(午前|午後)?\s*([;:：；・．.時分秒0-9０-９]+)(\s*(頃|ころ|ごろ)?)/);
				if (rx) {
					//alert ("rx→"+ rx.join('!'));
					rightContext = RegExp.rightContext;
					var ld = RegExp.$1;
					var tm = RegExp.$4;
					ans[0] = zenToHan(x) + "," + zenToHan(y);
					ans[1] = ld;
					ans[2] = checkTime(zenToHan(tm));
					ans[3] = rightContext;
				} else {
					ans[0] = zenToHan(x) + "," + zenToHan(y);
					ans[1] = "";
					ans[2] = "";
					ans[3] = rightContext;
				}
			} else {
				ans[0] = "";
				ans[1] = "";
				ans[2] = "";
				ans[3] = s;
			}
		}
		//alert("checkLine\n" + ans[0] +" "+ ans[1] + " " + ans[2] + "#" + ans[3]);
		return ans;
	}
	
	// 時刻 hh:mm:ss → hh:mm へ
	function checkTime(str) {
		var e = str.match(/[0-9]+/g);
		if (!e) {
			return "";
		}
		if (e.length < 1 || e.length > 3) {
			return "";
		}
		var h = Number(e[0]);
		var m = 0;
		if (e.length > 1) {
			m = Number(e[1]);
		}
		var s = 0;
		if ( e.length == 3) {
			s = Number(e[2]);
			if (s > 0) m++;
		}
		if (m > 59) {
			m = 0;
			h++;
		}
		if (h > 23) {
			h = 0;
		}
		return (h+100).toString().substr(-2) +":" + (m+100).toString().substr(-2);
	}
	
	//全角数字・記号を半角に
	function zenToHan(s){
		var wd = s;
		if (s) {
			var zen = '０１２３４５６７８９－ー';
			var han = '0123456789--';
			for(var i = 0; i <zen.length; i++){
				var re = new RegExp(zen[i],"gm");
				wd = wd.replace(re,han[i]);
			}
		}
		return wd;
	}
	
	//攻撃中の座標、獲得時刻データを得る
	function pickKougekiData(kUrl) {
		//alert('ajax');
		$.ajax({
			url: kUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				//alert('ajax get');
				var s = getTags(html,"table","paneltable table_fightlist");
				mycount = 0;
				//var re = /<span>[0-9]+\-[0-9]+\-[0-9]+\s([0-9]+:[0-9]+:[0-9]+)/;
				for (var i = 0; i < s.length; i++) {
					if ((jintory == true && s[i].match(/icon_attack\.png/) != null) || jintory == false) {		//陣張りだけ,領地取りも？
						var dm = s[i].match(/<span>[0-9]+\-[0-9]+\-[0-9]+\s([0-9]+:[0-9]+:[0-9]+:?[0-9]*)/);
						if (dm) {
							var placenm = "";
							var dt = checkTime(RegExp.$1);
							var ss = getClassTags(s[i], "td", "td_bggray");
							var fps = ss[0].match(/\s+\((\-*[0-9]+,\-*[0-9]+)\)/);
							var fpz = RegExp.$1;
							var tps = ss[1].match(/\s+\((\-*[0-9]+,\-*[0-9]+)\)/);
							var tpz = RegExp.$1;
							if (null == shortlord) { 
								myplaces[mycount] = new AttackPlace(placenm, tpz, lordname, fpz, lordname, "", dt, "");
							} else {
								myplaces[mycount] = new AttackPlace(placenm, tpz, shortlord, fpz, shortlord, "", dt, "");
							}
							//alert(myplaces[mycount].toString());
							mycount++;
						} else {
							//alert("i="+i);
						}
					}
				}
				kougekiDoneflag = true;
				//GM_log("lordnn.toString():"+lordnn.toString());
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax error');
				//console.log(textStatus);
			}
		});	
		return;
	}
	
	
	//プロフィール頁でオプション値の変更があったら設定・保存する
	function checkUsersProf() {
		var ss = getClassTags(document.body.innerHTML,"p","info");		
		//alert(ss);
		var s = getClassTagText(replaceWbr(replaceBr(ss[0])),"p","info");
		//alert(s);
		var newshortlord = shortlord;
		var newjintory = jintorymode;
		if (s.match(/【城主名略称】\s*(\S+)/)) {
			newshortlord = RegExp.$1;
		}
		if (s.match(/【Jintory】\s*(\S+)/)) {
			newjintory = RegExp.$1;
		}
		
		if ( newshortlord != shortlord || newjintory != jintorymode) {
			var tmp = "*** Jintory オプション変更 ***";
			if (newshortlord != shortlord) {
				tmp += '\n' + '【城主名略称】' + newshortlord;
				try {
					GM_setValue('shortlord',newshortlord);
				} catch (e) {
					try {
						window.localStorage.setItem('shortlord',newshortlord);   // Chrome用
					} catch (e) {
						alert("cannot setItem('shortlord,'"+ newshortlord + ")");   
					}
				}
			}
			if (newjintory != jintorymode) {
				tmp += '\n' + '【Jintory】' + newjintory;
				try {
					GM_setValue('jintorymode',newjintory);
				} catch (e) {
					try {
						window.localStorage.setItem('jintorymode',newjintory);    // Chrome用
					} catch (e) {
						alert("cannot setItem('jintorymode,'"+ newjintory + ")");
					}
				}
			}
			alert(tmp);
		}
		
		return;
	}
	
	// 時刻比較 dest > src ならば true
	function compTime(src, dest) {
		src.match(/([0-9]+):([0-9]+)/);
		var sh = Number(RegExp.$1);
		var sm = Number(RegExp.$2);
		dest.match(/([0-9]+):([0-9]+)/);
		var dh = Number(RegExp.$1);
		var dm = Number(RegExp.$2);
		var sx = sh*60 + sm;
		var dx = dh*60 + dm;
		if (dx > sx) {
			if ((dx - sx) >= 900) {  //１５時間以上差
				return false;
			} else {
				return true;
			}
		} else {
			if ((sx - dx) >= 900) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	function myCompTime(src,dest) {
		var ans = compTime( src, dest);
		alert(src + " ? " + dest + " = " + ans);
		return ans;
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
			var regsub = new RegExp("<([^>^\\s]+)(\\s|.)*?>((\\s|.)*?)</" + tagName + ">","i");
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
	
	function replaceBr(s) {
		return (s.replace(/<br>/g,'')).replace(/<br \/>/g,'');
	}
	
	function replaceWbr(s) {
		return s.replace(/<wbr>/g,'');
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
	
	var kougekiTrcnt;
	var kougekiViserId;
	
	function setKougekiViser(timeVise)
	{
		kougekiTrcnt = 0;
		kougekiViserId = setInterval( function() { 
									kougekiTrcnt++;
									if (kougekiDoneflag) {
										clearInterval(kougekiViserId);
										checkJintory();
									} else if ( kougekiTrcnt > 30 ) {
										clearInterval(kougekiViserId);
									}
								}, timeVise);
	}
	
	//
	// ixa-moko から一部拝借
	//
	function getUnixTime() {
		return ~~(new Date/1000);
	}
	
	function formatTime(sec) {
		var h = Math.floor(sec / 3600);
		var m = Math.floor((sec - h*3600 ) / 60 );
		var s = Math.floor(sec - h*3600 - m*60 );
		var tim = (((h+9) % 24)+100).toString().substr(-2) + ":" +
				  (m+100).toString().substr(-2)  + ":" +
				  (s+100).toString().substr(-2);
		return tim;
	}
	
	function formatIxaTime(sec) {
		var h = Math.floor(sec / 3600);
		var m = Math.floor((sec - h*3600 ) / 60 );
		var s = Math.floor(sec - h*3600 - m*60 );
		var tim = (((h+9) % 24)+100).toString().substr(-2) + ":" +
				  (m+100).toString().substr(-2);
		return tim;
	}

}

jintory_addJQuery(jintory_main);

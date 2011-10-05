// ==UserScript==
// @name		Jintory
// @version		1.5
// @namespace	https://sites.google.com/site/ixatools/
// @description	Jintory ver. 1.5 201110??
// @include		http://*.sengokuixa.jp/bbs/res_view.php?*
// @include		http://*.sengokuixa.jp/bbs/res_view.php?thread_id=*&m=new
// @match		http://*.sengokuixa.jp/bbs/res_view.php?thread_id=*&m=new
// @include		http://*.sengokuixa.jp/bbs/res_view.php?thread_id=*&m=&p=1#ptop
// @match		http://*.sengokuixa.jp/bbs/res_view.php?thread_id=*&m=&p=1#ptop
// @include		http://*.sengokuixa.jp/bbs/res_view.php?p=1&thread_id=*
// @match		http://*.sengokuixa.jp/bbs/res_view.php?p=1&thread_id=*
// @include		http://*.sengokuixa.jp/user/
// @include		http://*.sengokuixa.jp/user/#ptop
// -match		http://*.sengokuixa.jp/user/
// -match		http://*.sengokuixa.jp/user/#ptop
// @copyright	2011, brahmint@gmail.com
// ==/UserScript==

//新章13+14鯖 無課金同盟 陣取りかぶり防止用
//   陣張り・領地獲得宣言スレ書き込み支援ツール
//
// 20110604	1.0		初版リリース
// 20110610	1.1		textarea に投稿コメントを自動表示
//					jintory 変数で、陣張りのみ、領地取り含むを選べる
// 20110616	1.11	thread_id 8 → 11 に暫定対応
// 20110620	1.2		【城主名略称】
//					【Jintory】2     に対応
// 20110622	1.21	【城主名略称】等オプションの凍結
// 20110626	1.3		全体を (function() {})(); 宣言にしてグローバル領域に影響を与えないようにした
//					オプションはプロファイル画面だけで完結させるようにした
//					GM_getValue(), GM_setValue() でオプション値を保持・参照するようにした
// 20110701	1.4		GM_getValue(), GM_setValue() Chrome版との互換性実現
// 20110701	1.41	ライブラリが動かないので、try catch で実現
//					jQuery ライブラリ一部対応
// 20110703	1.42	メンバ名変更(name→lord)の確認ミス
// 20110714	1.43	URL変更に対応 w013→w213
//					新規インストール時の略称名対応部分の修正=lordNameの取得ミス
//					Intervalタイマー 3000→1000
// 20110703	1.44	メンバ名変更(name→lord)の確認ミス
//					プロフィール設定値をプロフィールから消した時の処理
// 20110914	1.45	w213以外の鯖にも対応,FirefoxでGM_getValue,GM_setValueからlocalStorageへ
// 201110??	1.5		複数メッセージを参照

// Mokoと同じjQuery初期化を使用
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

//
// main
//

function jintory_main($) {

	var jinz	= new Object();
	jinz.myJintoryData = function( placename, pos, lord, frompos, fromlord, fromname, time, ext ) {
		this.placename	= placename;	//場所名
		this.pos		= pos;		//座標
		this.lord		= lord;		//城主名
		this.frompos	= frompos;	//どこから（座標）
		this.fromlord	= fromlord;	//誰から
		this.fromname	= fromname;	//どこから（場所）
		this.time		= time;		//時刻
		this.ext		= ext;		//その他
		this.newflag	= true;		//新規フラグ
		this.double		= false;	//ダブり
		this.newer		= true;		//新しいから残すフラグ
	}	
	jinz.boardData = function( pos, lord, time, ext, msgtime ) {
		this.pos		= pos;		//座標
		this.lord		= lord;		//城主名
		this.time		= time;		//時刻
		this.ext		= ext;		//その他
		this.msgtime	= msgtime;
		this.newflag	= true;		//新規フラグ
		this.double		= false;	//ダブり
		this.newer		= true;		//新しいから残すフラグ
	}
	jinz.lineData = function( pos, lord, time, ext) {
		this.pos	= pos;		//座標
		this.lord	= lord;		//城主名
		this.time	= time;		//時刻
		this.ext	= ext;	 	//その他
	}
	jinz.locationhost	= window.location.host;
	jinz.lordname		= $('li#lordName').text();
	jinz.shortlord		= window.localStorage.getItem('shortlord');
	if (jinz.shortlord == null) jinz.shortlord = "";
	jinz.jintorymode	= window.localStorage.getItem('jintorymode');
	if (jinz.jintorymode == null) jinz.jintorymode = "";
	jinz.jintory		= ('2' == jinz.jintorymode) ? false:true;			// 陣張りのみの場合 true;
	jinz.kougekiDoneflag = false;
	jinz.myjinz	= new Array();
	jinz.data	= new Array();
	jinz.addBoardData= function(ldata, msgtime) {		//ldataはlineDataを想定
		this.data[this.data.length] = new this.boardData(ldata.pos, ldata.lord, ldata.time, ldata.ext, msgtime);
	}
	jinz.searchPosData	= function(pos) {
		for (var i = 0; i < this.data.length; i++) {
			if (pos == this.data[i].pos) return i;
		}
		return -1;
	}
	jinz.searchExtData	= function(ext) {
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].pos != "") continue;
			if (ext == this.data[i].ext) return i;
		}
		return -1;
	}
	jinz.toStr	= function() {
		var msg = "";
		for (var i = 0; i < this.data.length; i++) {
			msg += "i:"+i+"\n"+"pos:"+this.data[i].pos
						+ "\n"+"lord:"+this.data[i].lord
						+ "\n"+"time="+this.data[i].time
						+ "\n"+"ext='"+this.data[i].ext+"'"
						+ "\n"+"msgtime="+this.data[i].msgtime
						+ "\n";
		}
		return msg;
	}
	jinz.toStrMine	= function() {
		var msg = "";
		for (var i = 0; i < this.myjinz.length; i++) {
			msg += "i:"+i+"\n"+"placename:'"+this.myjinz[i].placename+"'"
						+ "\n"+"pos:"+this.myjinz[i].pos
						+ "\n"+"lord:"+this.myjinz[i].lord
						+ "\n"+"frompos:'"+this.myjinz[i].frompos+"'"
						+ "\n"+"fromlord:'"+this.myjinz[i].fromlord+"'"
						+ "\n"+"fromname:'"+this.myjinz[i].fromname+"'"
						+ "\n"+"time="+this.myjinz[i].time
						+ "\n"+"ext='"+this.myjinz[i].ext+"'"
						+ "\n"+"newflag="+this.myjinz[i].newflag
						+ "\n"+"double="+this.myjinz[i].double
						+ "\n"+"newer="+this.myjinz[i].newer
						+ "\n";
		}
		return msg;
	}
	jinz.justnow = formatIxaTime(getUnixTime(), 1);	//秒切上げ
	jinz.msgno = null;
	// jinz.data にデータが入る
	// msgno に掲示板のメッセージ番号
	jinz.pickBoardDatas = function($) {
		jinz.msgno = null;
		var trs = $('table.chat_spacetable tr');
		//alert(trs.length);
		for (var i = trs.length - 1; i > 0; i--) {
			//alert("i="+i+" :"+trs.eq(i).find('.pl10.red').length);
			if (trs.eq(i).find('.pl10.red').length != 0) {
				//alert('deleted');
				continue;
			}
			var mno = trs.eq(i).find('td').eq(0).text();
			var txt = trs.eq(i).find('td').eq(2).text();
			var tm  = trim(trs.eq(i).find('td').eq(3).text());
			//alert(	'mno='+mno+"\n"+
			//		'txt='+txt+"\n"+
			//		'tm='+tm);
			var lines = txt.split('\n');
			for (var j = lines.length - 1; j >= 0; j--) {
				var sd = this.getCheckedLineData(lines[j]);
				var isAlrdy = (sd.pos != "") ? this.searchPosData(sd.pos) : this.searchExtData(sd.ext);	//既にあるデータか？
				if (isAlrdy >= 0) {
					continue;
				}
				this.addBoardData(sd, tm);
				//alert(sd.pos + "\n"
				//	+ sd.lord + "\n"
				//	+ sd.time + "\n"
				//	+ sd.ext  );
			}
			jinz.msgno = mno;
		}
	}
	//１行チェックしてデータとして加工
	jinz.getCheckedLineData = function(s0) {
		var s = s0.replace(/\s*▼[0-9]+$/,'');
		s = trim(s);
		var ans;
		var savesp = "";
		var re = s.match(/^\(?\s*((\-|－|ー)?[0-9０-９]+)\s*(,|，|\.|．|､|、|・)\s*((\-|－|ー)?[0-9０-９]+)\s*\)?\s+([^\s.]+)\s+([;:：；・．.時分秒0-9０-９]+)(\s*(頃|ころ|ごろ)?)/);
		if (re) {
			//alert("re→"+re.join('|'));
			var x = RegExp.$1;
			var y = RegExp.$4;
			var ld = RegExp.$6;		//lord
			var tm = RegExp.$7;		//time
			savesp = RegExp.$8;
			var rightContext = RegExp.rightContext;
			var checkedtm = checkedTimeStr(zenToHan(tm));
			ans = new this.lineData(zenToHan(x) + "," + zenToHan(y), (this.shortlord != "") ? ld.replace(this.shortlord,this.lordname) : ld, checkedtm, (checkedtm == "") ? tm + savesp + rightContext : rightContext);
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
					ans = new this.lineData(posStr(x,y),  (this.shortlord != "") ? ld.replace(this.shortlord,this.lordname) : ld,  checkedTimeStr(zenToHan(tm)), rightContext);
				} else {
					ans = new this.lineData(posStr(x,y), "", "", rightContext);
				}
			} else {
				ans = new this.lineData("","","", s);
			}
		}
		return ans;
	}
	// 時刻比較 src < dest ならば true
	// ～-15時間  : false
	// -15時間～0 : true;
	// 0～15時間  : false
	// 15時間～   : true
	jinz.compTime = function(src, dest) {
		var ans = this.subtractTime(dest, src);
		if (ans > 0) {
			if (ans > 900) {  //１５時間以上差
				return false;
			} else {
				return true;
			}
		} else {
			if (ans < -900) {
				return true;
			} else {
				return false;
			}
		}
	}
	// 時間引き算 a - b を分で返す
	jinz.subtractTime = function(a,b) {
		a.match(/([0-9]+):([0-9]+)/);		// hh:mm 形式を前提
		var ah = Number(RegExp.$1);
		var am = Number(RegExp.$2);
		b.match(/([0-9]+):([0-9]+)/);
		var bh = Number(RegExp.$1);
		var bm = Number(RegExp.$2);
		var ax = ah*60 + am;
		var bx = bh*60 + bm;
		return (ax - bx);
	}
	// hh:mm 形式の時刻に mins分 を加えた時刻を返す
	jinz.addMins = function( hm, mins) {
		hm.match(/([0-9]+):([0-9]+)/);		// hh:mm 形式を前提
		var h = Number(RegExp.$1);
		var m = Number(RegExp.$2) + mins;
		while (m < 0) { m += 60; h--; }
		while (h < 0) h += 24;
		while (m >= 60) { m -= 60; h++; }
		while (h >= 24) h -= 24;
		return (100 + h).toString().substr(-2) + ':' + (100 + m).toString().substr(-2);
	}

	var dblcount   = 0;
	var outcount   = 0;
	var outlines   = new Array();		//出力用
	
	if (document.URL.match(/\/user\/(#ptop)?$/)) {    //プロフィール頁なら
		// プロフィール頁からオプション取得・設定
		checkUsersProfile();
	} else {		//掲示板なら
		var threadname = $('div.ig_decksection_top').text();
		//alert('threadname='+threadname);
		if (threadname.match("^陣張り")) {
			//alert('陣張り');
			if (document.body.innerHTML.match(/dmo=sortie/)) {		//攻撃中なら
				//alert('http://' + locationhost + '/facility/unit_status.php?dmo=sortie');
				pickKougekiData('http://' + jinz.locationhost + '/facility/unit_status.php?dmo=sortie');  	//攻撃中
				setKougekiViser( 100 );
			}
		}
	}


	// 陣のデータをチェックする
	function checkJintory() {
		if (0 < jinz.myjinz.length) {
			jinz.pickBoardDatas($);		// 掲示板の最後の発言のデータを読み込む
			GM_log(jinz.toStr());

			//陣張り予定時刻を調べ、陣張り終わったのは消す
			for (var i = 0; i < jinz.data.length; i++) {
				if ("" != jinz.data[i].pos) {
					if ("" != jinz.justnow,jinz.data[i].time) {
						if (!jinz.compTime(jinz.justnow,jinz.data[i].time)) {
							GM_log("newer←false:"+i);
							jinz.data[i].newer = false;
						}
					}
				}
			}

			//自分の陣張り予定位置をチェック
			checkMyPos();

			var tmp = "";
			if (dblcount > 0) {			//かぶり警告
				for (var i = 0; i < jinz.myjinz.length; i++) {
					if (true == jinz.myjinz[i].double) {
						if ("" != tmp) {
							tmp += "\n";
						}
						tmp += jinz.myjinz[i].pos + " がかぶりです！";
					}
				}
				alert(tmp + "\nキャンセルしてください");
			}

			for (var i = 0; i < jinz.myjinz.length; i++) {
				if (true == jinz.myjinz[i].newflag) {
					outlines[outcount] = jinz.myjinz[i].pos + ' ' + jinz.myjinz[i].lord + ' ' + jinz.myjinz[i].time;
					if ("" != jinz.myjinz[i].ext) {
						outlines[outcount] += ' ' + jinz.myjinz[i].ext;
					}
					outcount++;
				}
			}
			var bptr = outcount;
			if (outcount > 0) {
				for (var i = 0; i < jinz.data.length; i++) {
					if (true == jinz.data[i].newer) {
						if ("" == jinz.data[i].pos) {
							if ("" != jinz.data[i].ext) {
								outlines[outcount] = jinz.data[i].ext;
								outcount++;
							}
						} else {
							outlines[outcount] = jinz.data[i].pos + ' ' +  jinz.data[i].lord + ' ' + jinz.data[i].time;
							if ("" != jinz.data[i].ext) {
								 outlines[outcount] += ' ' + jinz.data[i].ext;
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
						tmp += " " + jinz.msgno;
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
		for (var i = 0; i < jinz.myjinz.length; i++) {
			for (var j = 0; j < jinz.data.length; j++) {
				if (true == jinz.data[j].newer) {
					if (jinz.data[j].pos == jinz.myjinz[i].pos) {
						if ((jinz[j].lord == jinz.lordname) || (("" != jinz.shortlord) && (jinz.data[j].lord == jinz.shortlord))) {
							jinz.myjinz[i].newflag = false;	    //自分のが登録済みだったら 新しくないものとする
							jinz.data[j].time = jinz.myjinz[i].time;	//再取得もありうるので、取得予定時刻は入れ替えておく
							//tmp += "already "+myjinz[i].pos + "\n";
						} else {
							if (false == jinz.myjinz[i].double) {
								jinz.myjinz[i].double = true;			//ダブりですよ
								dblcount++;
								//tmp += "double "+myjinz[i].pos + "\n";
							} else {
								//tmp += "double + "+jinz[j].pos + "\n";
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

	// 時刻 hh:mm:ss → hh:mm へ
	function checkedTimeStr(str) {
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

	function posStr(x,y) {
		return zenToHan(x) + ',' + zenToHan(y);
	}

	//攻撃中の座標、獲得時刻データを得る
	// 結果は myjinz に
	function pickKougekiData(kUrl) {
		//alert('ajax');
		$.ajax({
			url: kUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				//alert('ajax get');
				var tbls = $(html).find('table.paneltable.table_fightlist');
				//var re = /<span>[0-9]+\-[0-9]+\-[0-9]+\s([0-9]+:[0-9]+:[0-9]+)/;
				for (var i = 0; i < tbls.length; i++) {
					if ((jinz.jintory == true && tbls.eq(i).find('img').attr('src').match(/(icon|mode)_attack\.png/) != null) || jinz.jintory == false) {		//陣張りだけ,領地取りも？
						//alert("i:"+i+", txt="+tbls.eq(i).find('span').text());
						var dm = tbls.eq(i).find('span').text().match(/20[0-9]+\-[0-9]+\-[0-9]+\s([0-9]+:[0-9]+:[0-9]+:?[0-9]*)/);
						if (dm) {
							var arrivetm = checkedTimeStr(RegExp.$1);
							alert("found");
							var ss = tbls.eq(i).find('td.td_bggray span');
							var fps = ss.eq(0).text().match(/\s+\((\-*[0-9]+,\-*[0-9]+)\)/);
							var fpz = RegExp.$1;
							var tps = ss.eq(1).text().match(/\s+\((\-*[0-9]+,\-*[0-9]+)\)/);
							var tpz = RegExp.$1;
							var fromnm = trim(ss.eq(0).find('a').text());
							var placenm = trim(ss.eq(1).find('a').text());
							jinz.myjinz[jinz.myjinz.length] = new jinz.myJintoryData(placenm, tpz, jinz.lordname, fpz, jinz.lordname, fromnm, arrivetm, "");
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
	function checkUsersProfile(html) {
		var s = $(html).find('p.info').text();
		//alert(s);
		var newshortlord = jinz.shortlord;
		var newjintory = jinz.jintorymode;
		if (s.match(/【城主名略称】\s*(\S+)/)) {
			newshortlord = RegExp.$1;
		} else {
			newshortlord = "";
		}
		if (s.match(/【Jintory】\s*(\S+)/)) {
			newjintory = RegExp.$1;
		} else {
			newjintory = "";
		}

		if ( newshortlord != jinz.shortlord || newjintory != jinz.jintorymode) {
			var tmp = "*** Jintory オプション変更 ***";
			if (newshortlord != jinz.shortlord) {
				tmp += '\n' + '【城主名略称】' + newshortlord;
				try {
					window.localStorage.setItem('shortlord',newshortlord);
				} catch (e) {
					alert("cannot setItem('shortlord,'"+ newshortlord + ")");
				}
			}
			if (newjintory != jinz.jintorymode) {
				tmp += '\n' + '【Jintory】' + newjintory;
				try {
					window.localStorage.setItem('jintorymode',newjintory);
				} catch (e) {
					alert("cannot setItem('jintorymode,'"+ newjintory + ")");
				}
			}
			alert(tmp);
		}

		return;
	}
	
	function myCompTime(src,dest) {
		var ans = jinz.compTime( src, dest);
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

	////////////////////////////////////////

	var kougekiTrcnt;
	var kougekiViserId;

	function setKougekiViser(timeVise)
	{

		kougekiTrcnt = 0;
		kougekiViserId = setInterval( function() {
									kougekiTrcnt++;
									if (kougekiDoneflag) {
										clearInterval(kougekiViserId);
										GM_log("pickKougekiData()\n"+jinz.toStrMine());
										checkJintory();
									} else if ( kougekiTrcnt > 300 ) {
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

	function formatIxaTime(sec, type) {	// type  0:秒切捨　　1:秒切上
		var h = Math.floor(sec / 3600);
		var m = Math.floor((sec - h*3600 ) / 60 );
		var s = Math.floor(sec - h*3600 - m*60 );
		if (type == 1) {
			if (s > 0) {
				m++;
				if (m > 59) {
					m -= 60;
					h++;
					if (h > 23) h = 0;
				}
			}
		}
		var tim = (((h+9) % 24)+100).toString().substr(-2) + ":" +
				  (m+100).toString().substr(-2);
		return tim;
	}

}

bara_addJQuery(jintory_main);

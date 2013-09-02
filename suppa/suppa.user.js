// ==UserScript==
// @name           Suppa
// @version        2.00
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    Suppa 2.01 20130902
// @include        http://*.sengokuixa.jp/facility/unit_list.php
// @match          http://*.sengokuixa.jp/facility/unit_list.php
// ==/UserScript==
//
// 20110715 1.01	初版
// 20110720 1.02	すべての武将がデッキのある時に集計されない問題対応
// 20110918 1.03	Chromeでもコピペできるようにダイアログ表示へ
// 20110919 1.10	グラフ機能追加
// 20110919 1.11	パーセント値、フィルター機能追加
// 20110930 1.12	鉄砲足軽を中級兵→上級兵に
// 20130901 2.00	新章6対応
// 20130902 2.01    ボタン表示画面を｢待機兵士一覧｣に
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



function suppa_main($) {
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

	var dialog_top=
	'<style type="text/css">'+
	'.suppa_soldiers {'+
	'font-size: 12px;'+
	'font-style: normal;'+
	'line-height: normal;'+
	'font-weight: normal;'+
	'font-variant: normal;'+
	'text-transform: none;'+
	'color: #000;'+
	'background-color: #EEE;'+
	'overflow: hidden;'+
	'position: absolute;'+
	'visibility: visible;'+
	'z-index: auto;'+
	'height: auto;'+
	'width: auto;'+
	'top: 60px;'+
	'left: 15px;'+
	'}'+
	'.suppa_selected {'+
	'font-size: 14px;'+
	'font-style: normal;'+
	'line-height: normal;'+
	'font-weight: normal;'+
	'font-variant: normal;'+
	'color: #00C;'+
	'background-color: #FCF;'+
	'height: auto;'+
	'width: auto;'+
	'position: absolute;'+
	'top: 60px;'+
	'left: 190px;'+
	'}'+
	'.suppa_options1 {'+
	'position: absolute;'+
	'height: 124px;'+
	'width: 83px;'+
	'top: 330px;'+
	'left: 20px;'+
	'text-align: left;'+
	'vertical-align: top;'+
	'}'+
	'.suppa_options2 {'+
	'position: absolute;'+
	'height: 79px;'+
	'width: 124px;'+
	'top: 330px;'+
	'left: 85px;'+
	'}'+
	'.suppa_graph {'+
	'height: 200px;'+
	'width: 240px;'+
	'position: absolute;'+
	'top: 200px;'+
	'left: 180px;'+
	'}'+
	'</style>';

	var suppa_form_str =
	'<form action="" name="form_soltype" class="suppa_options1" id="suppa_soltype">'+
	'	<p>'+
	'		<label><input name="g1_low"  type="checkbox" id="g1_low"  class="suppa_option" checked />下級兵</label><br />'+
	'		<label><input name="g1_mid"  type="checkbox" id="g1_mid"  class="suppa_option" checked />中級兵</label><br />'+
	'		<label><input name="g1_high" type="checkbox" id="g1_high" class="suppa_option" checked />上級兵</label><br />'+
	'		<label><input name="g1_npc"  type="checkbox" id="g1_npc"  class="suppa_option" checked />NPC兵</label><br />'+
	'	</p>'+
	'</form>'+
	'<form action="" name="form_solcond" class="suppa_options2" id="suppa_solcond">'+
	'	<p>'+
	'		<label><input name="g2_train"  type="checkbox" id="g2_training" class="suppa_option" checked />鍛錬中</label><br />'+
	'		<label><input name="g2_listed" type="checkbox" id="g2_listed"   class="suppa_option" checked />即戦力</label><br />'+
	'	</p>'+
	'</form>';
	var suppa_graph_str =
	'</div><img src="list_img04.jpg" alt="image" width="240" height="200" id="suppa_chart" class="suppa_graph" />';

	var STBL = "足軽,1,1:長槍足軽,1,2:武士,1,4:弓足軽,2,1:長弓兵,2,2:弓騎馬,2,4:騎馬兵,3,1:精鋭騎馬,3,2:赤備え,3,4:破城槌,4,1:攻城櫓,4,2:焙烙火矢,4,3:大筒兵,4,4:鉄砲足軽,5,4:騎馬鉄砲,5,4:国人衆,1,3:海賊衆,2,3:母衣衆,3,3:雑賀衆,5,3:";

	var SoldiersData = function ( sname, stype, sclass) {
		this.sname     = sname;		//名前 足軽、武士とか		
		this.stype     = Number(stype);		//兵種　槍1 弓2 馬3 器4 砲5
		this.sclass    = Number(sclass);	//兵級　下級1 中級2 NPC3 上級4
		this.numtrain  = 0;		//兵舎で訓練中の兵数
		this.numlisted = 0;		//兵士一覧の兵数
	}

	//訓練中の兵数
	var SoldiersTraining = function ( tblidx, index, sname, nums ) {
		this.tblidx  = tblidx;
		this.index   = index;
		this.sname   = (sname == null ? null : sname.replace('鎚','槌'));		//兵名
		this.nums    = nums;		//兵数
	}

	//兵士一覧の兵数
	var SoldirsListed = function( index, stype, sname, nums ) {
		this.index		= index;
		this.stype		= stype;	//槍兵科:1　弓兵科:2　騎馬兵科:3　兵器兵科:4
		this.sname		= (sname == null ? null : sname.replace('鎚','槌'));	//兵名
		this.nums		= Number(nums);		//兵数
	}

	var suppajob   = false;
	var soldiers   = new Array();	//SoldiersData
	var trainsold  = new Array();	//SoldiersTraining  訓練中の兵数を収納
	var listedsold = new Array();	//SoldirsListed     兵士一覧の兵数を収納
	var trainsoldcount  = 0;		//訓練中の配列数
	var listedsoldcount = 0;		//兵士一覧の配列数
	var rdytrain   = false;		//訓練中の収集完了
	var rdylisted  = false;		//兵士一覧の収集完了


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

	function rateItems(rates) {
		if (!(rates.length > 0)) return null;
		var r = new Array();
		var m = new Array();
		for (var i = 0; i < rates.length; i++) {
			var s = '000000'+rates[i];
			m[i] = s.charAt(s.length-1);
			r[i] = s.substring(s.length-5, s.length-1);
			//GM_log("i:"+i+", rate:"+rates[i]+", r:"+r[i]+", m:"+m[i]);
		}
		var sum = 0;
		for (var i = 0; i < rates.length; i++) {
			sum += Number(r[i]);
		}
		var d = 1000 - sum;
		//GM_log('sum:'+sum+", d:"+d);
		for (var c = 0; c < d; c++) {
			var px = -1;
			var mx = -1;
			for (var i = 0; i < rates.length; i++) {
				if (Number(m[i]) > mx) {
					px = i;
					mx = Number(m[i]);
				}
			}
			var rs = "000000"+(Number(r[px]) + 1);
			r[px] = rs.substring(rs.length-4, rs.length);
			m[px] = '-1';
		}
		for (var i = 0; i < rates.length; i++) {
			//GM_log("i:"+i+", rate:"+rates[i]+", r:"+r[i]+", m:"+m[i]);
			r[i] = r[i].substr(0, 3)+'.'+r[i].substr(-1,1)+'%';
			r[i] = r[i].replace(/^00/,'');
			r[i] = r[i].replace(/^0/,'');
			r[i] = r[i].replace(/^\.0/,'0.0');
		}
		//for (var i = 0; i < rates.length; i++) {
		//	GM_log("i:"+i+", rate:"+rates[i]+", r:"+r[i]+", m:"+m[i]);
		//}
		return r;
	}

	// 兵数集計 兵種:stype 兵級:sclass で 鍛錬中除く:add_training, デッキ搭載除く: add_deck
	function countSoldiers(stype, sclass, add_training, add_listed) {
		var num = 0;
		for (var i = 0; i < soldiers.length; i++) {
			if (stype == soldiers[i].stype) {
				if (sclass == soldiers[i].sclass) {
					if (add_training) num +=  Number(soldiers[i].numtrain);
					if (add_listed)   num +=  Number(soldiers[i].numlisted);					
				}
			}
		}
		//GM_log('stype='+stype+', scalass='+sclass+', num='+num);
		return num;
	}
	
	//デッキの兵をデータに集計
	// scat:0 兵士一覧　scat:1 訓練中
	function summaryMath(sname, num, scat) {
		if (sname == null) return;
		var px = soldiers.length;
		for (var i = 0; i < px; i++) {
			if (soldiers[i].sname == sname) {
				if (scat == 0) soldiers[i].numlisted += Number(num);
				else           soldiers[i].numtrain += Number(num);
				return;
			}
		}
		var re = new RegExp(sname+",([1-5]),([1-5]):");
		var sreg = STBL.match(re);
		if (null == sreg) {
			soldiers[px] = new SoldiersData(sname,"-1", "-1");
		} else {
			soldiers[px] = new SoldiersData(sname,RegExp.$1, RegExp.$2);
		}
		if (scat == 0) soldiers[px].numlisted += Number(num);
		else           soldiers[px].numtrain += Number(num);
		return;
	}

	function mergeAndShow() {
		//GM_log("trainsoldcount="+trainsoldcount+"  listedsoldcount="+listedsoldcount);
		//var s = "\n";
		for (var j = 0; j < listedsold.length; j++) {
			summaryMath( listedsold[j].sname,listedsold[j].nums, 0);
			//s += j + ": "+ listedsold[j].index + ":" + listedsold[j].stype +":" + listedsold[j].sname +":"+listedsold[j].nums+ "\n";
		}
		//GM_log(s);
		//s = "\n";
		for (var i = 0; i < trainsold.length; i++) {
			summaryMath( trainsold[i].sname,trainsold[i].nums, 1);
			//s +=  i + ": "+ trainsold[i].tblidx + ":" + trainsold[i].index +":" + trainsold[i].sname +":"+trainsold[i].nums + "\n";
		}
		//GM_log(s);
		//s = "\n";
		for (var k = 0; k < soldiers.length; k ++) {
			//s += k + ": "+ soldiers[k].sname + ":" + soldiers[k].stype +":" +soldiers[k].sclass +":"+soldiers[k].numtrain +":"+soldiers[k].numlisted + "\n";
		}
		//GM_log(s);

		var htm1 = '<table width="150" border="1" class="suppa_soldiers" id="soldiers" name="soldiers"><tr><th colspan="2" style="text-align:center">兵別合計</th></tr>';
		var th_style = 'width="70" style="text-align:left"';
		var td_style = 'width="70" style="text-align:right"';
		var total = 0;
		for (var i = 0; i < soldiers.length; i++) {
			htm1 += '<tr><th '+th_style+'>'+soldiers[i].sname+'</th><td '+td_style+'>'+numFormat(soldiers[i].numlisted + soldiers[i].numtrain, 8) +'</tr>';
			total += soldiers[i].numlisted + soldiers[i].numtrain;
		}
		htm1 += '<tr><th '+th_style+'>＊合計＊</th><td '+td_style+'>'+numFormat(total,8)+'</tr>';
		htm1 += '</table>';

		var htm2 = '<table width="220" border="1" class="suppa_selected" id="selected" name="selected">'+
		'<tr>'+
		'<th colspan="3" style="text-align:center">兵種別集計</th>'+
		'</tr>'+
		'<tr>'+
		'<th width="50" scope="row" style="text-align:center">槍</th>'+
		'<td width="100" id="sel_spares" style="text-align:right">&nbsp;</td>'+
		'<td width="70" id="sel_spares_rate" style="text-align:right">&nbsp;</td>'+
		'</tr>'+
		'<tr>'+
		'<th scope="row" style="text-align:center">弓</th>'+
		'<td id="sel_bows" style="text-align:right">&nbsp;</td>'+
		'<td id="sel_bows_rate" style="text-align:right">&nbsp;</td>'+
		'</tr>'+
		'<tr>'+
		'<th scope="row" style="text-align:center">馬</th>'+
		'<td id="sel_horses" style="text-align:right">&nbsp;</td>'+
		'<td id="sel_horses_rate" style="text-align:right">&nbsp;</td>'+
		'</tr>'+
		'<tr>'+
		'<th scope="row" style="text-align:center">器</th>'+
		'<td id="sel_weapons" style="text-align:right">&nbsp;</td>'+
		'<td id="sel_weapons_rate" style="text-align:right">&nbsp;</td>'+
		'</tr>'+
		'<tr>'+
		'<th scope="row" style="text-align:center">砲</th>'+
		'<td id="sel_guns" style="text-align:right">&nbsp;</td>'+
		'<td id="sel_guns_rate" style="text-align:right">&nbsp;</td>'+
		'</tr>'+
		'<tr>'+
		'<th scope="row" style="text-align:center">合計</th>'+
		'<td id="sel_total" style="text-align:right">&nbsp;</td>'+
		'<td id="sel_total_rate" style="text-align:right">&nbsp;</td>'+
		'</tr>'+
		'</table>';

		suppa_dialog(htm1+htm2+suppa_graph_str);

		suppajob = false;
	}

	function cscale(v, base) {
		return x = parseInt(v / base * 100 + 0.5)/100;
	}

	function reWrite() {
		var flag_tr = $('#g2_training').attr('checked');
		var flag_ls = $('#g2_listed').attr('checked');
		var spares  = 	($('#g1_low').attr('checked')  ? countSoldiers( 1, 1, flag_tr, flag_ls):0) +
						($('#g1_mid').attr('checked')  ? countSoldiers( 1, 2, flag_tr, flag_ls):0) +
						($('#g1_high').attr('checked') ? countSoldiers( 1, 4, flag_tr, flag_ls):0) +
						($('#g1_npc').attr('checked')  ? countSoldiers( 1, 3, flag_tr, flag_ls):0);
		var bows    = 	($('#g1_low').attr('checked')  ? countSoldiers( 2, 1, flag_tr, flag_ls):0) +
						($('#g1_mid').attr('checked')  ? countSoldiers( 2, 2, flag_tr, flag_ls):0) +
						($('#g1_high').attr('checked') ? countSoldiers( 2, 4, flag_tr, flag_ls):0) +
						($('#g1_npc').attr('checked')  ? countSoldiers( 2, 3, flag_tr, flag_ls):0);
		var horses  = 	($('#g1_low').attr('checked')  ? countSoldiers( 3, 1, flag_tr, flag_ls):0) +
						($('#g1_mid').attr('checked')  ? countSoldiers( 3, 2, flag_tr, flag_ls):0) +
						($('#g1_high').attr('checked') ? countSoldiers( 3, 4, flag_tr, flag_ls):0) +
						($('#g1_npc').attr('checked')  ? countSoldiers( 3, 3, flag_tr, flag_ls):0);
		var weapons = 	($('#g1_low').attr('checked')  ? countSoldiers( 4, 1, flag_tr, flag_ls):0) +
						($('#g1_mid').attr('checked')  ? countSoldiers( 4, 2, flag_tr, flag_ls):0) +
						($('#g1_mid').attr('checked')  ? countSoldiers( 4, 3, flag_tr, flag_ls):0) +
						($('#g1_high').attr('checked') ? countSoldiers( 4, 4, flag_tr, flag_ls):0);
						//($('#g1_npc').attr('checked')  ? countSoldiers( 4, 3, flag_tr, flag_ls):0);
		var guns    = 	($('#g1_low').attr('checked')  ? countSoldiers( 5, 1, flag_tr, flag_ls):0) +
						($('#g1_mid').attr('checked')  ? countSoldiers( 5, 2, flag_tr, flag_ls):0) +
						($('#g1_high').attr('checked') ? countSoldiers( 5, 4, flag_tr, flag_ls):0) +
						($('#g1_npc').attr('checked')  ? countSoldiers( 5, 3, flag_tr, flag_ls):0);
		var total   = spares + bows + horses + weapons + guns;

		var spares_rate  = (total != 0) ? Math.floor(spares*10000/total) : -1;
		var bows_rate    = (total != 0) ? Math.floor(bows*10000 / total) : -1;
		var horses_rate  = (total != 0) ? Math.floor(horses*10000 / total) : -1;
		var weapons_rate = (total != 0) ? Math.floor(weapons*10000 / total) : -1;
		var guns_rate    = (total != 0) ? Math.floor(guns*10000 / total) : -1;
		var total_rate   = (total != 0) ? Math.floor(total*10000 / total) : -1;
		var rates = new Array(spares_rate, bows_rate, horses_rate, weapons_rate, guns_rate);
		var ratestr = (total != 0) ? rateItems(rates): null;
		if (ratestr == null) {
			ratestr = new Array('***', '***', '***', '***', '***', '---' );
		} else {
			ratestr[5] = '100.0%';
		}

		$('table#selected').find('td#sel_spares').text(numFormat(spares,8));
		$('table#selected').find('td#sel_bows').text(numFormat(bows,8));
		$('table#selected').find('td#sel_horses').text(numFormat(horses,8));
		$('table#selected').find('td#sel_weapons').text(numFormat(weapons,8));
		$('table#selected').find('td#sel_guns').text(numFormat(guns,8));
		$('table#selected').find('td#sel_total').text(numFormat(total,8));
		$('table#selected').find('td#sel_spares_rate').text(ratestr[0]);
		$('table#selected').find('td#sel_bows_rate').text(ratestr[1]);
		$('table#selected').find('td#sel_horses_rate').text(ratestr[2]);
		$('table#selected').find('td#sel_weapons_rate').text(ratestr[3]);
		$('table#selected').find('td#sel_guns_rate').text(ratestr[4]);
		$('table#selected').find('td#sel_total_rate').text(ratestr[5]);

		var vmax = 0;
		if (vmax < spares)  vmax = spares;
		if (vmax < bows)    vmax = bows;
		if (vmax < horses)  vmax = horses;
		if (vmax < weapons) vmax = weapons;
		if (vmax < guns)    vmax = spares;
		var vbase = vmax / 100.0;

		var chart = 'https://chart.googleapis.com/chart?'+
			  'cht=p&'+
			  'chs=240x200&'+
			  'chd=t:'+cscale(spares,vbase)+','+cscale(bows,vbase)+','+cscale(horses,vbase)+','+cscale(weapons,vbase)+','+cscale(guns,vbase)+'&'+
			  'chp=-1.57&&chtt=兵種別割合&chl=槍|弓|馬|器|砲&chof=png';
		$('img#suppa_chart').attr('src',encodeURI(chart));
		//GM_log(encodeURI(chart));
	}

	function suppa_dialog(msg) {
		var dialog_str = dialog_top +
				'<DIV id="suppa_dialog" style="position:absolute;width:400px;height:390px;display:none;z-index:9999;padding:20px;'
				+'background-color:#fff;border:3px solid #f00;-moz-border-radius:5px;-webkit-border-radius:5px;" class="window">'
				+'<B>数把</B><div style="position: absolute; top: 10px; right: 10px"><a style="color:#000; text-decoration: none" href="#" class="close" >[ 閉じる ]</a></div>'
				+'<DIV style="border-top:1px solid #000;padding-top:10px;line-height:2.0em;">'
				+msg
				+suppa_form_str
				+'</DIV></DIV>';
		dialog_str += '<DIV style="position:absolute;z-index:9000;background-color:#000;display:none;" id="suppa_mask"></DIV>';

		$('BODY').prepend(dialog_str);

		var id = '#suppa_dialog';
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#suppa_mask').css({'width':maskWidth,'height':maskHeight}).fadeTo(0 ,0.8).show();
		var winH = $(window).height();
		var winW = $(window).width();
		$(id).css('top',  winH/2-$(id).height()/2).css('left', winW/2-$(id).width()/2).fadeIn(500);

		$('#suppa_dialog').show();

		$('#suppa_dialog .close').click(function(e) {
			e.preventDefault();
			$('#suppa_mask, #suppa_dialog').hide();
		});	   
		$('#suppa_mask').click(function(e) {
			$(this).hide();
			$('#suppa_dialog').hide();
		});

		$('.suppa_option').click(function(e) {
			var a=$(this).attr('id');
			var v=$(this).attr('checked');
			reWrite();
		});

		reWrite();
	}

	//
	//兵士一覧の兵士の数を数える
	//
	function countListed() {
		var ulUrl = 'http://' + window.location.host + '/facility/set_unit_list.php';
		$.ajax({
			url: ulUrl, 
			cache: false, 
			dataType: "html",
			success: function (data, textStatus){
				var scatalog = $('table#soldiers_catalog tr', data);
				listedsoldcount = $(scatalog).length;
				$(scatalog).each( function (tr_index, e) {
					var stype = null;
					var sname = null;
					var num   = "0";
					var alt = $(this).find("td:not(.td_border_right) img.iepngfix").eq(0).attr('alt');
					if (alt != null) {
						stype = alt;
					}
					var name = $(this).find("td img:not(.iepngfix)").eq(0).attr('alt');
					if (name != null) {
						sname = name;
					}
					var v = $(this).find("td.td_left_posi").eq(1).html();
					if (v != null) {
						num = v;
					}
					listedsold[tr_index] = new SoldirsListed( tr_index, stype, sname, num );
					//alert( "tr_index="+tr_index+ "   stype=" + stype+ "   sname="+sname + "   num="+num);
				} );
				rdylisted = true;		//準備完了
				//				

			},
			error: function (xhr, textStatus, errorThrown) {
				alert('$.ajax countWaitAndTrainin() error');
				//console.log(textStatus);
			}
		});	

	}

	//
	//訓練中の兵士の数を数える
	//
	function countTraining() {
		var ulUrl = 'http://' + window.location.host + '/facility/unit_list.php';
		$.ajax({
			url: ulUrl, 
			cache: false, 
			dataType: "html",
			success: function (data, textStatus){
				$('table.paneltable', data).each( function (tbl_index, e) {
					if (tbl_index > 0) {
						var trz = $(this).find("tr");
						trainsoldcount += $(trz).length;
						$(trz).each( function (tr_index, e) {
							var alt = $(this).find("td img").eq(0).attr('alt');
							var num = $(this).find("td").eq(1).html();
							trainsold.push(new SoldiersTraining( tbl_index, tr_index, alt, num));
							//alert("tbl_index="+tbl_index+"   tr_index="+tr_index+"   alt="+alt+"   num="+num);
						} );
					}
				} );
				rdytrain = true;		//準備完了
				//				

			},
			error: function (xhr, textStatus, errorThrown) {
				alert('$.ajax countTraining() error');
				//console.log(textStatus);
			}
		});	

	}

	var wtcnt;
	var viserId;

	function setViser(timeVise)
	{
		wtcnt = 0;
		viserId = setInterval( function() {
									wtcnt++;
									if ( rdytrain && rdylisted ) {
										clearInterval(viserId);
										mergeAndShow();
									} else {
//GM_log("rdytrain="+rdytrain+"  rdylisted="+rdylisted);										
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
		var tmp = '<a href="javascript:void(0);" onclick="return false;" id="do_suppa"><img src="' + gifsuppa + '" alt="数把" style="float: right; padding-top: 5px; z-index:99;"></a>';
		$('div#ig_deckmenu').find('a').eq(4).after(tmp);
		
	}

	//
	// main
	//

	setbutton();	//ボタンの表示


	$('#do_suppa').live('click',function() {
		if (suppajob) return false;		//実行中はなにもしない
		suppajob  = true;
		rdysold   = false;		//
		soldiers.splice(0,soldiers.length);

		//alert("do_suppa");

		countListed();		//兵士一覧の兵士を数える
		countTraining();	//訓練中の兵士を数える

		setViser(250); 

		return false;
	});

}


bara_addJQuery(suppa_main);

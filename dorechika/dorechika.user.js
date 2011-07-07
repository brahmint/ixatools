// ==UserScript==
// @name           Dorechika
// @version        1.0
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    どれ近 Ver. 1.0
// @include        http://w0*.sengokuixa.jp/user/?user_id=*
// @include        http://w013.sengokuixa.jp/war/fight_history.php*
// @copyright      2011+, brahmint@gmail.com
// ==/UserScript==

// 近い拠点はどれ？
//
// 2011/06/29 1.0 初版 
//

//
// Mokoと同じjQuery初期化
//


function chika_addJQuery(callback) {
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


function chika_main($) {
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

	var gifdoko = 'data:image/gif;base64,'+
	'R0lGODlhNwAYAMQAAP////n5+e7u7tfX18zMzMXFxb29vbW1ta2traWlpZmZmZSUlIyMjIWFhXp6'+
	'enNzc2tra2ZmZlpaWlFRUUpKSkJCQjk5OTMzMykpKSEhIRgYGBMTEwkJCQAAAAAAAAAAACH5BAEH'+
	'AAAALAAAAAA3ABgAAAX/ICCOZGmeaKqSBKIoh5sUdGEgCXLsMb0niYPhANzRDAbfQZErDEwCF4LA'+
	'fL0ItQIxyEMiY7kdLpi02XYvYEJAQrjS44Ri6kXidELvGYgYFg9HNAo2VgpsAFpLMHMEBlYFeAlJ'+
	'YESAdTd/d302X45WBCI3OjAFLwwTExIJDg0ZHH1fQTlJdQcMD5E5ChIYC3RpCqE2Y0sFDR0dEAoZ'+
	'HREdGVhHOggMDA6SjsgVchIVG8gdHAyEViKANC4EQMcd1wwcGxISLwvg9h3jNhDIEQ7gGRQeqFFX'+
	'DoAbOzOW+MMHJEIEIFYuXGAGzkKDTQYkZDhwDEOfLXI8vRChIweOUgrq/zWDgOGZHCtBKFLwRQlJ'+
	'ATnhMOjUSYGRnALmTM6igkDDvQ5BCilgYEEBwh0NUE24dbQDhitMEoQSNcaRBA7INlTIVwALgwvz'+
	'DmCZ5EYCuAZuLxBwpuqNGxxb7bhZ0LLDhXElxRyYEK4BjEY1ljxg5qBChwkK6IJ0A4PkJjAUwkE4'+
	'5zTrjm8RlGYp1XJfB8POImjp6sIyLCTI5pm0UlIBMgijHmVpCXbDC8IRvMQYE3Q4IG1qElBhgIBG'+
	'gm8cJNxyIGHChayEwTnAQVgCp9VytrqplJ3DToqqTIGt6stxuLA7d3Iwo0UrAOF9cEC4cDTDNSJL'+
	'QUDBgA71MwcDHVSggIsFVVl1jhcikJHEXVw8ddAQnrQwB1sNbWFLAw04wACIWdUhgjqb2GDSa6LE'+
	'cE4pLpTyBQ931UgEAR6OZ8AT5rjhw02yvOZiDF68gNILO3hRxBtANILHcCQI8EMnw+mol4sGvFQI'+
	'Dnn4ocsLNQJhwCEs2FHLNEJyAUYhkNxRBw6OoNkcjyvUaeedJ4QAADs=';
	
	var gifdare = 'data:image/gif;base64,'+
	'R0lGODlhNwAYAPcAAP////f/9+7/7uX/5fD66+z55uL12b3/vbL/sq3/raT/pJn/mZX/lcPrsIv/'+
	'i4P/g77qqHz/fHL/crXmpWv/a7LlmWb/Zq3kkqvjj4XvhX/vf6bhiaThhXLvcpzee5XccZLbbp7U'+
	'g3zffI/ZanXfdYvYZJfSeZTRdmTfZIPWWofPh4zOalnfWXzTUXrTTXHPcXfSSnLQQ2vOOXnIUpC6'+
	'fHLGSGbMM4DAYHu/e4y5d23EQny+W4e3b2q/amK/YmTBNVe/V2+5SVK/Umu5Q4SscE6/ToKrbWS2'+
	'O3upZFqvWnOmWmesRFKvUk2vTW2kUmGqPGufa2ShRmKgQ1SfVFmdN0ifSFWcMkyZJlmPWVSRNUuP'+
	'SzmPOVl/WVx+S1N/U0+ENEqDLkp/SlZ8Q0B/QDp/OjV/NVhySlRxRlJwQkZvRj90JEtuOkRvREds'+
	'NEVsMjhvODRvNEFrLSxvLEhiPDhnIDNmGT1fPTJfMi1fLTJbHjhSKjFPMTRQJSBPICk/KSNAFSA/'+
	'ICFAEhk/GSk4ISM2GiI1GR40ExkyDR4vHhYvFiAqGxspFRgnEBQmCxAfEA8aCQwZBggPCAYMAwAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHAAAALAAAAAA3ABgA'+
	'AAj/AAEIHEiwoMGDCBMqJHgghQQbDFpYiJFggwIODFJESMEABIMRDzgoAOHARYQRC0pIcOEAhIIN'+
	'CzwkwPhhYsgDBx/IeFBhogQZExFYFDkiQgsGHz7GvOjAIccPD2JEKLEAgwIPVx2MsCBjZQQDBB+U'+
	'oBCD7AMYEmJYKJEAq1sHMB4kdasAQ8oILJOaLMFA5IeLEuzasGBDwkAFIxgM/kAhRYKaXTdEcCly'+
	'Q8aTEf56WOD37OSMElI8cMvAgwMPhAknEOhBrGIGGyjIIEOnTOEYKsRE4sFZwY4xbnxwhCnS9BIm'+
	'HEFEiLsjzKAXjjkQfijwJWgZDmwomDQpDwUbWyaN/1EUicZMHNxXbCx9cQEP7nhciFhz5xH3SZFQ'+
	'2C07WOBfkRJdEIEO3IVBRyJ59DEJGX+wIIMCRnDXwQgvUKHBXzB1wZ0WVNzHyBtZpBVBBQ9xJdAD'+
	'KcQUlR/3tQiIDlvoEIEMcgwSCXd6AMJdJMItABMaiJzQwySAUDWCBC08tMBg/QHAUQtNRTCHIJBw'+
	'B0ccSQyx0kMUGNIid47geNZpL0UQYSSAGAIIIYDkYUEKCMBgAQYCRRRlihXIMYkfLqAwByD2TdID'+
	'k3pyhwUHbBDJlxRj0DHGEUV8yR0gg13gk0AcLCCaSkc10p0CQew4iB85IIABC5JMIskLFSiAxiSE'+
	'PP/QQhj3+aDGJIEgYMYkbUz1nawRxCBQbx8YFcEP3DHBQQJIaHDkCE1l4OkkgkBUwR6TpIHRDkJ4'+
	'asUdk5QhgxeThKFcCxSUECwDAqVAJggPuJAEdzMwgIYdVygWbAaL3GdIaodMgsZFCcSg4xTcPSHB'+
	'rgODJFVrNpxYglwXMaDHJIxQMAR3TQzmLhjcCUIkCISJ7IUJUFyQQCGqTvLIQ2RM4oVfTUVlGADq'+
	'wntUCBu64AN3RKiGQQKPVHEGrEtKEHAjjhiSwRwtAqFSHQK35eN11bXGVwxjcHfDAzXc2OIYQKXA'+
	'BbUVPGBD12DysSN3jwhCiCCFrBkJTBapiylnTSnr8EUig1wE6hhqEuIHGBFZQPUhqnmABR1VtDAk'+
	'HjdgK+kkhThg0WYfCJTZVQqo61BimY6OIlKnfYeARC1U1dRKWpzLgBI9OCGEEj5EQUILEWCVlEAk'+
	'UjX0B6EZFVNM63Fk1QZvWrCBBJtBm5hGJTjAe/UUHXmUaChBMBBILdTVl1ERjcbUURNn6sFPCgwG'+
	'VGKake9QVzEgYFpi8KZQELQuLDBXRlECwfFEAy+UxKBE7otXXzgTkdBMp3ruOmDnDDIBBUAFK5ma'+
	'WP56oxy+TOyAg4mBAkQDAzJhRSUcaExGUKSABizkhTCMYUICAgA7';

	var giftomo = 'data:image/gif;base64,'+
	'R0lGODlhNwAYAPcAAP////H8//H5/973/+b1/9T3/9/y/8/s/5Lp/4nn/3vl/5zX/3Pj/2vh/5PU'+
	'/2Hf/4vR/1re/1Lc/0rb/33L/2TT70LZ/3PH/znX/2vE/zHW/2XH3ynU/2LA/yHT/z7L7xjR/1q9'+
	'/xDP/1K6/wjO/zq+3wDM/0q3/1iz7y6830Kz/zmw/wTA7yC53zmxzzGt/02pvxG231efzymp/yWt'+
	'zyGm/zqlvwCy3xij/1mXv0+crzGjvzqd3zWb3w2ozyihvxSh/yWgvxCf/wCmzxyevwic/0qMvRKd'+
	'v0CMvwCZ/wmavwOavzqKvweS7yiMzzuLnzGGvxGN3yGJzxSQrwCP7yiCvxiGzyGGnwWNryWCv0B5'+
	'nwCG3xqEnxl8vx55jw95vxt4jzdxfzptjzFwfxdyrzVrjwN0vydufz9mfz1lfyNtfwd0jxxrnwBy'+
	'jxZqfzNhfxJpfxthjyldfwRnfzRXbyFZfwBfnxRdbxVdby9VbytUbytVXwlZjxVQXwhPfw5PXwxP'+
	'XwBMfyFGTw5IbwNNXwVFbxdCXwBDbxk4PxA2PxsxPw81Pwg0PwIwTwAyPxAsPxcqLxEpLwgpPwgn'+
	'LwAmPwAmLwkgLwQeLw0bHwYaHwAZHwQUHwYNDwcMDwEMDwEJDwAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHAAAALAAAAAA3ABgA'+
	'AAj/AAEIHEiwoMGDCBMqHCggwQoRRSbMMIGDQYYHGSS88PBCwgkJKjRkaHACQw0PKiSs8FADw4kG'+
	'Fzsw6DBhhAkgIhEIKGhAgxAMFChCNCFEwcWRKjzMmPBRxYMOMC3MADHDowYcHFZEuBiiQQcLKoiC'+
	'OHlgIAENK0gIIYFDQw0ROEysmNmgaweTGj5ChZpxZcsRE2pknTByBEwRF4uYSCLCgMAGKiYkMXGC'+
	'xAsGNosg5vCyA0YJM1B66LyVpNvRGjliMNxBQggLNicnUSDw7grJhNXG8DPHDgghDUZsxfhARYs6'+
	'RJxIiPkUg5QpHU+w1MDjzCMXlzssFpFE4OcXIoRY/0jSAAooUFiSkGhJAShdJOe5vJjg2bOM84Bq'+
	'lJDTZ9N5UJ3EkEEEa00mUGcPTHSBBzgEcV4XIMRVBAhAEIUIHWOcF9kMLsH0gBjngdHFf5bcQYYI'+
	'QHhAAQiTCSGQBi88EMJVkJEwIig24OBBFDcAwUERQ/wn5BkldXTRG5GgsAMojKwAklIsRiCbCQLN'+
	'x+FGGSzGwnlxXCEJKJdwp1Ybg0ACCieKLNKFS25hwJcHOQDIiCSJPMLIICa8oEANJlwgEGgYbBRj'+
	'UC9gIuR5M1hQRBugVEIJKHl4FcFGt2Xhhh9wRLHEoeclotgFN4FQ26RoUSVBEWt8cp4mhdCQAQMX'+
	'KP+gCCiHVAKKGhTAgEIFTGAwwxn//cAHKI0okAYodXiQVhEazMABEH96dgIHoTXByHmK6JABBkmp'+
	'EKganILyxHlaSNCDEpeA8kUfoMxRRBigjCHdDCSswIEQElTpJkkm4QGKJ2ws10ASEiThARBM+fDG'+
	'eY46ssUeoCDyqhDXXnGeFSKgAcobkGGQ4ggaFCEQBitoYFhGXK7XLHcmJMqnZucxsRgJZpwHKwOP'+
	'gKLqJtzBAUoYUBV5lQgCrVRSVRmc94dgbwVFxQav1gBCBpqAIghjSRCC6Ad6CHnECiD4sTEDIWwF'+
	'mgciAyAjWhPggEEe53kiCSKPTHJesorNoMDCoGT/Qgkn5xWCgSHnAQ7KJo48knidnBzVwEqjbjtD'+
	'gh6UgQinljxRA2iLmRBI1edFwocIM9gAyh88CBIuKI9YMJJnIwg02lOPcwRCSq1tFFJVI2AQAgmz'+
	'TYS0VCx5Ma8ERuzAhBJIBFFFCs4a9pFAFCj7wAWYcUStBMKFwMF8842U5QsmZCBC2d6mRKmvyloA'+
	'BAMqmPqCBipE4IBABOwOE2FKSWQyRlKZwArcJKPwDMwEionMCGTUP/AIAS4KCAG3rPICAgykAN6q'+
	'wQNOMIEQSCRQnHkKqU5AvwgAgWWKEYJb6IMRiSgFgSIY4AswgAMRjGAABoHABn2HkQgMkIQviEDQ'+
	'IJQlQBqyDDgzbIldHvCQDlhmAvObQQMWsJAqWvGKCQkIADs=';

	var Territ = function ( ttype, tname, pos, population, cond, map) {
		this.ttype      = ttype;		//種類 (本領/所領)
		this.tname      = tname;		//名前
		this.pos        = pos;			//座標
		this.population = population;	//人口
		this.condition  = cond;			//状態
		this.map        = map;			//c
		this.toString = function() {
			return this.ttype + "," + 	this.tname + ",[" + this.pos + "]," + this.population + ","+ this.map;
		}
	}
	
	var txtFall  = "陥落中";
	var txtLand  = "領地";
	var txtNorm  = "通常拠点";
	var txtFalen = "陥落拠点";
	var txtDist  = "距離";
	var txtE  = "東";
	var txtNE = "北東";
	var txtN  = "北";
	var txtNW = "北西";
	var txtW  = "西";
	var txtSW = "南西";
	var txtS  = "南";
	var txtSE = "南東";
	var txtTo   = "へ";
	var txtFrom = "から";
	var teridata = new Array(1);
	var trcnt = 0;
	var tericount = 0;
	var profDoneflag = false;
	var rowDispFlag = false;
	
	function calc_dokochika(){
		if (document.URL.match(/(map|land)\.php\?x=(-?[0-9]+)&y=(-?[0-9]+)(&type=[123])?&c=([0-9]+)/) != null) {
			var x = RegExp.$2;
			var y = RegExp.$3;
			var c = RegExp.$5;
			var utype = RegExp.$1;
//			if ('map' == utype) {
//				var kw = 'x='+x.toString()+'&amp;y='+y.toString()+'&amp;c='+c.toString()+'" title="(.+)" alt="(.+)" onmouseover="(.+)"';
//				var fd = window.document.body.innerHTML.match(kw);
//				if (fd != null) {
//					var ttl = RegExp.$1;
//					var alt = RegExp.$2;
//					var omo = RegExp.$3;
//					kw = "rewrite\\('([^']+)', '([^']+)', '([^']+)', '([^']+)', '([^']+)'";
//					var ra = omo.match(kw);
//					if (ra != null) {
//						var pname = RegExp.$1;  //領地名称
//						var lname = RegExp.$2;  //城主
//						var population = RegExp.$3;  //人口
//						var pos = RegExp.$4;    //座標
//						pos = pos.substring(1,pos.length-1);  //括弧を外す
//						var alli = RegExp.$5;   //同盟名
						pickJoshuProfData('http://' + window.location.host + '/user/',x,y,c);
	
//					} else {
//						alert("cannot split");  //普通は起こらないはず
//					}
//				} else {
//					alert("not match");  //普通は起こらないはず
//				}
//			} else {		// land.php
//				
//				alert("land");
//			}
		} else {
			alert("ここはどこ？");
		}
	}
	
	
	function pickJoshuProfData(profUrl,x,y,c) {
		$.ajax({
			url: profUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				var tbltxt = getTags(html,"table","common_table1 center").toString();
				//var mts =getIxaHrefs(tbltxt);
				var trs = getClassTags(tbltxt,'tr','fs[0-9]+');
				tericount = trs.length;
				//alert('tericount=' + tericount);
				var thisTr, s, re;
				var territ0 = 0;
				var ctp;
				trcnt += tericount;
				for (var i = 0; i < tericount; i++) {
					thisTr = trim(rmvTabs(trs[i]));
					var tds = getTags(thisTr,'td',null);
					var ttype = getTagText(tds[0],'td');
					var tss1 = getTaggedContent(tds[1],'td',null);
					var tvill = getTag(tss1,'a',null);
					var textn = trim(tss1.substring(tvill.length));
					var tname = trim(getTagText(tss1,'a'));
					var tss2 = getTag(tds[2],'td',null);
					var mts =getHref(tss2);
					var tpos  = getTagText(tss2,'a');
					var thref = getHref(tds[1]);
					var tpopu = getTagText(tds[3],'td');
					var tcond = trim(getTagText(tds[4],'span'));
					ctp = ctype(mts);	//c=1～12
					teridata[territ0+i] = new Territ(ttype, tname+textn, tpos, tpopu, tcond, ctp);
				}
				profDoneflag = true;
				showAdvice(x,y,c);
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax error');
				//console.log(textStatus);
			}
		});	
		return;
	}
	
	function showAdvice(x0,y0,c) {
		var s = "<<< ("+x0+","+y0+") への攻略検討 >>>";
		var cn = Number(c);
		var dnmin = 999;	//通常拠点最短距離
		var dlmin = 999;	//領地最短距離
		var dfmin = 999;	//陥落拠点最短距離
		var dpx = -1;
		var dnorm = -1;
		var dland = -1;
		var dfall = -1;
		var x,y,d;
		var pos;
		var px = -1;
		for (var i = 0; i < teridata.length; i++) {
			//alert("cn:"+cn + "  : "+ teridata[i].map);
			//try {
				if (cn == Number(teridata[i].map)) {	//同じマップの拠点であること
					pos = teridata[i].pos.split(",");
					x = parseFloat(pos[0]);
					y = parseFloat(pos[1]);
					d = Math.sqrt((x-x0)*(x-x0) + (y-y0)*(y-y0));
					if (teridata[i].condition == txtFall) {
						//alert(txtFall +" "+ i);
						if (d < dfmin) {
							dfmin = d;
							dfall = i;
						}
					} else if (teridata[i].ttype == txtLand) {
						//alert(txtLand +" "+ i);
						if (d < dlmin) {
							dlmin = d;
							dland = i;
						}
					} else {
						//alert(txtNorm +" "+ i);
						if (d < dnmin) {
							dnmin = d;
							dnorm = i;
						}
					}
					
				}
			//} catch(e) {
			//	alert("error i="+i + "\nterridata.length="+teridata.length);
			//}
		}
		if (dnmin <= dlmin) dlmin = 999;
		if (dnmin <= dfmin) dfmin = 999;
		if (dnmin < 999) {
			pos = teridata[dnorm].pos.split(",");
			x = parseFloat(pos[0]);
			y = parseFloat(pos[1]);
			s = s + "\n" + teridata[dnorm].tname + "("+ pos[0] + "," + pos[1] + ")"+txtFrom+pos2str(x,y,x0,y0);
		}
		if (dfmin < 999) {
			pos = teridata[dfall].pos.split(",");
			x = parseFloat(pos[0]);
			y = parseFloat(pos[1]);
			s = s + "\n[" + txtFalen +"]" + teridata[dfall].tname + "("+ pos[0] + "," + pos[1] + ")"+txtFrom+pos2str(x,y,x0,y0);
		}
		if (dlmin < 999) {
			pos = teridata[dland].pos.split(",");
			x = parseFloat(pos[0]);
			y = parseFloat(pos[1]);
			s = s + "\n["+ txtLand +"]" + teridata[dland].tname + "("+ pos[0] + "," + pos[1] + ")"+txtFrom+pos2str(x,y,x0,y0);
		}
		alert(s);
	}
	
	function pos2str(x0,y0,x1,y1) {
		var x = x1 - x0;
		var y = y1 - y0;
		var d = Math.sqrt(x*x + y*y);
		var s;
		var ss = null;
		if (x == 0.0 && y == 0.0) {
			ss = " " + txtDist + " " + num2str(d);
		} else if (x == 0.0) {
			if (y > 0.0) s = txtN;
			else         s = txtS;
		} else if (y == 0.0) {
			if (x > 0.0) s = txtE;
			else         s = txtW;
		} else {
			var v = Math.atan2(y,x);
			if (v < -Math.PI * 7/8) s = txtSW;
			else if (v <= -Math.PI * 5/8) s = txtSW;
			else if (v < -Math.PI * 3/8) s = txtS;
			else if (v <= -Math.PI /8) s = txtSE;		
			else if (v < Math.PI /8) s = txtE;
			else if (v <= Math.PI*3/8) s = txtNE;		
			else if (v < Math.PI * 5/8) s = txtN;
			else if (v <= Math.PI*7/8) s = txtNW;
			else s = txtW;
		}
		if (ss == null) {
			ss = " " + s + " " + txtTo + " " + txtDist + " " + num2str(d);
		}
		return ss;
	}
	
	function num2str(d) {
		var x = d * 100.0 + 1000000.5;
		var s = String(parseInt(x));
		s = s.substr(1);
		var len = s.length;
		s = s.substr(0,len-2) + "." + s.substr(len-2);
		while (s.substr(0,1) == "0") s = s.substr(1);
		if (s.substr(0,1) == ".") s = "0"+s;
		return s;
	}

	function ctype(urlstr) {
		var reg = new RegExp("c=([0-9]+)$","i");
		var tag = urlstr.match(reg);
		return (tag) ? RegExp.$1 : "";
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


	//---------------------------
	// main
	//---------------------------
	
    function cmd_dorechika() {
		var tmp;
		if (document.URL.match('fight_history\.php')) {
			tmp = '　　　<a href="javascript:void(0);" onclick="return false;" id="do_dorechika"><img src="' + gifdore + '" alt="どれ近" style="position: relative; top: 0px; "></a>';
		    $('div#ig_battle_report_top p').append(tmp);
		} else {
			tmp = '<th><a href="javascript:void(0);" onclick="return false;" id="do_dorechika"><img src="' + gifdore + '" alt="どれ近" style="position: relative; top: 0px; ">どれ近</a></th>';
		    $('table.common_table1 center').find('tr:first').find('th:last').after(tmp);
		}
		//         + '<a href="javascript:void(0);" onclick="return false;" id="do_tomochika"><img src="' + giftomo + '" alt="とも近" style="position: relative; top: +8px; "></a>'
		//         + '<a href="javascript:void(0);" onclick="return false;" id="do_darechika"><img src="' + gifdare + '" alt="だれ近" style="position: relative; top: +8px; "></a>';
        $('#do_dorechika').live('click',function() {
			if (!rowDispFlag) {
				var tmp = '<th class="w30">距離</th>';
				$('table.ig_battle_table').find('tr:first').append(tmp);
				tmp = '<td>*</td>';
				$('table.ig_battle_table').find('tr td:last-child').after(tmp);
				rowDispFlag = true;
			}
			$('table.ig_battle_table tr:nth-child(2)').find('td:last').text("aaa");
			//calc_dokochika();
			//setTimeout(calc_dokochika, 10);
			alert('now clicked dorechika');
        });
		//$('#do_tomochika').live('click',function() {
		//	//calc_dokochika();
		//	alert('とも近は未実装');
		//	//alert('now clicked dokochika');
		//});
		//$('#do_darechika').live('click',function() {
		//	//calc_dokochika();
		//	alert('だれ近は未実装');
		//	//alert('now clicked dokochika');
		//});
    }

	cmd_dorechika();

}

chika_addJQuery(chika_main);

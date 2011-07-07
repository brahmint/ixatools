// ==UserScript==
// @name           Informer
// @version        1.0
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    Informer Ver. 1.0
// @include        http://w0*.sengokuixa.jp/facility/send_troop.php#ptop
// @copyright      2011+, brahmint@gmail.com
// ==/UserScript==

// 攻撃時間申告
//
// 2011/07/02 1.0 初版 FireFox + GreaseMonkey でのみ動作

//
// Mokoと同じjQuery初期化
//

function info_addJQuery(callback) {
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


function info_main($) {
    // ここにメインの処理を書く
	
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
	
	
	function job_informer(){
		var msg;
		if (document.URL.match(/send_troop\.php/)) {
			var spans = $("div#ig_gofightconfirmboxtitle table td span");
			var place = trim(rmvTabs(spans.eq(0).html()));
			var distance = trim(rmvTabs(spans.eq(1).html()));
			var ttime = trim(rmvTabs(spans.eq(2).html())).match(/([0-9]+):([0-9]+:[0-9]+)/);
			if ("00" == RegExp.$1) {
				ttime = RegExp.$2;
			} else {
				ttime = RegExp.$1 + ":" + RegExp.$2;
			}
			
			alert(place+" 距離["+distance+"] まで "+ttime);
		} else {
			alert("ここはどこ？");
		}
	}


	//---------------------------
	// main
	//---------------------------
	
    function cmd_informer() {
		var tmp;
		//tmp = '<div><a href="javascript:void(0);" onclick="return false;" id="do_attackinfo"><img src="' + gifdoko + '" alt="Inf_attack" style="position: relative; top: +0px; "></a></div>';
		tmp = '　　　　<a><input type="button" name="string" value="inform" id="do_attackinfo" onclick="javascript:void(0);"></a>';
	    $('div.ig_decksection_top').append(tmp);
        $('#do_attackinfo').live('click',function() {
			job_informer();
			//calc_dokochika();
			//setTimeout(calc_dokochika, 10);
			//alert('now clicked attackinfo');
        });
    }

	cmd_informer();

}

info_addJQuery(info_main);

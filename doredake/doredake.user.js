// ==UserScript==
// @name           Doredake
// @version        1.01
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    どれだけ Ver. 1.01	20110714
// @include        http://w213.sengokuixa.jp/war/list.php*
// @match          http://w213.sengokuixa.jp/war/list.php*
// @copyright      2011, brahmint@gmail.com
// ==/UserScript==

// どれだけ被害？
// 2011/07/13 1.0  初版 FireFox + GreaseMonkey でのみ動作
// 2011/07/14 1.01 IXAサーバホスト名変更に対応

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


function doredake_main($) {
    // ここにメインの処理を書く

	var gifdake = 'data:image/gif;base64,'+
	'R0lGODlhNwAYAMQAADMzzL2972tr2oyM4/Hx/EpK0oSE4Fpa1t7e96Wl6UND0Ht73mRk2M3N8v//'+
	'/4mJ4XR03Kys6lJS1Dk5zpyc52pq2UlJ0ebm+dbW9bW17MXF8JSU5ff3/dHR9Ozs+q2t6yH/C1hN'+
	'UCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtj'+
	'OWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUg'+
	'WE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAi'+
	'PgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRm'+
	'LXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAg'+
	'ICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8'+
	'eG1wOkNyZWF0b3JUb29sPkFkb2JlIEZpcmV3b3JrcyBDUzUgMTEuMC4wLjQ4NCBXaW5kb3dzPC94'+
	'bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDExLTA2LTIxVDE4OjI3'+
	'OjM2WjwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDExLTA3LTEz'+
	'VDEwOjQ1OjQyWjwveG1wOk1vZGlmeURhdGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAg'+
	'ICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0'+
	'cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdl'+
	'L2dpZjwvZGM6Zm9ybWF0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8'+
	'L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAog'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAK'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'IAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAog'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAK'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'IAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAog'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
	'ICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PgH//v38'+
	'+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTD'+
	'wsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuK'+
	'iYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JR'+
	'UE9OTUxLSklIR0ZFRENCQUA/Pj08ADo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkY'+
	'FxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAHAP8ALAAAAAA3ABgAAAX/oCOOZGmeaKqOXHIo'+
	'gCAB1vAYBnQUB+QLB8NDwCgUKotigSEQLhYDgwACUAQThNLlMDlQaIrJREG5CSsSyRSCXOAqB0tP'+
	'Z5EwoIbFY1GpACYWgRgjHgcMYwpWBYkADBtubgZFc5EGA0lpDBACBXZNDxAPDwqXAKYKFyJDAqYQ'+
	'XRtUYw9qZqA7aBA4kTqdUzsHB3oLEHwLpqYbIguGrAIPYomvCnvCb3YSPXs4khI8AzI8bUAbBqcA'+
	'IkI6iRUiAQwEGg4RSxsBFwG6PdgCCwEcDXsoUHCgIRQOCcQ+3AtjSoRBAzOSOTCw4QKBAAj+WOjg'+
	'wBm5NAJkMOCoYQBGB4Mg/zQguEPBBwcNLJiaIALYkzgPHJLx0I0MBQ4wGwDVIEMCAgRAR0Ro8IGB'+
	'BI4ROElI4CDAsXMODojcMSDVgAQIHEAwYsKDCApJOgyqmiHBhgcF3mbRgwCDWREdAAxwaOfXgrAk'+
	'MgSSI4LAAABhI+ha4IBDkwaA0YiYguGoAwIXDCRCt8yQhQ1JM3yY0cUA4ASmVhqggCMDSgnJOkSI'+
	'8ALvgwoFcjY4kEaBMhwQJAx0kCCNJUkMqE6eIEAEAAhoSfoYbIWxCAQLmsB0qgBCzTug0InpgQPA'+
	'cJ05HVzNksBAFiBxLGQhjiPe6GVYDfWgeiG4hAk8SKAAAw5I9IdvVREQQ/9jBkRw2SSGcNRBGcMZ'+
	'AIwFCDoFH1D3JJBAALJtAMABezlgRFcjKOBaBgCw44AHRw1gQQATqXidLQXQNNEyTAggVAkZ9FAB'+
	'Axg0MCIFG2xQEAAaEOAKiRkchUCQE/hxwAMcdHCJKEVwJkkQaVSSRjdIFBDcVcg8kYgavDnDxx0x'+
	'6MAAA6I84Z0DCOHwgFNxVJDLMkcA48MdEwCwwQwSQAGHEVqlQUwfCnTGW6I53LnBElAMMNakTzyx'+
	'j1Y2PDAiAKM8MaQvdjiVqgIbCFCHDlotoNwFcEggShMgYRMJGkQEkUci5fwRwxR5gPRCIqwmsQYw'+
	'dzmAwJAFDMMPEAy02Sk7MEAgwcgxXRTQBA7gHHDKnJ51B9gIBLSnQyRJaGUTuJ5Ui+EpFu5wxzYM'+
	'KGBAF/AF8cF8KwQs8MAmhAAAOw==';	

	var Report = function(no, bh, wl, url, datetime) {
		this.no = no;				//number
		this.bh = bh;				//攻撃／防御 b/h
		this.wl = wl;				//勝ち負け w/l
		this.url = url;				//URL
		this.dt  = datetime;		//日時
		this.b_alli = null;		//攻撃 同盟名
		this.b_alli_lnk = null;	//     同盟名リンク
		this.b_name = null;		//     名称
		this.b_name_lnk = null;	//     名称リンク
		this.b_place = null;		//     拠点
		this.b_place_lnk = null;	//     拠点リンク
		this.b_lance = 0;			//攻撃 槍
		this.b_bowman = 0;			//　　 弓兵
		this.b_horse = 0;			//　　 騎馬
		this.b_weapon = 0;			//　　 器
		this.h_alli = null;		//攻撃 同盟名
		this.h_alli_lnk = null;	//　　 同盟名リンク
		this.h_name = null;		//     名称
		this.h_name_lnk = null;	//     名称リンク
		this.h_place = null;		//     拠点
		this.h_place_lnk = null;	//     拠点リンク
		this.h_lance = 0;			//防御 槍
		this.h_bowman = 0;			//　　 弓兵
		this.h_horse = 0;			//　　 騎馬
		this.h_weapon = 0;			//　　 器
		this.done = 0;				//検索終了
	}
	
	var reports;
	var reportscount;
	var repcount;
	var repflag;
	var urltop;
	var errno = 0;
		
	function IXA_ReportAnalyse(){
		
		urltop = 'http://' + window.location.host + '/war/';
		//alert("urltop="+urltop);
		
		if (document.URL.indexOf(urltop + 'list.php') < 0) {
			alert("合戦報告書一覧のページではありません");
			return;
		}
		//alert(_jsaCScript.convertCharCodeTo("合戦報告書一覧のページ","shift_jis"));
		
		reports = new Array(0);
		repcount = 0;
		repflag = true;
		
		GetReportsTitlesSource();
		
		function GetReportsTitlesSource() {
			var dom = document.evaluate(
			'//table[@class="ig_battle_table"]',
			document,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null);
			var icount = dom.snapshotLength;
			//alert("icount="+icount);
	
			var ss = dom.snapshotItem(0).getElementsByTagName("td");
			reportscount = ss.length / 3;
			for (var i = 0; i < reportscount; i++) {
				reports[i] = new Report(i, (getSrc(ss[i*3].innerHTML,0).indexOf("battle") < 0) ? "h":"b", 
											(getSrc(ss[i*3+1].innerHTML,0).indexOf("win") < 0) ? "l":"w",
											replaceAmp(getHref(ss[i*3+1].innerHTML)), trim(ss[i*3+2].textContent));
				RequestAReport(i);
			}
		}
	}
	
	function showReports() {
		var fr_lance = 0, fr_bowman = 0, fr_horse = 0, fr_weapon = 0;
		var en_lance = 0, en_bowman = 0, en_horse = 0, en_weapon = 0;
		for (var i = 0; i < reportscount; i++) {
			if ("b" == reports[i].bh) {
				fr_lance  += reports[i].b_lance;
				fr_bowman += reports[i].b_bowman;
				fr_horse  += reports[i].b_horse;
				fr_weapon += reports[i].b_weapon;
				//alert("b:" + i + "\n" + reports[i].b_lance + "\n" + reports[i].b_bowman + "\n" + reports[i].b_horse + "\n" + reports[i].b_weapon + "\n");
				//alert("b:" + i + "\n" + (0 + reports[i].b_lance + reports[i].b_bowman + reports[i].b_horse + reports[i].b_weapon).toString() + "\n");
				en_lance  += reports[i].h_lance;
				en_bowman += reports[i].h_bowman;
				en_horse  += reports[i].h_horse;
				en_weapon += reports[i].h_weapon;
			} else {
				fr_lance  += reports[i].h_lance;
				fr_bowman += reports[i].h_bowman;
				fr_horse  += reports[i].h_horse;			
				fr_weapon += reports[i].h_weapon;			
				//alert("h:" + i + "\n" + reports[i].h_lance + "\n" + reports[i].h_bowman + "\n" + reports[i].h_horse + "\n" + reports[i].h_weapon + "\n");
				//alert("h:" + i + "\n" + (0 + reports[i].h_lance + reports[i].h_bowman + reports[i].h_horse + reports[i].h_weapon).toString() + "\n");
				en_lance  += reports[i].b_lance;
				en_bowman += reports[i].b_bowman;
				en_horse  += reports[i].b_horse;			
				en_weapon += reports[i].b_weapon;			
			}	
		}
		var fr_total = fr_lance + fr_bowman + fr_horse + fr_weapon;
		var en_total = en_lance + en_bowman + en_horse + en_weapon;
		var s = "味方兵損失 " + numFormat(fr_total, 9) + "\n";
		s += "槍 " + numFormat(fr_lance, 9) + "\n";
		s += "弓 " + numFormat(fr_bowman, 9) + "\n";
		s += "騎 " + numFormat(fr_horse, 9) + "\n";
		s += "器 " + numFormat(fr_weapon, 9) + "\n\n";
		s += "敵兵損失 " + numFormat(en_total, 9) + "\n";
		s += "槍 " + numFormat(en_lance, 9) + "\n";
		s += "弓 " + numFormat(en_bowman, 9) + "\n";
		s += "騎 " + numFormat(en_horse, 9) + "\n";
		s += "器 " + numFormat(en_weapon, 9) + "\n\n";
		alert(s);
	}
	
	
	function _numFormat(n) {
		var s = "" + n;
		s = s.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		return s;
	}
	
	function numFormat(n, digits) {
		var s = _numFormat(n);
		if (s.length < digits) {
			s = ("            ").substr(0, digits - s.length - 1) + s;
		}
		return s;
	}
	
	function RequestAReport(n) {
		var id = reports[n].url.match(/\?id=([0-9]+)&/);
		id = RegExp.$1;
		var profUrl = urltop + "detail.php?id=" + id;
		//alert("reports[n].url="+reports[n].url);
		//alert("url="+urltop + reports[n].url);
		$.ajax({
			url: profUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				try {
					var ids = getClassTags(html, "div", "ig_battle_damagelist2");
					//alert("ig_battle_damagelist2 ids="+ids.join('|'));
					reports[n].b_lance   = Number(rmvComma(getTagText(11,ids[0],"div")));
					reports[n].h_lance   = Number(rmvComma(getTagText(12,ids[1],"div")));
					ids = getClassTags(html, "div", "ig_battle_damagelist3");
					//alert("ig_battle_damagelist3 ids="+ids.join('|'));
					reports[n].b_bowman  = Number(rmvComma(getTagText(13,ids[0],"div")));
					reports[n].h_bowman  = Number(rmvComma(getTagText(14,ids[1],"div")));
					ids = getClassTags(html, "div", "ig_battle_damagelist4");
					reports[n].b_horse   = Number(rmvComma(getTagText(15,ids[0],"div")));
					reports[n].h_horse   = Number(rmvComma(getTagText(16,ids[1],"div")));
					ids = getClassTags(html, "div", "ig_battle_damagelist5");
					reports[n].b_weapon  = Number(rmvComma(getTagText(17,ids[0],"div")));
					reports[n].h_weapon  = Number(rmvComma(getTagText(18,ids[1],"div")));
					var tbl = getClassTags(html, "div", "ig_battle_reportunit");
					//alert("tbl="+tbl);
					ids = getAttrTags(tbl[0], "a", "href", "");
					if (ids.length == 1) {
						reports[n].b_alli      = "";
						reports[n].b_alli_lnk  = "";
						reports[n].b_name      = "";
						reports[n].b_name_lnk  = "";
						reports[n].b_place     = getTagText(3,ids[0],"a");
						reports[n].b_place_lnk = getHref(ids[0]);
					} else {
						reports[n].b_alli      = getTagText(1,ids[0],"a");
						reports[n].b_alli_lnk  = getHref(ids[0]);
						reports[n].b_name      = getTagText(2,ids[1],"a");
						reports[n].b_name_lnk  = getHref(ids[1]);
						reports[n].b_place     = getTagText(3,ids[2],"a");
						reports[n].b_place_lnk = getHref(ids[2]);
					}
					ids = getAttrTags(tbl[1], "a", "href", "");
					if (ids.length == 1) {
						reports[n].h_alli      = "";
						reports[n].h_alli_lnk  = "";
						reports[n].h_name      = "";
						reports[n].h_name_lnk  = "";
						reports[n].h_place     = getTagText(6,ids[0],"a");
						reports[n].h_place_lnk = getHref(ids[0]);
					} else {
						reports[n].h_alli      = getTagText(7,ids[0],"a");
						reports[n].h_alli_lnk  = getHref(ids[0]);
						reports[n].h_name      = getTagText(8,ids[1],"a");
						reports[n].h_name_lnk  = getHref(ids[1]);
						reports[n].h_place     = getTagText(9,ids[2],"a");
						reports[n].h_place_lnk = getHref(ids[2]);
					}
					repcount++;
				} catch(e) {
					alert("errno="+errno);
				} finally {
				}
				if (repcount == reportscount) {
					showReports();
				}

			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax RequestAReport("'+n+'") error');
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
	
	function _getTagText(html,tagName) {
		var reg = new RegExp("<" + tagName + "(\\s|.)*?>([^<]*)</" + tagName + ">", "i");
		var tag = html.match(reg);
		return (tag) ? RegExp.$2 : "";
	}
	
	function getTagText(n, html,tagName) {
		errno = n;
		var s = _getTagText(html,tagName);
		return s;
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
		var ans = html.match(src,"ig");
		return (ans && ans.length) ? RegExp.$1 : "";
	}
	
	
	function replaceAmp(s) {
		return s.replace(/&amp;/g,'&');
	}
	
	

	//---------------------------
	// main
	//---------------------------
	
    function cmd_doredake() {
		var tmp;
		if (document.URL.match('list\.php')) {
			tmp = '   <a href="javascript:void(0);" onclick="return false;" id="do_doredake"><img src="' + gifdake + '" alt="どれだけ" style="position: relative; top: 0px; left: -15px; float:right;"></a>';
		    $('div#ig_battle_report_top p').append(tmp);
		}
		//         + '<a href="javascript:void(0);" onclick="return false;" id="do_tomochika"><img src="' + giftomo + '" alt="とも近" style="position: relative; top: +8px; "></a>'
		//         + '<a href="javascript:void(0);" onclick="return false;" id="do_darechika"><img src="' + gifdare + '" alt="だれ近" style="position: relative; top: +8px; "></a>';
		$('#do_doredake').live('click', function() {
			//alert('無課金');
			IXA_ReportAnalyse();
		});
	}

	cmd_doredake();

}

bara_addJQuery(doredake_main);

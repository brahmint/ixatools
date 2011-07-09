// ==UserScript==
// @name           Suppa
// @version        1.0
// @namespace      https://sites.google.com/site/ixamukakin/
// @description    Suppa(数把) version 1.0 20110710
// @include        http://w0*.sengokuixa.jp/facility/unit_list.php
// @copyright      2011, brahmint@gmail.com
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
	var gifsuppa = 'data:image/gif;base64,'+
	'R0lGODlhNwAYAOYAAAAAAJXc3GC/vztpacPr6xozM0yZmXfS0gwZGaTh4TFaWkB/f1uzs3W8vIPW'+
	'1idMTPf8/K3k5G2kpEuNjRMmJnLQ0HupqUpubpze3ovY2AcMDGvOzll9feL19V+fnyM2NjpTU2SM'+
	'jEVhYY/FxXzT02bMzK3e3lmdnbLl5Ud3d3Kamm2vr1KQkBkoKEaBgYC1tTNmZkRrazFQUO75+f//'+
	'/wgNDVmHh1lycnClpVuoqCxDQ3vJyUOAgB40NL3p6WS2thAaGjlycmShoR8pKUJVVWi4uFKamnmo'+
	'qE9vbyo4ODZcXEpjY1RxceX3936/v2iMjFyUlFCFhYy5uWGAgAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
	'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/'+
	'C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRj'+
	'emtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRv'+
	'YmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAg'+
	'ICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjIt'+
	'cmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAg'+
	'ICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAg'+
	'ICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIEZpcmV3b3JrcyBDUzUgMTEuMC4wLjQ4NCBXaW5kb3dz'+
	'PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDExLTA2LTIxVDE4'+
	'OjI3OjM2WjwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDExLTA3'+
	'LTA5VDExOjIxOjI3WjwveG1wOk1vZGlmeURhdGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgog'+
	'ICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0i'+
	'aHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6Zm9ybWF0Pmlt'+
	'YWdlL2dpZjwvZGM6Zm9ybWF0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRG'+
	'Pgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg'+
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
	'ICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PgH/'+
	'/v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfG'+
	'xcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46N'+
	'jIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVU'+
	'U1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08ADo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwb'+
	'GhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAHAP8ALAAAAAA3ABgAAAf/gDSCg4SFhoeI'+
	'iYqDED4OFSUBJCUVEQmXAQ4kDgGdmZgZJCQZGBkHBxkBl6sJnZQOCT4QhTMOGw4olBUbvCisoSSe'+
	'pBiXGY+cmRWjGJbECRkZJRvKJB2Dtba8FQ4HFZAZEcTOpsjOl6WiqZKjGZiXlRgl8hUzgq0B8gG3'+
	'Efi8CcGsMo0CmMBZplOduDlwYLBUPHklIgjC4ABapATadlFyoUJEkiccRoT4oCQUpwQeOWAQ4uGE'+
	'EBw4PBSpiAFDJkvzSthr9ahCtGckdjHQoAEIgBYAkoAAAILTpgBJABzBAKCqVQAxTh0IgAGeRp00'+
	'VF2aFCGoA34HfvS4CmDCEKYe/zxIcOIBKQcLVZcCWXshkyZvJFBAkiZoYc1HrTZ04zeAreOqMR4f'+
	'SRp5AKkAWks8lFdYEjQSESCSa8DCKAAEPBRUvVFVhJABRmU0BoC3BxMAN0R1ElUC14GIgjybxJDr'+
	'bFALFNhqqMqj6rkPAIQEqPrgdAHcKEwGiBZRlz2KC5Xpm/ZvAQAgNQAQuZq8ha8Rb5E+hoECxfZR'+
	'vDQFnVhzHYlpylwyQgw6AFADFFDIR10A61ll2gkQygAADBs0s84GoVQQQGEM8bRJfqrc5lgOVhlQ'+
	'QhBWhZBAVQv11I0vxWSgDEVgVXTSPaJssEkRCABAgYQUGLBBjzXgIwAD1x0RQf9VwDigxASUwNgK'+
	'ND0JEopAAYSDgSiikHjVFCRUVxUHlJRwnQEkVKWKjD3+4E9BxBy0wXcVydhOQiRg0EAUpgGgQY/n'+
	'VaUEA0IkZ4QDrSGBhBJ+RoMMK0B99wwsophDggdWibBWVQsIkBwFUlj1AwkiOKZEPAlBE5AgBAH1'+
	'SCoFOTCADTsgE8MIG5SAQgoMkIAEExJwc8AKEsSFwwupVACefnFuSAMKqDCD1kJ51rQlJ5xYkkBv'+
	'JSSgbCnQCPQZO5UEIN5CXPkgyAzGkOCObpvUBNR27RTkzbbSRNJJQbr15A0KpXiyUD2CNPGZTVxl'+
	'8hlXh2FLijcQSaOJWK1wOQ8plT0F0EQhjdjEkDjhGhbnKPRCTEkCC0W7iowYYbtQAgTMssjMNNd8'+
	'SCAAOw==';

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

	var soldiers  = new Array (1);
	var decksold  = new Array (1);
	var stdbysold = new Array(1);
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
							rdystdby = true;	//準備完了
							//var msg = "";
							//for (var i = 0; i < stdbysoldcount; i++) {
							//	msg += "\n"+ stdbysold[i].name + "," + stdbysold[i].sname + "," + stdbysold[i].numstdby;
							//}
							//alert("Msg:"+msg);
						},
						error: function (XMLHttpRequest, textStatus, errorThrown) {
							alert('$.ajaxcountStdby() pg2 error');
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

	var viserId;
	
	function setViser(timeVise)
	{
		viserId = setInterval( function() { 
									if ( rdysold && rdydeck && rdystdby ) {
										clearInterval(viserId);
										mergeAndShow();
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
		rdysold   = false;		//
		rdydeck   = false;
		rdystdby  = false;
		soldiers  = new Array (1);
		decksold  = new Array (1);
		stdbysold = new Array(1);
		decksoldcount  = 0;
		deckjobs   = 0;
		stdbysoldcount = 0;
	
		countWaitAndTrainin();		//待機中の兵士と訓練中の兵士を数える
	
		countOnDeck(0);		//デッキの兵を数える
		countOnDeck(1);
		countOnDeck(2);
		countOnDeck(3);
		countOnDeck(4);
	
		countStdby();		//兵士編成100件x2頁で数える
		
		setViser(1000);
		//calc_dokochika();
		//setTimeout(calc_dokochika, 10);
	});

	
}

bara_addJQuery(count_main);

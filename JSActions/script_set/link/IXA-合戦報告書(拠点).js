// IXA-報告書（拠点）
// 2010/12/01 城主名を指定しないようにした
// 2010/12/16 マップのリンクから出せるようにした

jsa_IXA_ReportP();

function jsa_IXA_ReportP(){
	if(!_jsaCScript.context.onLink) return;
	var lnkURL = _jsaCScript.context.link.href;	
	var idx = lnkURL.indexOf("land.php");
	if (idx >= 0) {
		if (lnkURL.match(/land.php\?x=(-?[0-9]+)&y=(-?[0-9]+)&c=([0-9]+)/) != null) {
			var x = RegExp.$1;
			var y = RegExp.$2;
			var c = RegExp.$3;
			var profURL = 'http://' + window.location.host + '/war/list.php?m=&s=1&name=lord&word=&coord=map&x='+x+'&y='+y;
			gBrowser.loadOneTab(profURL,null,null,null,false,true);
		}
	} else {
		if (lnkURL.match(/map.php\?x=(-?[0-9]+)&y=(-?[0-9]+)&c=([0-9]+)/) != null) {
			var x = RegExp.$1;
			var y = RegExp.$2;
			var c = RegExp.$3;
			var profURL = 'http://' + window.location.host + '/war/list.php?m=&s=1&name=lord&word=&coord=map&x='+x+'&y='+y;
			gBrowser.loadOneTab(profURL,null,null,null,false,true);		
		}
	}
}


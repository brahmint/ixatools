// IXA-�񍐏��i���_�j
// 2010/12/01 ��喼���w�肵�Ȃ��悤�ɂ���
// 2010/12/16 �}�b�v�̃����N����o����悤�ɂ���

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


// IXA-�񍐏��i�����j
// 2010-10-11 0.1 IXA �n�}�Ή�
// 2010-12-16 0.2 IXA �������ւ̃����N�����镶����ɂ��Ή�
jsa_IXA_ReportA();

function jsa_IXA_ReportA(){
	if(!_jsaCScript.context.onLink) return;
	var lnkURL = _jsaCScript.context.link.href;	
	var idx = lnkURL.indexOf("land.php");
	if (idx >= 0) {
		if (lnkURL.match(/x=(-?[0-9]+)&y=(-?[0-9]+)&c=([0-9]+)/) != null) {
			var x = RegExp.$1;
			var y = RegExp.$2;
			var c = RegExp.$3;
			var kw = 'x='+x.toString()+'&amp;y='+y.toString()+'&amp;c='+c.toString()+'" title="(.+)" alt="(.+)" onmouseover="(.+)"';
			var fd = window.document.body.innerHTML.match(kw);
			if (fd != null) {
				var ttl = RegExp.$1;
				var alt = RegExp.$2;
				var omo = RegExp.$3;
				kw = "rewrite\\('([^']+)', '([^']+)', '([^']+)', '([^']+)', '([^']+)'";
				var ra = omo.match(kw);
				if (ra != null) {
					var pname = RegExp.$1;  //�̒n����
					var lname = RegExp.$2;  //���
					var population = RegExp.$3;  //�l��
					var pos = RegExp.$4;    //���W
					pos = pos.substring(1,pos.length-1);  //���ʂ��O��
					var alli = RegExp.$5;   //������
					if (lname.match(/\s/) == null) {
						var profURL = 'http://' + window.location.host + '/war/list.php?m=&s=1&name=alliance&word=' + alli + '&coord=map&x=&y=';
						gBrowser.loadOneTab(profURL,null,null,null,false,true);
					}
				} else {
					alert("cannot split");  //���ʂ͋N����Ȃ��͂�
				}
			} else {
				alert("not match");  //���ʂ͋N����Ȃ��͂�
			}
		}
	} else {
		idx = lnkURL.indexOf("alliance/info.php\?id=");
		if (idx >= 0) {
			var profURL = 'http://' + window.location.host + '/war/list.php?m=&s=1&name=alliance&word=' + _jsaCScript.context.link.text + '&coord=map&x=&y=';
			gBrowser.loadOneTab(profURL,null,null,null,false,true);		
		}
	}
}


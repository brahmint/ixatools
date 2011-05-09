// IXA-敵襲距離３０以内（拠点）
// 2010-10-13 初期バージョン
jsa_IXA_AttackR30();

function jsa_IXA_AttackR30(){
	if(!_jsaCScript.context.onLink) return;
	var lnkURL = _jsaCScript.context.link.href;	
	var idx = lnkURL.indexOf("land.php");
	if (idx < 0) return;
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
				var pname = RegExp.$1;  //領地名称
				var lname = RegExp.$2;  //城主
				var population = RegExp.$3;  //人口
				var pos = RegExp.$4;    //座標
				pos = pos.substring(1,pos.length-1);  //括弧を外す
				var alli = RegExp.$5;   //同盟名
				if (lname.match(/\s/) == null) {
					//http://w005.sengokuixa.jp/war/fight_history.php?type=0&find_name=&find_x=-30&find_y=-43&find_length=30&btn_exec=true
					var profURL = 'http://' + window.location.host + '/war/fight_history.php?type=0&find_name=&find_x='+x+'&find_y='+y+'&find_length=30&btn_exec=true';
					gBrowser.loadOneTab(profURL,null,null,null,false,true);
				}
			} else {
				alert("cannot split");  //普通は起こらないはず
			}
		} else {
			alert("not match");  //普通は起こらないはず
		}
	}else {
		alert("no match");  //普通は起こらないはず
	}
}


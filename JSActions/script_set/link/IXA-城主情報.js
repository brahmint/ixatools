// IXA-城主プロフィール
jsa_IXA_Profile();

var gotrank;

function jsa_IXA_Profile(){
	if(!_jsaCScript.context.onLink) return;
	var lnkURL = _jsaCScript.context.link.href;	
	var pos = lnkURL.indexOf("land.php");
	if (pos < 0) return;
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
				pos = pos.substring(1,pos.length-1);
				var alli = RegExp.$5;   //同盟名
				if (lname.match(/\s/) == null) {
					//http://w014.sengokuixa.jp/user/ranking.php?m=war_point&find_rank=&find_name=xxxxx&c=0
					var rankURL = 'http://' + window.location.host + '/user/ranking.php?m=war_point&find_rank=&find_name=' + lname + '&c=0';
					//gBrowser.loadOneTab(profURL,null,null,null,false,true);
					gotrank = false;
					requestRankingAll(rankURL);
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

function requestRankingAll(url) {
	alert(url);
	var req = new XMLHttpRequest();
	req.open('GET', encodeURI(url), true);
	req.setRequestHeader('User-agent',navigator.userAgent);
	req.setRequestHeader('Accept','application/atom+xml,application/xml,text/xml');
	//	onload: function(responseDetails) {
	//		var table = getTags(responseDetails.responseText,"div","ig_battle_damagelist1");
	//		alert(table);
	//	}
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if(req.status == 200) {
				//GM_log("table:"+table);
				alert("got it");
				gotrank = true;
				var fmdt = getClassTags(req.responseText, "table", "profile");
				alert(fmdt);
			} else {
				alert( "#" + n + " Error loading page\n");
				repflag = false;
			}
			if (repcount == reportscount) {
				showReports();
			}
		}
	};
	req.send(null); 

	return;
}


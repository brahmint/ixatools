// 現在のページまたはリンク先を IE で開きます
jsa_execIE();

function jsa_execIE(){
		// Internet Explorer のパス (環境に合わせて便宜修正してください)
	var iePath = "C:\\Program Files\\Internet Explorer\\iexplore.exe";

	var docURL = window.location;
		// リンク上ならリンク先を開く
	if(_jsaCScript.context.onLink) docURL = _jsaCScript.context.link.href;

	_jsaCScript.exec(iePath, docURL);
}
// エキサイト翻訳の結果を新しいタブで開きます

jsa_Send();

function jsa_Send(){
	var sendURL = "http://www.excite.co.jp/world/url/?wb_url=";

	var docURL = window.location;
		// リンク上ならリンク先を開く
	if(_jsaCScript.context.onLink) docURL = _jsaCScript.context.link.href;

	_jsaCScript.addTab(sendURL + escape(docURL));
}
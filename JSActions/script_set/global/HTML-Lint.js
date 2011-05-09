// HTML-lint の結果を新しいタブで開きます

jsa_Send();

function jsa_Send(){
	var sendURL = "http://openlab.ring.gr.jp/k16/htmllint/htmllint.cgi?R&URL=";

	var docURL = window.location;
		// リンク上ならリンク先を開く
	if(_jsaCScript.context.onLink) docURL = _jsaCScript.context.link.href;

	_jsaCScript.addTab(sendURL + escape(docURL));
}
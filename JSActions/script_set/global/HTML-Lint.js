// HTML-lint �̌��ʂ�V�����^�u�ŊJ���܂�

jsa_Send();

function jsa_Send(){
	var sendURL = "http://openlab.ring.gr.jp/k16/htmllint/htmllint.cgi?R&URL=";

	var docURL = window.location;
		// �����N��Ȃ烊���N����J��
	if(_jsaCScript.context.onLink) docURL = _jsaCScript.context.link.href;

	_jsaCScript.addTab(sendURL + escape(docURL));
}
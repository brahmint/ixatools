// �G�L�T�C�g�|��̌��ʂ�V�����^�u�ŊJ���܂�

jsa_Send();

function jsa_Send(){
	var sendURL = "http://www.excite.co.jp/world/url/?wb_url=";

	var docURL = window.location;
		// �����N��Ȃ烊���N����J��
	if(_jsaCScript.context.onLink) docURL = _jsaCScript.context.link.href;

	_jsaCScript.addTab(sendURL + escape(docURL));
}
// ���݂̃y�[�W�܂��̓����N��� IE �ŊJ���܂�
jsa_execIE();

function jsa_execIE(){
		// Internet Explorer �̃p�X (���ɍ��킹�ĕ֋X�C�����Ă�������)
	var iePath = "C:\\Program Files\\Internet Explorer\\iexplore.exe";

	var docURL = window.location;
		// �����N��Ȃ烊���N����J��
	if(_jsaCScript.context.onLink) docURL = _jsaCScript.context.link.href;

	_jsaCScript.exec(iePath, docURL);
}
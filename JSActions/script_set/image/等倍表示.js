// �摜��ʏ�T�C�Y�ɂ��ǂ��܂�

jsa_OriginalSize();

function jsa_OriginalSize(){
	const MAGNIFICATION = 2; // �g�嗦
	const MAX_MAGNIFICATION = MAGNIFICATION * 8; // �ő�g�嗦
	const MIN_MAGNIFICATION = MAGNIFICATION / 8; // �ŏ��g�嗦
	const ZOOM_ATTR = "jsa-zoom"; // �g�嗦��ۑ����鑮����

	var imgObj = _jsaCScript.context.target;
	if( !(( imgObj.localName ==  "IMG" ) || ( imgObj.localName == "img"))    )  return;

	imgObj.width = imgObj.naturalWidth;
	imgObj.height = imgObj.naturalHeight;
	imgObj.removeAttribute(ZOOM_ATTR);
}
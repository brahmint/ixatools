// �摜���g�債�܂�

jsa_zoomIn();

function jsa_zoomIn(){
	const MAGNIFICATION = 2; // �g�嗦
	const MAX_MAGNIFICATION = MAGNIFICATION * 8; // �ő�g�嗦
	const MIN_MAGNIFICATION = MAGNIFICATION / 8; // �ŏ��g�嗦
	const ZOOM_ATTR = "jsa-zoom"; // �g�嗦��ۑ����鑮����

	var imgObj = _jsaCScript.context.target;
	if( !(( imgObj.localName ==  "IMG" ) || ( imgObj.localName == "img"))    )  return;

	var zoom = imgObj.getAttribute(ZOOM_ATTR);
	if(zoom == null) zoom = 1;

	if(MAX_MAGNIFICATION > zoom){
		zoom = parseFloat(zoom) * MAGNIFICATION;
		imgObj.width = imgObj.naturalWidth * zoom;
		imgObj.height = imgObj.naturalHeight * zoom;
		imgObj.setAttribute(ZOOM_ATTR, zoom);
	}
}
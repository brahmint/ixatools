// �摜���k�����܂�

jsa_ZoomOut();

function jsa_ZoomOut(){
	const MAGNIFICATION = 2; // �g�嗦
	const MAX_MAGNIFICATION = MAGNIFICATION * 8; // �ő�g�嗦
	const MIN_MAGNIFICATION = MAGNIFICATION / 8; // �ŏ��g�嗦
	const ZOOM_ATTR = "jsa-zoom"; // �g�嗦��ۑ����鑮����

	var imgObj = _jsaCScript.context.target;
	if( !(( imgObj.localName ==  "IMG" ) || ( imgObj.localName == "img"))    )  return;

	var zoom = imgObj.getAttribute(ZOOM_ATTR);
	if(zoom == null) zoom = 1;

	if(MIN_MAGNIFICATION < zoom){
		zoom = parseFloat(zoom) / MAGNIFICATION;
		if(zoom == 0){
			imgObj.width = imgObj.naturalWidth;
			imgObj.height = imgObj.naturalHeight;
		}else{
			imgObj.width = imgObj.naturalWidth * zoom;
			imgObj.height = imgObj.naturalHeight * zoom;
		}
		imgObj.setAttribute(ZOOM_ATTR, zoom);
	}
}
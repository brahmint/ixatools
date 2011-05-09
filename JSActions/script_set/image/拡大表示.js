// ‰æ‘œ‚ðŠg‘å‚µ‚Ü‚·

jsa_zoomIn();

function jsa_zoomIn(){
	const MAGNIFICATION = 2; // Šg‘å—¦
	const MAX_MAGNIFICATION = MAGNIFICATION * 8; // Å‘åŠg‘å—¦
	const MIN_MAGNIFICATION = MAGNIFICATION / 8; // Å¬Šg‘å—¦
	const ZOOM_ATTR = "jsa-zoom"; // Šg‘å—¦‚ð•Û‘¶‚·‚é‘®«–¼

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
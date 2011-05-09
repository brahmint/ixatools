// ‰æ‘œ‚ğ’ÊíƒTƒCƒY‚É‚à‚Ç‚µ‚Ü‚·

jsa_OriginalSize();

function jsa_OriginalSize(){
	const MAGNIFICATION = 2; // Šg‘å—¦
	const MAX_MAGNIFICATION = MAGNIFICATION * 8; // Å‘åŠg‘å—¦
	const MIN_MAGNIFICATION = MAGNIFICATION / 8; // Å¬Šg‘å—¦
	const ZOOM_ATTR = "jsa-zoom"; // Šg‘å—¦‚ğ•Û‘¶‚·‚é‘®«–¼

	var imgObj = _jsaCScript.context.target;
	if( !(( imgObj.localName ==  "IMG" ) || ( imgObj.localName == "img"))    )  return;

	imgObj.width = imgObj.naturalWidth;
	imgObj.height = imgObj.naturalHeight;
	imgObj.removeAttribute(ZOOM_ATTR);
}
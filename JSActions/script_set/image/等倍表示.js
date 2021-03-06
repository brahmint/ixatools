// 画像を通常サイズにもどします

jsa_OriginalSize();

function jsa_OriginalSize(){
	const MAGNIFICATION = 2; // 拡大率
	const MAX_MAGNIFICATION = MAGNIFICATION * 8; // 最大拡大率
	const MIN_MAGNIFICATION = MAGNIFICATION / 8; // 最小拡大率
	const ZOOM_ATTR = "jsa-zoom"; // 拡大率を保存する属性名

	var imgObj = _jsaCScript.context.target;
	if( !(( imgObj.localName ==  "IMG" ) || ( imgObj.localName == "img"))    )  return;

	imgObj.width = imgObj.naturalWidth;
	imgObj.height = imgObj.naturalHeight;
	imgObj.removeAttribute(ZOOM_ATTR);
}
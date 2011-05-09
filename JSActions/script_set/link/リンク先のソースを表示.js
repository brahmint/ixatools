// リンク先のソースを view-source を使って開きます。
jsa_ViewSource();

function jsa_ViewSource(){
	if(!_jsaCScript.context.onLink) return;
	var docURL = _jsaCScript.context.link.href;
	var viewSourceURL = "chrome://global/content/viewSource.xul";
	var openFlag = "scrollbars,resizable,chrome,dialog=no"
	window.openDialog(viewSourceURL, "_blank", openFlag, docURL, null, null);
}
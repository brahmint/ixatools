// スタイルシートを無効化します。

jsa_DisableStyleSheets();

function jsa_DisableStyleSheets(){
	for(var i=0; i<document.styleSheets.length; i++){
		document.styleSheets[i].disabled = true;
	}
}
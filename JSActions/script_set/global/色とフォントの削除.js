// �w�i�F��t�H���g�̐F�A�傫�����폜���܂�

var body = document.body;
body.removeAttribute("bgcolor");
body.removeAttribute("text");
body.removeAttribute("link");
body.removeAttribute("vlink");
body.removeAttribute("alink");
body.removeAttribute("background");

var fonts = document.getElementsByTagName("font");
for(var i=0; i<fonts.length; i++){
	fonts.item(i).removeAttribute("color");
	fonts.item(i).removeAttribute("size");
}
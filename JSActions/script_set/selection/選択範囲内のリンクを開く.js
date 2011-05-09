// 選択範囲内のすべてのリンクを新しいタブで開きます

jsa_openSelectedLinks();

function jsa_openSelectedLinks(){
	var selection = window.getSelection();
	if(selection.rangeCount <= 0) return;
	var fragment = selection.getRangeAt(0).cloneContents();
	var treeWalker = fragment.ownerDocument.createTreeWalker(fragment,
									NodeFilter.SHOW_ELEMENT, null, true);
	while(treeWalker.nextNode()){
		var currentNode = treeWalker.currentNode;
		if(currentNode instanceof HTMLAnchorElement && currentNode.href){
			_jsaCScript.addTab(currentNode.href);
		}
	}
}
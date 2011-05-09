// Extract Link JS
//
// file created in 2005/10/21 12:03:28.
// LastUpdated :2008/09/25 19:58:51.
// author iNo
// http://www.serendip.ws/
//

makePage(document.location.href);

function makePage(uri) {
    var str = "<base target=\"_blank\">\n<h1 style=\"font-size:140%;\">Document (<a href=\"" + uri + "\">" + uri + "<\/a>)<\/h1>\n<hr>\n\n";
    createWin('<html><head><title>LINKS(' + uri + ')</title></head><body>' + str + getIframe(uri) + getCss(uri) + getJavascript(uri) + getAnchors(uri) + getImages(uri) + getObject(uri) + '</body></html>');
}

function getIframe(uri) {
    var ifrmElems = document.evaluate('//iframe[@src]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var ifrmAnc = "<h2 style=\"font-size:120%;\">InlineFrame<\/h2>\n<p style=\"font-size:80%;font-style:italic;\">Total : " + ifrmElems.snapshotLength + "<\/p>\n<ol>\n";
    var str = "";
    for (var i=0; i<ifrmElems.snapshotLength; i++) {
        ifrmAnc += "<li><a href=\"" + ifrmElems.snapshotItem(i).src + "\">" + ifrmElems.snapshotItem(i).src + "<\/a><\/li>\n";
    }
    str += ifrmAnc + "<\/ol>\n<hr>\n";
    return str;
}

function getCss(uri) {
    var cssElems = document.evaluate('//link[@rel="stylesheet" and @href]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var cssArray = new Array();
    var cssAnc = "<h2 style=\"font-size:120%;\">StyleSheet<\/h2>\n<p style=\"font-size:80%;font-style:italic;\">Total : " + cssElems.snapshotLength + "<\/p>\n<ol>\n";
    var str = "";
    for (var i=0; i<cssElems.snapshotLength; i++) {
        cssArray[i] = cssElems.snapshotItem(i).href;
    }

    cssArray.sort();
    for (var j=0; j<cssArray.length; j++) {
        cssAnc += "<li><a href=\"" + cssArray[j] + "\">" + cssArray[j] + "<\/a><\/li>\n";
    }
    str += cssAnc + "<\/ol>\n<hr>\n";
    return str;
}

function getJavascript(uri) {
    var jsElems = document.evaluate('//script[@src]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var jsArray = new Array();
    var jsAnc = "<h2 style=\"font-size:120%;\">JavaScript<\/h2>\n<p style=\"font-size:80%;font-style:italic;\">Total : " + jsElems.snapshotLength + "<\/p>\n<ol>\n";
    var str = "";
    for (var i=0; i<jsElems.snapshotLength; i++) {
        jsArray[i] = jsElems.snapshotItem(i).src;
    }
    jsArray.sort();
    for (var j=0; j<jsArray.length; j++) {
        jsAnc += "<li><a href=\"" + jsArray[j] + "\">" + jsArray[j] + "<\/a><\/li>\n";
    }
    str += jsAnc + "<\/ol>\n<hr>\n";
    return str;
}

function getAnchors(uri) {
    var anchors = document.evaluate('//a[@href]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var ancArray = new Array();
    var sDomAnc = "<h3 style=\"font-size:100%;\"><a name=\"s1\">Same Domain<\/a>(" + document.domain + ")<\/h3>\n<ol>\n";
    var oDomAnc = "<h3 style=\"font-size:100%;\"><a name=\"o1\">Other Domain<\/a><\/h3>\n<ol>\n";
    var sDomLen = 0;
    var oDomLen = 0;
    var str = "";
    for (var i=0; i<anchors.snapshotLength; i++) {
        ancArray[i] = anchors.snapshotItem(i).toString();
    }

    ancArray.sort();

    var domainRE = new RegExp("^(https?|ftp|file)\:\/\/"+document.domain);
    for (var j=0; j<ancArray.length; j++) {
        if (ancArray[j].match(domainRE)) {
            sDomAnc += "<li><a href=\"" + ancArray[j] + "\">" + ancArray[j] + "<\/a><\/li>\n";
            sDomLen++;
        }
        else {
            oDomAnc += "<li><a href=\"" + ancArray[j] + "\">" + ancArray[j] + "<\/a><\/li>\n";
            oDomLen++;
        }
    }

    str += "<h2 style=\"font-size:120%;\">Links<\/h2>\n<p style=\"font-size:80%;font-style:italic;\">Same Domain : " + sDomLen + "<br>Other Domain : " + oDomLen + "<br>Total : " + anchors.snapshotLength + "<\/p>\n\n" + sDomAnc + "<\/ol>\n\n" + oDomAnc + "<\/ol>\n\n<hr>\n\n";
    return str;
}

function getImages(uri) {
    var imgElems = document.evaluate('//img[@src]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var imgAnc = "<h2 style=\"font-size:120%;\">Images<\/h2>\n<p style=\"font-size:80%;font-style:italic;\">Total : " + imgElems.snapshotLength + "<\/p>\n<ol>\n";
    var str = "";
    for (var i=0; i<imgElems.snapshotLength; i++) {
        var img = imgElems.snapshotItem(i);
        imgAnc += "<li><a href=\"" + img.src + "\" class=\"imgs\">" + img.src + "[ " + img.width + " x " + img.height + " (" + img.alt + ") ] " + "<br><img src=\"" + img.src + "\" width=\"60\" height=\"50\">" + "<\/a><\/li>\n";
    }

    str += imgAnc + "<\/ol>\n<hr>\n";
    return str;
}

function getObject(uri) {
    var objElems = document.evaluate('//embed[@src]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var objAnc = "<h2 style=\"font-size:120%;\">Objects (embed)<\/h2>\n<p style=\"font-size:80%;font-style:italic;\">Total : " + objElems.snapshotLength + "<\/p>\n<ol>\n";
    var str = "";
    for (var i=0; i<objElems.snapshotLength; i++) {
        var obj = objElems.snapshotItem(i);
        objAnc += "<li><a href=\"" + obj.src + "\">" + obj.src + "[ " + obj.width + " x " + obj.height + " (" + obj.type + ") ] " + "<\/a><\/li>\n";
    }
    str += objAnc + "<\/ol>\n<hr>\n";
    return str;
}

function createWin(str) {
    var newvrsTab = gBrowser.addTab("data:text/html;charset=utf-8," + str);
}

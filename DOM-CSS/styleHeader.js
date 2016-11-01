/**
 * Created by miracle on 16-11-1.
 */
function  styleHeader() {
    if(!document.getElementsByTagName) return false;
    var header = document.getElementsByTagName('h1');
    var elem;
    for (var i = 0; i<header.length ; i++){
        elem = getNextElemet(header[i].nextSibling);
        elem.style.fontWeight = 'bold';
        elem.style.fontSize = '1.2em';
    }

}
function  getNextElemet(node) {
    if (node.nodeType==1){
        return node;
    }
    if (node.nextSibling){
        return getNextElemet(node.nextSibling);
    }
    return null;
}
addLoadEvent(styleHeader);
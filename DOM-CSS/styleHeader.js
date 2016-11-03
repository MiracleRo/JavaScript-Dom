/**
 * Created by miracle on 16-11-1.
 */
function  styleHeader(element,value) {
    if(!document.getElementsByTagName) return false;
    var header = document.getElementsByTagName(element);
    var elem;
    for (var i = 0; i<header.length ; i++){
        elem =getNextElemet(header[i].nextSibling);
        addClass(elem,value);
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
function addClass(tag,value) {
    if(!tag.className){
        tag.className = value;
    }else {
        var newClass = tag.className;
        newClass +='';
        newClass +=value;
        tag.className = newClass;
    }
}
addLoadEvent(function () {
    styleHeader('h1','intro');
});
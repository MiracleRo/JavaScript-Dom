/**
 * Created by miracle on 16-11-1.
 */
function  displayAccess() {
    if(!document.getElementById) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    var nav = document.getElementById('nav');
    var a = nav.getElementsByTagName('a');
    //获取所有链接;
    var arry = new Array();
    for (var i =0 ;i<a.length ;i++){
        var currnet_a = a[i];
        if(!currnet_a.getAttribute('accesskey')) continue;
        //如果没有accesskey属性 继续;
        var key = currnet_a.getAttribute('accesskey');
        //获取accesskey属性
        var a_text = currnet_a.lastChild.nodeValue;
        //获得链接文本;
        arry[key]=a_text;
        //添加到数组;
    }
    var list = document.createElement('ul');
    //建立列表
    for (key in arry){
    //遍历访问键
        var text = arry[key];
        var str = key+':'+text;
        //创建列表中的字符串;
        var litem = document.createElement('li');
        var litem_text = document.createTextNode(str);
        litem.appendChild(litem_text);
        //创建列表项;
        list.appendChild(litem);
        //将列表项放入列表中;
    }
    var header = document.createElement('h2');
    var header_text =document.createTextNode('AccessKeys');
    //创建标题并且添加文本节点;
    header.appendChild(header_text);
    document.body.appendChild(header);
    //将标题加入页面;
    document.body.appendChild(list);
    //将列表加入页面;
}
addLoadEvent(displayAccess);
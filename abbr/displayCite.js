/**
 * Created by miracle on 16-11-1.
 */
function  displayCite() {
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode)  return false;
    var quotes = document.getElementsByTagName('blockquote');
    // 获得所有引用;
    for (var i = 0 ; i<quotes.length ;i++){
        // 遍历所有引用;
        if(!quotes[i].getAttribute('cite')) continue;
        //如果没有cite属性, 继续;
        var url = quotes[i].getAttribute('cite');
        //保存cite属性;
        var element = quotes[i].getElementsByTagName('*');
        //获取引用的所有元素节点;
        if (element.length<1) continue;
        //无元素节点 ;继续;
        var p = element[element.length-1];
        // 获取引用的最后一个元素节点;
        var link = document.createElement('a');
        //创建标记
        var link_text = document.createTextNode('source');
        link.appendChild(link_text);
        link.setAttribute('href',url);
        var sup = document.createElement('sup');
        sup.appendChild(link);
        p.appendChild(sup);
        //把标记添加到引用的最后一个元素节点;

    }
}
addLoadEvent(displayCite);
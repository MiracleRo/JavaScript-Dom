/**
 * Created by miracle on 16-11-1.
 */
function displayAbbr() {
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    //检查方法是否存在;
    var abbr = document.getElementsByTagName('abbr');
    var defs = new Array();
    for (var i=0 ; i<abbr.length ;i++){
        var currnet_abbr= abbr[i];
        if(currnet_abbr.childNodes.length<1) continue;
        // 对于不能识别abbr标签的浏览器;
        var defin = currnet_abbr.getAttribute('title');
        var key =currnet_abbr.lastChild.nodeValue;
        defs[key]=defin;
    }
    //取得并且遍历abbr元素
    var dlist =document.createElement('dl');
    //创建列表;
    for (key in defs){
        var defin = defs[key];
        var dtitle =document.createElement('dt');
        var dtitle_text=document.createTextNode(key);
        //创建自定义列表标题;
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement('dd');
        var ddesc_text = document.createTextNode(defin);
        ddesc.appendChild(ddesc_text);
        //创建自定义描述;
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
        //把描述添加到定义列表;
    }
    if (dlist.childNodes.length<1) return false;
    //对于不能识别abbr标签的浏览器;
    var header = document.createElement('h2');
    var header_text = document.createElement('Abbreviations');
    //创建描述文字;
    document.body.appendChild(header);
    //将描述文字加入页面;
    document.body.appendChild(dlist);
    //将自定列表加入页面;
}
addLoadEvent(displayAbbr);

/**
 * Created by miracle on 16-10-23.
 */
function  addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function'){
        window.onload=func;
    }else {
        window.onload =function () {
            oldonload();
            func();
        }
    }
}
// addLoadEvent 函数;
function insertAfter(newElement,targetElemt) {
    var parent = targetElemt.parentNode;
    if (parent.lastChild==targetElemt){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElemt.nextElementSibling);
    }
}
//在目标元素后面插入新元素;
function perpare() {
    if(!document.getElementById) return false;//是否支持document.getElementById;
    if(!document.getElementsByTagName) return false;//是否支持document.getElementByTagName;
    if(!document.getElementById('imgs')) return false //能否找到id为imgs的元素;
    var img_ul = document.getElementById('imgs');
    var images = img_ul.getElementsByTagName('a');
    for (var i = 0 ; i<images.length;i++){
        images[i].onclick = function () {
            return show(this)? false:true;
        }
    }
}
function  show(pic) {
    var source =pic.getAttribute('href');
    var text = pic.getAttribute('title');
    var place = document.getElementById('placeholder');
    var title =document.getElementById('title');
    place.setAttribute('src',source);
     title.firstChild.nodeValue = text;
    return true;
}
function  addImg() {
    var img = document.createElement('img');
    var id = img.setAttribute('id','placeholder');
    var alt =img.setAttribute('alt','place');
    var src = img.setAttribute('src','img/white.jpg');
    var div =document.createElement('div');
    var div_id =div.setAttribute('id','title');
    var text = document.createTextNode('Choose an image');
    div.appendChild(text);
    var imgs =document.getElementById('imgs');
    insertAfter(img,imgs);
    insertAfter(div,img);
}
addLoadEvent(perpare);
addLoadEvent(addImg);





/**
 * Created by miracle on 16-11-1.
 */
function  addLoadEvent(func) {
    var oldLoad = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldLoad();
            func();
        }
    }
}
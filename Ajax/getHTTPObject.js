/**
 * Created by miracle on 16-10-30.
 */
var request = new XMLHttpRequest();
function  getHTTPObject() {
    if (typeof XMLHttpRequest == 'undefined')
        XMLHttpRequest = function () {
            try {return new ActiveXObject('Msxml2.XMLHTTP.6.0');}
                catch (e){}
            try {return new ActiveXObject('Msxml2.XMLHTTP.3.0');}
                catch (e){}
            try {return new ActiveXObject('Msxml2.XMLHTT');}
                catch (e){}
            return false;
    }
    return new XMLHttpRequest();
}
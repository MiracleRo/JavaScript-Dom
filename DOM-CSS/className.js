/**
 * Created by miracle on 16-11-3.
 */

function highLight() {
    var tr = document.getElementsByTagName('tr');
    for (var i =0; i<tr.length;i++){
        tr[i].onmouseover = function () {
            this.style.fontWeight='bold';
        }
        tr[i].onmouseout = function () {
            this.style.fontWeight='normal';
        }
    }
}
addLoadEvent(highLight);
/**
 * Created by miracle on 16-11-1.
 */
function  srtipeTable() {
    if (!document.getElementsByTagName)  return false;
    var table = document.getElementsByTagName('table');
    var odd, rows;
    for (var i=0; i<table.length;i++){
        odd = false;
        rows = table[i].getElementsByTagName('tr');
        for (var j=0 ; j<rows.length;j++){
            if (odd ==true){
                rows[j].style.backgroundColor = '#ffc';
                odd=false;
            }else {
                odd = true;
            }
        }

    }
}
addLoadEvent(srtipeTable);
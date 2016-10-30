/**
 * Created by miracle on 16-10-30.
 */
function getNewContent() {
    var request =getHTTPObject();
    if (request){
        request.open('GET','example',true);
        request.onreadystatechange = function () {
            if (request.readyState==4){
                var para =document.createElement('p');
                var txt= document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        };
        request.send(null);
    }else {
        console.log('sorry , your brower doesn\'t support XMLHTTPRequest');
    }
}
window.onload = getNewContent();
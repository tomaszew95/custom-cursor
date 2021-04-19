var customCursor = document.getElementById("ceros-custom-cursor-plugin");
var hoverObject = customCursor.getAttribute("hover-object").split(" ");
var cursorType = customCursor.getAttribute("cursor-type").split(" ");
let hoverObj;
var customCur = () => {
    if(hoverObject.length != cursorType.length){
        console.warn("not equal number of Configurable Parameters");
        return;
    }
    for(let i=0;i<hoverObject.length;i++){
        hoverObj = document.querySelectorAll(hoverObject[i]);
        // hoverObj[i] = document.querySelectorAll(hoverObject[i].toString());
        hoverObj.attr("style", 'cursor:' + cursorType[i]);
        console.log($(hoverObj));
    }
}
customCur();

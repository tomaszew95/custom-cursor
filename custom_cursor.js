var customCursor = document.getElementById("ceros-custom-cursor-plugin");
var hoverObject = customCursor.getAttribute("objects-names").split(" ");
var cursorType = customCursor.getAttribute("objects-names").split(" ");
if(hoverObject.length != cursorType.length){
    console.warn("not equal number of Configurable Parameters");
    return;
}
for(let i=0;i<hoverObject.length;i++){
    $(`hoverObject[i]`).attr("cursor", cursorType[i].toString());
}
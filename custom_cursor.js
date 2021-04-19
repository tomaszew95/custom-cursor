var customCursor = document.getElementById("ceros-custom-cursor-plugin");
var hoverObject = customCursor.getAttribute("hover-object").split(" ");
var cursorType = customCursor.getAttribute("cursor-type").split(" ");
var customCur = () => {
    console.log('works0');
    if(hoverObject.length != cursorType.length){
        console.warn("not equal number of Configurable Parameters");
        return;
    }
    for(let i=0;i<hoverObject.length;i++){
        console.log('works1');
        $(hoverObject[i]).attr("cursor", cursorType[i].toString());
    }
}
customCur(); 

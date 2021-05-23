var customCursor = document.getElementById("ceros-custom-cursor-plugin");
var hoverObject = customCursor.getAttribute("hover-object").split("  ");
var cursorType = customCursor.getAttribute("cursor-type").split("  ");
(function(){
    'use strict'; 
    require.config({ 
        paths: { 
            CerosSDK: '//sdk.ceros.com/standalone-player-sdk-v5.min' 
        } 
    }); 
    require(['CerosSDK'], function (CerosSDK) { 
        CerosSDK.findExperience() 
            .fail(function (error) { 
                console.error(error); 
            }) 
            .done(function (experience) { 
                window.myExperience = experience;

                experience.on(CerosSDK.EVENTS.PAGE_CHANGED, pageChangedCallback);
                function pageChangedCallback(){
                    let hoverObj;
                    if(hoverObject.length != cursorType.length){
                        console.warn("not equal number of Configurable Parameters");
                        return;
                    }
                    for(let i=0;i<hoverObject.length;i++){
                        if(hoverObject[i].charAt(0)=="#"){
                            let idd = hoverObject[i].slice(1);
                            hoverObj = document.querySelectorAll("[id='" + idd + "']");
                        }
                        else{
                            hoverObj = document.querySelectorAll(hoverObject[i]);
                        }
                        $(hoverObj).css({cursor: cursorType[i]});
                    }
                }
            }) 
    }); 
})();

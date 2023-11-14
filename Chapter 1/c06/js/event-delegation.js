function getTarget(e){
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e) {
    var target, elParent, elGrandparent;

    if(target.nodeName.toLowerCase() =="a") {
        elListItem = target.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(ellistItem);
    }
    if(target.nodeName.toLowerCase() == "em") {
        elListItem = target.parentNode.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem);
    }
    if (e.prevenDefault) {
        e.prevenDefault();
    }else {
        e.returnValue = false;
    }
}
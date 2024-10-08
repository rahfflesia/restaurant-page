const parent = document.querySelector('.container');

function removeChilds(){
    if(parent.hasChildNodes()){
        while (parent.firstChild){
            parent.removeChild(parent.lastChild);
        }
    }
}

export {removeChilds};
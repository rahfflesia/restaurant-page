import { removeChilds } from "./removeChilds";

function createHomePage(){
    const parent = document.querySelector('.container');
    const text = document.createElement('div');

    removeChilds();
    
    text.classList.add('txt');
    const paragraph = document.createElement('p');
    paragraph.textContent = "The best steaks in the world!";
    const btnClass = document.createElement('div');
    btnClass.classList.add('btn');
    const btnParagraph = document.createElement('p');
    btnParagraph.textContent = "Order now";
    parent.appendChild(text);
    text.appendChild(paragraph);
    text.appendChild(btnClass);
    btnClass.appendChild(btnParagraph);
}

export {createHomePage};
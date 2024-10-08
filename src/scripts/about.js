import { removeChilds } from "./removeChilds";

function createAbout(){
    const parent = document.querySelector('.container');
    const childDiv = document.createElement('div');

    removeChilds();
    
    childDiv.classList.add('address');
    const h2txt = document.createElement('h2');
    h2txt.textContent = "Our contact information";
    const span = document.createElement('span');
    span.textContent = "Address: 13th Street. 47 W 13th St, New York, NY 10011, USA.";
    const span2 = document.createElement('span');
    span2.textContent = "Phone number: 678 999 0010";
    const span3 = document.createElement('span');
    span3.textContent = "E-mail: steakhouse@gmail.com";
    childDiv.appendChild(h2txt);
    childDiv.appendChild(span);
    childDiv.appendChild(span2);
    childDiv.appendChild(span3);
    parent.appendChild(childDiv);
}

export {createAbout};
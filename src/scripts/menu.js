import { removeChilds } from "./removeChilds";
// Importar las imagenes como variables usando rutas relativas
import topRound from "../../images/menu/top-round.jpg";
import primalCut from "../../images/menu/primal_cut.jpg"
import skirtSteak from "../../images/menu/skirt-steak.jpg";
import filetMignon from "../../images/menu/Filet-Mignon-main.jpeg";
import tBone from "../../images/menu/t-bone-steak-grill-1200x1200-1.jpg";
import ribeye from "../../images/menu/smoked-ribeye-1200-image.jpg";

const titles = ["Ribeye","T-Bone","Primal cut","Filet mignon","Top round","Skirt steak"];
const imagesPath = [ribeye, tBone, primalCut, filetMignon, topRound, skirtSteak];
const prices = ["Price: $50","Price: $45","Price: $30","Price: $75","Price: $100","Price: $31"];

function createMenu(){
    const parent = document.querySelector(".container");
    const cards = document.createElement('div');

    removeChilds();

    cards.classList.add('cards');
    for(let i = 0; i < titles.length; i++){
        const card = document.createElement('div');
        card.classList.add('card');
        const span = document.createElement('span');
        const span2 = document.createElement('span');
        const button = document.createElement('button');
        const image = document.createElement('img');
        span.textContent = titles[i];
        span2.textContent = prices[i];
        image.src = imagesPath[i];
        button.textContent = "Order";
        card.appendChild(span);
        card.appendChild(image);
        card.appendChild(span2);
        card.appendChild(button);
        cards.appendChild(card);
    }
    parent.appendChild(cards);
}

export {createMenu};
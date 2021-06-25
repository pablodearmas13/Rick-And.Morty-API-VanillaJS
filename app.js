import API from './API.js'
import Character from './character.js';

const api = new API();
const character = new Character();
const btnViewCharacter = document.querySelector('.verPersonajes');

const cantMaxCharacter = await api.getCantCharacter();

const arrayCharacter = [];
const arrayLocation = [];

const generateIdRandom = (cant) => {
    return  Math.floor(Math.random()*(cant-1))+1;
}

const generateIdLocation = (url) =>{
    let ubicacionBarra = url.lastIndexOf("/");;
    let id = url.substring(ubicacionBarra);
    return id;
}

btnViewCharacter.addEventListener('click', async () => {
    const container_character = document.querySelector('#container_character'); 
    container_character.style.display = "flex";
    
    for(let index = 0; index < 20; index++){
        arrayCharacter[index] = await api.getCharacter(generateIdRandom(cantMaxCharacter));
        
        arrayLocation[index] = await api.getLocationCharacter(generateIdLocation(arrayCharacter[index].location.url));
        //console.log(arrayLocation[index]);

        character.generateCharacter(arrayCharacter[index],arrayLocation[index]);
    }
});












 
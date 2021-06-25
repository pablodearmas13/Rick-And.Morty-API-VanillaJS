export default class Character{
    
    generateCharacter = (character, location) =>{
    const container_character = document.querySelector('#container_character');
    const new_card = document.createElement('DIV');
    new_card.classList.add('card_character');
    new_card.innerHTML = `
        <div class="card_character--name">    
            <h2> ${character.name} </h2> 
        </div>
        <div class="card_character--image">
            <img src= ${character.image} alt=${character.image}>
        </div>
        <div class="card_character--status">
            <p class=""> <strong> Status: </strong> ${character.status} </p>
        </div>
        <div class="card_character--species">
            <p> <strong> Species:</strong> ${character.species} </p>
        </div>

        <div class="card_location--name">
            <p> <strong> Location name:</strong> ${location.name}</p>
        </div>
        <div class="card_location--type">
            <p> <strong> Type:</strong> ${location.type}</p>
        </div>
        <div class="card_location--dimension"> 
            <p> <strong>Dimension:</strong> ${location.dimension}</p>
        </div>
    `
    container_character.appendChild(new_card);
    //console.log(typeof container_character);
}

}
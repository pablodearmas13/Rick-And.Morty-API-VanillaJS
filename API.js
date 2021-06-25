export default class API{

    async getCharacter(id){
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        return data;
        
    }

    async getCantCharacter(){
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        return data.info.count;
    }

    async getLocationCharacter(id){
        const response = await fetch(`https://rickandmortyapi.com/api/location${id}`);
        const data = await response.json();
        return data;
    }
    
}
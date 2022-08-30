function getApiData() {
return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {

const ApiDataNeeded = data.map((item, index) => {

    return { 
        id: index,
        image: item.image,    
        name: item.name,
        species: item.species,
        house: item.house,
        gender: item.gender,
        status: item.wand.alive,
    } 
    
});
return ApiDataNeeded;

});
};
export default getApiData;
function getApiData() {
return fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
    .then((response) => response.json())
    .then((data) => {

const ApiDataNeeded = data.map((item) => {
    return {
        image: item.image,    
        name: item.name,
        species: item.species,
    } 
    
});
return ApiDataNeeded;

});
};

export default getApiData;
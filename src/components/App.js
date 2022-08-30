import logo from '../images/logo.svg';
import '../styles/App.scss';
import '../styles/core/_reset.scss';
import logoHeader from "../images/text.png";
import getApiData from '../services/dataApi';
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { useEffect, useState } from 'react';
import {matchPath, Route, Routes, useLocation} from "react-router-dom";

function App() {
const [characterData, setCharacterData] = useState([]);
const [filterByName, setFilterByName] = useState("");
const [filterByHouse, setFilterByHouse] = useState("Gryffindor");
const [filterByGender, setFilterByGender] = useState("all");


useEffect(() => {
  getApiData().then((data) =>{
    setCharacterData(data); 
  })

}, [])



const handleFilterByName = (value) => {
  setFilterByName(value);
}

const handleFilterByHouse = (value) => {
  setFilterByHouse(value);
}
const handleFilterByGender = (value) => {
  setFilterByGender(value);
}



const characterFilter = characterData
.filter((item) => {
  return item.name.toLowerCase().includes(filterByName.toLowerCase())
})
.filter((item) => {
    return item.house === filterByHouse 
})
.filter((item) => {
  if(filterByGender === "all") {
    return true;
  } else {
    return item.gender === filterByGender 
  }
});

//id del usuario (click)

const { pathname } = useLocation();

const dataPath = matchPath('/item/:characterId', pathname);
const caracterId = dataPath !== null ? parseInt(dataPath.params.characterId) : null;

const caracterFound = characterData.find(item=> {return item.id === caracterId});




const handleClick = () => {
  setFilterByName("");
  setFilterByHouse("Gryffindor");
  setFilterByGender("all");
};




 return (
    <div className='main'>
  <img className='logo_header' src={logoHeader} alt='Harry Potter'></img>  

<Routes>
  <Route
  path='/'
  element={
    <>
     <Filters 
    filterByName={filterByName} 
    handleFilterByHouse={handleFilterByHouse}
    filterByHouse={filterByHouse}
    handleFilterByName={handleFilterByName}
    filterByGender={filterByGender}
    handleFilterByGender={handleFilterByGender}/>
    <button onClick={handleClick}>Reset</button>
    <CharacterList characters={characterFilter}/>
     
    </>
  } />

<Route
path='/item/:characterId'
element={
  <CharacterDetail character={caracterFound}/>
}
/>
</Routes>
    
  <div className='App'></div>
  </div>
  
  )
}

export default App;

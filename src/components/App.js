import logo from '../images/logo.svg';
import '../styles/App.scss';
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


const characterFilter = characterData
.filter((item) => {
  return item.name.toLowerCase().includes(filterByName.toLowerCase())
})
.filter((item) => {
    return item.house === filterByHouse
  
})


//id del usuario (click)

const { pathname } = useLocation();

const dataPath = matchPath('/caracter/:caracterId', pathname);

const caracterId = dataPath !== null ? dataPath.params.characterId : null;
const caracterFound = characterData.find(character=> {return character.id === caracterId});

  return (
    <>
<h1> Harry Potter</h1>

<Routes>
  <Route
  path='/'
  element={
    <>
     <Filters 
    filterByName={filterByName} 
    handleFilterByHouse={handleFilterByHouse}
    filterByHouse={filterByHouse}
    handleFilterByName={handleFilterByName}/>
    <CharacterList characters={characterFilter}/> 
    </>
  } />

<Route
path='/caracter/:caracterId'
element={
  <CharacterDetail character={caracterFound}/>
}
/>
</Routes>
    
  <div className='App'></div>
  </>
  
  )
}

export default App;

import logo from '../images/logo.svg';
import '../styles/App.scss';
import getApiData from '../services/dataApi';
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";

function App() {
const [characterData, setCharacterData] = useState([]);
const [filterByName, setFilterByName] = useState("");


useEffect(() => {
  getApiData().then((data) =>{
    setCharacterData(data); 
  })
}, [])

const handleFilterByName = (value) => {
  setFilterByName(value);
}

const characterFilter = characterData.filter((character) => {
  return character.name.toLowerCase().includes(filterByName.toLowerCase())
})


  return (
    <>
<h1> Harry Potter</h1>
    <Filters filterByName={filterByName}
    handleFilterByName={handleFilterByName}/>
    <CharacterList characters={characterData}></CharacterList>
  <div className='App'></div>
  </>
  
  )
}

export default App;

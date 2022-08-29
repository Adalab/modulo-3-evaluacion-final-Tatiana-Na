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

  return (
    <>
<h1> Harry Potter</h1>


    <Filters 
    filterByName={filterByName} 
    handleFilterByHouse={handleFilterByHouse}
    filterByHouse={filterByHouse}
    handleFilterByName={handleFilterByName}/>
    <CharacterList characters={characterFilter}/>
  <div className='App'></div>
  </>
  
  )
}

export default App;

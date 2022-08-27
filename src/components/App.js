import logo from '../images/logo.svg';
import '../styles/App.scss';
import getApiData from '../services/dataApi'
import CharacterList from '../components/CharacterList'
import { useEffect, useState } from 'react';

function App() {
const [characterData, setCharacterData] = useState([]);



useEffect(() => {
  getApiData().then((data) =>{
    setCharacterData(data); 
  })
}, [])



  return (
    <>
    <CharacterList characters={characterData}></CharacterList>
  <div className='App'></div>
  </>
  
  )
}

export default App;

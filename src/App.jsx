import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Card_character from './assets/componets/Card_character'


//https://gateway.marvel.com:443/v1/public/characters?apikey=
//public key: 195ba63017e35e99119358fa915e70c0
//private key:becb1f95d5364c2b26daac5a5bc4a0b27ef346a0
//ts 1
// 1becb1f95d5364c2b26daac5a5bc4a0b27ef346a0195ba63017e35e99119358fa915e70c0
//hash:f985a8b7531eeffb721c3da8523f190b

function App() {

  const [character, setCharacter] = useState([])
 
  
  useEffect (()=>{
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=195ba63017e35e99119358fa915e70c0&hash=f985a8b7531eeffb721c3da8523f190b')
      .then(res=>{
        setCharacter(res.data.data.results)
      })
      .catch(err => console.log(err))
  },[])
  
  
  //console.log(character)

  return (
    <div className="App">
    <Card_character character={character} /> 
    </div>
  )
}

export default App

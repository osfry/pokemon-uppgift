import { useState } from 'react'
import './App.css'
import PokemonApplication from './components/PokemonApplication'

function App() {
  const [showPokemonApp, setShowPokemonApp] = useState(false)

  return (
    <>
      <h1>Choose your pokemon</h1>
      {!showPokemonApp ?
      <button onClick={()=> setShowPokemonApp(true)}>
      Start Pokemon App
      </button> : <PokemonApplication />
      }   
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import PokemonApplication from './pages/PokemonApplication/PokemonApplication'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Pokemon from './pages/Pokemon/Pokemon'
import Home from './pages/Home/Home'


function App() {
  const [showPokemonApp, setShowPokemonApp] = useState(false)

  return (
    <>
    
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<PokemonApplication />} /> 
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    
    
    </BrowserRouter>
    </>
  )
}

export default App

//IDEAS

//open close pokedex

//zoom in/out on image




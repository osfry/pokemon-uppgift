import js from "@eslint/js";
import { useState, useEffect, use  } from "react";
import Pokemon from "./Pokemon";
const PokemonApplication = () =>{

    useEffect(() => {
        getPokemon("");
    },[]);

    const [pokemons, setPokemons] = useState ([]);
    const [selectPokemon, setSelectPokemon] = useState ("");
    const [selectedPokemon, setSelectedPokemon] = useState ("");
    const [showPokemon, setShowPokemon] = useState (false);

    async function getPokemon(pokemonName){
        const url = pokemonName
        ? `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        : `https://pokeapi.co/api/v2/pokemon?limit=151`;

        const response = await fetch(url);
        const json = await response.json();

        if(pokemonName){
            setSelectedPokemon(json);    
            // console.log(json);    
        }else{
            setPokemons(json.results)
            // console.log(json.results);
        }
    }
    
    // next button funcitonality
    const handleNext = () =>{
        

        if(selectedPokemon != null && selectedPokemon && selectedPokemon.id < 151){
            getPokemon(selectedPokemon.id + 1);
        }
    }

    // previous button functionality
    const handlePrevious = () =>{
        
        if(selectedPokemon != null && selectedPokemon && selectedPokemon.id > 1){
            getPokemon(selectedPokemon.id - 1);
        }
    }

    return(
        <div>
        <select onChange={(e) => setSelectPokemon(e.target.value)}>
            <option value="">Select a Pokemon</option>
            {pokemons.map(pokemon => (
                <option key={pokemon.name} value={pokemon.name}>
                   {pokemon.name}
                </option>
            ))
        }
        </select>
            <button onClick={()=> {
                setShowPokemon(true);
                getPokemon(selectPokemon);

            }}>Pick</button>

            {!showPokemon ? (
                <div className="pokedex-closed">
                    <img src="./src/assets/pokedex-unopen.png" alt="Closed Pokedex" />
                </div>
            ) : (
                selectedPokemon && (
                    <Pokemon pokemon={selectedPokemon} onNext={handleNext} onPrevious={handlePrevious}/>
                )
            )}

            {/* {showPokemon && selectedPokemon && (
                <Pokemon pokemon={selectedPokemon} onNext={handleNext} onPrevious={handlePrevious}/>
            )} */}

            
        </div>
    );
}

export default PokemonApplication;
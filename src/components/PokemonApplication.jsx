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
    //    let response;
       
    //     if(pokemonName != ""){
    //         response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    //     }else{
    //         response = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=151`);
    //     }
       
    //     const json = await response.json();
        
    //     pokemonName != "" ? 
    //     setSelectedPokemon(json.results): setPokemons(json.results)
        
    //     console.log (json);
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

            }}>Choose</button>
            {showPokemon && selectedPokemon && (
                <Pokemon pokemon={selectedPokemon} />
            )}
        </div>
    );
}

export default PokemonApplication;
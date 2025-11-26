import { useState, useEffect  } from "react";
import Pokemon from "../Pokemon/Pokemon";
import Header from "../../components/Header/Header";
import PokemonSelector from "../../components/PokemonSelector/PokemonSelector";
import ClosedPokedex from "../../components/ClosedPokedex/ClosedPokedex";
import { Link } from "react-router-dom";

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
        pokemonName ?  setSelectedPokemon(json): setPokemons (json.results);
    }
    
    const handleNext = () =>{
        if(selectedPokemon != null && selectedPokemon && selectedPokemon.id < 151){
            getPokemon(selectedPokemon.id + 1);
        }
    }

    const handlePrevious = () =>{
        if(selectedPokemon != null && selectedPokemon && selectedPokemon.id > 1){
            getPokemon(selectedPokemon.id - 1);
        }
    }

    const handlePick = () =>{
        setShowPokemon(true);
        getPokemon(selectPokemon);
    };

    return(
        <div>
            <Link to="/">Go Back Home</Link>
            <Header/>
            <PokemonSelector pokemons={pokemons}onSelect={setSelectPokemon}onPick={handlePick}/>
            {!showPokemon ? (<ClosedPokedex />) : (selectedPokemon && 
                (<Pokemon pokemon={selectedPokemon}onNext={handleNext}onPrevious={handlePrevious}/>
                )
            )}

            
        </div>
    );
}

export default PokemonApplication;
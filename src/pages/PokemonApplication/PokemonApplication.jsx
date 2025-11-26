import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import PokemonSelector from "../../components/PokemonSelector/PokemonSelector";
import ClosedPokedex from "../../components/ClosedPokedex/ClosedPokedex";
import { Link } from "react-router-dom";

const PokemonApplication = () => {
    useEffect(() => {
        getPokemon();
    }, []);

    const [pokemons, setPokemons] = useState([]);
    const [selectPokemon, setSelectPokemon] = useState("");

    async function getPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
        const json = await response.json();
        setPokemons(json.results);
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <Header />
            <PokemonSelector 
                pokemons={pokemons} 
                onSelect={setSelectPokemon}
                selectedPokemon={selectPokemon}
            />
            <ClosedPokedex />
        </div>
    );
};

export default PokemonApplication;
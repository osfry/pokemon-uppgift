
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PokedexDisplay from "../../components/PokedexDisplay/PokedexDisplay";
import PokemonInfo from "../../components/PokemonInfo/PokemonInfo";
import EvolutionChain from "../../components/EvolutionChain/EvolutionChain";
import styles from "./Pokemon.module.css";

const Pokemon = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    
    const [pokemon, setPokemon] = useState(null);
    const [evolutionChain, setEvolutionChain] = useState(null);
    const [evolution, setEvolution] = useState(null);
    const [secondEvolution, setSecondEvolution] = useState(null);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                setFadeIn(false);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const json = await response.json();

                // console.log("Pokemon data:", json);
                setPokemon(json);
                setTimeout(() => setFadeIn(true), 100);
            } catch (error) {
                console.error("Error fetching pokemon:", error);
            } 
        };

        if (name) {
            fetchPokemon();
        }
    }, [name]);

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const response = await fetch(pokemon.species.url);
                const json = await response.json();

                const evolutionResponse = await fetch(json.evolution_chain.url);
                const evolutionJson = await evolutionResponse.json();
                setEvolutionChain(evolutionJson.chain);
            } catch (error) {
                console.error("Error fetching evolution:", error);
            }
        };

        if (pokemon?.species?.url) {
            fetchSpecies();
        }
    }, [pokemon]);

    useEffect(() => {
        if (evolutionChain && evolutionChain.evolves_to.length > 0) {
            setEvolution(evolutionChain.evolves_to[0].species.name);
            
            if (evolutionChain.evolves_to[0].evolves_to.length > 0) {
                setSecondEvolution(evolutionChain.evolves_to[0].evolves_to[0].species.name);
            } else {
                setSecondEvolution("");
            }
        } else if (evolutionChain) {
            setEvolution("No evolution");
        }
    }, [evolutionChain]);

    const handleNext = () => {
        if (pokemon && pokemon.id < 151) {
            navigate(`/pokemon/${pokemon.id + 1}`);
        }
    };

    const handlePrevious = () => {
        if (pokemon && pokemon.id > 1) {
            navigate(`/pokemon/${pokemon.id - 1}`);
        }
    };

    if (!pokemon) return <div>Loading...</div>;

    return (
        <> 
        <Link to="/pokedex">Back to Pokedex</Link>
            <PokedexDisplay pokemon={pokemon} onNext={handleNext} onPrevious={handlePrevious}>
                <div className={`${styles.pokemonContent} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>        
                    <PokemonInfo pokemon={pokemon} />
                    <EvolutionChain evolution={evolution} secondEvolution={secondEvolution} />
                </div>
            </PokedexDisplay>
        </>
    );
}

export default Pokemon;
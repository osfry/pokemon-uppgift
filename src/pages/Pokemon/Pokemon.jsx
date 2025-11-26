import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import PokedexDisplay from "../../components/PokedexDisplay/PokedexDisplay";
import PokemonInfo from "../../components/PokemonInfo/PokemonInfo";
import EvolutionChain from "../../components/EvolutionChain/EvolutionChain";

const Pokemon =(props) =>{
    
    // paramss = useParams();

    const {pokemon,onNext,onPrevious} = props;
    let poke = pokemon.species.url;
    const [evolutionChain, setEvolutionChain] = useState(null);

    useEffect(() => {
        fetchSpecies();
    },[poke]);

    let evolution;
    let secondEvolution;
   
    async function fetchSpecies(){
        const response = await fetch(poke);
        const json = await response.json();

        const evolutionResponse = await fetch(json.evolution_chain.url);
        const evolutionJson = await evolutionResponse.json();
        setEvolutionChain(evolutionJson.chain);
    }
    
    if(evolutionChain && evolutionChain.evolves_to.length > 0){
        evolution = evolutionChain.evolves_to[0].species.name;
         if(evolutionChain.evolves_to[0].evolves_to.length > 0){
            secondEvolution = evolutionChain.evolves_to[0].evolves_to[0].species.name;
         }else{
            secondEvolution = "";
         }
    }else{
        evolution = "No evolution";
    }

    return(
        <> 
            <PokedexDisplay pokemon={pokemon} onNext={onNext} onPrevious={onPrevious} >
            <PokemonInfo pokemon={pokemon} />
            <EvolutionChain evolution={evolution} secondEvolution={secondEvolution} />
            </PokedexDisplay>
        </>
    );
}
export default Pokemon;
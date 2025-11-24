import { useState , useEffect} from "react";
const Pokemon =(props) =>{
    
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
        <div className="pokedex">
                
                <div className="pokemon-display">
                    <img className="pokemon-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                
                 <div className="pokemon-id">
                    <div className="pokemon-info">
                        <h2 className="pokemon-header">#{pokemon.id} </h2>
                       
                    </div>
                </div>

                <div className="round-buttons">
                    <button className="round-button left" onClick={onPrevious}></button>
                    <button className="round-button right" onClick={onNext}></button>
                </div>

                <div className="pokemon-info-panel">
                    <div className="pokemon-info">
                        <h2 className="pokemon-header"> {pokemon.name}</h2>
                        <br />
                        <p><strong>Type:</strong><br /> {pokemon.types[0].type.name} {pokemon.types[1] && pokemon.types[1].type.name}</p>
                        <br />
                        <p><strong>Height:</strong><br /> {(pokemon.height / 10) + "m"} </p>
                        <br />
                        <p><strong>Weight:</strong> <br />{(pokemon.weight/10) + "kg"} </p>
                        <br />
                    </div>
                </div>

                <div className="pokemon-evolution-header">
                    <div className="pokemon-info">
                        {<strong>Evolutions:</strong>}
                    </div>
                </div>
                   
                     <div className="pokemon-evolution-info-one">
                      
                        {evolution !== "No evolution" && (
                            <p>{evolution} </p>
                        )}
                    </div>

                    <div className="pokemon-evolution-info-two">
                      
                        {evolution !== "No evolution" && (
                            <p> {secondEvolution}</p>
                        )}
                    </div>
            
        </div>
        </>
    );
}
export default Pokemon;
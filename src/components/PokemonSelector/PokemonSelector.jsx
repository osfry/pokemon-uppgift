import { Link } from "react-router-dom";


const PokemonSelector = ({ pokemons, onSelect, onPick }) => {
    return (
        <div className="pokemon-selector">
            <select onChange={(e) => onSelect(e.target.value)}>
                <option value="">Select a Pokemon</option>
                {pokemons.map(pokemon => (
                    <option key={pokemon.name} value={pokemon.name}>
                        {pokemon.name}
                    </option>
                ))}
            </select>
            {/* <Link to="/pokedex"> */}

            <button onClick={onPick}>Pick</button>
            {/* </Link> */}
        </div>
    );
};

export default PokemonSelector;
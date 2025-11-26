import { useNavigate } from "react-router-dom";

const PokemonSelector = ({ pokemons, onSelect, selectedPokemon }) => {
    const navigate = useNavigate();

    const handlePick = () => {
        if (selectedPokemon) {
            navigate(`/pokemon/${selectedPokemon}`);
        }
    };

    return (
        <div>
            <select onChange={(e) => onSelect(e.target.value)}>
                <option value="">Select a Pokemon</option>
                {pokemons.map(pokemon => (
                    <option key={pokemon.name} value={pokemon.name}>
                        {pokemon.name}
                    </option>
                ))}
            </select>
            <button onClick={handlePick}>Pick</button>
        </div>
    );
};

export default PokemonSelector;
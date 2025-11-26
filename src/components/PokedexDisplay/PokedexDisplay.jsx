const PokedexDisplay = ({ pokemon,onNext,onPrevious,children }) => {

return(
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
                {children}
    </div>
);
}

export default PokedexDisplay;
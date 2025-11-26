const PokemonInfo=({pokemon})=>{
    return(  
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
    );
}

export default PokemonInfo;
const Pokemon =(props) =>{
    const {pokemon} = props;
    {console.log(pokemon.sprites.back_default);}
    return(
        <> 
         <h1>{pokemon.name}</h1>
            <img style={{ width: '200px', height: '200px' }}src={pokemon.sprites.front_default} alt={pokemon.name} />
         <p>Type: {pokemon.types[0].type.name}</p>
         <p>Height: {pokemon.height}</p>
         <p>Weight: {pokemon.weight}</p>
        </>
    );
}
export default Pokemon;
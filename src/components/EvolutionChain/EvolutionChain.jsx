const EvolutionChain = ({evolution,secondEvolution}) => {
    return(
        <>
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
            </>        
    );
}
export default EvolutionChain;
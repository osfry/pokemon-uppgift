import styles from './EvolutionChain.module.css';
const EvolutionChain = ({evolution,secondEvolution}) => {
    return(
        <>
            <div className={styles.pokemonEvolutionHeader}>
                <div className="pokemon-info">
                    {<strong>Evolutions:</strong>}
                </div>
            </div>
                   
            <div className={styles.pokemonEvolutionInfoOne}>
                {evolution !== "No evolution" && (
                    <p>{evolution} </p>
                )}
            </div>

            <div className={styles.pokemonEvolutionInfoTwo}>
                {evolution !== "No evolution" && (
                    <p> {secondEvolution}</p>
                )}
            </div>
            </>        
    );
}
export default EvolutionChain;
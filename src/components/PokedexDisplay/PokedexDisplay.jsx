import styles from './PokedexDisplay.module.css';


const PokedexDisplay = ({ pokemon,onNext,onPrevious,children }) => {

return(
    <div className={styles.pokedex} >
                
                <div className={styles.pokemonDisplay}>
                    <img className={styles.pokemonImg} src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                
                 <div className={styles.pokemonId}>
                    <div className={styles.pokemonInfo}>
                        <h2 className={styles.pokemonHeader}>#{pokemon.id} </h2>
                       
                    </div>
                </div>

                <div className={styles.roundButtons}>
                    <button className={`${styles.roundButton} ${styles.left}`} onClick={onPrevious}></button>
                    <button className={`${styles.roundButton} ${styles.right}`} onClick={onNext}></button>
                </div>
                {children}
    </div>
);
}

export default PokedexDisplay;
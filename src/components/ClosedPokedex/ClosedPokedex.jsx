import styles from './ClosedPokedex.module.css';
const ClosedPokedex = () => {
    return (
        <div className={styles.pokedexClosed}>
            <img src="./src/assets/pokedex-unopen.png" alt="Closed Pokedex" />
        </div>
    );
};

export default ClosedPokedex;
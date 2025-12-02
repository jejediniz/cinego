import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>Página Não Encontrada!</p>
        </section>
    )
}

export default NaoEncontrada;
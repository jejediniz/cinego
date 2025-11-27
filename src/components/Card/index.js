import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';

function Card({ id, titulo, capa }) {
  const {
    favoritos,
    addFavorito,
    removeFavorito
  } = useFavoritoContext();

  const ehFavorito = favoritos.some(fav => fav.id === id);
  const icone = !ehFavorito ? iconeDesfavoritar : iconeFavoritar;

  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>

      <img
        src={icone}
        alt="Favoritar"
        className={styles.favoritar}
        onClick={() => {
          if (!ehFavorito) {
            addFavorito({ id, titulo, capa });
          } else {
            removeFavorito(id);
          }
        }}
      />
    </div>
  );
}

export default Card;

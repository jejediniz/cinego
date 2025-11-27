// src/components/Banner/index.js
import styles from './Banner.module.css';

function Banner({ imagem }) {
  const caminho = `/img/banner-${imagem}.png`; // corresponde a public/img/banner-home.png
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url(${caminho})` }}
    />
  );
}

export default Banner;

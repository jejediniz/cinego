import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Favoritos.module.css';

function Favoritos() {
  const { favoritos } = useFavoritoContext(); // <- corrigido para "favoritos"

  if (!Array.isArray(favoritos)) {
    console.error('favoritos não é um array:', favoritos);
    return <p>Carregando favoritos...</p>;
  }

  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favoritos.length === 0 ? (
          <p>Você não tem favoritos</p>
        ) : (
          favoritos.map((fav) => <Card {...fav} key={fav.id} />)
        )}
      </section>
    </>
  );
}

export default Favoritos;

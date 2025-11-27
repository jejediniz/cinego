import { Link } from "react-router-dom";
import styles from './Cabecalho.module.css';
import CabecalhoLink from "./CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <CabecalhoLink url="./">
            Cine Go 
            </CabecalhoLink>
            <nav>
                <CabecalhoLink url="/">Home</CabecalhoLink>
                <CabecalhoLink url="/favoritos">Favoritos</CabecalhoLink>
                
            </nav>
        </header>
    )
}

export default Cabecalho;
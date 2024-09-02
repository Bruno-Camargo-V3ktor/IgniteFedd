import styles from '../styles/Header.module.css';
import igniteLogo from '../assets/IgniteSimbol.svg';

export function Header(props) {

    
    // Render
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt='Logotipo do Ignite' />
            <strong>Ignite Feed</strong>   
        </header>
    )

}
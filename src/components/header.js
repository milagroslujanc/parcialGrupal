import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../css/style.module.css';
import logo_medium from '../assets/logo_medium.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Header() {
    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles['navbar-menu']}>
                    <img src={logo_medium} width={40} className="mb-2" />
                    <Link to="/">Menú</Link>
                    <Link to="/nosotros">Sobre Nosotros</Link>
                    <Link to="/reserva">Reservas</Link>
                </div>
                <div className={styles['navbar-search']}>
                    <div className="input-group" style={{ maxWidth: '400px' }}>
                        <input type="text" className="form-control" placeholder="Encuentra tu próximo antojo..." />
                        <span className="input-group-text">
                        <i className="bi bi-search"></i>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    )
}
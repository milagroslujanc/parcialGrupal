import styles from '../css/style.module.css';
import logo_medium from '../assets/logo_medium.png';

export function Footer() {
    return (
<footer className={`py-4 ${styles.footerBg}`}>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-md-6 mb-6 mb-md-0 d-flex flex-column align-items-md-start align-items-center">
                        <div className="d-flex gap-2">
                            <img src={logo_medium} width={100} className="mb-2" />
                            <p className="mb-2 text-center text-md-start" >
                                Sabores que cuentan historias. En cada plato, rendimos homenaje a la tradición criolla peruana con sazón, identidad y corazón.
                            </p>
                        </div>

                        <div className="fw-bold">HORARIOS DE APERTURA</div>
                        <div className="d-flex flex-row gap-4 text-center text-md-start">
                            <div>
                                <div>Lunes a Viernes</div>
                                <div className="text-secondary">8:00 am to 9:00 pm</div>
                            </div>
                            <div>
                                <div>Sabados</div>
                                <div className="text-secondary">8:00 am to 9:00 pm</div>
                            </div>
                            <div>
                                <div>Domingo</div>
                                <div className="text-secondary">Cerrado</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 mb-4 mb-md-0">
                        <div className="fw-bold mb-2">NAVEGACIÓN</div>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-decoration-none text-secondary">Menú</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary">Sobre Nosotros</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary">Contáctenos</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary">Reservas</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-4 mb-md-0">
                        <div className="fw-bold mb-2">PLATILLOS</div>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-decoration-none text-secondary">Ají de Gallina</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary">Tallarines Verdes</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary">Causa Rellena</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary">Picarones</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-4 mb-md-0">
                        <div className="fw-bold mb-2">SÍGUENOS</div>
                        <div className="d-flex gap-2">
                            <a href="#" className={`btn btn-outline-dark rounded-circle p-2 ${styles.socialBtn}`}><i className="bi bi-facebook"></i></a>
                            <a href="#" className={`btn btn-outline-dark rounded-circle p-2 ${styles.socialBtn}`}><i className="bi bi-instagram"></i></a>
                            <a href="#" className={`btn btn-outline-dark rounded-circle p-2 ${styles.socialBtn}`}><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>
                </div>
                {/* Línea divisoria */}
                <hr className="my-4" />
                {/* Copyright y links */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="text-secondary mb-2 mb-md-0">
                        © 2025 EL SABOR PERUANO. Todos los derechos reservados.
                    </div>
                    <div>
                        <a href="#" className="text-secondary text-decoration-none me-3">Términos de Servicio</a>
                        <a href="#" className="text-secondary text-decoration-none">Política de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
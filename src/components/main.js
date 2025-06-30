
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../css/style.module.css';
import logo_medium from '../assets/logo_medium.png';
import volutas from '../assets/volutas.svg';
import cortina_img_plato1 from '../assets/plato1.png';
import cortina_img_plato2 from '../assets/plato2.png';  
import cortina_img_plato3 from '../assets/plato3.png';
import cortina_img_plato4 from '../assets/plato4.png';
import cortina_img_plato5 from '../assets/plato5.png';
import cortina_img_plato6 from '../assets/plato6.png';
import fondo_montania from '../assets/mountain.png';
import HorarioPanel from './horarioPanel';
import SuscripcionPromo from "./suscripcionPromo";
import { Link } from "react-router-dom";

export function Main() {
    return (
        <>
    <section className={`hero d-flex flex-column align-items-center justify-content-center 
    text-center py-5 main-section" ${styles["hero-section"]}`}>
      <img className="hero-img mb-3 rounded-circle shadow" src={logo_medium} alt="Logo" width={150} height={150} />
      <h1 className="hero-title mb-3">
        Una selección exquisita de la gastronomía <br></br> {" "}
        <span className="text-danger">pe</span> 
        <span className="text-white">rua</span>
        <span className="text-danger">na</span>
      </h1>
      <div className="d-flex justify-content-center gap-3">

        <a className={`btn btn-lg mt-3 ${styles.btnRedCustom}`} href="#">Menu</a>
        <Link to="/reserva" className={`btn btn-lg mt-3 ${styles.btnGreenCustom}`}>Reservar</Link>

      </div>
    </section>

    <section>
      <img src={volutas} width="100%" />
    </section>

    <main className="container my-5">

      <div>
        <p className="text-center fw-bold h2">En compañía, todo tiene mejor sabor.</p>
      </div>
      <div className={ `${styles.cortina}` }>
        <img src={cortina_img_plato1} alt="Izquierda" className={ `${styles.cortina_img} ${styles.izquierda}`} />
        <img src={cortina_img_plato2} alt="Centro" className={ `${styles.cortina_img} ${styles.centro}`} />
        <img src={cortina_img_plato3} alt="Derecha" className={ `${styles.cortina_img} ${styles.derecha}`} />
      </div>

      <div className="d-flex justify-content-center gap-3">
        <a className={`btn btn-lg mt-3 ${styles.btnBrownCustom}`} href="#">Conócenos</a>
      </div>

      <div className={ `${styles.cortina}`}> >
        <img src={fondo_montania} alt="Izquierda" />
      </div>

      <section className="text-center mb-5">
        <h2 className="display-8  mb-3">Disfruta de nuestra gran variedad de <br/> +20 platillos y +10 postres</h2>
        <a className={`btn btn-lg mt-3 ${styles.btnRedCustom}`} href="#">Menú</a>
      </section>

      <div className={ `${styles.cortina}` }>
        <img src={cortina_img_plato4} alt="Izquierda" className={ `${styles.cortina_img} ${styles.izquierda}`} />
        <img src={cortina_img_plato5} alt="Centro" className={ `${styles.cortina_img} ${styles.centro}`} />
        <img src={cortina_img_plato6} alt="Derecha" className={ `${styles.cortina_img} ${styles.derecha}`} />
      </div>

      <section className="text-center mb-5">
        <HorarioPanel />
      </section>

      <section className="text-center mb-5">
        <SuscripcionPromo />


      </section>


      {/* Agrega aquí más secciones según tu contenido */}
    </main>



        </>
    )
}
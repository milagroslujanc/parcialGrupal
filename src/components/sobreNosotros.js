import styles from '../css/style.module.css';
import logo_medium from '../assets/logo_medium.png';
import bebida1 from '../assets/plato4.png'; // vaso jugo
import bebida2 from '../assets/plato5.png'; // vaso tricolor
import bebida3 from '../assets/plato6.png'; // chicha morada
import plato1 from '../assets/plato1.png';   // arroz con pollo
import plato2 from '../assets/plato2.png';   // causa
import plato3 from '../assets/plato3.png';   // lomo saltado
import fondo from '../assets/fondo_ajo.png'; // fondo decorativo
import img_top_secundaria from '../assets/img_top_secundaria.png';
import chef from '../assets/chef.png';


export function SobreNosotros() {
    return (
        <>
        <div>
            <img src={img_top_secundaria} width="100%" className="mb-4" alt="Decoración" />
        </div>
        <div
            className="container py-3"
            style={{
                borderRadius: "18px",
                backgroundImage: `url(${fondo})`,
                backgroundSize: "cover",
                minHeight: "100vh",
                padding: "32px"
            }}
        >
            <div className="container-fluid">
                <div className="row">
                    {/* Bebidas */}
                    <div className="col-3">
                        <div className="d-flex align-items-center mb-3">
                            <img src={logo_medium} alt="Logo" width={90} className="me-3" />
                            <h4 className="fw-normal mb-0">BEBIDAS CON SABOR PERUANO</h4>
                        </div>
                        <div className="d-flex   gap-4">
                            <img src={bebida1} alt="Plato 4"  width={200} />
                        </div>
                        <div className="d-flex flex-wrap  gap-4">
                            <img src={bebida2} alt="Plato 5" width={200} />
                        </div>
                        <div className="d-flex flex-wrap  gap-4 mt-4">
                            <img src={bebida3} alt="Plato 6" width={200} />
                        </div>

                    </div>

                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                        <div className="mb-3 text-center">
                            <h5 className="fw-bold mb-1">Chef Principal: Sara Connor</h5>
                            <p style={{ maxWidth: "320px", fontSize: "1rem" }}>
                                Nuestra chef ha recorrido las cocinas de los principales restaurantes del mundo, dando a conocer la gastronomía peruana y en los cuales siempre se ha destacado con excelencia y prestigio. Ahora de vuelta en su país, está siempre dispuesta a brindar la mejor experiencia a cada uno de los comensales del Sabor Peruano.
                            </p>
                        </div>
                                            
                        <img src={chef} alt="Chef" style={{ width: "300px", objectFit: "cover" }} />
                    </div>
                    {/* Platos de fondo */}
                    <div className="col-3">
                        <div className="d-flex align-items-center justify-content-end mb-3">
                            <h4 className="fw-normal mb-0 me-3">PLATOS DE FONDO</h4>
                            <img src={logo_medium} alt="Logo" width={90} />
                        </div>
                        <div className="d-flex flex-wrap justify-content-end gap-4">
                            <img src={plato1} alt="Plato 1"  width={200} />
                        </div>
                        <div className="d-flex flex-wrap justify-content-end gap-4">
                            <img src={plato2} alt="Plato 2" width={200} />
                        </div>
                        <div className="d-flex flex-wrap justify-content-end gap-4 mt-4">
                            <img src={plato3} alt="Plato 3" width={200} />
                        </div>
                    </div>
                </div>
                {/* Botón menú completo */}
                <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-center">
                        <button className={styles.btnMenuCompleto}>VER MENÚ COMPLETO</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
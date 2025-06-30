import React, { useState } from "react";
import "../css/HorarioPanel.css"; 
import plato1 from "../assets/plato1.png";
import plato2 from "../assets/plato2.png";
import plato3 from "../assets/plato3.png";
import plato4 from "../assets/plato4.png";
import plato5 from "../assets/plato5.png";

const eventos = [
  {
    key: "cortesia",
    titulo: "Bebidas de Cortesía",
    hora: "5:00 pm",
    descripcion: (
      <>
        Disfruta de la música suave y de una vista encantadora.<br />
        Conoce a todos los que forman parte de nuestra gran familia.<br />
        <b>Zona Principal</b>
      </>
    ),
    horarios: "8:00 am a 9:00 pm",
    imagen: plato1,
    boton: true,
  },
  {
    key: "costa",
    titulo: "Sabores de la costa",
    hora: "5:30 pm",
    descripcion: (
      <>
        Prueba los mejores platos marinos de la costa peruana.<br />
        <b>Zona Gourmet</b>
      </>
    ),
    horarios: "5:30 pm a 6:30 pm",
    imagen: plato2,
    boton: true,
  },
  {
    key: "pena",
    titulo: "Peña criolla",
    hora: "7:00 pm",
    descripcion: (
      <>
        Vive la música y el baile tradicional en vivo.<br />
        <b>Zona Show</b>
      </>
    ),
    horarios: "7:00 pm a 8:00 pm",
    imagen: plato3,
    boton: true,
  },
  {
    key: "dulces",
    titulo: "Dulces tradicionales y café",
    hora: "8:30 pm",
    descripcion: (
      <>
        Degusta postres y café peruano.<br />
        <b>Zona Dulcería</b>
      </>
    ),
    horarios: "8:30 pm a 9:00 pm",
    imagen: plato4,
    boton: true,
  },
  {
    key: "cierre",
    titulo: "Cierre con cajón y zapateo",
    hora: "9:00 pm",
    descripcion: (
      <>
        Espectáculo final con cajón y zapateo.<br />
        <b>Zona Principal</b>
      </>
    ),
    horarios: "9:00 pm a 9:30 pm",
    imagen: plato5,
    boton: true,
  },
];

function HorarioDetalle({ evento }) {
  return (
    <div className="detalle-panel">
      <h2 className="detalle-titulo">{evento.titulo}</h2>
      <p className="detalle-desc">{evento.descripcion}</p>
      <div className="detalle-horario">
        <b>Horarios:</b><br />{evento.horarios}
      </div>
      {evento.boton && (
        <button className="detalle-btn">Reservar Ahora</button>
      )}
      <div className="detalle-img-wrap">
        <img className="detalle-img" src={evento.imagen} alt={evento.titulo} />
      </div>
    </div>
  );
}

export default function HorarioPanel() {
  const [seleccion, setSeleccion] = useState(eventos[0].key);

  const eventoActual = eventos.find(e => e.key === seleccion);

  return (
    <div className="horario-panel-container">
      <div className="horario-lista">
        <h1 className="horario-titulo">Nuestro horario</h1>
        <ul className="horario-menu">
          {eventos.map(ev => (
            <li
              key={ev.key}
              className={`horario-item${seleccion === ev.key ? " activo" : ""}`}
              onClick={() => setSeleccion(ev.key)}
            >
              <span className="horario-item-titulo">{ev.titulo}</span>
              <span className="horario-item-hora">{ev.hora}</span>
              <span className="horario-item-arrow">&gt;</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="horario-detalle">
        <HorarioDetalle evento={eventoActual} />
      </div>
    </div>
  );
}
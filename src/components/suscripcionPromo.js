import React from "react";
import fondoSuscripcion from "../assets/fondo_suscripcion.png";
import "../css/SuscripcionPromo.css";

export default function SuscripcionPromo() {
  return (
    <section
      className="suscripcion-promo"
      style={{
        backgroundImage: `url(${fondoSuscripcion})`,
      }}
    >
      <div className="suscripcion-promo-overlay">
        <h2 className="suscripcion-promo-titulo">
          Activa una promoción exclusiva al<br />
          suscribirte a nuestro correo de<br />
          novedades<span className="suscripcion-promo-punto">.</span>
        </h2>
        <form className="suscripcion-promo-form" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            className="suscripcion-promo-input"
            placeholder="Correo..."
            required
          />
          <button className="suscripcion-promo-btn" type="submit">
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  );
}
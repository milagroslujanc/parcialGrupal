import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../css/style.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import img_top_secundaria from '../assets/img_top_secundaria.png';
import logo_medium from '../assets/logo_medium.png';

export function CrearReserva() {
    // Estados para los campos del formulario
    const [nombre, setNombre] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [numeroPersonas, setNumeroPersonas] = useState(2);
    const today = new Date().toISOString().split('T')[0];
    const [fecha, setFecha] = useState(today);
    const [hora, setHora] = useState("");
    const [horariosDisponibles, setHorariosDisponibles] = useState([]);
    const [reservas, setReservas] = useState(() => {
        const reservasGuardadas = localStorage.getItem("reservas");
        return reservasGuardadas ? JSON.parse(reservasGuardadas) : [];
    });
    const [ultimaReserva, setUltimaReserva] = useState(null); // Nuevo estado


    // Cargar reservas desde localStorage al iniciar
    useEffect(() => {
        const reservasGuardadas = localStorage.getItem("reservas");
        if (reservasGuardadas) {
            setReservas(JSON.parse(reservasGuardadas));
        }
    }, []);

    // Guardar reservas en localStorage cuando cambian
    useEffect(() => {
        localStorage.setItem("reservas", JSON.stringify(reservas));
    }, [reservas]);

    // Generar horarios cada 5 minutos entre 12:00 y 21:00
    function generarHorarios() {
        const horarios = [];
        for (let h = 12; h <= 21; h++) {
            for (let m = 0; m < 60; m += 30) {
                if (h === 21 && m > 0) break; // No pasar de las 21:00
                horarios.push(
                    `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
                );
            }
        }
        return horarios;
    }

    // Dada una hora "HH:mm", retorna minutos desde 00:00
    function horaToMinutos(horaStr) {
        const [h, m] = horaStr.split(":").map(Number);
        return h * 60 + m;
    }

    // Dada minutos desde 00:00, retorna "HH:mm"
    function minutosToHora(min) {
        const h = Math.floor(min / 60);
        const m = min % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    }

    // Devuelve los horarios disponibles para la fecha seleccionada
    function getHorariosDisponibles() {
        const horarios = generarHorarios();
        // Filtrar horarios ocupados por reservas de la fecha seleccionada
        const reservasFecha = reservas.filter(r => r.fecha === fecha);
        // Cada reserva ocupa 2 horas (ej: 13:00 reserva -> bloquea 13:00 a 15:00)
        const ocupados = new Set();
        reservasFecha.forEach(r => {
            const inicio = horaToMinutos(r.hora);
            for (let min = inicio; min < inicio + 120; min += 30) {
                ocupados.add(minutosToHora(min));
            }
        });
        // Un horario está disponible si:
        // - No está en ocupados
        // - Todos los intervalos de media hora que abarca la reserva de 2h están libres
        return horarios.filter(h => {
            const inicio = horaToMinutos(h);
            // No permitir reservas que terminen después de las 21:00
            if (inicio + 120 > 21 * 60) return false;
            // Chequear que cada media hora dentro de las 2h esté libre
            for (let min = inicio; min < inicio + 120; min += 30) {
                if (ocupados.has(minutosToHora(min))) return false;
            }
            return true;
        });
    }

    // Actualizar horarios disponibles cuando cambia la fecha o reservas
    useEffect(() => {
        const disponibles = getHorariosDisponibles();
        setHorariosDisponibles(disponibles);
        setHora(disponibles[0] || "");
        // eslint-disable-next-line
    }, [fecha, reservas]);

    const handleFechaChange = (e) => {
        const valor = e.target.value;
        // Convertir "YYYY-MM-DD" a fecha local correctamente
        const [year, month, day] = valor.split('-').map(Number);
        const selectedDate = new Date(year, month - 1, day); // Mes base 0
        const dia = selectedDate.getDay(); // 0 = domingo
        const todayDate = new Date();
        

        todayDate.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate < todayDate) {
            alert("No se pueden seleccionar fechas pasadas.");
            return;
        }
        if (dia === 0) {
            alert("No se pueden hacer reservas los domingos.");
            return;
        }
        setFecha(valor);
    };

    // Manejar el envío del formulario y guardar en localStorage
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!hora) {
            alert("Debe seleccionar un horario disponible.");
            return;
        }
        const nuevaReserva = {
            id: Date.now(),
            numeroPersonas,
            fecha,
            hora,
            nombre,
            celular,
            email
        };
        setReservas([...reservas, nuevaReserva]);
                setUltimaReserva(nuevaReserva); // Guardar la última reserva

        alert("Reserva registrada correctamente");
        // Opcional: limpiar campos
        setNombre("");
        setCelular("");
        setEmail("");
        setNumeroPersonas(2);
        setFecha(today);
        setHora("");
    };

    return (
        <div>
            <div>
                <img src={img_top_secundaria} width="100%" className="mb-4 rounded" alt="Decoración" />
            </div>
            <div className="container py-3" style={{ borderRadius: "18px", background: "#b35725" }}>
                <form onSubmit={handleSubmit}>
                    {/* Encabezado */}
                    <div className="d-flex align-items-center gap-2 mb-3 justify-content-center">
                        <img src={logo_medium} alt="Logo" width={60} />
                        <h2>Realiza tu Reservación</h2>
                    </div>
                    {/* Contenido principal */}
                    <div className="row justify-content-center">
                        {/* Formulario de datos */}
                        <div className="col-lg-6 mb-4">
                            <div className={`bg-white rounded shadow-sm p-4 ${styles.formPanel}`}>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-person-circle fs-2 me-2"></i>
                                    <span className={styles.subtituloReserva}>COMPLETA TUS DATOS</span>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="fw-bold mb-1">Nombre</label>
                                        <input className="form-control mb-3" placeholder="Tu nombre aquí..."
                                            value={nombre} onChange={e => setNombre(e.target.value)} required />
                                        <label className="fw-bold mb-1">Contacto</label>
                                        <input className="form-control mb-3" placeholder="Tu número ..."
                                            value={celular} onChange={e => setCelular(e.target.value)} required />
                                        <label className="fw-bold mb-1">Correo</label>
                                        <input className="form-control mb-3" placeholder="Tu correo aquí..."
                                            value={email} onChange={e => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="fw-bold mb-1">Política de Privacidad</label>
                                        <p>
                                            Estoy de acuerdo que usen mis datos y me envíen un correo con los datos de mi reserva
                                            al correo electrónico proporcionado.
                                        </p>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" id="privacidad" defaultChecked required />
                                            <label className="form-check-label fw-bold" htmlFor="privacidad">
                                                Acepto haber leído la política de privacidad.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Panel de reserva */}
                        <div className="col-lg-5 mb-4">
                            <div className={`bg-white rounded shadow-sm p-4 ${styles.panelReserva}`}>
                                <div className="fw-bold fs-4 mb-3">Separa tu mesa:</div>
                                <div className="mb-3">
                                    <div className="input-group mb-2">
                                        <span className="input-group-text"><i className="bi bi-person"></i></span>
                                        <select className="form-select"
                                            value={numeroPersonas}
                                            onChange={e => setNumeroPersonas(Number(e.target.value))}>
                                            <option value={2}>2 personas</option>
                                            <option value={3}>3 personas</option>
                                            <option value={4}>4 personas</option>
                                            <option value={5}>5 personas</option>
                                        </select>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text"><i className="bi bi-calendar-event"></i></span>
                                        <input type="date" className="form-control"
                                            value={fecha}
                                            onChange={handleFechaChange} />
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text"><i className="bi bi-clock"></i></span>
                                        <select className="form-select"
                                            value={hora}
                                            onChange={e => setHora(e.target.value)}
                                            required
                                            disabled={horariosDisponibles.length === 0}
                                        >
                                            {horariosDisponibles.length === 0 && (
                                                <option value="">No hay horarios disponibles</option>
                                            )}
                                            {horariosDisponibles.map(h => (
                                                <option key={h} value={h}>{h}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className={styles.btnReservar}>RESERVAR</button>
                                {/* Resumen de reserva */}
                                {ultimaReserva && (
                                    <div className="mt-4 p-3 border rounded bg-light">
                                        <h5 className="mb-2 center  ">Resumen de tu reserva</h5>
                                        <ul className="mb-2">
                                            <li><strong>Nombre:</strong> {ultimaReserva.nombre}</li>
                                            <li><strong>Celular:</strong> {ultimaReserva.celular}</li>
                                            <li><strong>Correo:</strong> {ultimaReserva.email}</li>
                                            <li><strong>Fecha:</strong> {ultimaReserva.fecha}</li>
                                            <li><strong>Hora:</strong> {ultimaReserva.hora}</li>
                                            <li><strong>Número de personas:</strong> {ultimaReserva.numeroPersonas}</li>
                                        </ul>
                                        <div className="text-danger fw-bold">
                                            Si se desea cancelar la reserva llamar al número +51 923771834.
                                        </div>
                                    </div>
                                )}                                
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
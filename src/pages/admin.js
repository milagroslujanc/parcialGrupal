import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Admin() {
    const [reservas, setReservas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchReservas() {
            try {
                const response = await fetch("http://localhost:8080/api/reservas");
                if (response.ok) {
                    const data = await response.json();
                    setReservas(data);
                } else {
                    setReservas([]);
                }
            } catch {
                setReservas([]);
            }
            setLoading(false);
        }
        fetchReservas();
    }, []);

    return (
        <div className="container my-5">
            <h2 className="mb-4 text-center fw-bold">
                <i className="bi bi-list-check me-2"></i>
                Reservas Registradas
            </h2>
            {loading ? (
                <div className="text-center my-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Celular</th>
                                <th>Email</th>
                                <th>Personas</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservas.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="text-center">No hay reservas registradas.</td>
                                </tr>
                            ) : (
                                reservas.map(reserva => (
                                    <tr key={reserva.id}>
                                        <td>{reserva.id}</td>
                                        <td>{reserva.nombre}</td>
                                        <td>{reserva.celular}</td>
                                        <td>{reserva.email}</td>
                                        <td>{reserva.numeroPersonas}</td>
                                        <td>{reserva.fecha}</td>
                                        <td>{reserva.hora}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Admin;
import { Link, useNavigate } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Header } from '../components/header.js'
import { Footer } from "../components/footer.js"
import { CrearReserva } from "../components/crearReserva.js";

export function Reserva(){
    const navigate = useNavigate()
    const handlerRedirectLogin = () => {
        // haces todas las validaciones de app antes de redirigir
        navigate('/login')
    }

    return (
        <div>
            <Header></Header>
            <CrearReserva></CrearReserva>
            <Footer></Footer>
        </div>
    )
}
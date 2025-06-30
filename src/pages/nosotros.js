import { Link, useNavigate } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Header } from '../components/header.js'
import { Footer } from "../components/footer.js"
import { SobreNosotros } from "../components/sobreNosotros.js";

export function Nosotros(){
    const navigate = useNavigate()
    const handlerRedirectLogin = () => {
        // haces todas las validaciones de app antes de redirigir
        navigate('/login')
    }

    return (
        <div>
            <Header></Header>
            <SobreNosotros></SobreNosotros>
            <Footer></Footer>
        </div>
    )
}
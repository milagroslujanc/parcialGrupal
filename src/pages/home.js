import { Link, useNavigate } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Header } from '../components/header.js'
import { Main } from '../components/main.js'
import { Footer } from "../components/footer.js"
import { Header_Home } from "../components/header_home.js";

export function Home(){
    const navigate = useNavigate()
    const handlerRedirectLogin = () => {
        // haces todas las validaciones de app antes de redirigir
        navigate('/login')
    }

    return (
        <div>
            <Header_Home></Header_Home>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}
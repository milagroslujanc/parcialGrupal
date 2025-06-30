import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // si necesitas JS (modales, tooltips, etc.)

// Pages
import { Home } from "./pages/home.js";
import { Login } from "./pages/login.js";
import { Welcome } from "./pages/welcome.js"
import { Reserva } from "./pages/reserva.js";
import {Nosotros} from "./pages/nosotros.js";
import {Admin} from "./pages/admin.js";
import "./App.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/welcome" element={<Welcome/>}></Route>
        <Route path="/reserva" element={<Reserva/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

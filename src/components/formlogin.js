import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Formlogin = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handlerValidate = (e) =>{
        e.preventDefault()
        if (!user && !password || user != 'admin' && password != '123456' ) {
            alert('informacion incorrecta')
            return
        }
        navigate("/welcome")
        return
    }

    return (
        <form className="" onSubmit={handlerValidate}>
            <label className="form-label" for="user">Usuario</label>
            <input 
                className="form-control" 
                type="text" 
                id="user" 
                name="user" 
                value={user}
                onChange={(e)=>{setUser(e.target.value)}} />

            <label className="form-label" for="pass">Password</label>
            <input 
                className="form-control" 
                type="password" 
                id="pass" 
                name="pass" 
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}} />

            <button type="submit" className="btn btn-primary mt-3">Iniciar session</button>
        </form>
    )
}
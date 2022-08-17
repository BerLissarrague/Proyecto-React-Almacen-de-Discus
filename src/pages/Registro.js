import { useState } from "react";
import { useAuth } from '../context/CartContex';
import { useHistory, Link } from "react-router-dom";
import { Alert } from "../components/alerts/Alert";

export function Register() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState("")
    const navigate = useHistory();
    const { singup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await singup(user.email, user.password);
            navigate.push("/Proyecto-React-Almacen-de-Discus");
        } catch (error) {
            setError(error.message)
        };
    };

    return (
        <div className="">
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit}
                className=''>
                <div className="mb-4">
                    <label htmlFor="email"
                        className="">Email</label>
                    <input type='text'
                        name='email'
                        placeholder=" Tumail@email.com"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className=' '></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="password"
                        className="" >Password</label>
                    <input type='password'
                        name='password'
                        id='password'
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        className=' '></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="nombre"
                        className="" >Nombre</label>
                    <input type='text'
                        name='name'
                        id='name'
                        onChange={(e) => setUser({ ...user, nombre: e.target.value })}
                        className=' '></input>
                </div>
                <button className="">Register</button>
                <p className="">Ya tienes cuenta? <Link to='/Proyecto-React-Almacen-de-Discus/login' >Entra</Link></p>
            </form>
        </div>
    );
};
import { useState } from "react";
import { useAuth } from '../../Context/CartContex';
import { useHistory, Link } from "react-router-dom";
import { Alert } from "../alert";

export function Login() {
    const navigate = useHistory();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState("")

    const { login, loginGoogleAuth, restPassword } = useAuth();

    const handelGoogle = async () => {
        try {
            await loginGoogleAuth();
            navigate.push("/Proyecto-React-Almacen-de-Discus");
        } catch (error) {
            setError(error.message);
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            navigate.push("/Proyecto-React-Almacen-de-Discus");
        } catch (error) {
            setError(error.message)
        }
    };
    const handleResetPassword = async () => {
        if (!user.email) return setError("Porfavor entre su email")
        try {
            await restPassword(user.email)
            setError("enviamos un mail para restablecer tu contraseña")
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className="">
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit} className=''>
                <div className="">
                    <label htmlFor="email"
                        className="">Email</label>
                    <input type='text' name='email'
                        placeholder="yourmail@gmail.com"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className=''></input>
                </div>
                <div className="">
                    <label htmlFor="password"
                        className=""
                    >Password</label>
                    <input type='password'
                        name='password'
                        id='password'
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        className='' />
                </div>
                <div className=" ">
                    <button className="">Login</button>
                    <Link to='' className=""
                        onClick={handleResetPassword}>Olvidaste contraseña?</Link>
                </div>
            </form>
            <p className="">No tienes cuenta? <Link to='/Proyecto-React-Almacen-de-Discus/register' >Registrate</Link></p>
            <button onClick={handelGoogle}
                className="">Google Login</button>
        </div>
    );
};
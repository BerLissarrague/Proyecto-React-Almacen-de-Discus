import React from 'react'
import { useAuth } from '../../Context/CartContex';

const Perfil = () => {
    const { logout } = useAuth();

    const handlLogOut = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error.message);
        };
    };

    return (
        <div><button onClick={handlLogOut} variant="primary"
            className="text-white">Logout</button></div>
    )
}

export default Perfil
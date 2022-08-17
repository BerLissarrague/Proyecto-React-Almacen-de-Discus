import React, { useContext } from 'react';
import { BsCart4 } from "react-icons/bs";
import './CartWidget.css';
import { Context } from "../../../context/CartContex";

const CartWidget = () => {
    const { unidades } = useContext(Context);
    return (
        <div className='contenedor-carro'>
            <BsCart4 className='carro' />
            <h5 className='cantidaCarrito' style={{ color: 'primary' }} >{unidades}</h5>
        </div>
    )
}

export default CartWidget;
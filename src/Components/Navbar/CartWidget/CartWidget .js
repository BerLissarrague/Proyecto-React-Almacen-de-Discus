import React,{useContext} from 'react';
import { GrCart } from 'react-icons/gr';
import './CartWidget.css';
import { Context } from "../../../Context/CartContex";

const CartWidget = () => {
    const {unidades} = useContext(Context)
    return (<>
        <div className='contenedor-carro'>
            <GrCart className='carro' /> 
            <h5 className='cantidaCarrito' style={{ color:'primary' }} >{unidades}</h5>
        </div>
        
     </>     
    )
}

export default CartWidget;
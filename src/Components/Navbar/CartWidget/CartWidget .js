import React from 'react'
import { GrCart } from 'react-icons/gr'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='contenedor-carro'>
            <GrCart className='carro' />
        </div>
    )
}

export default CartWidget;
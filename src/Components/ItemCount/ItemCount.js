import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './ItemCount.css';
import swal from "sweetalert";


const ItemCount = (props) => {

    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)

    const handleStock = {
        sumaStock: () => {
            if (stock === 0) {
                swal({
                    title: 'No hay stock',
                    icon: "error",
                    timer: "2500"
                })
            } else {
                setUnidades(unidades + 1)
                setStock(stock - 1)
            }
        },
        restaStock: () => {
            if (unidades === 0) {
                swal({
                    title: 'No podes seleccionar menos de 0',
                    icon: "info",
                    timer: "2500"
                })
            } else {
                setUnidades(unidades - 1)
                setStock(stock + 1)
            }
        }
    }

    return (
        <div >
            <div className='count' >
                <button onClick={handleStock.restaStock} className='btn-sumar-resta'>-</button>
                <h5 className='unidades'>{unidades}</h5>
                <button onClick={handleStock.sumaStock} className='btn-sumar-resta' >+</button>
            </div>
            <div>
                <h4 className='stock' >Stock disponible {stock}</h4>
            </div>
            {unidades > 0 &&
                <div className='btn-agregar'>
                    <Button onClick={() => props.onAdd({ unidades })}>Agregar al carrito</Button>
                </div>}
        </div>
    )
}

export default ItemCount;
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import './ItemCount.css'

const ItemCount = (props) =>{

    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)

    const handleStock={
        sumaStock:()=>{
            if(stock===0){
                alert('no hay stock')
            } else {
                setUnidades(unidades+1)
                setStock(stock-1)
            }
        },
        restaStock:()=>{
            if(unidades===0){
                alert('no podes seleccionar menos de 0')
            } else {
                setUnidades(unidades-1)
                setStock(stock +1)
            }
        }
    }

    return(
        <div >
            <div className='count' >
                <button onClick={handleStock.restaStock}>-</button>
                <h5 className='unidades'>{unidades}</h5>
                <button onClick={handleStock.sumaStock}>+</button>
            </div>
            <div>
                <h4 className='stock' >Stock disponible {stock}</h4>
            </div>
            <div className='btn-agregar'>
                <Button onClick={()=> props.onAdd({unidades}) }>Agregar al carrito</Button>
            </div>
        </div>
    )

}

export default ItemCount;
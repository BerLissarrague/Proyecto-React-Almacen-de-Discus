import ItemCount from "../../ItemCount/ItemCount.js"
import React, {useState, useContext} from "react"
import { Link } from "react-router-dom"
import { Context } from "../../../Context/CartContex.js"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ItemDetail=({id, nombre, descripcion, precio, stock, imagen})=>{

    const [compra, setCompra] = useState(false)
    const {onAdd}= useContext(Context)

    const agregar = (props)=>{
        setCompra(true) ; 
        onAdd({id,nombre,precio,imagen, stock}, props.unidades)    
        alert(`agregaste ${props.unidades} al carrito`);
    }
    return (       
        <Card style={{ width: '50%', margin:' 0 auto'  }}>
         <Card.Img className='imgCard' variant="top" style={{width:"50%"}} src={imagen} alt={nombre} />
         <Card.Body>
             <Card.Title>{nombre}</Card.Title>
             <Card.Text>  Precio ${precio}  </Card.Text>  
             <Card.Text>{descripcion}</Card.Text>       
            {!compra ? <ItemCount stock={stock} onAdd={agregar}/> :
                <Link to='/cart'><Button>Terminar compra</Button></Link>}                 
         </Card.Body>
     </Card>
    )
}

export default ItemDetail;
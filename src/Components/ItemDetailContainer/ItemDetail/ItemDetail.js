import ItemCount from "../../ItemCount/ItemCount.js"
import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../../Context/CartContex.js"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ItemDetail.css';
import swal from "sweetalert";



const ItemDetail = ({ id, nombre, descripcion, precio, stock, imagen }) => {

    const [compra, setCompra] = useState(false);
    const { onAdd } = useContext(Context);

    const agregar = (props) => {

        setCompra(true);
        onAdd({ id, nombre, precio, imagen, stock }, props.unidades);
        swal({
            text: `Agregaste ${props.unidades} ${nombre} al carrito`,
            icon: "info",
            timer: "3000"
        });
    }
    
    return (
        <Card className='itemCard'>
            <Card.Img className='imgCard' variant="top" src={imagen} alt={nombre} />
            <Card.Body className='cardBody'>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text > Precio ${precio}  </Card.Text>
                <Card.Text>{descripcion}</Card.Text>
                {!compra ? <ItemCount stock={stock} onAdd={agregar} /> :
                    <><Link to='/cart'><Button>Terminar compra</Button></Link><Link to='/productos'><Button>Seguir comprando</Button></Link></>
                }
            </Card.Body>
        </Card>
    );
}

export default ItemDetail;
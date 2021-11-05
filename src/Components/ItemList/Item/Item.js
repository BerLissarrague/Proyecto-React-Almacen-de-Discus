import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './Items.css';

const Item = ({ id, nombre, precio, imagen}) => {
    return (
        <div id='contenedor'>
            <Link to={`/producto/${id}`}>
                <Card>
                    <Card.Img className='imgCard' variant="top" src={imagen} />
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text >  Precio ${precio}  </Card.Text>
                        <Button variant="dark" className='btn-sumarcarro'><Cart /> Sumar al carro </Button>
                        <Button variant="dark" className='btn-ver'>Ver mas </Button>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}
export default Item

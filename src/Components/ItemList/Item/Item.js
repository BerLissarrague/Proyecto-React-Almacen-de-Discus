import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Cart } from 'react-bootstrap-icons';
import './Items.css'

const Item = ({ nombre, description, precio, imagen }) => {
    return (
        
        <Card className='contenedor'>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {description}
                    </Card.Text>
                    <Card.Text >
                    <h3> Precio ${precio}  </h3>                 
                </Card.Text>
                <Button variant="dark" className='btn-sumarcarro'><Cart/> Sumar al carro </Button>
                <Button variant="dark" className='btn-ver'>Ver</Button>
            </Card.Body>
        </Card>
    
    )
}
export default Item

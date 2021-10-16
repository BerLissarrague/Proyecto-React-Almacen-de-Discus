import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Cart } from 'react-bootstrap-icons';
import './Productos.css';

const ItemListContainer= (props) => {
    return (
        <Card className='contenedor'>
            <Card.Img variant="top" src={props.foto} />
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Button variant="primary"><Cart /> Comprar</Button>
            </Card.Body>
        </Card>
    )
};


export default ItemListContainer;



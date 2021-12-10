import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Items.css';

const Item = ({ id, nombre, precio, imagen, stock }) => {

    return (
        <div id='contenedor'>
            <Link to={`/productos/${id}`}>
                <Card className='card'>
                    <Card.Header><Card.Title className='cardTitulo' >{nombre}</Card.Title></Card.Header>
                    <Card.Img className='imgCard' variant="top" src={imagen} />
                    <Card.Body className='cardBody'>
                        <Button variant="dark" className='btn-ver'  >Ver mas </Button>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
};
export default Item;

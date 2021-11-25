import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Items.css';

const Item = ({ id, nombre, precio, imagen, stock}) => {

    return (
        <div id='contenedor'>
            <Link to={`/productos/${id}`}>
                <Card style={{ textDecoration: 'none' }}>
                    <Card.Header><Card.Title className='cardTitulo' >{nombre}</Card.Title></Card.Header>
                    <Card.Img className='imgCard' variant="top" src={imagen} />
                    <Card.Body style={{ width: "100%" }}>
                        <Card.Subtitle  > ${precio}  </Card.Subtitle>
                        <Button variant="dark" className='btn-ver' style={{ width: "100%" }} >Ver mas </Button>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
};
export default Item;

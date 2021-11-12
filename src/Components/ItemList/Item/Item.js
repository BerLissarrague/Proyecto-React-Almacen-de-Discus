import React, {useContext} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './Items.css';
import {Context} from '../../../Context/CartContex'


const Item = ({ id, nombre, precio, imagen, stock,}) => { 
    
    const {onAdd}= useContext(Context)   
    const agregar = (props)=>{
      onAdd({id,nombre,precio,imagen, stock}) 
    }

    return (
        <div id='contenedor'>
            <Link to={`/producto/${id}`}>
                <Card>
                        <Card.Header><Card.Title style={{textAlign:'center'}}>{nombre}</Card.Title></Card.Header>
                    <Card.Img className='imgCard' variant="top" src={imagen} style={{width:"60%"}} />
                    <Card.Body style={{width:"100%"}}>
                        <Card.Subtitle style={{textAlign:'center', fontWeight: 400, fontSize:'2rem', marginBottom:'2%'} } > ${precio}  </Card.Subtitle>
                        <Button variant="dark" className='btn-ver' >Ver mas </Button>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}
export default Item;

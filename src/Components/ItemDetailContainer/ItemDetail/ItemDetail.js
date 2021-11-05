import React from 'react';
import './ItemDetail.css';
import Button from 'react-bootstrap/Button';


export const ItemDetail = ({ nombre, imagen, descripcion, precio }) => {
  return (
    <>
      <div className='contenItem'>
        <h1>{nombre}</h1>
        <img src={imagen} alt={nombre} className='imgProducto'/>
        <p className='descripcion'>{descripcion}</p>
        <h3> Precio : ${precio}</h3>
      </div>
      <div className='cotenedorBotton'>
         <Button variant="dark" className='btn-comprar'> Comprar </Button>
         <Button variant="dark" className='btn-sumarcarroitem'> Sumar al carrito </Button>
      </div>
    </>
  );
};

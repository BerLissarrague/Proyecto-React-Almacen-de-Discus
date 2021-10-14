import React from 'react';
import { Cart } from 'react-bootstrap-icons';
import './productos.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import a4 from './../../assets/a4.png'
import Turquesa from './../../assets/Turquesa.png'
import Melon from './../../assets/Melon.png'
import tetracolor from './../../assets/tetracolor.png'




export default function Product() {
  return (<>
    <div className='contenedor'>
      <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={a4} />
        <Card.Body>
          <Card.Title>Albinos</Card.Title>
          <Card.Text>
            Discus variedad Albinos
          </Card.Text>
          <Button variant="primary"><Cart /> Comprar</Button>
        </Card.Body>
      </Card>
      </div>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Melon} />
        <Card.Body>
          <Card.Title>Melon</Card.Title>
          <Card.Text>
            Discus variedad Melon
          </Card.Text>
          <Button variant="primary"><Cart /> Comprar</Button>
        </Card.Body>
        </Card>
        
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Turquesa} />
          <Card.Body>
            <Card.Title>Turquesa</Card.Title>
            <Card.Text>
              Discus variedad Turquesa
            </Card.Text>
            <Button variant="primary"><Cart /> Comprar</Button>
          </Card.Body>
        </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={tetracolor} />
          <Card.Body>
            <Card.Title>Tetra Color</Card.Title>
            <Card.Text>
              Alimento de mas alta calidad para tus peces.
            </Card.Text>
            <Button variant="primary"><Cart /> Comprar</Button>
          </Card.Body>
        </Card>
        </div>
    </div>
  </>
  );
}
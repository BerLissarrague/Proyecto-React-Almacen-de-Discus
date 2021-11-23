import React, { useContext } from "react";
import { Context } from "../../Context/CartContex";

import Card from 'react-bootstrap/Card';
import { Button, Row, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Cart = () => {
    const { carro, unidades, total, removeItem, clear } = useContext(Context)
    
    return (
        <div>
            {carro.length > 0 ?
                <>
                    {carro.map((item) =>
                        <Card key={'item.id'} style={{ width: "50%", margin: 'auto' }}>
                            <Card.Body  >
                                <Card.Title>{item.nombre}</Card.Title>
                                <Card.Text >Precio: $ {item.precio}  </Card.Text>
                                <Card.Text> Cantidad: {item.cantidad}</Card.Text>
                                <Card.Text> Subtotal: {item.subtotal}</Card.Text>
                            </Card.Body>
                            <Link to={`/productos/${item.id}`}><Card.Img className='imgCard' variant="center" style={{ width: "75%", borderRadius:'10%', margin:'0 40px'}} src={item.imagen} alt={item.nombre} /></Link>
                            <Button style={{ margin: "2% auto" }}
                                onClick={() => removeItem(item.id, item.subtotal)}>Remover</Button>
                        </Card>
                    )}
                    <h4 style={{ margin: " 2% auto" }}>El total del carrito es {total}</h4>
                    <div div className='bntvaciar' style={{ width: "100%", textAlign:'center' }} >
                        <Button onClick={() => clear()}>Vaciar Carro</Button>
                        <Link to={'/buy'}> <Button variant='outline-primary'>Finalizar Compra</Button></Link>
                       <Link to={'/'}> <Button>Seguir comprando </Button></Link>
                    </div>
                </>
                :
                <>
                    <Row className='mt-4 text-center'>
                        <Col>
                            <h2 >No hay items en tu carrito</h2>
                            <Button as={Link} to={`/`} variant='outline-primary' >Empezá a comprar</Button>
                        </Col>
                    </Row>
                </>
            }
        </div>)
}

export default Cart;
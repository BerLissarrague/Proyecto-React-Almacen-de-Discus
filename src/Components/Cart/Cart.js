import React, { useContext } from "react";
import { Context } from "../../Context/CartContex";
import Card from 'react-bootstrap/Card';
import { Button, Row, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Cart.css';

const Cart = () => {
    const { carro, total, removeItem, clear } = useContext(Context)

    return (
        <div>
            {carro.length > 0 ?
                <>
                    {carro.map((item) =>
                        <Card key={'item.id'} className='cardcarro' style={{}}>
                            <Card.Body  >
                                <Card.Title>{item.nombre}</Card.Title>
                                <Card.Text >Precio: $ {item.precio}  </Card.Text>
                                <Card.Text> Cantidad: {item.cantidad}</Card.Text>
                                <Card.Text> Subtotal: {item.subtotal}</Card.Text>
                            </Card.Body>
                            <Link to={`/productos/${item.id}`}><Card.Img className='imgCardcarro' variant="center" src={item.imagen} alt={item.nombre} /></Link>
                            <Button className='btnremove'
                                onClick={() => removeItem(item.id, item.subtotal)}>Remover</Button>
                        </Card>
                    )}
                    <h4 className='tituloTotal'>El total del carrito es {total}</h4>
                    <div div className='bntvaciar' >
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
                            <Button as={Link} to={`/productos`} variant='outline-primary' >Empezá a comprar</Button>
                        </Col>
                    </Row>
                </>
            }
        </div>)
}

export default Cart;
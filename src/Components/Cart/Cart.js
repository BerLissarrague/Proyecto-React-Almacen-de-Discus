import React, { useContext} from "react";
import { Context } from "../../Context/CartContex";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cart = () => {
    const { carro, unidades, total, removeItem, clear } = useContext(Context)
    


    return (
        <>
            {carro.map((item) =>
                <Card style={{ width: "50%", margin:'auto' }}>
                    <Card.Body  >
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text >Precio $ {item.precio}  </Card.Text>
                        <Card.Text> Cantidad :{item.cantidad}</Card.Text>
                        <Card.Text> Subtotal:{item.subtotal}</Card.Text>
                    </Card.Body>
                    <Card.Img className='imgCard' variant="top" style={{ width: "75%" }} src={item.imagen} alt={item.nombre} />
                    <Button style={{ width: "10%" }, { margin: "2% auto" }}
                        onClick={() => removeItem(item.id, item.subtotal)}>Remover</Button>
                </Card>
            )}
            <h4 style={{ width: "10%" }, { margin: " 2% auto" }}>El total del carrito es {total} y tenes {unidades} tipo de productos </h4>
            <div div className='bntvaciar' style={{ width: "100%" }} >
                <Button onClick={() => clear()}>Vaciar Carro</Button>
                <Button>Finalizar Compra</Button>
            </div>
        </>
    )
}

export default Cart
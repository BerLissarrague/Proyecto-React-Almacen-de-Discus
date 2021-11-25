import React, { useState, useContext, } from "react";
import { Context } from '../../Context/CartContex.js';
import getDb from '../../lib/firebaseConfig';
import {collection, getDoc,  doc,  addDoc,  updateDoc, } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useHistory} from'react-router-dom';


function Buy() {
    const history = useHistory();
    const {
        carro,
        total,
        clear
    } = useContext(Context)
    const [order, setOrder] = useState({})
    const [user, setUser] = useState({
        name: "",
        email: "",
        address: "",
        code: ""
    })
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleBuy = () => {
        const cararroAux = carro.map((item) => {
            return {
                id: item.id,
                nombre: item.nombre,
                precio: item.precio,
                subtotal: item.subtotal,
                cantidad: item.cantidad
            }
        })        
        setOrder({
            user,
            cararroAux,
            total
        })
        addDoc(collection(getDb, 'Ordenes'), order)
        cararroAux.forEach((item,index) => {
          getDoc(doc(getDb, 'Productos',item.id))
                .then((res) => {
                    let result = {
                        id: res.id,
                        ...res.data()
                    };
                    result.stock = result.stock - item.cantidad
                    updateDoc(doc(getDb, 'Productos', result.id), result)
                    if (index===cararroAux.length - 1) {
                        clear()
                        history.push("/")                        
                    };
                })
        });
            
    }
   
 

return (<>
        <div className='buy'>
            <div className='buy-text'>
                <p>Para continuar con el proceso, complete el formulario con sus datos para que podamos enviar su pedido.</p>
            </div>
            <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Ingrese su e-mail" required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Apellido y nombre</Label>
                    <Input type="text" name="name" id="name" placeholder="Ingrese su nombre y apellido" required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="address">Direccion</Label>
                    <Input type="text" name="address" id="address" placeholder="Ingrese su direccion" required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="code">Codigo postal</Label>
                    <Input type="number" name="code" id="code" placeholder="Ingrese su codigo postal" required onChange={handleChange} />
                </FormGroup>
                <Button onClick={() => handleBuy()}>Submit</Button>
            </Form>
            </div>
            </>
        
    );
}


export default Buy;
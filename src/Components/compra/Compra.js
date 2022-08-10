import React, { useState, useContext } from "react";
import { Context } from '../../Context/CartContex.js';
import getDb from '../../lib/firebaseConfig';
import { collection, getDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './Compra.css';

const Buy = () => {
    const history = useHistory();
    const {
        carro,
        total,
        clear
    } = useContext(Context);

    const [orden, setOrden] = useState({});

    const [user, setUser] = useState({
        name: "",
        email: "",
        repetirEmail: "",
        address: "",
        telefono: "",
        code: ""
    });

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }

    const handleBuy = async () => {
        const carroAux = carro.map((item) => {
            return {
                id: item.id,
                nombre: item.nombre,
                precio: item.precio,
                subtotal: item.subtotal,
                cantidad: item.cantidad
            }
        });
        setOrden({
            user,
            carroAux,
            total
        });
        console.log(orden)
        if (user.name !== "" && user.email !== "" && user.repetirEmail !== "" && user.telefono !== "" && user.address !== "" && user.code !== "") {
            if (user.email === user.repetirEmail) {
                const addFirebase = await addDoc(collection(getDb, 'Ordenes'), { user, carroAux, total })//cargardo orden a Firebase || Deberia pasar orden,  en lugar de {user,  carroAux, total}. pero orden es undefine                ;  
                carroAux.forEach((item, index) => {// busca y actualiza el stock en la base de dato de Firebase
                    getDoc(doc(getDb, 'Productos', item.id))
                        .then((res) => {
                            let result = {
                                id: res.id,
                                ...res.data()
                            };
                            result.stock = result.stock - item.cantidad;
                            updateDoc(doc(getDb, 'Productos', result.id), result);
                        });
                });
                clear();
                history.push('/Proyecto-React-Almacen-de-Discus/productos');
                swal({
                    title: "Compra realizada con exito. Numero de Orden",
                    text: addFirebase.id,
                    icon: "success"
                }
                );
            } else {
                swal({
                    text: "Los mail no coinciden",
                    icon: "error",
                    timer: "2000"
                });
            }
        } else {
            swal({
                text: "Hay un campo vacio",
                icon: "error",
                timer: "2000"
            });
        };
    };
    return (
        <>
            <div className='buy'>
                <div className='buy-text'>
                    <h3>Para continuar con el proceso, complete el formulario con sus datos para que podamos enviar su pedido.</h3>
                </div>
                <Form className='form-container'>

                    <Form.Group >
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control
                            name="name"
                            id="name"
                            placeholder="Ingrese su nombre y apellido"
                            required
                            type="text"
                            onChange={handleChange}
                        />
                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                id="name"
                                placeholder="Ingrese su Email"
                                required
                                type="email"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Repita su email</Form.Label>
                            <Form.Control
                                name="repetirEmail"
                                id="emial"
                                placeholder="Ingrese su Email"
                                required
                                type="email"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                            name="telefono"
                            id="telefono"
                            placeholder="Ingrese su telefono"
                            required
                            type="number"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control
                            name="address"
                            id="telefono"
                            placeholder="Ingrese su direccion"
                            required
                            type="number"
                            onChange={handleChange}
                        />
                    </Form.Group><Form.Group>
                        <Form.Label>Codigo postal</Form.Label>
                        <Form.Control
                            name="code"
                            id="telefono"
                            placeholder="Ingrese su codigo postal"
                            required
                            type="number"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button onClick={() => handleBuy()} >Submit form</Button>
                </Form>

            </div>
        </>

    );
}


export default Buy;
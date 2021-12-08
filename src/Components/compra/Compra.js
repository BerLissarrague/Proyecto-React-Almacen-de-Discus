import React, { useState, useContext, } from "react";
import { Context } from '../../Context/CartContex.js';
import getDb from '../../lib/firebaseConfig';
import { collection, getDoc, doc, addDoc, updateDoc, } from "firebase/firestore";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';


function Buy() {
    const history = useHistory();
    const {
        carro,
        total,
        clear
    } = useContext(Context);

    const [order, setOrder] = useState({});

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
        })
        event.preventDefault();
    }

    const handleBuy = async () => {
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
        });

        const addFirebase = await addDoc(collection(getDb, 'Ordenes'), { user, cararroAux, total }); //cargardo orden a Firebase
       
        cararroAux.forEach((item, index) => {// busco y actualizacion del stock en la base de dato de Firebase
            getDoc(doc(getDb, 'Productos', item.id))
                .then((res) => {
                    let result = {
                        id: res.id,
                        ...res.data()
                    };
                    result.stock = result.stock - item.cantidad 
                    updateDoc(doc(getDb, 'Productos', result.id), result)
                })
        });
        if (user.email !== "" && user.repetirEmail !== "" && user.code !== "" && user.name !== "" && user.address !== "" && user.telefono !== "") {
            if (user.email === user.repetirEmail) {
                clear()
                swal({title:"Numero de Orden",
                    text: addFirebase.id,
                    icon: "success"}
                    )
                history.push("/")
            } else {
                swal({
                    text:"Los mail no coinciden",
                    icon: "error",
                    timer: "2000"
                })
            }
        } else {swal({
            text:"Hay un campo vacio",
            icon: "error",
            timer: "2000"
        })
        }
    }

    return (
        <>
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
                        <Label for="email">Repetir email</Label>
                        <Input type="email" name="repetirEmail" id="email" placeholder="Ingrese su e-mail" onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Apellido y nombre</Label>
                        <Input type="text" name="name" id="name" placeholder="Ingrese su nombre y apellido" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Direccion</Label>
                        <Input type="text" name="address" id="address" placeholder="Ingrese su direccion" required onChange={handleChange} />
                    </FormGroup><FormGroup>
                        <Label for="telefono">telefono</Label>
                        <Input type="number" name="telefono" id="telefono" placeholder="Ingrese su telefono" required onChange={handleChange} />
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
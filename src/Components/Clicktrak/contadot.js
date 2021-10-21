import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";


export default function Botton() {
    const [click, setClick] = useState(0);
    //const [date, setDate]= useState[]; 
    //.... cambiado por la props: nombre de cada producto
    return (
        <div>
            <p>Cantidad de .... {click}</p>
            <Button variant="primary" onClick={() => {
                setClick(click + 1)
            }
            }>Mas</Button>
            <Button variant="primary" onClick={() => {
                setClick(click - 1)            
            }}> Menos</Button>
        </div>
    );
}



/*
useEffect(() => {
    const promise = new Promise((resolve, reject) => {
        const products = [
            { id: "1", name: 'bernardo', description: 'bernrdo lissarrague', stock: 200 },
            { id: "02", name: 'ismael', description: 'ismale lissarrague', stock: 400 }
        ]
        setTimeout(resolve(products), 3000)
    });

    promise.then((result) => {
        setProducts(result);
    });
}, [products]);


// Stock 0

const Button = () => {
    const [title, setTitle] = useState ('');
    const stock = 0
    return (
        <div>
            {stock != 0 ? (<button onClick=
                {(e) => {
                    e.preventDefault()
                    setTitle('chau');
                }}>
                {title}
            </button>) : null}
        </div>
    )
}

*/
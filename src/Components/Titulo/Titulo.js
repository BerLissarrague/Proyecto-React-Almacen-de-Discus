import React from "react";
import './Titulo.css'

const Titulo = (props) => {
    return (
        <>
            <div>
                <h2> {props.titulo}</h2>
            </div>
        </>
    )
}
export default Titulo;
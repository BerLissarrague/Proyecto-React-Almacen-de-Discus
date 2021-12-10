import React from "react";
import './Titulo.css'

const Titulo = (props) => {
    return (
        <>
            <div>
                <h2> {props.titulo}</h2>
                <h3>{props.subtitulo}</h3>
            </div>
        </>
    )
}
export default Titulo;
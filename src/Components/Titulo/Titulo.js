import React from "react";
import './Titulo.css'
import { Container, Typography } from '@material-ui/core';
const Titulo = () => {
    return (
        <>
            <Container>
                <Typography
                    align="center"
                    variant='h2'
                    color='primary'>
                    Almacen de Discus
                </Typography>
            </Container>
        </>

    )
}

export default Titulo;
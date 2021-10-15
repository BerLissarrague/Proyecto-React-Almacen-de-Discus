import React from "react";
import Titulo from './../Components/Titulo/Titulo';
import NavBar from './../Components/Navbar/Navbar';
import Main from './../Components/Main/Main';
import Product from './../Components/Productos/productos';
import Footer from './../Components/Footer/Footer';
import Saludar from './../Components/ItemListContainer/ItemListContainer';

const Home = () => {
    return (
        <>
            <Saludar nombre='Almacen de Discus'/>
            <NavBar />
            <Titulo />
            <Main />
            <Product />
            <Footer />
        </>
    )
}

export default Home;
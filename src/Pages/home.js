import React from "react";
import Titulo from './../Components/Titulo/Titulo';
import NavBar from './../Components/Navbar/Navbar';
import Main from './../Components/Main/Main';
import Product from './../Components/Productos/productos';
import Footer from './../Components/Footer/Footer';

const Home = () => {
    return (
        <>
            <NavBar />
            <Titulo />
            <Main />
            <Product />
            <Footer />
        </>
    )
}

export default Home;
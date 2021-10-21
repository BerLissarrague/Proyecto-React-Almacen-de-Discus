import React from "react"
import Navbar  from "./../Components/Navbar/Navbar.js";
import Main from './../Components/Main/Main.js'
import Titulo from './../Components/Titulo/Titulo.js'
import ItemListContainer from'./../Components/ItemListContainer/ItemListContainer.js'
import Footer from './../Components/Footer/Footer.js'


const Home =() =>{
    return (
        <>
        <Navbar/>
        <Titulo titulo=' Almacen de Discus'/>
        <Main/>
        <Titulo  titulo='Shoop de Almacen De Discus' />
        <ItemListContainer/>
        <Footer/>
        </>   
    )
}

export default Home;


import React from "react";
import Titulo from '../Components/Titulo/Titulo';
import NavBar from '../Components/Navbar/Navbar';
import Main from '../Components/Main/Main';
import Footer from '../Components/Footer/Footer';
import Productos from "../Components/Productos/Productos.js";
import a2 from'./../assets/a2.png';
import a4 from'./../assets/a4.png';
import tetracolor from'./../assets/tetracolor.png'


const Home = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer/>
            <Titulo />
            <Main />
            <Productos titulo='Albinos' descripcion='Discus variedad albina.
            Origen Nacional.' foto={a4}/>
            <Productos titulo='Turquesa' descripcion='Discus variedad Turquesa.
            Origen Nacional.'foto={a2} />
            <Item tirulo='Alimento' descripcion='Tetra Color, de Tetra. Unos de los mejores alimentos del mercado'foto={tetracolor} />
            <Footer />
        </>
    )
}

export default Home;
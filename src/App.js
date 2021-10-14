import React from 'react';
import './App.css';
import Titulo from './Components/Titulo/Titulo';
import NavBar from './Components/Navbar/NavBar';
import Main from './Components/Main/Main';
import Product from './Components/Productos/productos';
import Footer from'./Components/Footer/Footer.js';


function App() {
  return (
    <>
      <NavBar />
      <Titulo />
      <Main />
      <Product />
      <Footer/>
    </>
  );
}

export default App;



import React from "react";
import NavBar from "./Components/NavBar/NavBar.js";
import Titulo from './Components/Titulo/Titulo.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.js';
import Footer from './Components/Footer/Footer.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartFuncion } from "./Context/CartContex.js";
import Cart from "./Components/Cart/Cart";
import Main  from "./Components/Main/Main";
import Buy from'./Components/Compra/Compra.js';
import PecesDiscus from "./Components/Pecesdiscus/PecesDiscus";
import Historia from "./Components/Historia/Historia.js";

const App = () => {
  return (
    <BrowserRouter>
      <CartFuncion>
        <NavBar />
        <Titulo titulo='Almacen de Discus' />
        <Switch>
          <Route exact path='/Proyecto-React-Almacen-de-Discus'>
        <Main/>
        <Titulo subtitulo='Shoop de Almacen De Discus' />
            <ItemListContainer/>          
          </Route>
          <Route exact path='/Proyecto-React-Almacen-de-Discus/productos'>
             <ItemListContainer/>
          </Route>
          <Route exact path='/Proyecto-React-Almacen-de-Discus/productos/:id' component={ItemDetailContainer} />
        <Route exact path='/Proyecto-React-Almacen-de-Discus/categoria/:categoriaId'>
        <Titulo subtitulo="" /> 
          <ItemListContainer />
        </Route>
        <Route exact path='/Proyecto-React-Almacen-de-Discus/cart'>
        <Titulo subtitulo='Carrito '/>   
          <Cart />
       </Route>
        <Route exact path='/Proyecto-React-Almacen-de-Discus/buy'>
        <Titulo subtitulo='Formulario de compra '/>   
              <Buy />
            </Route>
            <Route exact path='/Proyecto-React-Almacen-de-Discus/cuidadosDeDiscus'>
        <Titulo subtitulo='Cuidado de sus Discus '/>   
              <PecesDiscus />
            </Route>
            <Route exact path='/Proyecto-React-Almacen-de-Discus/historia'>
        <Titulo subtitulo='Nuestra historia '/>   
              <Historia />
            </Route>
        </Switch>  
               
      <Footer />
      </CartFuncion>
    </BrowserRouter>


  )
}

export default App;
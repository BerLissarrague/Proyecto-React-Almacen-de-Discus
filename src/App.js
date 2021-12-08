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
import PecesDiscus from "./Components/Pecesdiscus/Pecesdiscus.js";
import Historia from "./Components/Historia/Historia.js";




const App = () => {
  return (
    <BrowserRouter>
      <CartFuncion>
        <NavBar />
        <Titulo titulo='Almacen de Discus' />
        <Switch>
          <Route exact path='/'>
        <Main/>
        <Titulo titulo='Shoop de Almacen De Discus' />
            <ItemListContainer/>          
          </Route>
          <Route exact path='/productos'>
             <ItemListContainer/>
          </Route>
          <Route exact path='/productos/:id' component={ItemDetailContainer} />
        <Route exact path='/categoria/:categoriaId'>
        <Titulo titulo   /> 
          <ItemListContainer />
        </Route>
        <Route exact path='/cart'>
        <Titulo titulo='Carrito '/>   
          <Cart />
       </Route>
        <Route exact path='/buy'>
        <Titulo titulo='Carrito '/>   
              <Buy />
            </Route>
            <Route exact path='/cuidadosDeDiscus'>
        <Titulo titulo='Cuidado de sus Discus '/>   
              <PecesDiscus />
            </Route>
            <Route exact path='/Historia'>
        <Titulo titulo='Nuestra historia '/>   
              <Historia />
            </Route>
        </Switch>  
               
      <Footer />
      </CartFuncion>
    </BrowserRouter>


  )
}

export default App;
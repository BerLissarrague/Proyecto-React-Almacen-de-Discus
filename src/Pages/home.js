import React from "react";
import NavBar from "../Components/NavBar/NavBar.js";
import Titulo from './../Components/Titulo/Titulo.js';
import ItemListContainer from './../Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './../Components/ItemDetailContainer/ItemDetailContainer.js';
import Footer from './../Components/Footer/Footer.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartFuncion } from "../Context/CartContex.js";
import Cart from "../Components/Cart/Cart.js";




const Home = () => {
  return (

    <BrowserRouter>
      <CartFuncion>
        <NavBar />
        <Titulo titulo='Almacen de Discus' />
        <Titulo titulo='Shoop de Almacen De Discus' />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route exact path='/producto/:id' component={ItemDetailContainer} />
        </Switch>
        <Route exact path='/categoria/:categoriaId'>
          <ItemListContainer />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Footer />
      </CartFuncion>
    </BrowserRouter>


  )
}

export default Home;


import React from "react";
import NavBar from "../Components/NavBar/NavBar.js";
import Main from './../Components/Main/Main.js';
import Titulo from './../Components/Titulo/Titulo.js';
import ItemListContainer from './../Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './../Components/ItemDetailContainer/ItemDetailContainer.js';
import Footer from './../Components/Footer/Footer.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Titulo titulo='Almacen de Discus' />
      <Main />
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
      <Footer />
    </BrowserRouter>

  )
}

export default Home;


import React from "react";
import NavBar from './components/navBar/NavBar';
import Titulo from './components/titulo/Titulo';
import ItemListContainer from './components/item/ItemListContainer';
import ItemDetailContainer from './components/item/ItemDetailContainer';
import Cart from "./components/cart/Cart";
import Main  from "./components/carrouselImagenes/CarrouselImagenes";
import Footer from './components/footer/Footer.js';
import Buy from'./pages/FormularioConfirmacion';
import PecesDiscus from "./pages/PecesDiscus";
import Historia from "./pages/Historia";
import { Register } from "./pages/Registro";
import { Login } from "./pages/Login";
import { CartFuncion } from "./context/CartContex.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
            <Route exact path='/Proyecto-React-Almacen-de-Discus/register' component={Register} />
          <Route exact path='/Proyecto-React-Almacen-de-Discus/login' component={Login} />
        </Switch>                 
      <Footer />
      </CartFuncion>
    </BrowserRouter>


  )
}

export default App;
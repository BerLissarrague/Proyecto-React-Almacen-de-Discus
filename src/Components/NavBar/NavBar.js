import React, { useContext } from "react";
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import './NavBar.css';
import CartWidget from "./CartWidget/CartWidget ";
import { Link } from "react-router-dom";
import { Context } from "../../Context/CartContex";

const NavBar = () => {
    const { unidades } = useContext(Context);
    const categorias = [
        { id: 'Insumos', address: 'insumos', text: 'Insumos' },
        { id: 'Plantas', address: 'plantas', text: 'Plantas' },
        { id: 'Peces', address: 'peces', text: 'Peces' }
    ];

    return (
            <Navbar bg="dark" expand="sm" className='nav'>
                <Navbar.Brand as={Link} to={'/Proyecto-React-Almacen-de-Discus'} className='item-nav'><img src='https://firebasestorage.googleapis.com/v0/b/e-commerce-almacen-de-discus.appspot.com/o/logo1.png?alt=media&token=f28f6626-e8a0-49ad-9a0d-c2d980dc6216' alt='logo' className='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link as={Link} to={'/Proyecto-React-Almacen-de-Discus/Historia'} className='item-nav'>Historia</Nav.Link>
                        <Nav.Link as={Link} to={'/Proyecto-React-Almacen-de-Discus/cuidadosDeDiscus'} className='item-nav'>Cuidado de Discus</Nav.Link>
                        <NavDropdown  title="Productos" id="basic-nav-dropdown">
                            {categorias && categorias.length > 0 &&
                                categorias.map((categoria) => {
                                    return (
                                        <NavDropdown.Item 
                                            key={categoria.id}
                                            as={Link}
                                            to={`/Proyecto-React-Almacen-de-Discus/categoria/${categoria.address}`}>{categoria.text}
                                        </NavDropdown.Item>
                                    )
                                })
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                {unidades > 0 &&
                    <React.Fragment>
                        <Nav.Link as={Link} to={`/Proyecto-React-Almacen-de-Discus/cart`} className="text-white">
                            <CartWidget unidades={unidades} color='primary' />
                        </Nav.Link>
                        <span className="vertical-divider ml-2 mr-2"></span>
                    </React.Fragment>
                }
            </Navbar>    
              
    )
};

export default NavBar;
import React, { useContext } from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap';
import './NavBar.css';
import Button from 'react-bootstrap/Button';
import CartWidget from "./CartWidget/CartWidget ";
import { Link } from "react-router-dom";
import { Context } from "../../Context/CartContex";



const NavBar = () => {
    const { unidades } = useContext(Context)
    const categorias = [
        { id: 'Insumos', address: 'insumos', text: 'Insumos' },
        { id: 'Plantas', address: 'plantas', text: 'Plantas' },
        { id: 'Peces', address: 'peces', text: 'Peces' }
    ]

    return (
        <>
            <heder className='container-fluid contenerdo-nav'>
                <Navbar bg="" expand="sm" className='nav' >
                    <Navbar.Brand href="/" className='item-nav'><img src='image/logo1.png' alt='logo' className='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link as={Link} to={'/Historia'} className='item-nav'>Historia</Nav.Link>
                            <Nav.Link as={Link} to={'/cuidadosDelAgua'} className='item-nav'>Cuidados del agua</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                {categorias && categorias.length > 0 &&
                                    categorias.map((categoria) => {
                                        return (
                                            <NavDropdown.Item
                                                key={categoria.id}
                                                as={Link}
                                                to={`/categoria/${categoria.address}`}>{categoria.text}
                                            </NavDropdown.Item>
                                        )
                                    })
                                }
                            </NavDropdown>
                            {unidades > 0 &&
                                <React.Fragment>
                                    <Nav.Link as={Link} to={`/cart`} className="text-white">
                                        <CartWidget unidades={unidades}/>
                                    </Nav.Link>
                                    <span className="vertical-divider ml-2 mr-2"></span>
                                </React.Fragment>
                            }
                        </Nav>                    </Navbar.Collapse>
                </Navbar>
            </heder>
        </>
    )
}

export default NavBar;
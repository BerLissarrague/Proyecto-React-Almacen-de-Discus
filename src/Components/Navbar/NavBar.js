import React from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap';
import './../Navbar/Navbar.css';
import Button from 'react-bootstrap/Button';
import { GrCart} from 'react-icons/gr';



const NavBar = () => {
    return (<>
        <heder className='container-fluid contenerdo-nav'>
            <Navbar bg="" expand="sm" className='nav' >
                <Navbar.Brand href="#" className='item-nav'>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="#action2" className='item-nav'>Historia</Nav.Link>
                        <Nav.Link href="./../../Pages/Peces-discus.js" className='item-nav'>Cuidados del agua</Nav.Link>
                        <NavDropdown title="Shoop" id="navbarScrollingDropdown" className='item-nav'>
                            <NavDropdown.Item href="#action3">Insumos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">Plantas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Peces</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex buscador">
                        <FormControl
                            type="search"
                            placeholder="Buscador"
                            className="mr-2"
                            aria-label="Buscador"
                        />
                        <Button variant="dark">Buscador</Button>
                        <GrCart className='carro' />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </heder>
    </>
    )
}
export default NavBar;
import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import InputGroup from 'react-bootstrap/InputGroup';

const Header = () => {
    return (
        <Fragment>
            <Navbar class="navbar" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        src="../images/MartinicaStore.png"
                        width="110"
                        height="110"
                        className="d-inline-block mx-3"
                        alt="Martinica Store"/>
                    </Navbar.Brand>
                </Container>
                <Container>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-3" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Stack direction="horizontal" gap={3}>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Buscar"
                                    aria-label="Input group example"
                                    aria-describedby="btnGroupAddon2"
                                />
                                <InputGroup.Text id="btnGroupAddon2"><i className="fas fa-search"></i></InputGroup.Text>
                            </InputGroup>
                            <i className="fas fa-shopping-cart fa-2x mx-4 text-dark"></i>
                        </Stack>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment >
    )
}

export default Header
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Background from '../assets/bg.jpg';

export default function MUNavbar() {
    return(
        <>
            <Container fluid className = 'absolute'>
                <Navbar expand = 'lg' variant='dark'>
                    <Container fluid>
                        <Navbar.Brand href = '/'><h1 className='large'>Music Unbounded</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav variant="dark">
                                <NavDropdown title = "About">
                                    <Nav.Link href='/about'>About Us</Nav.Link> 
                                    <Nav.Link>Our Lessons</Nav.Link>
                                    <Nav.Link>Meet the Team</Nav.Link>
                                </NavDropdown>
                                <NavDropdown title="Get Involved">
                                    <Nav.Link>Teach</Nav.Link>
                                    <Nav.Link>Volunteer</Nav.Link>
                                </NavDropdown>
                                <NavDropdown title="Register">
                                    <Nav.Link>Register</Nav.Link>
                                </NavDropdown>
                                <NavDropdown title="Help">
                                    <Nav.Link>Contact</Nav.Link>
                                    <Nav.Link>FAQ</Nav.Link>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
}
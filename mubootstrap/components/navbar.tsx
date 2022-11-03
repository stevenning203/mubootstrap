import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Background from '../assets/bg.jpg';

function MUNavDropdown(props) {
    return <NavDropdown title={props.title} menuVariant='dark'>{props.children}</NavDropdown>
}

export default function MUNavbar() {
    return(
        <>
            <Container fluid className = 'absolute'>
                <Navbar expand = 'lg' variant='dark'>
                    <Container fluid>
                        <Navbar.Brand href = '/'><h1 className='large'>Music Unbounded</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav>
                                <MUNavDropdown title = "About">
                                    <Nav.Link href='/about'>About Us</Nav.Link> 
                                    <Nav.Link href='/lessons'>Our Lessons</Nav.Link>
                                    <Nav.Link>Meet the Team</Nav.Link>
                                </MUNavDropdown>
                                <MUNavDropdown title="Get Involved">
                                    <Nav.Link>Teach</Nav.Link>
                                    <Nav.Link href='/volunteer'>Volunteer</Nav.Link>
                                </MUNavDropdown>
                                <MUNavDropdown title="Register">
                                    <Nav.Link>Register</Nav.Link>
                                </MUNavDropdown>
                                <MUNavDropdown title="Help">
                                    <Nav.Link>Contact</Nav.Link>
                                    <Nav.Link>FAQ</Nav.Link>
                                </MUNavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
}
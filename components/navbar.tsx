import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Background from '../assets/bg.jpg';

/**
 * interface to pass through props into the NavDropdown
 */
declare interface DropdownTitleProps {
    children: React.ReactNode;
    title: string;
};

/**
 * 
 * @param props title
 * @returns Nav dropdown that automatically has the dark variant applied
 */
function MUNavDropdown(props: DropdownTitleProps) {
    return <NavDropdown title={props.title} menuVariant='dark'>{props.children}</NavDropdown>
}

/**
 * 
 * @returns The navbar for the website
 */
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
                                    <Nav.Link>Our Lessons</Nav.Link>
                                    <Nav.Link>Meet the Team</Nav.Link>
                                </MUNavDropdown>
                                <MUNavDropdown title="Get Involved">
                                    <Nav.Link>Teach</Nav.Link>
                                    <Nav.Link>Volunteer</Nav.Link>
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
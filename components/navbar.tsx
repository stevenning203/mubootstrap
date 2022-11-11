import Background from '../assets/bg.jpg';
import Logo from '../assets/logo.png';

/**
 * 
 * @param props children
 * @returns nav element
 */
function MUNavLink(props: {children}) {
    return (
        <div className='inline-block'>
            {props.children}
        </div>
    )
}

/**
 * 
 * @returns The navbar for the website
 */
export default function MUNavbar() {
    return(
        <>
            <nav className="flex bg-white">
                <div className="hidden xl:flex xl:basis-1/3 basis-0">
                    <div className='text-lg pl-10 py-4 pr-10'>
                        <a>About</a>
                    </div>
                    <div className='text-lg py-4 pr-10'>
                        <a>Get Involved</a>
                    </div>
                    <div className='text-lg py-4 pr-10'>
                        <a>Register</a>
                    </div>
                </div>
                <div className="py-4 grow text-center">
                    <a href ='/'><span className ='font-bold hover:text-gray-900 text-2xl'>Music Unbounded</span></a>
                </div>
                <div className="hidden xl:flex xl:basis-1/3">
                    
                </div>
            </nav>
            {/* <Container fluid className = 'absolute'>
                <Navbar expand = 'lg' variant='dark'>
                    <Container fluid>
                        <Navbar.Brand href = '/'><h1 className='large'>Music Unbounded</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav>
                                <MUNavDropdown title = "About">
                                    <Nav.Link href='/about'>About Us</Nav.Link> 
                                    <Nav.Link href='/lessons'>Our Lessons</Nav.Link>
                                    <Nav.Link href='/our-team'>Meet the Team</Nav.Link>
                                </MUNavDropdown>
                                <MUNavDropdown title="Get Involved">
                                    <Nav.Link href='/teach'>Teach</Nav.Link>
                                    <Nav.Link href='/volunteer'>Volunteer</Nav.Link>
                                </MUNavDropdown>
                                <MUNavDropdown title="Register">
                                    <Nav.Link href='/register'>Register</Nav.Link>
                                </MUNavDropdown>
                                <MUNavDropdown title="Help">
                                    <Nav.Link href='/contact'>Contact</Nav.Link>
                                    <Nav.Link href='/help'>FAQ</Nav.Link>
                                </MUNavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container> */}
        </>
    )
}
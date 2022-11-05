import Head from 'next/head'
import Image from 'next/image'
import { Nav, Container, Navbar, Button, Row, Col } from 'react-bootstrap'
import MUHeader from '../components/header'
import Background from '../assets/bg.jpg'

/**
 * 
 * @returns index page
 */
export default function Home() {
    return (
        <>
            <MUHeader />
            <Container fluid style = {{backgroundImage: "url(" + Background.src + ")", backgroundSize: "cover", minHeight: "100vh", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                
            </Container>
        </>
    )
}
import { Navbar,Nav,Container,Button } from "react-bootstrap";
import CartItems from "./CartItems";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const NavBar = () => {
    const location=useLocation();
    const [showCart,setShowCart]=useState(false);
    useEffect(() => {
        if (location.pathname === "/store") {
            setShowCart(true);
        } else {
            setShowCart(false);
        }
    }, [location.pathname]);
    return <>
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
            <Container className="justify-content-center">
                <Nav>
                    <Nav.Link onClick={()=>setShowCart(false)} as={Link} to="/"><h3>HOME</h3></Nav.Link>
                    <Nav.Link onClick={()=>setShowCart(true)} as={Link} to="/store"><h3>STORE</h3></Nav.Link>
                    <Nav.Link onClick={()=>setShowCart(false)} as={Link} to="/about"><h3>ABOUT</h3></Nav.Link>
                </Nav>
            </Container>
            {showCart && <CartItems/>}
        </Navbar>
    </>
}
export default NavBar;
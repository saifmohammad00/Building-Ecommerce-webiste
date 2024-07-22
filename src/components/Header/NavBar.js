import { Navbar,Nav,Container,Button } from "react-bootstrap";
import CartItems from "./CartItems";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const NavBar = () => {
    const location=useLocation();
    const [showCart,setShowCart]=useState(false);
    useEffect(() => {
        setShowCart(location.pathname === "/store");
    }, [location.pathname]);
    return <>
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
            <Container className="justify-content-center">
                <Nav>
                    <Nav.Link onClick={()=>setShowCart(false)} as={Link} to="/"><h3>Home</h3></Nav.Link>
                    <Nav.Link onClick={()=>setShowCart(true)} as={Link} to="/store"><h3>Store</h3></Nav.Link>
                    <Nav.Link onClick={()=>setShowCart(false)} as={Link} to="/about"><h3>About</h3></Nav.Link>
                    <Nav.Link onClick={()=>setShowCart(false)} as={Link} to="/contactus"><h3>ContactUs</h3></Nav.Link>
                    <Nav.Link onClick={()=>setShowCart(false)} as={Link} to="/login"><h3>Login</h3></Nav.Link>
                </Nav>
            </Container>
            {showCart && <CartItems/>}
        </Navbar>
    </>
}
export default NavBar;
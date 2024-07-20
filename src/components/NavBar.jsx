import { Navbar,Nav,Container,Button } from "react-bootstrap";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
const NavBar = () => {
    return <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="justify-content-center">
                <Nav>
                    <Nav.Link as={Link} to="/"><h2>HOME</h2></Nav.Link>
                    <Nav.Link as={Link} to="/store"><h2>STORE</h2></Nav.Link>
                    <Nav.Link as={Link} to="/about"><h2>ABOUT</h2></Nav.Link>
                </Nav>
            </Container>
            <CartItems/>
        </Navbar>
    </>
}
export default NavBar;
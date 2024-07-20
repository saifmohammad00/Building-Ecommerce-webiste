import { Navbar,Nav,Container,Button } from "react-bootstrap";
import CartItems from "./CartItems";
const NavBar = () => {
    return <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="justify-content-center">
                <Nav>
                    <Nav.Link href="#HOME"><h2>HOME</h2></Nav.Link>
                    <Nav.Link href="#STORE"><h2>STORE</h2></Nav.Link>
                    <Nav.Link href="#ABOUT"><h2>ABOUT</h2></Nav.Link>
                </Nav>
            </Container>
            <CartItems/>
        </Navbar>
    </>
}
export default NavBar;
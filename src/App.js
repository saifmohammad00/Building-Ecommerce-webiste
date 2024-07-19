import { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Counter from "./components/counter";

const App=()=> {
  return (
   <Fragment>
    <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Store</Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    <Counter/>
   </Fragment>
    
  );
}

export default App;
import { Col, Container, Image, Row } from "react-bootstrap";
const Footer = () => {
    return <footer className="bg-primary text-white py-5">
    <Container>
        <Row>
            <Col xs={12} md={4} className="mb-4">
                <h1>The Generics</h1>
            </Col>
            <Col xs={12} md={6} className="mb-4">
                <div className="footer-icons">
                    <ul className="list-unstyled d-flex justify-content-center justify-content-md-end mb-0">
                        <li className="me-3">
                            <a href="https://www.youtube.com" target="_blank" className="text-white">
                                <Image src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
                                            alt="YouTube Logo"
                                            style={{ width: '80px', height: '80px' }}/>
                            </a>
                        </li>
                        <li className="me-3">
                            <a href="https://spotify.com" target="_blank" className="text-white">
                                <Image src="https://prasadyash2411.github.io/ecom-website/img/Spotify Logo.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" className="text-white">
                                <Image src="https://prasadyash2411.github.io/ecom-website/img/Facebook Logo.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
    </Container>
</footer>
}
export default Footer;
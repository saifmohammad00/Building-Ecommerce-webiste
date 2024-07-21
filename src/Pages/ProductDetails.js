import { Col, Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
    const images = [
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    ]
    let { index } = useParams();
    console.log(index);
    const imageIndex = parseInt(index, 10);
    console.log(imageIndex);
    return <Container className="mt-5">
        <Col md={{ span: 10, offset: 1 }} className="text-center">
            <Image src={images[imageIndex]} fluid style={{ width:"90%" }} />
            <h2 className="mt-3">Product Review: 4/5</h2>
        </Col>
    </Container>
}
export default ProductDetails;
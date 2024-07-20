import { Fragment, useContext } from "react"
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ContextApi from "../Store/ContextApi";

const ProductItems = () => {
    const productsArr = [

        {

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {

            title: 'Blue Color',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        }

    ]
    const conCtx=useContext(ContextApi);
    const addtocart=(item,index)=>{
             conCtx.addItem({
                id:index,
                title:item.title,
                price:+item.price,
                url:item.imageUrl,
                amount:1,
             })
    }
    return <Fragment>
        <Container className="mt-5">
            <Row xs={2} className="g-5">
                {productsArr.map((item, index) => (
                    <Col key={index} lg={5}>
                        <Card className="shadow-lg m-5">
                            <Card.Title className="text-center"><h2>{item.title}</h2></Card.Title>
                            <Card.Img src={item.imageUrl} className="p-5" />
                            <Card.Footer className="d-flex justify-content-between float-end">
                                <span>${item.price}</span>
                                <Button variant="primary" onClick={()=>addtocart(item,index)}>Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </Fragment>
}
export default ProductItems;
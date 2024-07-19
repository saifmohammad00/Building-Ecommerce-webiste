import { Fragment } from "react"
import { Card, Container, Row, Col } from "react-bootstrap";

const Counter = () => {
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
    return <Fragment>
        <Container className="mt-3">
            <Row>
                {productsArr.map((item) => {
                    return <Col xs={4}>
                        <Card className="shadow-lg">
                            <Card.Title>
                                {item.title}
                            </Card.Title>
                            <Card.Img src={item.imageUrl}/>
                            <Card.Footer>${item.price}</Card.Footer>
                        </Card>
                    </Col>
                })}
            </Row>
        </Container>
    </Fragment>
}
export default Counter;
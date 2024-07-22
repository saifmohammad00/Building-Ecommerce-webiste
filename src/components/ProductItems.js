import { Fragment, useContext } from "react"
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ContextApi from "../context/ContextApi";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/auth-context";
const url="https://crudcrud.com/api/ef20b764bf0c44e39012494983df42b7"
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
    const conCtx = useContext(ContextApi);
    const authCtx = useContext(AuthContext);
    const addtocart = async (item, index) => {
        const data = {
            id: index,
            title: item.title,
            price: +item.price,
            url: item.imageUrl,
            amount: 1,
        }
        let array = [];

        const res = await axios.get(`${url}/${authCtx.email}`)
        if (res.data) {
            for (const key in res.data) {
                array.push(res.data[key]);
            }
        }
        const existingdata = array.find((item) => item.id === data.id)
        if (existingdata) {
            const res = await axios.put(`${url}/${authCtx.email}/${existingdata._id}`, {
                id: index,
                title: item.title,
                price: +item.price,
                url: item.imageUrl,
                amount: existingdata.amount+1,

            })
        }
        else {
            const res=await axios.post(`${url}/${authCtx.email}`, data)
        }
        conCtx.addItem(data);
    }
    return <Fragment>
        <Container className="mt-5">
            <Row xs={2} className="g-5">
                {productsArr.map((item, index) => (
                    <Col key={index} lg={5}>
                        <Card className="shadow-lg m-5">
                            <Card.Title className="text-center"><h2 style={{ textDecoration: 'none' }}>{item.title}</h2></Card.Title>
                            <Link to={`/productDetails/${index}`}>
                                <Card.Img src={item.imageUrl} className="p-5" />
                            </Link>
                            <Card.Footer className="d-flex justify-content-between float-end">
                                <span>${item.price}</span>
                                <Button variant="primary" onClick={() => addtocart(item, index)}>Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </Fragment>
}
export default ProductItems;
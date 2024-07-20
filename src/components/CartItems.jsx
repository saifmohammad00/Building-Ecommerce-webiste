import { Offcanvas, Button, ListGroup } from "react-bootstrap";
import { useState } from "react";
const cartElements = [

    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 1,

    }

]
const CartItems = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }
    return <>
        <Button variant="primary" onClick={handleShow} className="me-3">Cart</Button>
        <Offcanvas show={show} onHide={handleClose} placement="end" backdrop={false} scroll={true} >
            <Offcanvas.Header closeButton >
                <Offcanvas.Title>Cart Items</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ListGroup>
                    <ListGroup.Item>
                        <div className="d-flex justify-content-between align-items-center">
                            <strong>Items</strong>
                            <strong>Price</strong>
                            <strong>Quantity</strong>
                        </div>
                    </ListGroup.Item>
                    {cartElements.map((item, index) => {
                        return <ListGroup.Item key={index}>
                            <div className="d-flex justify-content-between align-items-center">
                                <span style={{maxWidth:'100px'}}>
                                    <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '90px', marginRight: '10px' }} />
                                    <span>{item.title}</span>
                                </span>
                                <span>Price: ${item.price}</span>
                                <div>
                                    <div>Quantity: {item.quantity}</div>
                                    <Button variant="primary">Remove</Button>
                                </div>
                            </div>
                        </ListGroup.Item>
                    })}
                    <ListGroup.Item className="text-end" ><strong>Total</strong> $0.00</ListGroup.Item>
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    </>
}
export default CartItems;
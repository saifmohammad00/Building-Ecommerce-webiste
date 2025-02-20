import { Offcanvas, Button, ListGroup } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import ContextApi from "../../context/ContextApi";
import axios from "axios";
import AuthContext from "../../context/auth-context";
const url="https://crudcrud.com/api/ef20b764bf0c44e39012494983df42b7"
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
    const authCtx = useContext(AuthContext);
    const conCtx = useContext(ContextApi);
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }
    const handleRemove = async (id) => {
        conCtx.removeItem(id);
        const res = await axios.get(`${url}/${authCtx.email}`)
        const foundItem = res.data.find(item => item.id === id);
        if (foundItem.amount === 1) {
            const nres = await axios.delete(`${url}/${authCtx.email}/${foundItem._id}`)
        }
        else {
            const { _id, ...rest } = foundItem;
            const nres = await axios.put(`${url}/${authCtx.email}/${foundItem._id}`, {
                ...rest, amount: foundItem.amount - 1
            })
        }
    }
    useEffect(() => {
        async function loadCart() {
            try {
                const res = await axios.get(`${url}/${authCtx.email}`);
                console.log(res);
                for (const key in res.data) {
                    conCtx.addItem(res.data[key]);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        loadCart();

    }, [])
    return <>
        <Button variant="primary" onClick={handleShow} className="me-3">Cart {conCtx.items.length}</Button>
        <Offcanvas show={show} onHide={handleClose} placement="end" backdrop={false} scroll={true} style={{ maxHeight: "90vh", marginTop: "80px", border: '2px solid #007bff' }}>
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
                    {conCtx.items.map((item) => {
                        return <ListGroup.Item key={item.id}>
                            <div className="d-flex justify-content-between align-items-center">
                                <span style={{ maxWidth: '100px' }}>
                                    <img src={item.url} alt={item.title} style={{ maxWidth: '90px', marginRight: '10px' }} />
                                    <span>{item.title}</span>
                                </span>
                                <span>${item.price}</span>
                                <span>
                                    <input value={item.amount} style={{ maxWidth: "20px", marginRight: "5px" }} />
                                    <Button variant="primary" onClick={() => handleRemove(item.id)}>Remove</Button>
                                </span>
                            </div>
                        </ListGroup.Item>
                    })}
                    <ListGroup.Item className="text-end" ><strong>Total</strong> ${conCtx.totalAmount.toFixed(2)}</ListGroup.Item>
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    </>
}
export default CartItems;
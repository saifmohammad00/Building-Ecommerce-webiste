import { Button, Col, Container, Row } from "react-bootstrap";
const array = [
    {
        date: "JUL16",
        place: "DETROIT, MI",
        des: "DTE ENERGY MUSIC THEATRE",
        btn: "BUY TICKETS",
    },
    {
        date: "JUL19",
        place: "TORONTO, ON",
        des: "BUDWEISER STAGE",
        btn: "BUY TICKETS",
    },
    {
        date: "JUL 22",
        place: "BRISTOW, VA",
        des: "JIGGY LUBE LIVE",
        btn: "BUY TICKETS",
    },
    {
        date: "JUL 29",
        place: "PHOENIX, AZ",
        des: "AK - CHIN PAVILION",
        btn: "BUY TICKETS",
    },
    {
        date: "AUG 2",
        place: "LAS VEGAS, NV",
        des: "T - MOBILE ARENA",
        btn: "BUY TICKETS",
    },
    {
        date: "AUG 7",
        place: "CONCORD, CA",
        des: "CONCORD PAVILION",
        btn: "BUY TICKETS",
    }
]
const Home = () => {
    return <Container className="align-items-center mt-5" style={{maxWidth:"50rem"}}>
        <h2 className="text-center">Tours</h2>
        {array.map((item, index) => {
            return <Row key={index}>
                <Col className="d-flex justify-content-between m-1" style={{maxWidth:"50rem"}}>
                <Col xs={3}>{item.date}</Col>
                <Col xs={3}>{item.place}</Col>
                <Col xs={4}>{item.des}</Col>
                <Col xs={2}><Button>{item.btn}</Button></Col>
                </Col>
                <hr/>
            </Row>
        })}
    </Container>
}
export default Home;
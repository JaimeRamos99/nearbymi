import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
export default class Home extends React.Component {
    popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Recordatorio</Popover.Title>
            <Popover.Content>
                La información de la ocupación de las mesas es actualizada en <strong>tiempo real</strong>.
          </Popover.Content>
        </Popover>
    );
    render() {
        return (<React.Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Nearby</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Notificame!</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-secondary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Carousel >
                <Carousel.Item>
                    <img
                        style={{ height: 600 }}
                        className="d-block w-100"
                        src="https://s1.1zoom.me/b5353/683/Fast_food_Hamburger_Vegetables_Bottle_530823_3840x2160.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>El Corral Gourmet</h3>
                        <p>Expertos en hamburguesas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: 600 }}
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/767283.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Gato Negro</h3>
                        <p>Expertos en pizzas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: 600 }}
                        className="d-block w-100"
                        src="http://images6.fanpop.com/image/photos/39700000/Full-English-Breakfast-food-39782150-2000-1333.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>La Bonga del Sinú</h3>
                        <p>Expertos en Comida colombiana.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row style={{ paddingBottom: 40, paddingTop: 40 }}>

                <div style={{ paddingRight: 40, paddingLeft: 40 }}>
                    <Card style={{ width: '18rem' }}>
                        <OverlayTrigger trigger="click" placement="right" overlay={this.popover}>
                            <Card.Header style={{ height: 290 }}>
                                <Card.Img variant="top" style={{ height: 220 }} src="https://upload.wikimedia.org/wikipedia/commons/d/d8/El_Corral.jpg" />
                                <Badge pill variant="success" style={{ marginLeft: 50 }}> 10 / 11 mesas disponibles </Badge>
                            </Card.Header>
                        </OverlayTrigger>
                        <Card.Body style={{ height: 230 }}>
                            <Card.Title>El Corral Gourmet 93</Card.Title>
                            <Card.Text>
                                Restaurante tipico de Colombia, su especialidad son las hamburguesas, malteadas y etc..
                    </Card.Text>
                            <Button variant="primary" style={{ marginLeft: 70 }}>Ver ofertas</Button>
                        </Card.Body>
                    </Card>
                </div>


                <div style={{ paddingRight: 40 }}>
                    <Card style={{ width: '18rem' }}>
                        <OverlayTrigger trigger="click" placement="right" overlay={this.popover}>
                            <Card.Header style={{ height: 290 }}>
                                <Card.Img variant="top" style={{ height: 220 }} src="https://www.restaurantegatonegro.com.co/img/logo.png" />
                                <Badge pill variant="warning" style={{ marginLeft: 50 }}> 3 / 15 mesas disponibles </Badge>
                            </Card.Header>
                        </OverlayTrigger>
                        <Card.Body style={{ height: 230 }}>
                            <Card.Title>Gato Negro</Card.Title>
                            <Card.Text>
                                Gato Negro, Bar Restaurante, con más de 20 años de tradición en el famoso Parque de la 93, ícono y punto de referencia de Bogotá.
                                </Card.Text>
                            <Button variant="primary" style={{ marginLeft: 70 }}>Ver ofertas</Button>
                        </Card.Body>
                    </Card>
                </div>


                <div>
                    <Card style={{ width: '18rem' }}>
                        <OverlayTrigger trigger="click" placement="right" overlay={this.popover}>
                            <Card.Header style={{ height: 290 }}>
                                <Card.Img variant="top" style={{ height: 220 }} src="https://c.tfstatic.com/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant_photos/507/493507/source/7a17ed4805291b72d4e27a3da3370ae1.jpg" />
                                <Badge pill variant="danger" style={{ marginLeft: 50 }}> 0 / 15 mesas disponibles </Badge>
                            </Card.Header>
                        </OverlayTrigger>
                        <Card.Body style={{ height: 230 }}>
                            <Card.Title>La Bonga del Sinú</Card.Title>
                            <Card.Text>Restaurante de comida típica colombiana con gastronomía diversa...</Card.Text>
                            <Button variant="primary" style={{ marginLeft: 70 }}>Ver ofertas</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </React.Fragment>
        )
    }
}
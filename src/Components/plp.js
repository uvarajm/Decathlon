import React, { useState, useRef } from 'react';
import products from '../Mock/product.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button } from 'react-bootstrap';
import { useAddToCart } from '../Hooks/useAddToCart';
import InputSpinner from 'react-bootstrap-input-spinner';
// Product list page - list product details in home page 
const PLP = () => {
    const itemEls = useRef({});
    const addCart = useAddToCart();
    const [quantityCount, setQuantityCount] = useState(0)
    const calPrice = (qty, price) => {
        return qty > 0 ? qty * price : 0
    }
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    {
                        products.map((item, index) => {
                            return (
                                <Col md={4} key={index} ref={(element) => itemEls.current[index] = element}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.image} style={{ width: '100%', height: '20vw', objectFit: 'contain', objectPosition: 'top center' }} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>$ {item.price}</Card.Text>
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ width: '75px' }}>
                                                    <InputSpinner
                                                        type={'real'}
                                                        precision={2}
                                                        max={5}
                                                        min={0}
                                                        value={quantityCount}
                                                        step={1}
                                                        onChange={num => setQuantityCount(num)}
                                                        variant={'dark'}
                                                        size="sm" />
                                                </div>
                                                <Button style={{ padding: '0 10px', marginLeft: '20px' }} variant="primary" onClick={() => quantityCount > 0 ? addCart(item.id, item.price, quantityCount, calPrice(quantityCount, item.price)) : ''}>Add to cart</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <div className="height" style={{ height: '50px' }} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
export default PLP;
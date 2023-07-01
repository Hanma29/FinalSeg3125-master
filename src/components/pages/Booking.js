import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./Booking.css";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import TimePicker from 'react-bootstrap-time-picker';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';




export function Booking(){
    const [show, setShow] = useState(false);

    const toggle=() =>{
        setShow(!show);
    }


    return(
        <Container classname='containerBooking'>
            <Row >
                <Col>
                <Alert show={show} variant="success">
                    <Alert.Heading>Confirmed</Alert.Heading>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui eos saepe sapiente perferendis, harum ut nesciunt in amet vero consequuntur officiis vel. Blanditiis deserunt distinctio cum, quisquam consequatur eaque nihil.
                    </p>
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow(toggle)} variant="outline-success">
                            Close
                        </Button>
                    </div>
                    </Alert>
            
                    <h2 className='booking-title p-3'>Book Session</h2>
                    <Form className='form'> 
                        <Row className="col-md-6">
                            <Form.Group as={Col} controlId="floatingInput" className='form-group'>
                                {/* <Form.Label>First Name</Form.Label> */}
                                <Form.Control type="text" placeholder="First Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="floatingInput">
                                {/* <Form.Label className='text-center'>Password</Form.Label> */}
                                <Form.Control type="text" placeholder="Last Name" />
                            </Form.Group>
                        </Row>
                        <Row className="form-row col-md-6">
                            <Form.Group as={Col} controlId="floatingInput">
                                {/* <Form.Label className='text-center'>Email</Form.Label> */}
                                <Form.Control type="phoneNumber" placeholder="Phone Number" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formBasicEmail">
                                {/* <Form.Label className='text-center'>Password</Form.Label> */}
                                <Form.Control type="Email" placeholder="Email" />
                            </Form.Group>
                        </Row>
                        <Row className="col-md-6">
                            <Form.Group as={Col} controlId="floatingInput">
                                {/* <Form.Label>Email</Form.Label> */}
                                <Form.Control type="date" placeholder="Date" ></Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="floatingInput">
                                {/* <Form.Label>Time</Form.Label> */}
                                <TimePicker start="10:00" end="18:00" step={30} />
                            </Form.Group>
                        </Row>
                        <Row className="col-md-6">
                            <Form.Group as={Col}>
                                <Form.Select as={Col} aria-label="Default select example">
                                    <option>Coach</option>
                                    <option value="1">Jamal Thompson</option>
                                    <option value="2">Jummal Anunoby</option>
                                    <option value="3">Lebron Ball</option>
                                    <option value="4">D'Angelo Portis</option>
                                    <option value="5">Lamelo Lillard</option>
                                    <option value="6">Pascal Leonard</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Select as={Col} aria-label="Default select example">
                                    <option>Purpose of Appointment</option>
                                    <option value="1">Shooting</option>
                                    <option value="2">Rebounding</option>
                                    <option value="3">Defence</option>
                                    <option value="4">Dribbling</option>
                                    <option value="5">Passing</option>
                                    <option value="6">Basketball Knowledge</option>


                                    
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="form-row col-md-6">
                            <Form.Group as={Col} controlId="ControlArea1">
                                <Form.Label></Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Message"/>
                            </Form.Group>
                        </Row>
                        <Button classname="form-row" onClick={() => setShow(toggle)} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>



        
        
    );
}





        /* // <TimePicker start="10:00" end="18:00" step={30} /> */

import { React } from 'react'
import Button  from 'react-bootstrap/Button';
import Card  from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image  from "./assets/Shootingimage.jpg";
import Image2 from "./assets/Defending.jpg"
import Image3 from "./assets/Rebound.jpg"
import Image4 from "./assets/Dribbling.jpg"
import Image5 from "./assets/passing.jpg"
import Image6 from "./assets/knowledge.jpg"
import "./Services.css";
import { Booking } from "./Booking";
import { Navbar } from '../Navbar';




export function Services() {
    return (
        <Container>
        <Row className='card-row'>
          <Col className='card-col'>
          <Card>
            <Card.Img variant="top" src={Image} className="card-image" />
            <Card.Body>
              <Card.Title>Shooting</Card.Title>
              <Card.Text>
                <p>Learn to develop a great shot with the greatest shooters assisting you through your journey.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Cost $200/HR</small>
            </Card.Footer>
          </Card>
          </Col>
      <Col className='card-col'>
          <Card>
        <Card.Img variant="top" src={Image2} className="card-image" />
        <Card.Body>
          <Card.Title>Defending</Card.Title>
          <Card.Text>
            Learn to develop the best lockdown skills a defender can have and be a living nightmare to enemy front line.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Cost $100/HR</small>
        </Card.Footer>
      </Card>
      </Col>
      <Col className='card-col'>
          <Card>
        <Card.Img variant="top" src={Image3} className="card-image" />
        <Card.Body>
          <Card.Title>Rebounding</Card.Title>
          <Card.Text>
            <p>A lot of people don't know the importance of rebounding so learn from the best.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Cost $100/HR</small>
        </Card.Footer>
      </Card>
      </Col>
      </Row>
      <Row className='card-row'>
        <Col className='card-col'>
          <Card>
        <Card.Img variant="top" src={Image4} className="card-image" />
        <Card.Body>
          <Card.Title>Dribble </Card.Title>
          <Card.Text>
            <p>Great calls deserve great artists, let's get your true skills to next level.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Cost $150/HR</small>
        </Card.Footer>
      </Card>
      </Col>
        <Col className='card-col'>
          <Card>
        <Card.Img variant="top" src={Image5} className="card-image" />
        <Card.Body>
          <Card.Title>Passing</Card.Title>
          <Card.Text>
            <p>Learn how to move the ball around and be the playmaker to let your teammates score.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Cost $125/HR</small>
        </Card.Footer>
      </Card>
      </Col>
          <Col className='card-col'>
          <Card>
        <Card.Img variant="top" to="/Booking"src={Image6} className="card-image" />
        <Card.Body>
          <Card.Title>Smach like a Master</Card.Title>
          <Card.Text>
            <p>Learn how to change the game like top tier player with knowledgeable coaches.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Cost $75/HR.</small>
        </Card.Footer>
      </Card>
      </Col>
      <Row className='card-button'>
        <Col className='card-button-col'>
        <Button classname="bookingButton" href='/Booking' variant="primary" size="lg" type="submit">
        Book now
        </Button>
        </Col>
      </Row>
      
      
        </Row>
      </Container>
      );
  }
  

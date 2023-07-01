import "./Home.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export function Home(){
    return(
        <Container>
            <Row>
                <Col>
                <h1 className="home-text">
                Let us get your own best version <br/>
                simply<br/> 
                Join us!</h1>
                </Col>
                <Col>
                    <p className='body-text'> Join the spirited world of volleyball at our local university! Experience the thrill of spikes, digs, and incredible teamwork as you dive into the dynamic sport that unites players and fans alike. Our university offers a vibrant volleyball program, where passion meets skill and competition ignites. Whether you're an aspiring athlete or a fervent supporter, our dedicated coaching staff and state-of-the-art facilities create the perfect environment to hone your abilities and take your love for the game to new heights. Join us, and together, let's serve, set, and spike our way to victory!




</p>
                </Col>
            </Row>
            
        </Container>
        
    );

}

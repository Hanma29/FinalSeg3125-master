import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Tippy from '@tippy.js/react';
import "./League.css";

export function League(){
    return (
        <Container>
         <Row>
            <Col>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black'}}> Division 1 </span>}>
                                <p>D1 Teams</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Teams current Win-Loss record </span>}>
                                <p>W</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Losses </span>}>
                                <p>L</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Winning Percenntage </span>}>
                                <p>PCT</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Home Record </span>}>
                                <p>HOME</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Away Record </span>}>
                                <p>AWAY</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Division Record </span>}>
                                <p>DIV</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Conference Record </span>}>
                                <p>CONF</p>
                            </Tippy>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1   Miami Celtics</td>
                        <td>53</td>
                        <td>29</td>
                        <td>.646</td>
                        <td>29-12</td>
                        <td>24-17</td>
                        <td>13-3</td>
                        <td>35-17</td>
                    </tr>
                    <tr>
                        <td>2 Boston Bucks</td>
                        <td>51</td>
                        <td>31</td>
                        <td>0.622</td>
                        <td>28-13</td>
                        <td>23-18</td>
                        <td>9-7</td>
                        <td>33-19</td>
                    </tr>
                    <tr>
                        <td>3 Milwaukee 76ers</td>
                        <td>51</td>
                        <td>31</td>
                        <td>0.622</td>
                        <td>27-14</td>
                        <td>24-17</td>
                        <td>12-4</td>
                        <td>33-19</td>
                    </tr>
                    <tr>
                        <td>4 Philadelphhia Raptors</td>
                        <td>51</td>
                        <td>31</td>
                        <td>0.622</td>
                        <td>24-17</td>
                        <td>24-17</td>
                        <td>6-10</td>
                        <td>32-20</td>
                    </tr>
                    <tr>
                        <td>5 Toronto Bulls</td>
                        <td>48</td>
                        <td>34</td>
                        <td>0.585</td>
                        <td>24-17</td>
                        <td>24-17</td>
                        <td>10-6</td>
                        <td>30-22</td>
                    </tr>
                </tbody>
                </Table>
            </Col>
            <Col>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black'}}> Division 1 </span>}>
                                <p>D1 Teams</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Teams current Win-Loss record </span>}>
                                <p>W</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Losses </span>}>
                                <p>L</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Winning Percenntage </span>}>
                                <p>PCT</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Home Record </span>}>
                                <p>HOME</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Away Record </span>}>
                                <p>AWAY</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Division Record </span>}>
                                <p>DIV</p>
                            </Tippy>
                        </th>
                        <th>
                            <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Conference Record </span>}>
                                <p>CONF</p>
                            </Tippy>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1   Pheonix Grizzlies</td>
                        <td>64</td>
                        <td>18</td>
                        <td>.780</td>
                        <td>32-9</td>
                        <td>32-9</td>
                        <td>10-6</td>
                        <td>39-13</td>
                    </tr>
                    <tr>
                        <td>2 Memphis State Warriors</td>
                        <td>56</td>
                        <td>26</td>
                        <td>0.683</td>
                        <td>30-11</td>
                        <td>26-15</td>
                        <td>11-5</td>
                        <td>36-16</td>
                    </tr>
                    <tr>
                        <td>3 Golden Mavricks</td>
                        <td>53</td>
                        <td>29</td>
                        <td>0.646</td>
                        <td>31-10</td>
                        <td>22-19</td>
                        <td>12-4</td>
                        <td>33-19</td>
                    </tr>
                    <tr>
                        <td>4 Dallas Jazz</td>
                        <td>52</td>
                        <td>30</td>
                        <td>0.634</td>
                        <td>29-12</td>
                        <td>23-18</td>
                        <td>14-2</td>
                        <td>36-16</td>
                    </tr>
                    <tr>
                        <td>5 Denver Timberwolves</td>
                        <td>49</td>
                        <td>33</td>
                        <td>0.598</td>
                        <td>29-12</td>
                        <td>20-21</td>
                        <td>15-1</td>
                        <td>33-19</td>
                    </tr>
                </tbody>
                </Table>
            </Col>
          </Row>
          <Row className='second'>
            <Col sm={8}>
                <Table striped bordered hover variant="dark" className='form-table'>
                    <thead>
                        <tr>
                            <th>
                                <Tippy content={<span style={{color: 'white', backgroundColor: 'black'}}> Division 1 </span>}>
                                    <p>D1 Teams</p>
                                </Tippy>
                            </th>
                            <th>
                                <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Teams current Win-Loss record </span>}>
                                    <p>W</p>
                                </Tippy>
                            </th>
                            <th>
                                <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Losses </span>}>
                                    <p>L</p>
                                </Tippy>
                            </th>
                            <th>
                                <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Winning Percenntage </span>}>
                                    <p>PCT</p>
                                </Tippy>
                            </th>
                            <th>
                                <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Home Record </span>}>
                                    <p>HOME</p>
                                </Tippy>
                            </th>
                            <th>
                                <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Away Record </span>}>
                                    <p>AWAY</p>
                                </Tippy>
                            </th>
                            <th>
                                <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Division Record </span>}>
                                    <p>DIV</p>
                                </Tippy>
                            </th>
                            <th>
                                <Tippy content={<span style={{color: 'white', backgroundColor: 'black', textAlign: 'center'}}> Conference Record </span>}>
                                    <p>CONF</p>
                                </Tippy>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1   New York Lakers</td>
                            <td>49</td>
                            <td>23</td>
                            <td>.681</td>
                            <td>29-7</td>
                            <td>20-166</td>
                            <td>10-2</td>
                            <td>31-11</td>
                        </tr>
                        <tr>
                            <td>2 Washington Kings</td>
                            <td>48</td>
                            <td>24</td>
                            <td>0.667</td>
                            <td>28-8</td>
                            <td>20-16</td>
                            <td>8-4</td>
                            <td>26-16</td>
                        </tr>
                        <tr>
                            <td>3 Indiana Blazers</td>
                            <td>46</td>
                            <td>26</td>
                            <td>0.639</td>
                            <td>26-10</td>
                            <td>20-16</td>
                            <td>11-1</td>
                            <td>30-12</td>
                        </tr>
                        <tr>
                            <td>4 Detroit City Thunder</td>
                            <td>41</td>
                            <td>21</td>
                            <td>0.569</td>
                            <td>25-11</td>
                            <td>16-20</td>
                            <td>4-8</td>
                            <td>25-17</td>
                        </tr>
                        <tr>
                            <td>5 Orlando Rockets</td>
                            <td>41</td>
                            <td>31</td>
                            <td>0.569</td>
                            <td>25-11</td>
                            <td>16-20</td>
                            <td>9-3</td>
                            <td>24-18</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
          </Row>
          <Row>
            <Col>
                <h1 className='BookLeague'>
                    Join the League <br/>
                    and <br/>
                    <strong>Get A Bucket</strong>
                </h1>
            </Col>
          </Row>
        </Container>
      );
}
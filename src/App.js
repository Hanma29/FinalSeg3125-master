import './App.css';
import { Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import { Home } from "./components/pages/Home"
import { Services } from "./components/pages/Services"
import { League } from "./components/pages/League"
import { SignUp } from "./components/pages/SignUp"
import { Support } from "./components/pages/Support"
import { Navbar }  from "./components/Navbar" 
import { Booking } from './components/pages/Booking';
import {Footer} from './components/pages/Footer';
import { HomeFr } from './components/pages/HomeFr';

function App() {
  return ( 
  <> 
  <Navbar></Navbar>
  <Container className='mb-4'>
    <Routes>
      <Route path='/' element={<Home/> }></Route>
      <Route path='/Services' element={<Services/>}></Route>
      <Route path='/League' element={<League/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
      <Route path='/Support' element={<Support/>}></Route>
      <Route path='/Booking' element={<Booking/>}></Route>
      <Route path='/HomeFr' element={<HomeFr/>}></Route>
    </Routes>
  </Container>
  </>
  );
}

export default App;

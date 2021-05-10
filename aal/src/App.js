import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import logo from './images/logo-2.png';

function App() {
  return (
    <Container fluid className="App">
      
        <Navbar expand="lg" fixed="top">
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto nav-container">
              <a href="#home" className="mr-auto"><img className="logo" alt="" src={logo} /></a>
              <a style={{ color: "#111" }} className="nav-link" href="#home">Home</a>
              <a style={{ color: "#111" }} className="nav-link" href="#about">About</a>
              <a style={{ color: "#111" }} className="nav-link" href="#contact">Contact</a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <div id="home"> 
        <Home />
      </div>
      <div id="about" >
        <About />
      </div>
      <div id="contact" >
        <Contact />
      </div>
      <Footer />
    </Container>
  );
}

export default App;

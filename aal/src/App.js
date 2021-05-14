import "./App.css";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import logo from './images/logo-2.png';
import email from './images/email.png';
import phone from './images/phone.png';


function App() {
  return (
    <div className="App" id="top">
      <Container fluid >   
        <div className="nav-container">
          <a href="#top"><img className="logo" alt="" src={logo} /></a>
          <div className="contact-info">
            <div className="email">
              <img className="logo" alt="" src={email} />
              <a href="mailto:sheri@awayatlasttravel.com">sheri@awayatlasttravel.com</a>
            </div>
            <div className="phone">
              <img className="logo" alt="" src={phone} />
              <a href="tel:217-474-7359">217-474-7359</a>
            </div>
          </div>
        </div>

        <Home />
        <About />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

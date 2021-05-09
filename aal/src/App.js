import "./App.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
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
      <Router>
        <Navbar expand="lg" className="nav-container">
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto nav-bar">
              <Link to="/" className="mr-auto"><img className="logo" alt="" src={logo} /></Link>
              <Link style={{ color: "#111" }} className="nav-link" to="/">Home</Link>
              <Link style={{ color: "#111" }} className="nav-link" to="/about">About</Link>
              <Link style={{ color: "#111" }} className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;

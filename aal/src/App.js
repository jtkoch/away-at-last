import './App.css'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Container className="App">
        <Navbar expand="lg">
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle" >
            <Nav className="mr-auto">
              <Link style={{color:"#111"}} className="nav-link" to="/">Home</Link>
              <Link style={{color:"#111"}} className="nav-link" to="/about" >About</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
      </Container>
    </Router>
  );
}

export default App;

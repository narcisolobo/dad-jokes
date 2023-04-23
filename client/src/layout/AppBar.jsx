/* react */
import { useContext } from 'react';

/* React Bootstrap  */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/* React Router Bootstrap */
import { LinkContainer } from 'react-router-bootstrap';

/* local */
import { AuthContext } from '../context/AuthContext';

function AppBar() {
  const { state } = useContext(AuthContext);

  return (
    <Navbar variant="dark" bg="primary" expand="lg">
      <Container>
        <LinkContainer to="/dad-jokes">
          <Navbar.Brand>DAD JOKES</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="nav-menu" />
        <Navbar.Collapse id="nav-menu">
          <Nav className="me-auto">
            <LinkContainer to="/dad-jokes">
              <Nav.Link>All Dad Jokes</Nav.Link>
            </LinkContainer>
            {state.user && (
              <LinkContainer to="/dad-jokes/new">
                <Nav.Link>Add New Dad Joke</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;

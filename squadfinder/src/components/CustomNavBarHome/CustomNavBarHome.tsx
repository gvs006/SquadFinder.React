import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">LOGOSF</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Novidades!</Nav.Link>
            <Nav.Link href="#pricing">SF Plus+</Nav.Link>

            <NavDropdown title="Informações" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sobre nós</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contato
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Outros projetos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Modal escolher tema
              </NavDropdown.Item>


            </NavDropdown>
          </Nav>
          <Nav>
          
            <Nav.Link eventKey={2} href="#signup">
              Cadastro
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
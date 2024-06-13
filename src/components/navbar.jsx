'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../componentsstyles/navbar.module.scss';

function BasicExample() {
  return (
    <Navbar expand="lg" className={`${styles.navbar}`}>
      <Container>
        <Navbar.Brand href="/" className={styles.logo}>
          vigitudiant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={styles.link}>
              Home
            </Nav.Link>
            <Nav.Link href="dashboard" className={styles.link}>
              dashbord
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

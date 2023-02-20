import { Button } from "antd";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.scss";
import "../../components/mediaQueries.scss";
import {datacontext} from '../myDataContext/myDataContext';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://trydo.rainbowit.net/assets/images/logo/logo-all-dark.png"
            alt=""
            className="brand-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <datacontext.Consumer>
              {({ menus }) => {
                return (
                  <>
                    {menus.map((menu, i) => (
                      <Nav.Link key={i} href="#features">
                        {menu}
                      </Nav.Link>
                    ))}
                  </>
                );
              }}
            </datacontext.Consumer>
          </Nav>

          <Nav>
            <Nav.Link href="#buynow">
              <Button className="buy-now-button d-none d-md-block">
                BUY NOW
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

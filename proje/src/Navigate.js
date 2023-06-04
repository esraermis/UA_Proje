import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

//const [collapsed, setCollapsed] = useState(true);

//const toggleNavbar = () => setCollapsed(!collapsed);

class Navigate extends Component {

	render() {
		return (
			<div >
	
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          <h1>ShopingPassion.com</h1>
        </NavbarBrand>
        <NavbarToggler className="me-2" />
        <Collapse navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Profil</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
	
		);
	}
}

export default Navigate;



import React, { Component } from "react";
import CartSummary from "../cart/CartSummary";
import {Link} from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Navi extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className='navi' light expand="md">
          <NavbarBrand><Link to='/'>Online Shopping
          <img src="https://img.icons8.com/dusk/64/000000/shopping-cart.png" /></Link></NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <NavLink className='navi-item'><Link to='saveproduct'>Product add</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink target='_blank' href="https://github.com/fuadhajiyev/React-Redux-Shopping-App">
                  App GitHub source code
                </NavLink>
              </NavItem>

              <CartSummary />
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;

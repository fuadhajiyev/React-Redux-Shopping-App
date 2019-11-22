import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";

class CartSummary extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " delete to cart", 1);
  }

  renderEmpty() {
    return (
      <NavItem>
        <NavLink>empty cart</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(cartItem => (
            <DropdownItem key={cartItem.product.id}>
              <div onClick={() => this.removeFromCart(cartItem.product)}>
                <img src="https://img.icons8.com/small/16/000000/delete-sign.png" />
              </div>

              {cartItem.product.productName}
              <Badge color="warning">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
            <Link to={"cart"}>
              <span> go to cart</span>
            </Link>{" "}
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";
import * as cartActions from "../../redux/actions/cartActions";

class CartDetail extends Component {
    removeFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " delete to cart", 1);

    }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {this.props.cart.map(cartItem => (
              <tr key={cartItem.product.id} >
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button onClick={() => this.removeFromCart(cartItem.product)} color="danger">
                    delete
                  </Button>
                </td>
              </tr >
            ))}
          </tbody>
        </Table>
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
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);

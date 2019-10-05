import React, { Component } from "react";
import "./style.scss";
import util from "../util";
export default class Products extends Component {
  render() {
    const productItems = this.props.products.map(product => {
      return (
        <div className="col-md-4" key={product.id}>
          <div className="thumbnail text-center">
            <a
              href={`#${product.id}`}
              onClick={e => this.props.handleAddToCart(e, product)}
            >
              <img src={`/products/${product.sku}_1.jpg`} alt={product.title} />
              <p>{product.description}</p>
            </a>
            <div>
              <b>{util.formatCurrency(product.price)}</b>
              <button
                className="btn btn-primary"
                onClick={e => this.props.handleAddToCart(e, product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row product-container">{productItems}</div>;
  }
}
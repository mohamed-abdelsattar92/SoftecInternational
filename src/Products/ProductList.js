import React from "react";
import { withStyles, Paper } from "@material-ui/core";
import Product from "./Product";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  }
});

const ProductList = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {props.products.map(product => {
        return (
          <div className="productContainer" style={{ width: "25%", display: "flex", alignItems: "center", alignSelf: "center" }}>
            <Product name={product.ProductName} price={product.ProductPrice} quantity={product.AvailablePieces} img={product.ProductImg} />
          </div>
        );
      })}
    </div>
  );
};

export default withStyles(styles)(ProductList);

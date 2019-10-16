import { Paper, withStyles } from "@material-ui/core";
import React from "react";
import Product from "../Products/Product";

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    width: "100%"
  },
  productAndQuantityContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  quantity: {
    marginLeft: "auto",
    fontSize: "x-large",
    width: "40%",
    textAlign: "center"
  },
  customerName: {
    fontSize: "x-large",
    fontWeight: "bold"
  }
});

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <div className={classes.customerName}>Customer Name: {this.props.customerName}</div>
        {this.props.products.map(product => {
          return (
            <div className={classes.productAndQuantityContainer} key={product.product.ProductId}>
              <div style={{ width: "60%" }}>
                <Product name={product.product.ProductName} price={product.product.ProductPrice} quantity={product.product.AvailablePieces} img={product.product.ProductImg} />
              </div>
              <div className={classes.quantity}>Quantity: {product.quantity}</div>
            </div>
          );
        })}
      </Paper>
    );
  }
}

export default withStyles(styles)(Order);

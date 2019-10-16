import React from "react";
import { withStyles, Paper } from "@material-ui/core";
import Product from "./Product";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  }
});

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editDialogOpen: false
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        {this.props.products.map(product => {
          return (
            <div className="productContainer" style={{ width: "25%", display: "flex", alignItems: "center", alignSelf: "center" }} key={product.ProductId}>
              <Product name={product.ProductName} price={product.ProductPrice} quantity={product.AvailablePieces} img={product.ProductImg} onClick={this.onClick} />
            </div>
          );
        })}
      </Paper>
    );
  }

  onClick = product => event => {
    console.log(product, event);
  }
}

export default withStyles(styles)(ProductList);

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField, withStyles } from "@material-ui/core";
import React from "react";
import Product from "./Product";
import { editProductQuantity } from "../Data/Data";

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
      editDialogOpen: false,
      productId: -1
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        {this.props.products.map(product => {
          return (
            <div className="productContainer" style={{ width: "25%", display: "flex", alignItems: "center", alignSelf: "center" }} key={product.ProductId}>
              <Product id={product.ProductId} name={product.ProductName} price={product.ProductPrice} quantity={product.AvailablePieces} img={product.ProductImg} onClick={this.onClick} />
            </div>
          );
        })}
        <Dialog open={this.state.editDialogOpen} onClose={this.handleDialogClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Quantity</DialogTitle>
          <DialogContent>
            <DialogContentText>Please Add the Desired Quantity.</DialogContentText>
            <TextField autoFocus margin="dense" id="quantity" label="Quantity" type="number" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.editQuantity} color="primary">
              Change
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    );
  }

  onClick = id => {
    console.log(id);
    this.setState({
      editDialogOpen: true,
      productId: id
    });
  };

  handleDialogClose = () => {
    this.setState({
      editDialogOpen: false
    });
  };

  editQuantity = event => {
    console.log(event);
    let quantity = parseInt(document.querySelector("#quantity").value);
    editProductQuantity(this.state.productId, quantity);
    this.setState({
      editDialogOpen: false
    });
  };
}

export default withStyles(styles)(ProductList);

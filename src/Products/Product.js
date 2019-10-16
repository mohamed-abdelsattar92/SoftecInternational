import { withStyles } from "@material-ui/core";
import React from "react";

const styles = theme => ({
  productContainer: {
    display: "flex",
    border: "1px solid #aaaaaa",
    borderRadius: theme.spacing(0.75),
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    height: "100%",
    boxSizing: "border-box",
    position: "relative"
  },
  productImg: {
    width: "40%",
    height: "40%",
    marginRight: theme.spacing(3),
    display: "inline-block"
  },
  productInformationContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left"
  },
  price: {
    color: "#006fcc",
    fontWeight: 700,
    fontSize: "x-large"
  },
  name: {
    fontWeight: "lighter"
  },
  quantity: {
    display: "flex",
    alignItems: "center",
    color: "#FF5555",
    "& .icon": {
      cursor: "pointer",
      color: "#000000",
      border: "1px solid black",
      borderRadius: "2px",
      marginRight: theme.spacing(1),
      background: "#a0afad",
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
      padding: theme.spacing(0.5)
    },
    "& span": {
      fontWeight: "bold",
      padding: "0 .5em",
      fontSize: "large"
    }
  },
  outOfStock: {
    color: "#FF0000",
    fontWeight: "bold"
  }
});

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityEditable: false
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.productContainer} onClick={this.props.onClick}>
        <img className={classes.productImg} src={this.props.img} alt="product" />
        <div className={classes.productInformationContainer}>
          <h3 className={classes.name}>{this.props.name}</h3>
          <span className={classes.price}>${this.props.price}</span>
          {this.props.quantity <= 10 && this.props.quantity !== 0 && (
            <div className="ribbon">
              <span>ONLY {this.props.quantity} LEFT IN STOCK</span>
            </div>
          )}
          {this.props.quantity === 0 && (
            <div className="ribbon">
              <span>CURRENTLY OUT OF STOCK</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Product);

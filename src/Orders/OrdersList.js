import { Paper, withStyles } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { getProductById, getProductPrice, getCustomerName } from "../Data/Data";
import Order from "../Orders/Order";

const styles = theme => ({
  paper: {
    padding: theme.spacing(2)
  },
  orderContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    border: "1px solid #aaaaaa",
    borderRadius: theme.spacing(0.75),
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    boxSizing: "border-box",
    background: "#eeeeee"
  },
  price: {
    color: "#006fcc",
    fontWeight: 700,
    fontSize: "x-large",
    marginLeft: "auto"
  },
  date: {
    fontWeight: "bold"
  },
  paymentTye: {
    fontStyle: "italic",
    fontVariant: "small-caps",
    marginLeft: theme.spacing(4)
  }
});

class OrdersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        {this.props.orders.map(order => {
          return (
            <React.Fragment>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <div className={classes.orderContainer} key={order.OrderId}>
                    <div className={classes.date}>{new Date(order.OrderDate).toLocaleString()}</div>
                    <div className={classes.paymentTye}>{order.PaymentType}</div>
                    <div className={classes.price}>${this.getTotalOrderPrice(order)}</div>
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Order customerName={this.getCustomerName(order)} products={this.getOrderProductsAndQuantities(order)} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </React.Fragment>
          );
        })}
      </Paper>
    );
  }

  getTotalOrderPrice = order => {
    let totalOrderPrice = order.Products.map(product => {
      return getProductPrice(product.ProductId) * product.Quantity;
    }).reduce((acc, val) => {
      return acc + val;
    });
    return totalOrderPrice.toFixed(2);
  };

  getOrderProductsAndQuantities = order => {
    let products = order.Products.map(product => {
      return {
        product: getProductById(product.ProductId),
        quantity: product.Quantity
      };
    });
    return products;
  };

  getCustomerName = order => {
    return getCustomerName(order.UserId);
  };
}

export default withStyles(styles)(OrdersList);

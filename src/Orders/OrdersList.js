import React from "react";
import { withStyles, Paper } from "@material-ui/core";
import { getProductPrice } from "../Data/Data";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
                  <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
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
}

export default withStyles(styles)(OrdersList);

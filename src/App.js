import { Paper, withStyles } from "@material-ui/core";
import React from "react";
import "./App.css";
import CustomAppBar from "./CustomAppBar";
import { getOrders, getProducts } from "./Data/Data";
import OrdersList from "./Orders/OrdersList";
import Product from "./Products/Product";
import ProductList from "./Products/ProductList";
import Spacer from "./Spacer";

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  }
});

const App = props => {
  const { classes } = props;
  return (
    <div className="App">
      <header className="appHeader"></header>
      <main className="mainContent">
        <Paper className={classes.paper}>
          <Product name="Featured Product" price={1000} quantity={120} img="https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg" />
          <CustomAppBar title={"Products"} hint={"(You can click on low quantity items to edit them)"} />
          <ProductList products={getProducts()} />
          <Spacer />
          <CustomAppBar title={"Orders"} orders={true} />
          <OrdersList orders={getOrders()} />
        </Paper>
      </main>
      <footer className="appFooter"></footer>
    </div>
  );
};

export default withStyles(styles)(App);

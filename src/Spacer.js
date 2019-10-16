import React from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    padding: 0,
    margin: 0,
    height: theme.spacing.unit * 2.5
  }
});

const Spacer = props => {
  const { classes } = props;

  return <div className={classes.root}></div>;
};

export default withStyles(styles)(Spacer);

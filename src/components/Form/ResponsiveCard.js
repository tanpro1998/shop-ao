import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import ResponsiveConstant from "./ResponsiveConstant";

const styleSheet = (theme) => ({
  root: {
    [theme.breakpoints.down(ResponsiveConstant.mobileBreakpoint)]: {
      boxShadow: theme.shadows[0],
    },
    [theme.breakpoints.up(ResponsiveConstant.mobileBreakpoint)]: {
      width: 500,
      boxShadow: theme.shadows[2],
    },
    height: "100%",
  },
});

function ResponsiveCard({ classes, children }) {
  return <Card className={classes.root}>{children}</Card>;
}

export default withStyles(styleSheet)(ResponsiveCard);

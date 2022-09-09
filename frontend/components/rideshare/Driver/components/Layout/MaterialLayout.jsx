import React from "react";
import { Paper, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "../Footer";
import { theme, useStyle } from "./styles";

export default function MaterialLayout(props) {
  const { children } = props;
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

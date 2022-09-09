import React from "react";
import { Typography, Link } from "@mui/material";

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your submission
      </Typography>
      <Typography variant="subtitle1">
        We have emailed your confirmation, and will send you an update when your
        status got updated.
      </Typography>
      <Link color="inherit" href="/ride">
        Home Page
      </Link>
    </React.Fragment>
  );
}

export default CheckoutSuccess;

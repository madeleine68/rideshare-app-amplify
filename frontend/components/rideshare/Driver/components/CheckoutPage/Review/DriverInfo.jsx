import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";

function DriverInfo(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { firstName, lastName, address1, city, email, phone, state } =
    formValues;
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Shipping
      </Typography>
      <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
      <Typography gutterBottom>{address1}</Typography>
      <Typography gutterBottom>{city}</Typography>
      <Typography gutterBottom>{state}</Typography>
      <Typography gutterBottom>{email}</Typography>
      <Typography gutterBottom>{phone}</Typography>
    </Grid>
  );
}

export default DriverInfo;

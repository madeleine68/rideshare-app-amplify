import React from "react";
import { Typography, Grid } from "@mui/material";
import useStyles from "./styles";

function CarDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { category, year, make, kilometers, plateNum, carColor, licenceNum } =
    formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Car details
      </Typography>
      <Grid container>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Make</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{make}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Year</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{year}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Color</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{carColor}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Type</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{category}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Kilometers</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{kilometers}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Plate Number</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{plateNum}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Licence Number</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{licenceNum}</Typography>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  );
}

export default CarDetails;

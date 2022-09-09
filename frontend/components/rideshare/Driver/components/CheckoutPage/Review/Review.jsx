import React from "react";
import { useFormikContext } from "formik";
import { Typography, Grid } from "@mui/material";
import DriverInfo from "./DriverInfo";
import CarDetails from "./CarDetails";

export default function Review() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <Grid container spacing={2}>
        <DriverInfo formValues={formValues} />
        <CarDetails formValues={formValues} />
      </Grid>
    </React.Fragment>
  );
}

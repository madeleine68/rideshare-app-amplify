import React from "react";
import { Grid, Typography } from "@mui/material";
import { InputField, SelectField } from "../../FormFields";
import { Mode } from "@mui/icons-material";

const types = [
  {
    value: "SUV",
    label: "SUV",
  },
  {
    value: "Sedan",
    label: "Sedan",
  },
  {
    value: "Truck",
    label: "Truck",
  },
  {
    value: "Van",
    label: "Van",
  },
];
export default function CarForm(props) {
  const {
    formField: {
      category,
      year,
      make,
      kilometers,
      plateNum,
      carColor,
      licenceNum,
      licence,
      model,
    },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Car details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={category.name}
            label={category.label}
            data={types}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            type="text"
            name={make.name}
            label={make.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={model.name} label={model.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={carColor.name} label={carColor.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            type="number"
            name={year.name}
            label={year.label}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InputField
            type="number"
            name={kilometers.name}
            label={kilometers.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={plateNum.name} label={plateNum.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={licenceNum.name}
            label={licenceNum.label}
            fullWidth
          />
        </Grid>
        {/* <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            {licence.label}
          </Typography>
          <InputField type="file" name={licence.name} />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

import React from "react";
import { Grid, Typography } from "@mui/material";
import { InputField, SelectField } from "../../FormFields";

const cities = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "1",
    label: "New York",
  },
  {
    value: "2",
    label: "Chicago",
  },
  {
    value: "3",
    label: "Saigon",
  },
];

const states = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "Alberta",
    label: "Alberta",
  },
  {
    value: "British Columbia",
    label: "British Columbia",
  },
  {
    value: "Manitoba",
    label: "Manitoba",
  },
  {
    value: "New Brunswick",
    label: "New Brunswick",
  },
  {
    value: "Newfoundland and Labrador",
    label: "Newfoundland and Labrador",
  },
  {
    value: "Nova Scotia",
    label: "Nova Scotia",
  },
  {
    value: "Ontario",
    label: "Ontario",
  },
  {
    value: "Prince Edward Island",
    label: "Prince Edward Island",
  },
  {
    value: "Quebec",
    label: "Quebec",
  },
  {
    value: "Saskatchewan",
    label: "Saskatchewan",
  },
];

export default function AddressForm(props) {
  const {
    formField: {
      firstName,
      lastName,
      address1,
      email,
      city,
      state,
      phone,
      password,
      confirmPassword,
    },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Badic Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address1.name} label={address1.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={phone.name} label={phone.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={city.name} label={city.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            type="password"
            name={password.name}
            label={password.label}
            fullWidth
            autoComplete="on"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            type="password"
            name={confirmPassword.name}
            label={confirmPassword.label}
            fullWidth
            autoComplete="on"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

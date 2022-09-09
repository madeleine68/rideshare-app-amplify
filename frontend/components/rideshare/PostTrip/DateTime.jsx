import { TextField, Stack, Typography } from "@mui/material";

export default function DateTime({ onChange }) {
  return (
    <Stack
      component="form"
      spacing={2}
      sx={{
        my: 2,
        paddingBottom: 15,
        paddingTop: 5,
      }}
    >
      <Typography variant="h5">Schedule</Typography>
      <Typography variant="h6" sx={{ my: 3, color: "text.secondary" }}>
        Date and time should be precise
      </Typography>
      <TextField
        id="datetime-local"
        label="Date and Time"
        type="datetime-local"
        defaultValue="2022-08-30T10:30"
        sx={{ width: "20rem" }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onChange}
      />
    </Stack>
  );
}

import {
  TextField,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  Stack,
  FormControl,
  Typography,
  Button,
} from "@mui/material";

export default function TripDetails({ handleCarChange, onSubmit }) {
  return (
    <>
      <Stack
        component="form"
        sx={{ width: "20rem", my: 2 }}
        spacing={5}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5">Seats and Price</Typography>
        <Typography variant="h6" sx={{ my: 3, color: "text.secondary" }}>
          Enter the number of seats that are available
        </Typography>
        {/* <TextField label="Car Model" onChange={handleCarChange('car')}/> */}
        <TextField
          required
          id="outlined-number"
          label="Seat Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ min: 1 }}
          onChange={handleCarChange("seats")}
        />
        <FormControl>
          {/* <Typography variant="subtitle2" sx={{my: 3, color: 'text.secondary'}}>Note all prices are in CAD</Typography> */}
          <InputLabel htmlFor="outlined-adornment-amount">
            Price per Seat
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={handleCarChange("amount")}
            startAdornment={
              <InputAdornment position="start">CAD</InputAdornment>
            }
            label="Amount"
            required
          />
        </FormControl>
      </Stack>
      <Button
        variant="contained"
        sx={{ bgcolor: "info.main", my: 10 }}
        onClick={(e) => onSubmit(e)}
      >
        post trip
      </Button>
    </>
  );
}

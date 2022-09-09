import {
  Box,
  Autocomplete,
  TextField,
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
} from "@mui/material";
import { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Nav from "../../Nav";
import axios from "axios";
import PostedTrip from "./PostedTrip";
import Footer from "../Driver/components/Footer";

export default function Trips() {
  const [date, setDate] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTrip = () => {
    setLoading(true);
    axios
      .get("http://localhost:6006/api/trip/passenger", {
        params: {
          from: origin,
          to: destination,
          leavingAt: date,
          // ...(date ? { leavingAt: date } : null),
        },
      })
      .then((data) => setData(data.data))
      .catch((e) => setError(e));
    setLoading(false);
  };

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleSearch = () => {
    getTrip();
  };
  const areAllFieldsFilled = date != "" && origin != "" && destination != "";

  return (
    <Box className={styles.trip}>
      <Nav className={styles.nav} />
      <Paper
        className={styles.rideGlass}
        elevation={2}
        sx={{ width: "75vw", marginTop: "10px " }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={6} md={3} textAlign="justify">
            <Autocomplete
              id="from"
              options={topCity.map((option) => option.city)}
              onChange={(e, v) => setOrigin(v)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={({ target }) => setOrigin(target.value)}
                  label="From"
                />
              )}
            />
          </Grid>
          <Grid item xs={6} md={3} textAlign="justify">
            <Autocomplete
              id="to"
              onChange={(e, v) => setDestination(v)}
              options={topCity.map((option) => option.city)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={({ target }) => setDestination(target.value)}
                  label="To"
                />
              )}
            />
          </Grid>
          <Grid item xs={6} md={3} textAlign="justify">
            <TextField
              label="Date"
              type="date"
              default="2022-09-30"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} md={3} textAlign="justify">
            <Button
              onClick={handleSearch}
              variant="contained"
              sx={{
                bgcolor: "purple",
                ":hover": { bgcolor: "lightGreen" },
                fontSize: "1.1rem",
              }}
              disabled={!areAllFieldsFilled}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>
      {error && <p>{error}</p>}
      {loading && (
        <Stack
          sx={{ width: "70%", color: "grey.500", padding: "15px" }}
          spacing={2}
        >
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
        </Stack>
      )}
      {data && data.length == 0 && (
        <Typography variant="h5" color="error">
          Try different date
        </Typography>
      )}
      {data ? (
        data.map((trip, index) => {
          return <PostedTrip key={trip.id} trip={trip} index={index} />;
        })
      ) : (
        <Box sx={{ width: "50vw", height: "50vh" }}>
          <img src={"/bookRide.svg"} />
        </Box>
      )}
      <Footer />
    </Box>
  );
}

const topCity = [
  { city: "Toronto, ON, Canada" },
  { city: "Montreal, QC, Canada" },
  { city: "London, ON, Canada" },
  { city: "Ottawa, ON, Canada" },
  { city: "London, UK" },
  { city: "Mont Saint-Michel, France" },
  { city: "Vancouver, BC, Canada" },
  { city: "Victoria, BC, Canada" },
];

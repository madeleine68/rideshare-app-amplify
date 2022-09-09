import { Grid, Skeleton, Box, Stack, Button, Typography } from "@mui/material";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import DateTime from "./DateTime";
import ClearIcon from "@mui/icons-material/Clear";
import { MdCalculate } from "react-icons/md";
import styles from "../../../styles/Home.module.css";
import TripDetails from "./TripDetails";
import Nav from "./Nav";
import { saveData } from "../../../pages/api/tripRegisteration";
import { useDriver } from "../../../pages/api/signin";

const center = { lat: 43.6532, lng: -79.3832 };

const Trip = () => {
  const [libraries] = useState(["places"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleCarChange = (prop) => (event) => {
    setInputValues({ ...inputValues, [prop]: event.target.value });
  };
  const { driverName } = useDriver();
  const [inputValues, setInputValues] = useState({
    origin: "",
    destination: "",
    date: "2022-09-01T00:00:00",
    seats: 0,
    amount: 0,
  });

  const originRef = useRef(null);
  const destiantionRef = useRef(null);

  useEffect(() => {
    if (directionsResponse && selectedDate) {
      setInputValues(() => ({
        ...inputValues,
        origin: directionsResponse.request.origin,
        destination: directionsResponse.request.destination,
        date: selectedDate.target.value,
      }));
    }
  }, [directionsResponse, selectedDate]);

  if (!isLoaded) {
    return <Skeleton />;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    saveData(inputValues, driverName);
  };

  return (
    <>
      <Nav />
      <Box sx={{ flexGrow: 1, padding: "2rem", m: "2rem", mt: "4rem" }}>
        <Box sx={{ bgcolor: "text.disabled", color: "background.paper", p: 2 }}>
          {driverName && (
            <Typography variant="h5">
              Hello {driverName}, please fill out the following itinerary
            </Typography>
          )}
        </Box>
        <Typography variant="h6" sx={{ my: 3, color: "text.secondary", mb: 3 }}>
          As you drive from point A to point B, fill up your seats to cover your
          driving costs.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sm={12}>
            <DateTime onChange={handleDateChange} />
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Stack spacing={3}>
              <Typography variant="h5">Itinerary</Typography>
              <Typography variant="h6" sx={{ my: 3, color: "text.secondary" }}>
                View your trip details by specifying your origin and
                destination.
              </Typography>
              <Autocomplete>
                <div className={styles["input-contain"]}>
                  <input
                    type="text"
                    ref={originRef}
                    name="origin"
                    id="origin"
                  />
                  <label
                    htmlFor="origin"
                    className={styles["placeholder-text"]}
                  >
                    <div className={styles.text}>Origin</div>
                  </label>
                </div>
              </Autocomplete>
              <Stack direction="row" spacing={2} alignItems="center">
                <Autocomplete>
                  <div className={styles["input-contain"]}>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      ref={destiantionRef}
                    />
                    <label
                      htmlFor="destination"
                      className={styles["placeholder-text"]}
                    >
                      <div className={styles.text}>Destination</div>
                    </label>
                  </div>
                </Autocomplete>
                <ClearIcon aria-label="center back" onClick={clearRoute} />
              </Stack>
              <Stack direction="row">
                <Typography>Distance:&nbsp; </Typography>
                <Typography color="green">{distance}</Typography>
              </Stack>
              <Stack direction="row">
                <Typography>Duration:&nbsp; </Typography>
                <Typography color="green">{duration}</Typography>
              </Stack>
              <Button
                startIcon={<MdCalculate />}
                onClick={calculateRoute}
                variant="contained"
                size="small"
                sx={{ width: "30vw", minWidth: "300px" }}
              >
                Calculate your fuel cost and travel time
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sm={12}
            style={{ position: "relative", height: "40vh" }}
          >
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: true,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: true,
              }}
              onLoad={(map) => setMap(map)}
            >
              <Marker position={center} />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </Grid>
          <Grid item style={{ my: 3 }}>
            <TripDetails
              handleCarChange={handleCarChange}
              onSubmit={handleSubmit}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Trip;

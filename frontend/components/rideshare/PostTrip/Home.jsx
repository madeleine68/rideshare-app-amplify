import {
  Button,
  Typography,
  Grid,
  Stack,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PaymentIcon from "@mui/icons-material/Payment";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import Nav from "../../Nav";
import Router from "next/router";

export default function Home() {
  const handleSearch = () => {
    Router.push("/ride/trips");
  };
  return (
    <>
      <Nav />
      <Grid container spacing={1} sx={{ flexGrow: 1 }}>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={12}
          md={6}
          sm={12}
        >
          <Stack spacing={2} className={styles.rideGlass}>
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "center",
                borderRadius: 4,
                bgcolor: "#E65100",
              }}
            >
              <Typography variant="h5">Request a ride</Typography>
            </Box>
            <List sx={{ width: "100%", maxWidth: 360 }} spacing={3}>
              <ListItem>
                <ListItemAvatar>
                  <DirectionsCarIcon color="warning" fontSize="large" />
                </ListItemAvatar>
                <ListItemText primary="Wherever you are in Canada, find a ride or a carpool." />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <ImportantDevicesIcon color="warning" fontSize="large" />
                </ListItemAvatar>
                <ListItemText primary="Easy Online Booking" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <PaymentIcon color="warning" fontSize="large" />
                </ListItemAvatar>
                <ListItemText primary="Online Payment" />
              </ListItem>
            </List>

            <Button
              variant="contained"
              color="warning"
              sx={{ fontSize: "1.1rem" }}
              onClick={() => handleSearch()}
            >
              Find a ride
            </Button>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sm={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack spacing={2} className={styles.rideGlass}>
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "center",
                borderRadius: 4,
                bgcolor: "#00e676",
              }}
            >
              <Typography variant="h5"> Post a trip</Typography>
            </Box>
            <List sx={{ width: "100%", maxWidth: 360 }} spacing={3}>
              <ListItem>
                <ListItemAvatar>
                  <PaidIcon sx={{ color: "#00e676" }} fontSize="large" />
                </ListItemAvatar>
                <ListItemText primary="Make Money: get paid instantly" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <LocalGasStationIcon
                    sx={{ color: "#00e676" }}
                    fontSize="large"
                  />
                </ListItemAvatar>
                <ListItemText primary="Fill up your seats to cover your driving costs" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <CalendarMonthIcon
                    sx={{ color: "#00e676" }}
                    fontSize="large"
                  />
                </ListItemAvatar>
                <ListItemText primary="Flexible schedules: Drive when it fits your schedule." />
              </ListItem>
            </List>
            <Link href="/ride/driver-rules">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#00e676",
                  ":hover": { bgcolor: "#00e676" },
                  fontSize: "1.1rem",
                }}
              >
                Enter your trip
              </Button>
            </Link>
          </Stack>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={12}
          md={12}
          sm={12}
        >
          <img src="carRide-01.svg" alt="ride share" />
        </Grid>
      </Grid>
    </>
  );
}

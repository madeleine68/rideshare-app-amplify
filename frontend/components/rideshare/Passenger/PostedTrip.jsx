import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  CardHeader,
  Stack,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  Typography,
  Card,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { purple } from "@mui/material/colors";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostedTrip({ key, trip, index }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div key={key}>
        <Card
          sx={{
            width: "70vw ",
            marginTop: "15px",
            bgcolor: purple[50],
            borderRadius: "1rem",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                  {index + 1}
                </Avatar>
              }
              title={trip.from}
              subheader={trip.to}
            />
            <CardContent>
              <Typography variant="body2">{trip.leavingAt}</Typography>
              <Typography variant="body2" color="text.secondary">
                {trip.leavingTime}
              </Typography>
            </CardContent>
          </Stack>
          <CardActions disableSpacing>
            <IconButton aria-label="book" sx={{ color: "#ff5722" }}>
              <BookmarkIcon />
              <Typography>Book now</Typography>
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ fontWeight: "bold" }}
              >
                <Typography sx={{ color: "#d50000" }}>
                  {trip.seats} seats left
                </Typography>
                <Typography sx={{ color: "#00bfa5" }}>
                  ${trip.amount}
                </Typography>
              </Stack>
              <Typography paragraph>Driver: {trip.name}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
}

import { Box, Typography, Button, Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import DriveEtaTwoToneIcon from "@mui/icons-material/DriveEtaTwoTone";
import AvTimerTwoToneIcon from "@mui/icons-material/AvTimerTwoTone";
import { blue } from "@mui/material/colors";
import Link from "next/link";

export default function DriverRules() {
  const submitHandler = (e) => {
    e.preventDefault();
    setSelectionModel(!selectionModel);
  };

  const [selectionModel, setSelectionModel] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h4">Rules when posting a trip</Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <DriveEtaTwoToneIcon sx={{ fontSize: 90, color: blue[600] }} />
          <Typography variant="h5">Drive safely</Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <AvTimerTwoToneIcon sx={{ fontSize: 90, color: blue[600] }} />
          <Typography variant="h5">Be on time</Typography>
        </div>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={submitHandler} />}
            label="I understand that my account could be suspended if I break these rules"
          />
        </FormGroup>
        <Link href="/ride/login">
          <Button
            variant="contained"
            color="primary"
            disabled={!selectionModel}
            size="large"
            sx={{ width: "200px" }}
          >
            Next
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

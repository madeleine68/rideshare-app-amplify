import { Stack, Box } from "@mui/material";
import CheckoutSuccess from "../../components/rideshare/Driver/components/CheckoutPage/CheckoutSuccess";

const success = () => {
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
        <CheckoutSuccess />
      </Stack>
    </Box>
  );
};

export default success;

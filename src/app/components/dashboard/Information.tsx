import Header from "./Header";
import { Box } from "@mui/material";
import DataTables from "./DataTables";

function Information() {
  return (
    <Box sx={{ width: { md: "80%", xs: "100%" } }}>
      <Header />
      <DataTables />
    </Box>
  );
}

export default Information;

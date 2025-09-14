//components
import Header from "./Header";
import DataTables from "./DataTables";

// Mui components
import { Box } from "@mui/material";

// Rtk getData Query
import { useGetCustomersDataQuery } from "@/services/adminService";


function Information() {
  const { data } = useGetCustomersDataQuery();
  const customersData = data?.data;
  return (
    <Box sx={{ width: { md: "80%", xs: "100%" } }}>
      <Header />
      <DataTables data={customersData} />
    </Box>
  );
}

export default Information;

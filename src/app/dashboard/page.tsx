"use client";

import { Box } from "@mui/material";
import Sidebar from "@/app/dashboard/components/SideBar";
import Information from "./components/Information";

export default function DashboardPage() {
  return (
    <Box display="flex" justifyContent="end" minHeight="100vh">
      <Sidebar />
      <Information />
    </Box>
  );
}

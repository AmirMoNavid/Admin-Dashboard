import { getDashboardData } from "@/services/adminService";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Chip,
} from "@mui/material";

import moment from "jalali-moment";
import PaymentCard from "./PeymentCard";

interface rowTypes {
  id: number;
  user: {
    phoneNumber: number;
    name: string;
    office_id: number;
    username: string;
    avatarUrl: string;
  };
  debt: number;
  createdAt: string;
  modifiedAt: string;
  status: number;
}

const RecentPayments = () => {
  const [data, setData] = useState([]);

  const token = getCookie("token") as string;

  useEffect(() => {
    getDashboardData(token)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  const getStatusInfo = (status: number) => {
    if (status === 1)
      return {
        label: "doing",
        color: "#4F46E5",
        background: "#EEF2FF" as const,
      };
    if (status === 0)
      return {
        label: "done",
        color: "#10B981",
        background: "#ECFDF5" as const,
      };
    return { label: "unknown", color: "default" as const };
  };

  return (
    <Box p={3} bgcolor="#fff" borderRadius={2} boxShadow={2}>
      <Typography variant="subtitle1" fontWeight="bold" mb={2}>
        Recent Payments
      </Typography>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          padding: "10px",
          background: "#fff",
          border: "1px solid #dfe1e6ff",
          display: { xs: "none", md: "block" },
        }}
      >
        <Table sx={{ background: "#fff" }}>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#F3F4F6",
                borderRadius: "15px",
              }}
            >
              <TableCell sx={{ borderBottom: "none" }}>Order ID</TableCell>
              <TableCell sx={{ borderBottom: "none" }}>Customer</TableCell>
              <TableCell sx={{ borderBottom: "none" }}>Phone Number</TableCell>
              <TableCell sx={{ borderBottom: "none" }}>Date Created</TableCell>
              <TableCell sx={{ borderBottom: "none" }}>Debt</TableCell>
              <TableCell sx={{ borderBottom: "none" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(0, 7)?.map((row: rowTypes, index: number) => {
              const statusInfo = getStatusInfo(row.status);
              return (
                <TableRow
                  key={`${row.id}-${index}`}
                  sx={{ backgroundColor: "#fff" }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.user.name}</TableCell>
                  <TableCell>{row.user.phoneNumber}</TableCell>
                  <TableCell>
                    {moment(row.createdAt, "YYYY/MM/DD")
                      .locale("fa")
                      .format("YYYY/MM/DD")}
                  </TableCell>
                  <TableCell>{row.debt || "-"}</TableCell>
                  <TableCell>
                    <Chip
                      label={statusInfo.label}
                      variant="filled"
                      sx={{
                        backgroundColor: statusInfo.background,
                        color: statusInfo.color,
                      }}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          maxWidth: 360,
          mx: "auto",
          mt: 4,
          display: { xs: "block", md: "none" },
        }}
      >
        {data.slice(0, 3).map((payment, idx) => (
          <PaymentCard key={idx} payment={payment} />
        ))}
      </Box>
    </Box>
  );
};

export default RecentPayments;

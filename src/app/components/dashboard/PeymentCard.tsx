import { Box, Divider, Paper, Typography } from "@mui/material";
import moment from "jalali-moment";
import React from "react";

interface RowProps {
  label: string;
  value: string | number;
  color?: string;
}

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

const Row: React.FC<RowProps> = ({ label, value, color }) => (
  <Box display="flex" justifyContent="space-between" py={1}>
    <Typography fontWeight={500}>{label}</Typography>
    <Typography fontWeight={500} color={color || "text.primary"}>
      {value}
    </Typography>
  </Box>
);

const PaymentCard = ({ payment }: { payment: rowTypes }) => {
  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        p: 2,
        mb: 2,
        backgroundColor: "#fff",
      }}
    >
      <Row label="Customer" value={payment.user.name} />
      <Divider />
      <Row label="Reference ID" value={payment.user.username} />
      <Divider />
      <Row
        label="Date"
        value={moment(payment.createdAt, "YYYY/MM/DD")
          .locale("fa")
          .format("YYYY/MM/DD")}
      />
      <Divider />
      <Row label="Amount" value={payment.debt || "-"} />
      <Divider />
      <Row
        label="Status"
        value={payment.status === 0 ? "payed" : "paying"}
        color={payment.status === 0 ? "green" : "red"}
      />
    </Box>
  );
};
export default PaymentCard;

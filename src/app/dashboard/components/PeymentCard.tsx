// Mui components
import { Box, Divider, Typography } from "@mui/material";

// moment for convert Dates:
import moment from "jalali-moment";

// React.js
import React from "react";

//Types

interface RowProps {
  label: string;
  value: string | number;
  color?: string;
  isUserNAme?: boolean;
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

// custom Row

const Row: React.FC<RowProps> = ({ label, value, color, isUserNAme }) => (
  <Box display="flex" justifyContent="space-between" py={isUserNAme ? 1 : 2}>
    <Typography fontWeight={500} sx={{ paddingLeft: "10px" }}>
      {label}
    </Typography>
    <Typography
      fontWeight={500}
      fontSize={16}
      sx={{ width: "40%" }}
      color={color || "text.primary"}
    >
      {value}
    </Typography>
  </Box>
);

const PaymentCard = ({ payment }: { payment: rowTypes }) => {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          background: "#F3F4F6",
          padding: "0",
          borderRadius: 5,
          mb: 1,
          color: "#6B7280",
        }}
      >
        <Row
          isUserNAme={true}
          label="Customer"
          value={payment.user.name}
          color="#6B7280"
        />
      </Box>

      <Row label="Reference ID" value={payment.user.username} />
      <Divider />
      <Row
        label="Date"
        value={moment(payment.createdAt, "YYYY/MM/DD")
          .locale("en")
          .format("MMMM D ,YYYY")}
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

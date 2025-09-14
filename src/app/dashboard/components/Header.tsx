
// custom Icons and Mui Icons
import AroundTheWorld from "@/assets/icons/aroundTheWorld";
import DebtsIcon from "@/assets/icons/debtsIcon";
import NotificationsIcon from "@/assets/icons/notificationsIcon";
import ReceiptIcon from "@/assets/icons/receiptIcon";
import SettingsIcon from "@/assets/icons/settingsIcon";
import ShoppingCartIcon from "@/assets/icons/shoppingCartIcon";
import UserIcon from "@/assets/icons/userIcon";
import WarehouseIcon from "@/assets/icons/warehouseIcon";
import { ArrowRightAlt, Dehaze } from "@mui/icons-material";

// Redux states and hooks
import { useAppDispatch } from "@/lib/hooks";
import { setShowNavbar } from "@/lib/slices/dashboardSlice";

// MUI Components:
import {
  AppBar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export default function Header() {
  const dispatch = useAppDispatch();

  const data = [
    {
      count: 2450,
      label: "Total Orders",
      icon: <ShoppingCartIcon color={"#FF7A00"} />,
      bgColor: "#FFF1E5",
    },
    {
      count: 350,
      label: "Pending Invoices",
      icon: <ReceiptIcon color={"#5875FF"} />,
      bgColor: "#E8EEFF",
    },
    {
      count: 125,
      label: "Warehouse",
      icon: <WarehouseIcon color={"#00A861"} />,
      bgColor: "#D9F6E9",
    },
  ];

  return (
    <Box>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid #e0e0e0ff" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={1}>
            <SvgIcon
              sx={{
                display: { xs: "block", md: "none" },
                marginRight: "10px",
                color: "#111827",
                cursor: "pointer",
              }}
              component={Dehaze}
              onClick={() => dispatch(setShowNavbar(true))}
            />
            <SvgIcon component={UserIcon} />
            <Typography variant="body1" fontWeight="medium">
              Ehsan
            </Typography>
          </Box>

          <Box>
            <IconButton aria-label="notifications">
              <Badge badgeContent={1} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton aria-label="settings">
              <SettingsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        gap={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 2, display: { xs: "none", md: "flex" }, padding: "0 20px" }}
      >
        <Grid sx={{ width: "65%" }}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFEDD5",
              background:
                "linear-gradient(270deg,rgba(255, 237, 213, 1) 0%, rgba(255, 247, 237, 1) 100%)",
              borderRadius: 7,
              padding: "0",
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <AroundTheWorld />
              <Box>
                <Typography variant="subtitle1">
                  Welcome back <strong>Ehsan!</strong>
                </Typography>
                <Typography variant="body2">
                  You can edit your profile anytime.{" "}
                  <Button
                    variant="text"
                    size="small"
                    endIcon={<ArrowRightAlt />}
                    sx={{
                      textTransform: "none",
                      textDecoration: "underline",
                      padding: 0,
                      minWidth: 0,
                      color: "#000",
                    }}
                  >
                    Edit profile
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid sx={{ width: "35%" }}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              backgroundColor: "#f0f4ffd0",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              height: "95px",
              gap: "30px",
              borderRadius: 7,
            }}
          >
            <DebtsIcon />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                ¥700
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Total Debts
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Box>

      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        sx={{
          display: { xs: "flex", md: "none" },
          marginTop: "10px",
          width: "100%",
        }}
      >
        {data.map(({ count, label, icon, bgColor }, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              backgroundColor: bgColor,
              borderRadius: 2,
              padding: 2,
              width: "80%",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 1,
              }}
            >
              {icon}
            </Box>
            <Box>
              <Typography fontWeight="bold" fontSize={18}>
                {count}
              </Typography>
              <Typography fontSize={14}>{label}</Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

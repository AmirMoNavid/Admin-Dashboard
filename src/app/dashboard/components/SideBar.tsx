//React.js
import React, { useState } from "react";

// Mui components
import {
  List,
  ListItemIcon,
  ListItemText,
  Badge,
  Typography,
  Box,
  SvgIcon,
  ListItemButton,
} from "@mui/material";

// Custom Icons And Mui Icons
import LogoutIcon from "@mui/icons-material/Logout";
import SidebarLogo from "@/assets/icons/SedebarLogo";
import styled from "@emotion/styled";
import DashboardIcon from "@/assets/icons/dashboardIcon";
import ShoppingCartIcon from "@/assets/icons/shoppingCartIcon";
import ReceiptIcon from "@/assets/icons/receiptIcon";
import WarehouseIcon from "@/assets/icons/warehouseIcon";
import PeopleIcon from "@/assets/icons/peopleIcon";
import CompanyAccounts from "@/assets/icons/companyAccounts";
import { ArrowBack } from "@mui/icons-material";

// Redux states And Hooks
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setShowNavbar } from "@/lib/slices/dashboardSlice";

// Next Navigator
import { useRouter } from "next/navigation";

//Style Mui Components To build Custom Components
const StyledListItemButton = styled(ListItemButton)(() => ({
  color: "#fff",
  borderRadius: "15px",
  padding: "4px 15px",
  margin: "10px 0",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  "&.Mui-selected": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
  },
  "& span": {
    fontSize: "12px",
  },
}));
const StyledListItemIcon = styled(ListItemIcon)(() => ({
  color: "#fff",
  margin: "0.25rem 0",
  minWidth: "30px",
}));

const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const showNavbar = useAppSelector((state) => state.dashboard.showNavbar);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon />, badgeContent: 0 },
    { label: "Orders", icon: <ShoppingCartIcon color="" />, badgeContent: 1 },
    { label: "Invoices", icon: <ReceiptIcon color="" />, badgeContent: 4 },
    { label: "Warehouse", icon: <WarehouseIcon color="" />, badgeContent: 3 },
    { label: "Customers", icon: <PeopleIcon />, badgeContent: 0 },
    {
      label: "Company accounts",
      icon: <CompanyAccounts />,
      badgeContent: 0,
    },
  ];

  function handleLogout() {
    document.cookie = "token=; path=/; max-age=0; Secure; SameSite=Strict";
    router.push("/login");
  }

  return (
    <Box
      sx={{
        width: "max-content",
        flexShrink: 0,
        height: "100vh",
        boxSizing: "border-box",
        backgroundColor: "#234086",
        color: "#fff",
        paddingTop: 2,
        paddingX: 2,
        position: "fixed",
        left: 0,
        zIndex: 10,
        transform: {
          xs: `${showNavbar ? "translateY(0%)" : "translateY(-100%)"}`,
          md: "none",
        },
      }}
    >
      <SvgIcon
        component={ArrowBack}
        onClick={() => dispatch(setShowNavbar(false))}
        sx={{ cursor: "pointer", display: { xs: "initial", md: "none" } }}
      />
      <Box sx={{ px: 3, mb: 4, display: "flex", alignItems: "center" }}>
        <SvgIcon component={SidebarLogo} />
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            width: "0%",
            whiteSpace: "wrap",
            display: "flex",
            alignItems: "center",
            lineHeight: "1",
          }}
        >
          Vatan Pars
        </Typography>
      </Box>

      <List>
        {menuItems.map((item, index) => (
          <StyledListItemButton
            key={item.label}
            selected={activeIndex === index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => {
              setActiveIndex(index);
              dispatch(setShowNavbar(false));
            }}
          >
            <ListItemIcon sx={{ color: "inherit", minWidth: "32px" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
            {item.badgeContent > 0 && (
              <Badge
                sx={{
                  "& .MuiBadge-badge": {
                    borderRadius: "4px",
                    height: "18px",
                    minWidth: "18px",
                    color: "#000",
                    backgroundColor: "#fff",
                    fontWeight: "700",
                    padding: "0",
                  },
                }}
                badgeContent={item.badgeContent}
              />
            )}
          </StyledListItemButton>
        ))}
      </List>

      <Box sx={{ mt: "auto", p: 2, position: "absolute", bottom: "20px" }}>
        <StyledListItemButton onClick={handleLogout}>
          <StyledListItemIcon>
            <LogoutIcon />
          </StyledListItemIcon>
          <ListItemText secondary="Logout" />
        </StyledListItemButton>
      </Box>
    </Box>
  );
};

export default Sidebar;

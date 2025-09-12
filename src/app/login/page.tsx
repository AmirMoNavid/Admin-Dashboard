"use client";

import { useEffect, useState } from "react";
import { login } from "@/services/auth";
import { useDispatch } from "react-redux";
import { setToken } from "@/lib/slices/authSlice";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Avatar,
  Link,
  SvgIcon,
} from "@mui/material";
import LogoIcon from "@/assets/icons/logo";

export default function LoginPage() {
  const [index, setIndex] = useState("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        index,
        password,
      };
      const { data } = await login(payload);
      const token = data.data.token;

      dispatch(setToken(token));

      document.cookie = `token=${token}; path=/; max-age=86400; Secure; SameSite=Strict`;

      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (index.startsWith("0")) {
      setIndex((index) => "+98" + index.slice(1));
    }
  }, [index]);

  return (
    <Box display="flex" justifyContent="center" height="100vh">
      <Box
        flex={2}
        bgcolor="#f5f5f5"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={2}
        sx={{ display: { lg: "flex", xs: "none" } }}
      >
        <Typography sx={{ fontWeight: 700 }} variant="h4" gutterBottom>
          Simplify Your
        </Typography>
        <Typography variant="h4" gutterBottom>
          Import Operations
        </Typography>
        <Avatar
          sx={{ width: 400, height: 400, marginBottom: 2, borderRadius: 0 }}
          src="/logo.png"
        />
      </Box>
      <Box
        flex={1.5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={1}
        minHeight="100vh"
        bgcolor="#f5f5f5"
      >
        <Paper
          elevation={0}
          sx={{ p: 4, width: 400, backgroundColor: "#f5f5f5" }}
        >
          <Typography fontWeight="700" variant="h5" gutterBottom>
            Get started absolutely free
          </Typography>
          <Box
            margin="1.5rem 0"
            display="flex"
            alignItems="center"
            gap={1}
            fontWeight="600"
          >
            <Typography>Already have an account?</Typography>
            <Link href="#" underline="hover" color="textTertiary">
              Login
            </Link>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              placeholder="Email address or phone number"
              fullWidth
              margin="normal"
              value={index}
              onChange={(e) => setIndex(e.target.value)}
            />
            <TextField
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Next
            </Button>
          </form>
        </Paper>
      </Box>

      <SvgIcon inheritViewBox component={LogoIcon} />
    </Box>
  );
}

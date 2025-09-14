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
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import LogoIcon from "@/assets/icons/logo";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

export default function LoginPage() {
  const [index, setIndex] = useState("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();

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

      document.cookie = `token=${token}; path=/; max-age=43200; Secure; SameSite=Strict`;

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const token = getCookie("token");

    if (token) {
      router.push("/dashboard");
    }

    if (index.startsWith("0")) {
      setIndex((index) => "+98" + index.slice(1));
    }
  }, [index]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box display="flex" justifyContent="center" height="100vh">
      <Box
        flex={2}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={2}
        sx={{
          display: { lg: "flex", xs: "none" },
          background:
            "linear-gradient(45deg,rgba(212, 188, 188, 0.6) 0%, rgba(255, 255, 255, 0.88) 60%)",
        }}
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
        padding={1}
        minHeight="100vh"
        sx={{
          alignItems: { xs: "center", lg: "end" },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            width: 400,
            backgroundColor: "#fff",
          }}
        >
          <Typography fontWeight="700" variant="h6" gutterBottom>
            Get started absolutely free
          </Typography>
          <Box
            margin="1.5rem 0"
            display="flex"
            alignItems="center"
            gap={1}
            fontWeight="600"
          >
            <Typography variant="subtitle1">
              Already have an account?
            </Typography>
            <Link
              href="#"
              underline="hover"
              color="textTertiary"
              variant="subtitle1"
            >
              Login
            </Link>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 2 }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Email address or phone number"
              margin="dense"
              value={index}
              onChange={(e) => setIndex(e.target.value)}
            />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Password"
              margin="dense"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 2, textTransform: "none" }}
            >
              Create Account
            </Button>
          </Box>
          <Box mt={2} textAlign="center">
            <Typography
              sx={{ fontSize: "13px", whiteSpace: "nowrap" }}
              color="#6B7280"
            >
              By signing up, I agree to{" "}
              <Link
                href="#"
                sx={{
                  textDecoration: "underline",
                  fontWeight: 500,
                  color: "#111827",
                }}
              >
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                sx={{
                  textDecoration: "underline",
                  fontWeight: 500,
                  color: "#111827",
                }}
              >
                Privacy Policy
              </Link>
              .
            </Typography>
          </Box>
          <Box sx={{ my: 4, display: { xs: "none", lg: "block" } }}>
            <Divider
              sx={{ color: "#9CA3AF", fontWeight: 500, fontSize: "14px" }}
            >
              OR
            </Divider>
          </Box>
        </Paper>
      </Box>

      <SvgIcon inheritViewBox component={LogoIcon} />
    </Box>
  );
}

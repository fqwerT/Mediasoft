import React, { useState, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { useTypeSelector } from "../../store/hooks/useTypeSelector";
import "./style.css";
import { useNavigate } from "react-router";

export const AppHeader: React.FC = () => {
  const cart = useTypeSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  const savedCart = useMemo(() => {
    return JSON.parse(localStorage.getItem("cart") as string);
  }, [cart]);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => navigate("/")}
          >
            Online Store
          </Typography>

          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => navigate("/cart")}
            >
              Shopping cart <span className="cart__counter">{cart.length}</span>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

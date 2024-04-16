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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const AppHeader: React.FC = () => {
  const cart = useTypeSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  const savedCart = useMemo(() => {
    return JSON.parse(localStorage.getItem("cart") as string);
  }, [cart]);
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <Toolbar disableGutters> */}
        <Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <AdbIcon onClick={() => navigate("/")} /> Online Store
          </Typography>
        </Box>

        <Box>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            onClick={() => navigate("/cart")}
          >
            <ShoppingCartIcon />
            <span className="cart__counter">{cart.length}</span>
          </Button>
        </Box>
        {/* </Toolbar> */}
      </Container>
    </AppBar>
  );
};

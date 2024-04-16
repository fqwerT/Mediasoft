import { Outlet } from "react-router";
import { AppHeader } from "../components/AppHeader/AppHeader";
import { useEffect } from "react";
import { useTypeSelector } from "../store/hooks/useTypeSelector";
import { shallowEqual } from "react-redux";
export const Layout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
};

import React from "react";
import "./styles/App.css";
import { MainView } from "./components/MainView";
import { Box } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { useAppSelector } from "./app/hooks";
import { selectAuthToken } from "./features/auth/authSlice";
import { LoginView } from "./components/LoginView";
import { LeftDrawer } from "./components/LeftDrawer";

function App() {
  const authToken = useAppSelector(selectAuthToken);
  const view = authToken ? (
    <React.Fragment>
      <LeftDrawer />
      <MainView />
    </React.Fragment>
  ) : (
    <LoginView />
  );
  return (
    <CssBaseline>
      <Box sx={{ height: "100vmin" }}>{view}</Box>
    </CssBaseline>
  );
}

export default App;

import { Box, Button } from "@mui/material";
import { useAppDispatch } from "../app/hooks";
import logo from "../assets/logo.svg";
import { loginAsync } from "../features/auth/authSlice";

export function LoginView() {
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
      }}
    >
      <h1>React Messenger</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <Button variant="contained" onClick={() => dispatch(loginAsync())}>
        로그인
      </Button>
    </Box>
  );
}

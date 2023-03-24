import { Avatar, Box, TextField, Typography } from "@mui/material";

const drawerWidth = 360;

export function MainView() {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          lg: `calc(100% - ${drawerWidth}px)`
        },
        marginLeft: {
          xs: "0",
          lg: `${drawerWidth}px`
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{ display: "flex", marginBottom: "10px", alignItems: "center" }}
        >
          <Avatar />
          main 영역 요구사항
        </Typography>
        <Typography
          sx={{ display: "flex", marginBottom: "10px", alignItems: "center" }}
        >
          <Avatar />
          상대방과의 대화를 실시간으로 표시할것.
        </Typography>
        <Typography
          sx={{ display: "flex", marginBottom: "10px", alignItems: "center" }}
        >
          <Avatar />
          해당 채팅방으로 전환됐을 때, 이전에 어디까지 읽었는지 표시할 것
        </Typography>
        <Typography
          sx={{ display: "flex", marginBottom: "10px", alignItems: "center" }}
        >
          <Avatar />내 메시지를 상대방이 읽었는지 표시할 것
        </Typography>
        <Typography
          sx={{ display: "flex", marginBottom: "10px", alignItems: "center" }}
        >
          <Avatar />
          상대방의 프로필을 클릭하면 프로필 오버레이를 출력할 것
        </Typography>
        <Typography
          sx={{ display: "flex", marginBottom: "10px", alignItems: "center" }}
        >
          <Avatar />
          ++일치하는 문자열을 찾는 검색 기능을 제공할 것
        </Typography>
        <Typography
          sx={{ display: "flex", marginBottom: "10px", alignItems: "center" }}
        >
          <Avatar />
          ++공지, 투표, 답장 기능 구현
        </Typography>
      </Box>
      <TextField fullWidth></TextField>
    </Box>
  );
}

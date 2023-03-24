import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";
import { useAppDispatch } from "../app/hooks";
import { logoutAsync } from "../features/auth/authSlice";
const drawerWidth = 360;

export function LeftDrawer() {
  const dispatch = useAppDispatch();
  const listItems = [...Array(10)].map(() => (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="상대 유저 이름"
          secondary={
            <React.Fragment>
              {/* <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            Ali Connors
          </Typography> */}
              {"해당 유저와 가장 최근에 했던 대화 내용을 여기에 출력..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  ));
  return (
    <Drawer
      sx={{
        display: { xs: "none", lg: "block" },
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      }}
      variant="permanent"
      open
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%"
        }}
      >
        <Avatar
          sx={{ bgcolor: "#333" }}
          alt="Hyeongyeom Kim"
          src="/broken-image.jpg"
        >
          HG
        </Avatar>
        <List sx={{ flexGrow: 1, overflow: "scroll" }}>
          {/* ++읽지 않은 채팅을 상대방 UI에 표시할 것
          <br />
          사용자의 관심사가 main일 때는 축소된 보기를 제공할 것 */}
          {listItems}
        </List>
        <Box sx={{ alignSelf: "end" }}>
          <Button sx={{ margin: 0.5 }} onClick={() => {}} variant="contained">
            대화상대 추가
          </Button>
          <Button sx={{ margin: 0.5 }} onClick={() => {}} variant="contained">
            설정
          </Button>
          <Button
            sx={{ margin: 0.5 }}
            onClick={() => dispatch(logoutAsync())}
            variant="contained"
          >
            로그아웃
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

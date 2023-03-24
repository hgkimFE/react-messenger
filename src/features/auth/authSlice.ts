import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";

export interface AuthState {
  token: null | string;
  expire: null | string;
  status: string;
}

const initialState: AuthState = {
  token: null,
  expire: null,
  status: "idle"
};

export const loginAsync = createAsyncThunk("auth/login", async () => {
  const resp = await axios.post("http://127.0.0.1:3010/auth/login");
  return resp.data.accessToken;
});
export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  await axios.post("http://127.0.0.1:3010/auth/logout");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.token = action.payload;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.token = null;
      });
  }
});

export const {} = authSlice.actions;
export const selectAuthToken = (state: RootState) => state.auth.token;
export const isLogin = (state: RootState) => state.auth.token == null;
// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const getAccessToken =
  localStorage.getItem("accessToken") == null
    ? null
    : JSON.parse(localStorage.getItem("accessToken"));
const getRefreshToken =
  localStorage.getItem("refreshToken") == null
    ? null
    : JSON.parse(localStorage.getItem("refreshToken"));
const setLocalStorage = (accessToken, refreshToken) => {
  console.log("localhost");
  localStorage.setItem("accessToken", JSON.stringify(accessToken));
  localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    accessToken: getAccessToken,
    refreshToken: getRefreshToken,
  },
  reducers: {
    loginData: (state, action) => {
      const accessToken = action.payload.data.accessToken;
      const refreshToken = action.payload.data.refreshToken;
      const user = action.payload.data.user;
      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      setLocalStorage(accessToken, refreshToken);
    },
    logoutData: (state, action) => {
      state.user = {};
      state.accessToken = "";
      state.refreshToken = "";
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
    refesTokenData: (state, action) => {
      const accessToken = action.payload.data.accessToken;
      const refreshToken = action.payload.data.refreshToken;
      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
      setLocalStorage(accessToken, refreshToken);
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginData, logoutData, refesTokenData } = authSlice.actions;

export default authSlice.reducer;

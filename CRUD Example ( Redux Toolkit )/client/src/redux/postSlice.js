import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    rooms: [],
  },
  reducers: {
    addRoom: function (state, action) {
      state.rooms.push(action.payload);
    },
    deleteRoom: function (state, action) {
      console.log(action);
    },
  },
});

export const { addRoom, deleteRoom } = postSlice.actions;

export default postSlice.reducer;

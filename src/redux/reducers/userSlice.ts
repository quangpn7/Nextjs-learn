import { createSlice } from "@reduxjs/toolkit";
import cloneDeep from "lodash/cloneDeep";
import { makeStore } from "../store";
export type userReducerType = {
  number: number;
  isLogin: boolean;
};

const initialState: userReducerType = {
  number: 0,
  isLogin: false,
};

export const userSlice = createSlice({
  name: "rootUser",
  initialState,
  reducers: {
    incrementNumber: (state, action) => {
      state.number += action.payload;
    },
    decreaseNumber: (state, { payload }) => {
      state.number -= payload.amount;
    },
    loginAction: (state, { payload }) => {
      if (payload === "ABCD") {
        state.isLogin = true;
      }
    },
    logOutAction: (state) => {
      state.isLogin = false;
    },
  },
});

export const { incrementNumber, decreaseNumber, loginAction, logOutAction } =
  userSlice.actions;

export default userSlice.reducer;

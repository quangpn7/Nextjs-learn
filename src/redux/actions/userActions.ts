import { type } from "os";
import { decreaseNumber, incrementNumber } from "../reducers/userSlice";

export const increNumber = () => ({
  type: "INCREASE_NUMBER",
  token: "ABC",
  payload: 1,
});

export const decrementNumber = (authCode: string) => ({
  type: "DECREASE_NUMBER",
  authCode: authCode,
  payload: 1,
});

// export const handleLogin = (token: string, name: string) => ({
//   type: "LOGIN_ACTION",
//   token: token,
//   name: name,
// });

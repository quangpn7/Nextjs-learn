import React, { useEffect } from "react";
import { DispatchProp, useDispatch, useSelector } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { decrementNumber, increNumber } from "../src/redux/actions/userActions";
import { RootReducer } from "../src/redux/reducers";
import {
  decreaseNumber,
  incrementNumber,
  loginAction,
  logOutAction,
} from "../src/redux/reducers/userSlice";

type Props = {};

const Reduxsaga = (props: Props) => {
  const { number } = useSelector((state: RootReducer) => state.rootUser);
  const dispatch = useDispatch();

  const handleIncre = () => {
    dispatch(increNumber());
  };
  const handleDecrease = () => {
    dispatch(decrementNumber("AUTHENTICATED"));
  };
  const handleLoginBtn = () => {
    dispatch(loginAction("ABCD"));
  };
  const handleLogoutBtn = () => {
    dispatch(logOutAction());
  };

  return (
    <>
      <div className="text-center">
        <h1>{number}</h1>
        <div>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDecrease();
            }}
          >
            -
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleIncre();
            }}
          >
            +
          </button>
        </div>
        <button
          className="btn btn-secondary"
          onClick={() => {
            handleLoginBtn();
          }}
        >
          Login
        </button>
        <button
          className="btn btn-dark text-white"
          onClick={() => {
            handleLogoutBtn();
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Reduxsaga;

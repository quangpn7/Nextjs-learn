import createSagaMiddleware, { SagaMiddlewareOptions } from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import rootSaga from "./sagas/rootSaga";

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const defaultMiddlewareOptions = { thunk: false };
  const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => {
    //   getDefaultMiddleware(defaultMiddlewareOptions).concat(sagaMiddleware);
    // },
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import useReducer from "../features/Users/userSlice";
import { thunk } from "redux-thunk";

import { createLogger } from "redux-logger";

export default configureStore({
  reducer: {
    user: useReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = [
      ...getDefaultMiddleware(),
      createLogger(),
      // ... other middlewares
    ];

    return middlewares;
  },
  // Additional middleware can be added here
});

import { configureStore } from "@reduxjs/toolkit";

import counterSliceReducer from "./counter.js";
import authSliceReducer from "./auth.js";

const store = configureStore({
  reducer: { counter: counterSliceReducer, auth: authSliceReducer },
});

export default store;

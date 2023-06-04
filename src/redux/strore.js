import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./slice/noteSlice";

export default configureStore({
  reducer: {
    noteSlice,
  },
});

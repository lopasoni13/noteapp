import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "noteSlice",

  initialState: {
    note: [],
  },

  reducers: {
    setNote: (state, action) => {
      state.note.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.note = state.note.filter((item) => item.id !== action.payload);
    },
  },
});

export default noteSlice.reducer;
export const { setNote, deleteNote } = noteSlice.actions;

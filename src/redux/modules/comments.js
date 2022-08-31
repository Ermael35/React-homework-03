import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getTodos = createAsyncThunk(
  "commen/getCommen",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commen = createSlice({
  name: "commen",
  initialState: {
    comments: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
      axios.post("http://localhost:3001/todos", action.payload);
    },
    deleteComment: (state, action) => {
      let index = state.comments.findIndex(
        (comment) => comment.id === action.payload
      );
      state.comments.splice(index, 1);
      axios.delete(`http://localhost:3001/todos/${action.payload}`);
    },
    updateComment: (state, action) => {
      let index = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.comments.splice(index, 1, action.payload);
      axios.patch(`http://localhost:3001/todos/${action.paylad.id}`);
    },
  },
});

export const { addComment, deleteComment, updateComment } = commen.actions;
export default commen;

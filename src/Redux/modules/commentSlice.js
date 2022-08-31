import {createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const __getComment= createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comments");
      console.log(data);
    } catch (error) {
      console.log(error);
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
      state.comments.push(action.payload)
      axios.post("http://localhost:3001/comments", action.payload);
    },
    deleteComment: (state, action) =>{
      let index = state.comments.findIndex(comment=>comment.id === action.payload);
                    state.comments.slice(index,1);
    axios.delete(`http://localhost:3001/comments/${action.payload}`);  
    },
    updateComment: (state, action) => {
      let indexz = state.comments.findIndex(comment=>comment.id === action.payload.id);
                    state.comments.slice(indexz,1,action.payload)
                    axios.patch(`http://localhost:3001/comments/${action.payload}`);
    }
    
  },
  
});


export const { addComment ,deleteComment, updateComment} = commen.actions;
export default commen;
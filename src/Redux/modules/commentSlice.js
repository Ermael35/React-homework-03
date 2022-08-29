import { createSlice } from "@reduxjs/toolkit";



export const commen = createSlice({
  name: "commen",
  initialState:{
    comments:[{
    id:0,
    name:'',
    comm:''
  }
    
  ]},
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload)
      
    },
    deleteComment: (state, action) =>{
      let index = state.comments.findIndex(comment=>comment.id === action.payload);
                    state.comments.slice(index,1);
    },
    updateComment: (state, action) => {
      let index = state.comments.findIndex(comment=>comment.id === action.payload.id);
                    state.comments.slice(index,1,action.payload)
    }
    
  },
  
});

export const { addComment ,deleteComment, updateComment} = commen.actions;
export default commen;
import { createSlice, createAsyncThunk, isAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers =createAsyncThunk (
    "Users/fetchUsers", async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        return response.data;
    }
);

 
const userSlice= (
    {
        name:"users",
        initialState:{
            User:[],
            loading:false,
            error:null,
        },
        reducers:{},
 
        extraReducers:(builder)=>{
            builder
 
            .addCase(fetchUsers.pending,(state)=>{
                state.loading=true;
                state.error=null
            })
            .addCase(fetchUsers.fullfilled,(state,action)=>{
                state.loading=false;
                state.user= action.payload;
            })
            .addCase(fetchUsers.rejected,(state,action)=>{
                state.loading=false;
                state.error= action.payload
            })
 
        }
    }
)
 
export default userSlice.reducer
 

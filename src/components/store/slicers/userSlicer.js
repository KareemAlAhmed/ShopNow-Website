import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getUserData = createAsyncThunk("user/getData", async (userData,{rejectWithValue}) => { 
    try{
        const response = await axios.post("/api/user/create",userData); 
        return response.data.user; 
    }catch(error){
        return rejectWithValue( error.response?.data?.error);
    }
    }); 

const userSlicer=createSlice({
    name:"user",
    initialState:{currentUser:{},error:{},loading:false},
    reducers:{
        getUser(state,actions){
            axios.get("/api/user/get/"+actions.payload.id)
            .then(res=>{state.currentUser=res.data})
            .catch(err=>{state.error=err.data});
        },
        setSignError(state,actions){
            state.error=actions.payload;  
        }
    },extraReducers: (build)=>{
        build.addCase(getUserData.pending,(state)=>{
            state.loading=true;
            state.error={};
        })
        .addCase(getUserData.fulfilled, (state,actions)=>{
            state.loading=false;
            state.currentUser=actions.payload;
            state.error={};
        })
        .addCase(getUserData.rejected, (state,actions)=>{
            state.loading=false;
            state.error=actions.payload;
        })
    }
});

export const {getUser,setSignError}=userSlicer.actions;
export default userSlicer.reducer;
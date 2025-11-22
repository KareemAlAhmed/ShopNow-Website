import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { socketService } from "../../Server/socketService";
export const createUser = createAsyncThunk("user/create", async (userData,{rejectWithValue}) => { 
    try{
        const response = await axios.post("/api/user/create",userData); 
        return response.data.user; 
    }catch(error){
        return rejectWithValue( error.response?.data?.error);
    }
    }); 
export const loginUser = createAsyncThunk("user/login", async (userData,{rejectWithValue}) => { 
    try{
        const response = await axios.post("/api/user/login",userData); 
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
        build.addCase(createUser.pending,(state)=>{
            state.loading=true;
            state.error={};
        })
        .addCase(createUser.fulfilled, (state,actions)=>{
            state.loading=false;
            state.currentUser=actions.payload;
            state.error={};
            if (socketService.isConnected()) {
                console.log('🎉 Emitting new_client after user creation');
                socketService.emit("new_client", {
                    clientId: socketService.getSocket()?.id,
                    clientName: actions.payload.username
                });
            } else {
                console.warn('⚠️ Cannot emit new_client - socket not connected');
            }
        })
        .addCase(createUser.rejected, (state,actions)=>{
            state.loading=false;
            state.error=actions.payload;
        })

        build.addCase(loginUser.pending,(state)=>{
            state.loading=true;
            state.error={};
        })
        .addCase(loginUser.fulfilled, (state,actions)=>{
            state.loading=false;
            state.currentUser=actions.payload;
            state.error={};
             if (socketService.isConnected()) {
                console.log('🎉 Emitting new_client after login');
                socketService.emit("new_client", {
                    clientId: socketService.getSocket()?.id,
                    clientName: actions.payload.username
                });
            } else {
                console.warn('⚠️ Cannot emit new_client - socket not connected');
            }
        })
        .addCase(loginUser.rejected, (state,actions)=>{
            state.loading=false;
            state.error=actions.payload;
        })
    }
});

export const {getUser,setSignError}=userSlicer.actions;
export default userSlicer.reducer;
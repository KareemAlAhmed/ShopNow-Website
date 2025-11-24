import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { socketService } from "../../Server/socketService";
import { Bounce, toast } from "react-toastify";
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
        },
        getCurrentUser(state){
            state.currentUser=JSON.parse(localStorage.getItem("currentUser"));
        },addItemToCart(state,actions){
            if(state.currentUser.cart.length > 0){
                let itemExist=false;
                for(let i =0;i<state.currentUser.cart.length;i++){
                    if(state.currentUser.cart[i].prodName === actions.payload.prodName){
                        itemExist=true;
                        state.currentUser.cart[i].quantity += actions.payload.quantity;
                    }
                }
                if(!itemExist){
                    state.currentUser.cart.push(actions.payload);
                }
            }else{
                state.currentUser.cart.push(actions.payload);
            }
            localStorage.setItem("currentUser",JSON.stringify(state.currentUser));
        },removeCartItem(state,actions){
            state.currentUser.cart.splice(actions.payload, 1);
            localStorage.setItem("currentUser",JSON.stringify(state.currentUser));
        }
    },extraReducers: (build)=>{
        build.addCase(createUser.pending,(state)=>{
            state.loading=true;
            state.error={};
        })
        .addCase(createUser.fulfilled, (state,actions)=>{
            state.loading=false;
            state.currentUser=actions.payload;
            localStorage.setItem("currentUser",JSON.stringify(state.currentUser));
            
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
            localStorage.setItem("currentUser",JSON.stringify(state.currentUser));

             if (socketService.isConnected()) {
                socketService.emit("new_client", {
                    clientId: socketService.getSocket()?.id,
                    clientName: actions.payload.username
                });
                 toast.success(`Welcome ${actions.payload.username} !`, {
                  
                className: 'custom-success-toast',

              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
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

export const {getUser,setSignError,getCurrentUser,addItemToCart,removeCartItem}=userSlicer.actions;
export default userSlicer.reducer;
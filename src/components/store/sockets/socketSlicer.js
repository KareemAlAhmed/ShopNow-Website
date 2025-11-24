
import {createSlice} from "@reduxjs/toolkit"
import { socketService } from "../../Server/socketService";
import { Bounce, toast } from "react-toastify";



const socketSlicer=createSlice({
    name:"socket",
    initialState:{ isConnected: false,
    socketId: null,
    connectionError: null},
    reducers:{
        connect(state,action){
            socketService.connect(action.payload);

            state.isConnected=true;
            
            state.socketId = socketService.getSocket()?.id || null;
            socketService.on("disconnect", () => {
                console.log('🔌 Socket disconnected in slice');
                state.isConnected = false;
                state.socketId = null;
            });


            socketService.on("new_client", (data) => {
                
              if (socketService.getSocket()?.id !== data.clientId) {
                
                toast.success(`${data.clientName} just joined!`, {
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
              }
            });
        },disconnect(state){
            socketService.disconnect();
            state.isConnected = false;
            state.socketId = null;
        }
    }
});

export const {connect,disconnect}=socketSlicer.actions;
export default socketSlicer.reducer

import {createSlice} from "@reduxjs/toolkit"
import { socketService } from "../../Server/socketService";

function showSimplePopup(message) {
  const popup = document.createElement('div');
  popup.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #3a86ff;
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;
  
  popup.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px;">
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" 
              style="background: none; border: none; color: white; cursor: pointer; font-size: 16px;">
        ×
      </button>
    </div>
  `;
  
  document.body.appendChild(popup);
  
  // Auto remove after 4 seconds
  setTimeout(() => {
    if (popup.parentElement) {
      popup.remove();
    }
  }, 4000);
}

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

            // Set up new_client listener
            socketService.on("new_client", (data) => {
                console.log("📨 Received new_client in slice:", data);
                if (socketService.getSocket()?.id !== data.clientId) {
                console.log("Welcome to our new Client, " + data.clientName);
             showSimplePopup(`${data.clientName} just joined!`);    
            } else {
                console.log("Welcome to yourself!");
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
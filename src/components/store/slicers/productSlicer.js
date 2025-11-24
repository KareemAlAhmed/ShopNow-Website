import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function shuffleArray(array) {
    const shuffled = [...array]; // Create a copy to avoid mutating original
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
}

export const fetchAllProd=createAsyncThunk("product/fetchAll",async(prodType,{rejectWithValue})=>{
    try{
        const {data}=await axios.get("/api/product/get/products/"+prodType);

        return data.prods;

    }catch{
        return rejectWithValue({message:"No Products Available."});
    }
})

export const getProd=createAsyncThunk("product/get",async(prodID,{rejectWithValue})=>{
    try{
        const {data}=await axios.get("/api/product/get/"+prodID);

        return data;

    }catch(error){
        return rejectWithValue({message:error.error});
    }
})

const prodSlicer=createSlice({
name:"product",
initialState:{listOfProduts:[],showProds:[],relatedProds:[],currentProduct:{},loadingProd:false,error:{}},
reducers:{
    getProds(state){

        state.listOfProduts=JSON.parse(localStorage.getItem("allProds"));
        state.showProds=JSON.parse(localStorage.getItem("showProds"));
    },
    getCurrentProd(state){
        state.currentProduct=JSON.parse(localStorage.getItem("currentProd"));
        state.relatedProds=JSON.parse(localStorage.getItem("relatedProds"));

    }
},extraReducers: (build)=>{
    build.addCase(fetchAllProd.pending,(state)=>{
        state.loadingProd=true;
    })
    .addCase(fetchAllProd.fulfilled,(state,actions)=>{
        state.loadingProd=false;
        state.listOfProduts=actions.payload;
        state.showProds=shuffleArray(actions.payload.slice(70,100));
        localStorage.setItem("allProds",JSON.stringify(state.listOfProduts));
        localStorage.setItem("showProds",JSON.stringify(state.showProds));
        state.error={};
    })
    .addCase(fetchAllProd.rejected,(state,actions)=>{
        state.loadingProd=false;
        state.error=actions.payload;
    })
    .addCase(getProd.pending,(state)=>{
        state.loadingProd=true;
        state.currentProduct={}
    })
    .addCase(getProd.fulfilled,(state,actions)=>{
        state.loadingProd=false;
        state.currentProduct=actions.payload.prod;    
        state.relatedProds=actions.payload.relatedProds;   
        localStorage.setItem("currentProd",JSON.stringify(state.currentProduct));
        localStorage.setItem("relatedProds",JSON.stringify(state.relatedProds)); 
        state.error={};
    })
    .addCase(getProd.rejected,(state,actions)=>{
        state.loadingProd=false;
        state.error=actions.payload;
    })
}
});
export const {getProds,getCurrentProd}=prodSlicer.actions;
export default prodSlicer.reducer;

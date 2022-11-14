import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import goalService from "./GoalService"


const initialState = {
    goals:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""

}

export const goalSlice = createSlice({
    name:'goal',
    initialState,
    reducers:{
        reset:(state)=>initialState
    }
})

export const {reset}= goalSlice.actions
export default goalSlice.reducer
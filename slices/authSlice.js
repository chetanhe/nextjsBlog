import {HYDRATE} from 'next-redux-wrapper';
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        authState: false
    },
    reducers:{
        setAuthState(state, action){
            state.authState = action.payload
        }
    },
    extraReducers:{
        [HYDRATE]: (state, action)=>{
            return{
                ...state,
                ...action.payload.auth
            }
        }
    }
});

export const selectAuthState = (state) => state.auth.authState;
export const {setAuthState} = authSlice.actions;
export default authSlice.reducer
import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {value: {username: ""}},
    reducers:{
        login: (state, action) =>{
            state.value = action.payload
        }
    }
});

export const store = configureStore({

});
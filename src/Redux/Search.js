import { configureStore, createSlice } from '@reduxjs/toolkit'


const initialState={
    searchstate:[]
}
export const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        incrementbyAmount:(state,actions)=>{
            state.searchstate = actions.payload
        },
    },

})
export const {incrementbyAmount} =searchSlice.actions
export default searchSlice.reducer
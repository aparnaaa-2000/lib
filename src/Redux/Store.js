import { configureStore } from '@reduxjs/toolkit'
import searchRed from './Search'
// import newRed from './news'




export const store = configureStore({
    reducer:{
        search:searchRed
    },
})
'use client';
import {createSlice} from '@reduxjs/toolkit'
import data from "../data/data.json";
import { dataType } from '@/constant/interface';

interface gameState  {
    items : dataType[],
    filter: string
}

const initialState : gameState = {
    items : data,
    filter : 'All'
}

export const gameSlice = createSlice({
    name : 'gameList',
    initialState : initialState, 
    reducers : {
        updateItem : (state, action) => {
            console.log(action.payload);
            const newItem = action.payload;
            const ItemIndex = state.items.findIndex(i => i.Code === newItem.Code)
            if (ItemIndex >= 0){
                state.items[ItemIndex] = newItem
            }
        },
        setFilter : (state, action)  =>{
            state.filter = action.payload;
        }
    }
})

export const {updateItem, setFilter} = gameSlice.actions;

export default gameSlice.reducer
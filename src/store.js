import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'


let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

let mainData = createSlice({
    name : 'mainData',
    initialState : 
    [
        {
            id : 0,
            title : "White and Black",
            content : "Born in France",
            price : 120000
          },
        
          {
            id : 1,
            title : "Red Knit",
            content : "Born in Seoul",
            price : 110000
          },
        
          {
            id : 2,
            title : "Grey Yordan",
            content : "Born in the States",
            price : 130000
          }
    ],
    reducers : {
        inMainList(state,action) {
            return state.concat(action.payload);
        }
    }

})

export let {inMainList} = mainData.actions;

let itemList = createSlice({
    name : 'itemList',
    initialState : 
    [
        {id : 0, name : 'White and Black', count : 0},
        {id : 1, name : "Red Knit", count : 0},
        {id : 2, name : 'Grey Yordan', count : 0}
    ],
    // reducers : {
    //     changeCount(state,action) {
    //          state[action.payload].count = state[action.payload].count + 1;
    //     },
    //     changeList(state){
    //         state.sort((a, b) => a.name.localeCompare(b.name));
    //     }
    // }     
})



let cartList = createSlice({
    name : 'cartList',
    initialState :
    [
        
    ],
    reducers : {
        inCartList(state,action) {
            state.push(action.payload);
        },
        plusCount(state,action) {
            let locate = state.findIndex((item) => item.id == action.payload);
            state[locate].count = state[locate].count + 1;
        },
        minusCount(state,action) {
            let locate = state.findIndex((item) => item.id == action.payload);
            state[locate].count = state[locate].count - 1;
        },
       changeList(state){
        state.sort((a, b) => a.name.localeCompare(b.name));
       }
    }
})

export let {inCartList,plusCount,minusCount,changeList} = cartList.actions;


export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    mainData : mainData.reducer,
    itemList : itemList.reducer,
    cartList : cartList.reducer
  }
}) 

import { createSlice } from '@reduxjs/toolkit'
import {
  fetchData, 
  countTotal,
} from "./api/catalogAPI";

export function addPhone2Cart(phone) {
  return async (dispatch) => {
    try {
      dispatch(catalogSlice.actions.addPhone2CheckList(phone));
    } catch (error) {      
      console.log(error);
    }
  };
}

export function loadPhoneData(page) {
  return async (dispatch) => {
    try {
      const response = await fetchData(page);
      dispatch(catalogSlice.actions.setPage(page));
      dispatch(catalogSlice.actions.addPhone2List(response));
    } catch (error) {     
      console.log(error);
    }
  };
}

export function setTotalCount() {
  return async (dispatch) => {
    try{
      const response = await countTotal();
      dispatch(catalogSlice.actions.setTotal(response));
    } catch (error) {
      console.log(error);
    }
  }
}

export function setAddedItems() {
  return async (dispatch) => {
    try{
      dispatch(catalogSlice.actions.increaseAddedItems());
    } catch (error) {
      console.log(error);
    }
  }
}

const initialState = {
  page: 1,
  phonesCheckList: [],
  phonesList: [],
  total_count : 0,
  addedItems : 0,
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setTotal(state, action) {
      state.total_count = action.payload;
    },
    increaseAddedItems(state, action) {
      state.addedItems += 1;
    },
    addPhone2List(state, action){
      state.phonesList = action.payload;
    },
    addPhone2CheckList(state, action){
      console.log("----------payload---------", action.payload);
      state.phonesCheckList = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPhone2List } = catalogSlice.actions

export default catalogSlice.reducer
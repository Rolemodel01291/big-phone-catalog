import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { fetchData, countTotal } from "./api/catalogAPI";

//Add items to checkoutList
export function addPhone2Cart(phonesCheckList, phone) {
  return async (dispatch) => {
    try {
      const isExist = await determineExist(phonesCheckList, phone);
      if (isExist) {
        let temp = updateItem(phonesCheckList, phone.id, true);
        dispatch(catalogSlice.actions.updatePhone2CheckList(temp));
      } else {
        let item = { ...phone, count: 1 };
        dispatch(catalogSlice.actions.addPhone2CheckList(item));
      }
    } catch (error) {
      console.log(error);
    }
  };
}

//update repeated add/remove click event
export function updateItem(phonesCheckList, index, isAdd) {
  let temp;
  let temp_phonesCheckList = phonesCheckList.slice();
  let i = temp_phonesCheckList.findIndex((o) => o.id === index);
  if (temp_phonesCheckList[i]) {
    isAdd?temp = temp_phonesCheckList[i].count + 1: temp = temp_phonesCheckList[i].count - 1;
    temp_phonesCheckList[i] = { ...temp_phonesCheckList[i], count: temp };
  }
  return temp_phonesCheckList;
}

//Determine whether new item exists in given checkList using Lodash
export function determineExist(phonesCheckList, phone) {
  const isExist = _.some(phonesCheckList, phone);
  return isExist;
}

//Remove items from checkoutList
export function removeItemFromCart(phonesCheckList, index) {
  return async (dispatch) => {
    let temp;
    try {
      if (_.find(phonesCheckList, {id: index}).count > 1) {
        temp = updateItem(phonesCheckList, index, false);
      } else {
        temp = _.reject(phonesCheckList, { id: index });
      }
      dispatch(catalogSlice.actions.setCheckoutPage(1));
      dispatch(catalogSlice.actions.removePhonefromCheckList(temp));
    } catch (error) {
      console.log(error);
    }
  };
}

//Load phone data in big phone catalog page
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

//Load checkoutList data in checkoutList
export function loadCheckoutData(phonesCheckList, checkoutPage) {
  return async (dispatch) => {
    try {
      const response = await fetchCheckoutData(phonesCheckList, checkoutPage);
      dispatch(catalogSlice.actions.setCheckoutPage(checkoutPage));
      dispatch(catalogSlice.actions.addPhone2CheckoutList(response));
    } catch (error) {
      console.log(error);
    }
  };
}

// import 3 items each time from checkoutList
export function fetchCheckoutData(phonesCheckList, checkoutPage) {
  const result = phonesCheckList.slice(
    3 * (checkoutPage - 1),
    3 * checkoutPage
  );
  return result;
}

export function setTotalCount() {
  return async (dispatch) => {
    try {
      const response = await countTotal();
      dispatch(catalogSlice.actions.setTotal(response));
    } catch (error) {
      console.log(error);
    }
  };
}

const initialState = {
  page: 1,
  checkoutPage: 1,
  outputCheckoutList: [],
  phonesCheckList: [],
  phonesList: [],
  total_count: 0,
  addedItems: 0,
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setCheckoutPage(state, action) {
      state.checkoutPage = action.payload;
    },
    setTotal(state, action) {
      state.total_count = action.payload;
    },
   
    addPhone2List(state, action) {
      state.phonesList = action.payload;
    },
    updatePhone2CheckList(state, action) {
      state.phonesCheckList = action.payload;
      state.addedItems += 1;
    },
    addPhone2CheckList(state, action) {
      let temp = state.phonesCheckList;
      temp.push(action.payload);
      state.phonesCheckList = temp;
      state.addedItems += 1;
    },
    addPhone2CheckoutList(state, action) {
      state.outputCheckoutList = action.payload;
    },

    //Remove item from checkList
    removePhonefromCheckList(state, action) {
      state.phonesCheckList = action.payload;
      state.addedItems -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPhone2List } = catalogSlice.actions;

export default catalogSlice.reducer;

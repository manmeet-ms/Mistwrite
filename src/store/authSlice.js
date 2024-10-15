import { createSlice } from "@reduxjs/toolkit";

//  to keep rack of user authentication? 5:12
const initialState = {
  status: false,
  userData: null, // as we will have no user data the start
};
const authSlice = createSlice({
  name: "auth", // name required for a slice
  initialState, // we give initial state
  reducers: {
    // methods of reducers have acces to the state and its actions->(as payload)
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
  },
  logout: (state) => {
      state.status = false;
      state.userData = null;
  }
  }, // we give reducers
});

//  we can also add actions for Notes 

// we have to export individual actions of reduers as well
export const {login, logout} = authSlice.actions;

export default authSlice.reducer;

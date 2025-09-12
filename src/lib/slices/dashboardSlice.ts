import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dashboardSlice {
showNavbar:boolean 
}

const initialState: dashboardSlice = {
 showNavbar:false
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setShowNavbar: (state, action: PayloadAction<boolean>) => {
      state.showNavbar = action.payload;
    },
  },
});

export const { setShowNavbar } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;

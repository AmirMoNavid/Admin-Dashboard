import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { dashboardReducer } from "./slices/dashboardSlice";
import { getDashboardData } from "@/services/adminService";
import { Api } from "@mui/icons-material";

export type RootState = {
  [getDashboardData.reducerPath]: ReturnType<typeof getDashboardData.reducer>;
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    [getDashboardData.reducerPath]: getDashboardData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getDashboardData.middleware),
});

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

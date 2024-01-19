import { createSlice } from "@reduxjs/toolkit";

interface dataType {
  username: string;
  email: string;
  password: string;
}

interface initialStateTypes {
  isLoading: boolean;
  loggedIn: boolean;
  user: dataType | null;
  error?: string;
}


const initialState: initialStateTypes = {
  isLoading: false,
  loggedIn: false,
  user: null,
  error: undefined,
};

const authService = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login
    loginStart: (state) => {
      state.isLoading = true;
      
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.loggedIn = true;
      console.log("logined");
    },
    loginError: (state) => {
      state.isLoading = false;
      state.loggedIn = false;
      state.error = "Error";
      console.log("error");
    },

    // registration
    registerStart: (state) => {
      state.isLoading = true;
    },
    registerSuccess: (state) => {
      state.isLoading = false;
      state.loggedIn = true;
      console.log("registered");
    },
    registerError: (state) => {
      state.isLoading = false;
      state.loggedIn = false;
      state.error = "Error";
      console.log("error");
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginError,
  registerStart,
  registerSuccess,
  registerError,
} = authService.actions;

export default authService.reducer;

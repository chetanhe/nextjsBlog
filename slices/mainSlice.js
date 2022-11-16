import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jqueryLoaded: false,
  owlCarouselLoaded: false,
  tokenGenerated: false,
  mobileMenuOpen: false,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setJsLibraryState: (state, action) => {
      let { name, state: loadStatus } = action.payload;
      state[name] = loadStatus;
    },
    setTokenGenerated: (state, action) => {
      state.tokenGenerated = action.payload.status;
    },
    setmobileMenuToggle: (state, action) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setmobileMenuClose: (state) => {
      state.mobileMenuOpen = false;
    },
  },
});

export const {
  setJsLibraryState,
  setTokenGenerated,
  setmobileMenuToggle,
  setmobileMenuClose,
} = mainSlice.actions;

export default mainSlice.reducer;

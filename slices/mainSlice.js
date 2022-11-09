import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jqueryLoaded: false,
  owlCarouselLoaded: false,
  tokenGenerated: false,
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
  },
});

export const { setJsLibraryState, setTokenGenerated } = mainSlice.actions;

export default mainSlice.reducer;

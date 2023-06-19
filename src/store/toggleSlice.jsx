import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: false,
  reducers: {
    toggleCart: (state) => !state,   
  },
});

export const { toggleCart } = toggleSlice.actions;
export default toggleSlice.reducer;

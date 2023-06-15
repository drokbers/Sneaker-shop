import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
     const newItem = action.payload;  
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      return state.filter(item => item.id !== itemId);
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: () => [],
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

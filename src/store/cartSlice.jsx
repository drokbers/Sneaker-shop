import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {items:[], totalAmount: 0,},
  reducers: {
    addToCart: (state, action) => {
      const { id, price} = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
      state.totalAmount += price;
      console.log(price);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.map(item => {
        if (item.id === itemId) {
          item.quantity -= 1;
          state.totalAmount -= item.price;
        }
        return item;
      });
      state.items = state.items.filter(item => item.quantity > 0);
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

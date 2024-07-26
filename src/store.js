import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import ModalReducer from "./features/modal/ModalSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: ModalReducer,
  },
});
export default store;

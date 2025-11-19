import type { Product } from "../../Types/types";
import type { CartAction } from "../../Types/types";

export interface CartState {
  content: Product[];
  cartTotal: number;
}

const initialCartState: CartState = {
  content: [],
  cartTotal: 0,
};

const cartReducer = (state: CartState = initialCartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        content: [...state.content, action.payload],
        cartTotal: state.cartTotal + action.payload.prezzo,
      };
    case "REMOVE_FROM_CART": {
      const removedProduct = state.content[action.payload];
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
        cartTotal: state.cartTotal - (removedProduct ? removedProduct.prezzo : 0),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;

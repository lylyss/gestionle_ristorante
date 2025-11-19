import type { Product } from "../Types/types";

export interface User {
  ruolo: string;
  [key: string]: string;
}

export interface State {
  cart: {
    content: Product[];
    cartTotal: number;
  };
  login: {
    token: string | null;
    user: User | null;
  };
}

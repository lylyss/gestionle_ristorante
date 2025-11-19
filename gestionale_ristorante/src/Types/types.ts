import type { User } from "../Interfaces/interfaces";

export type Product = {
  id: number;
  nome: string;
  descrizione: string;
  prezzo: number;
  immagine: string;
  TipoPietanza: string;
};

export type LoginAction =
  | { type: "SET_LOGIN"; payload: { token: string; user: User } }
  | { type: "LOGOUT" }
  | { type: "SET_USER"; payload: User };

export type CartAction = { type: "ADD_TO_CART"; payload: Product } | { type: "REMOVE_FROM_CART"; payload: number };

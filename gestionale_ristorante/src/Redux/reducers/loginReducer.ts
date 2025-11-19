import type { User } from "../../Interfaces/interfaces";
import type { LoginAction } from "../../Types/types";

export interface LoginState {
  token: string | null;
  user: User | null;
}

const initialLoginState: LoginState = {
  token: null,
  user: null,
};

const loginReducer = (state: LoginState = initialLoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        token: action.payload.token,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        token: null,
        user: null,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;

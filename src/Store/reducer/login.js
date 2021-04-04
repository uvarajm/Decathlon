import { LOGIN, LOGINFORM, LOGINFAIL } from "../types";

const INITIAL_STATE = {
    loginSuccess: false,
    enable: false,
    userName: '',
    loginFailure: false,
};

const login = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, loginSuccess: action.payload, userName: action.payload.username }
        case LOGINFORM:
            return { ...state, enable: !state.enable }
        case LOGINFAIL:
            return { ...state, loginFailure: action.payload }
        default: return state;
    }



}
export default login;
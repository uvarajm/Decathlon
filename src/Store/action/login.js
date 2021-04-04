import { LOGIN, LOGINFAIL, LOGINFORM } from '../types'

export const login = (loginSuccess, userName) => {

    return {
        type: LOGIN,
        payload: { 'loginSuccess': loginSuccess, 'userName': userName }
    }
}

export const loginform = () => {
    return {
        type: LOGINFORM,
    }
}
export const loginfail = (loginfail) => {
    return {
        type: LOGINFAIL,
        payload: loginfail
    }
}
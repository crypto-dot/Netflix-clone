import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./authAction";
export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        console.log(user)
        const res = axios.post('auth/login', user);
        dispatch(loginSuccess(res.data));

    } catch (err) {
        dispatch(loginFailure());
    }
}
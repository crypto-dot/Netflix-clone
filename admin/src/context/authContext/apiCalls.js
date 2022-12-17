import axios from "axios";
import { loginFailure, loginStart, loginSuccess, loginResetError } from "./authAction";
export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('auth/login', user);
        res.data.admin && dispatch(loginSuccess(res.data));

    } catch (err) {
        setTimeout(() => {
            dispatch(loginResetError());
        }, 4000);
        dispatch(loginFailure());
    }
}
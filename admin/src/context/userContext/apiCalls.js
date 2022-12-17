import { deleteUserFailure, deleteUserStart, deleteUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from "./userAction";
import axios from "axios";
export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get("users/", {
            headers: {
                token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            }
        });
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailure());
    }
}
export const updateUser = async (user, dispatch) => {
    dispatch(updateUserStart());
    try {
        const res = await axios.put(`/users/${user._id}`, user, {
            headers: {
                token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            }
        });
        dispatch(updateUserSuccess(res.data));
    } catch (err) {
        dispatch(updateUserFailure());
    }
}
export const deleteUser = async (userID, dispatch) => {
    dispatch(deleteUserStart());
    try {
        await axios.delete(`users/${userID}`, {
            headers: {
                token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            }
        });
        dispatch(deleteUserSuccess(userID));
    } catch (err) {
        dispatch(deleteUserFailure());
    }
}
import axios from "axios";
import { getListFailure, getListStart, getListSuccess, deleteListFailure, deleteListStart, deleteListSuccess } from "./listAction";

export const getLists = async (dispatch) => {
    dispatch(getListStart());
    try {
        const res = await axios.get('/lists', {
            headers: {
                token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            }
        });
        dispatch(getListSuccess(res.data));
    } catch (err) {
        dispatch(getListFailure());
    }
}

export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        await axios.delete(`/lists/${id}`, {
            headers: {
                token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            }
        });
        dispatch(deleteListSuccess(id));
    } catch (err) {
        dispatch(deleteListFailure());
    }
}
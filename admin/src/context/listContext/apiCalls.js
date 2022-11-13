import axios from "axios";
import { updateListStart, updateListFailure, updateListSuccess, getListFailure, getListStart, getListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, createListStart, createListFailure, createListSuccess } from "./listAction";

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

export const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try {
        let res = await axios.post('/lists', list, {
            headers: {
                token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            }
        });
        dispatch(createListSuccess(res.data));
    } catch (err) {
        dispatch(createListFailure());
    }
}
export const updateList = async (list, dispatch) => {
    dispatch(updateListStart());
    try {
        let res = await axios.put(`/lists/${list._id}`, list, {
            headers: {
                token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            }
        });
        dispatch(updateListSuccess(res.data));
    } catch (err) {
        dispatch(updateListFailure());
    }
}
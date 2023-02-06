import { Dispatch } from "@reduxjs/toolkit";
import { fetching, fetchSucces, fetchError } from "../slices/UniqueProduct";
import axios from "axios";
const URL = process.env.REACT_APP_BASE_URL1;
export const uniqueProductAction = (id: number) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(fetching());
            const response = await axios.get(`${URL}/api/v1/users/${id}`);

            dispatch(fetchSucces(response.data))
        }
        catch (error) {
            dispatch(fetchError(error as Error))
        }
    }
}
import { Dispatch } from "@reduxjs/toolkit";
import { fetching, fetchSucces, fetchError } from "../slices/UniqueProduct";
import axios from "axios";
export const uniqueProductAction = (id: number) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(fetching());
            const response = await axios.get(`http://34.125.131.155:3000/api/v1/users/${id}`);

            dispatch(fetchSucces(response.data))
        }
        catch (error) {
            dispatch(fetchError(error as Error))
        }
    }
}
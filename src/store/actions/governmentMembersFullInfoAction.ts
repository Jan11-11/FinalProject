/* eslint-disable */
import { Dispatch } from "@reduxjs/toolkit";
import { successError, successFullfit, successLoading } from "../slices/GovernmetMembersFullInfo";
import axios from "axios";
const URL = process.env.REACT_APP_BASE_URL1;

export const fetchGovernmentMemberFullInfo = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(successLoading());
            const response = await axios.get(`${URL}/api/v1/users/fullList`);
            if (response.status === 200 && response.statusText === "OK") {
                dispatch(successFullfit(response.data));
            }
        } catch (error) {
            dispatch(successError(error as Error))
        }
    }
}

export const fetchGovernmentMembersInfo = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(successLoading());
            const response = await axios.get(`${URL}/api/v1/users`);

            if (response.status === 200 && response.statusText === "OK") {
                dispatch(successFullfit(response.data));
            }
        } catch (error) {

            dispatch(successError(error as Error))
        }
    }
}

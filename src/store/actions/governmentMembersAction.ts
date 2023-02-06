import { Dispatch } from '@reduxjs/toolkit';
import { fetching, fetchFullfit, fetchError } from "../slices/GovernmentMembers";
import axios from 'axios';
const PATH_URL = process.env.REACT_APP_BASE_URL1;

export const fetchGovernmentMember = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(fetching())
            const response = await axios.get(`${PATH_URL}/api/v1/users`);
            dispatch(fetchFullfit(response.data))
        }
        catch (error) {
            dispatch(fetchError(error as Error))
        }
    }
}
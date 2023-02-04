import { createSlice } from "@reduxjs/toolkit";
import { IMemberFullInfo } from "../../types/models";

const initialState = {
    loading: false,
    error: "",
    product: <IMemberFullInfo[]>[],
}

export const uniqueProduct = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSucces(state, action) {
            state.product[0] = action.payload;
            state.loading = false;
        },
        fetchError(state, action) {
            state.error = action.payload.message
        }
    }
});

export const { fetching, fetchSucces, fetchError } = uniqueProduct.actions;
export default uniqueProduct.reducer;
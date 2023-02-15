/* eslint-disable */
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IMemberFullInfo } from "../../types/models";

const initialState = {
    loading: false,
    error: "",
    membersFullInfo: <IMemberFullInfo[]>[],
    uploadedImage: {
        "originalname": "",
        "filename": "",
        "dirname": "",
        "success": false
    }
}

export const governmentMembersFullInfo = createSlice({
    name: "membersFullInfo",
    initialState,
    reducers: {
        successLoading: (state) => {
            state.loading = true;
        },
        successFullfit: (state, action: PayloadAction<[]>) => {
            state.loading = false;
            state.membersFullInfo = action.payload;
        },
        successError: (state, action: PayloadAction<Error>) => {
            state.error = action.payload.message;
        },
        addMember: (state, action) => {
            state.membersFullInfo.push(action.payload);
           state.uploadedImage={
                "originalname": "",
                "filename": "",
                "dirname": "",
                "success": false
            }
        },
        deleteMember: (state, action) => {
            state.membersFullInfo = state.membersFullInfo.filter((item) => {
                return item.id !== action.payload;
            })
        },
        editeMember: (state, action) => {
            
            state.membersFullInfo = state.membersFullInfo.map((member) => {
                if (member.id == action.payload[0].id) {
                    member = action.payload[0];
                }
                state.uploadedImage={
                    "originalname": "",
                    "filename": "",
                    "dirname": "",
                    "success": false
                }
                return member;
            })
        },
        activeMember: (state, action) => {
            state.membersFullInfo = state.membersFullInfo.map((member) => {
                if (member.id == action.payload) {
                    if (member.status === "active") {
                        member.status = "passive"
                    }
                }
                return member;
            });
        },
        setImage: (state, action) => {
            state.uploadedImage = action.payload || {};
        },
        deleteUploadImage:(state) => {
            state.uploadedImage={
                "originalname": "",
                "filename": "",
                "dirname": "",
                "success": false
            }
        }
    }

});
export const {deleteUploadImage, successError, successFullfit, addMember, deleteMember, successLoading, editeMember, activeMember, setImage } = governmentMembersFullInfo.actions;
export default governmentMembersFullInfo.reducer;
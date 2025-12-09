import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/services/api";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

export const addUserServices = createAsyncThunk(
    "addUser/addUserServices",
    async (user, { rejectWithValue }) => {
        try {
            const response = await api.post("QuanLyNguoiDung/ThemNguoiDung", user);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const addUserSlice = createSlice({
    name: "addUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addUserServices.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(addUserServices.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(addUserServices.rejected, (state, action) => {
            state.loading = true;
            state.error = action.payload;
        })
    },
});

export default addUserSlice.reducer;
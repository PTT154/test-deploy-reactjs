import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../../services/api";

const userInfo = localStorage.getItem("userInfo");

const data = userInfo ? JSON.parse(userInfo) : null;

const initialState = {
    loading: false,
    data,
    error: null,
};

export const authService = createAsyncThunk(
    "auth/login",
    async (user, { rejectWithValue }) => {
        try {
            const response = await api.post("QuanLyNguoiDung/DangNhap", user);

            /**
             * check use role 
             * if "maLoaiNguoiDung": "KhachHang" -> prevent login
             * if "QuanTri" -> allow login  
             */

            const roles = response.data.content.maLoaiNguoiDung;
            if (roles === "KhachHang") {
                return rejectWithValue({
                    response: {
                        data: {
                            content: "Bạn không có quyền truy cập vào trang này",
                        }
                    }
                });
            }

            // local storage => storage user info
            const userInfoString = JSON.stringify(response.data.content);
            localStorage.setItem("userInfo", userInfoString);

            return response.data.content;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authService.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(authService.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(authService.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export default authSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../../services/api";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

export const fetchListMovie = createAsyncThunk("listMovie/fetchListMovie",
    async (__, { rejectWithValue }) => { // __ vì không có tham số truyền vào, refectWithValue để trả về lỗi tùy chỉnh
        try {
            // const result = await axios({
            //     url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            //     method: "GET",
            //     headers: {
            //         TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5MCIsIkhldEhhblN0cmluZyI6IjI5LzA1LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc4MDAxMjgwMDAwMCIsIm5iZiI6MTc1MzAzMDgwMCwiZXhwIjoxNzgwMTYwNDAwfQ.KkGRtLpEsgoM4M_TapjOZIzvAwbay3QvXIwwN8XUqWk"
            //     },
            // });

            // Cách dùng api đã cấu hình sẵn từ src/services/api.js
            const result = await api.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
            return result.data.content; // trả về dữ liệu lấy được
        } catch (error) {
            return rejectWithValue(error);
        }
    });

const listMovieSlice = createSlice({
    name: "listMovieSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchListMovie.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchListMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchListMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default listMovieSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../../services/api";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

export const fetchDetailMovie = createAsyncThunk("detailMovie/fetchDetailMovie",
    async (id, { rejectWithValue }) => { //Truyền id của phim cần lấy chi tiết

        try {
            // const result = await axios({
            //     url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
            //     method: "GET",
            //     headers: {
            //         TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5MCIsIkhldEhhblN0cmluZyI6IjI5LzA1LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc4MDAxMjgwMDAwMCIsIm5iZiI6MTc1MzAzMDgwMCwiZXhwIjoxNzgwMTYwNDAwfQ.KkGRtLpEsgoM4M_TapjOZIzvAwbay3QvXIwwN8XUqWk"
            //     },
            // });
            // return result.data.content; // trả về dữ liệu lấy được

            //Cách call api đã cấu hình sẵn từ src/services/api.js
            // call thêm api LayThongTinLichChieuPhim?MaPhim=1318 để lấy thông tin lịch chiếu
            // const result = await api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);

            // const schedule = await api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);

            // console.log("schedule", schedule.data.content);

            // Cách call song song sử dụng Promise.all (call song song để tối ưu thời gian chờ)
            const [resultDetail, resultSchedule] = await Promise.all([
                api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`),
                api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
            ])

            //merge 2 object lại
            const result = {
                detail: resultDetail.data.content,
                schedule: resultSchedule.data.content,
            };

            console.log("test kết quả" , result)
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    });

const detailMovieSlice = createSlice({
    name: "detailMovieSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDetailMovie.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchDetailMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchDetailMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default detailMovieSlice.reducer;
import { configureStore } from "@reduxjs/toolkit"
import listMovieReducer from "../pages/HomeTemplate/ListMovie/slice";
import detailMovieReducer from "../pages/HomeTemplate/DetailMovie/slice";
import authReducer from "../pages/AdminTemplate/Auth/slice";
import addUserReducer from "../pages/AdminTemplate/AddUser/slice";

const store = configureStore({
    reducer: {
        listMovieReducer,
        detailMovieReducer,
        authReducer,
        addUserReducer,
    },
});

export default store;
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailMovie } from "./slice";
import { useEffect } from "react";

export default function DetailMovie() {
    const param = useParams();
    const { id } = param;

    const dispatch = useDispatch();
    const state = useSelector((state) => state.detailMovieReducer);
    console.log("Thông tin phim", state);

    const { detail, schedule } = state.data || {};

    useEffect(() => {
        dispatch(fetchDetailMovie(id));
    }, [id])
    return (
        <div>DetailMovie - {detail?.tenPhim}</div>
    )
}

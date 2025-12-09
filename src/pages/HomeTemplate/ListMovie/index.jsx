import axios from "axios";
import { useEffect, useState } from "react"
import Movie from "./Movie";
import { fetchListMovie } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@components/Loader";

export default function ListMovie() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.listMovieReducer);

  // Không cần nữa nếu call api bằng redux thunk
  // const [state, setState] = useState({
  //   loading: false, //(loading để giúp cho giao diện ở trạng thái chờ khi chưa có dữ liệu | true là đang chờ | false là đã có dữ liệu)
  //   data: null, //(data để lưu trữ dữ liệu lấy về từ api)
  //   error: null //(error để lưu trữ lỗi nếu có lỗi xảy ra trong quá trình lấy dữ liệu từ api)
  // });

  useEffect(() => {

    // Không cần nữa nếu call api bằng redux thunk
    // const fetchData = async () => {

    //   // Cách 1
    //   // const promise = axios({
    //   //   url: "demo_url",
    //   //   method: "GET"
    //   // })

    //   // promise.then().catch()

    //   // Cách 2
    //   // pending (là trạng thái chờ)
    //   setState({
    //     ...state, // giữ lại các thuộc tính cũ
    //     loading: true,
    //   })

    //   try {
    //     const result = await axios({
    //       url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //       method: "GET",
    //       headers: {
    //         TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5MCIsIkhldEhhblN0cmluZyI6IjI5LzA1LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc4MDAxMjgwMDAwMCIsIm5iZiI6MTc1MzAzMDgwMCwiZXhwIjoxNzgwMTYwNDAwfQ.KkGRtLpEsgoM4M_TapjOZIzvAwbay3QvXIwwN8XUqWk"
    //       },
    //     });

    //     // success
    //     setState({
    //       ...state, // giữ lại các thuộc tính cũ
    //       loading: false,
    //       data: result.data.content,
    //     })

    //   } catch (error) {
    //     console.log(error);
    //     // error
    //     setState({
    //       ...state, // giữ lại các thuộc tính cũ
    //       loading: false,
    //       error: error
    //     });
    //   };

    // };

    // fetchData();
    dispatch(fetchListMovie());
  }, [])

  console.log(state);

  const renderMovieList = () => {
    const { data } = state; //destructuring state ra lấy thuộc tính data
    return data?.map((movie) => (
      <Movie key={movie.maPhim} data={movie} />
    ));
  }

  if (state.loading) return (<Loader />)

  return (
    <div className="container mx-auto grid grid-cols-4 gap-10">{renderMovieList()}</div>
  )
}

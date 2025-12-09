import { useState } from 'react'
import { authService } from './slice'
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Auth() {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.authReducer)
    const { loading, error, data } = authState;
    const [user, setUser] = useState({
        taiKhoan: "",
        matKhau: "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(authService(user));
    };

    if (data) {
        //Redirect to admin dashboard or another page
        return <Navigate to={"/admin/dashboard"} />
    }

    if (loading) return <div>Loading...</div>

    return (

        <form onSubmit={handleLogin} className="max-w-sm mx-auto">
            {error && <div className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft" role="alert">
                {error.response.data.content}
            </div>}

            <div className="mb-5">
                <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Tài khoản</label>
                <input
                    onChange={handleOnChange}
                    name="taiKhoan"
                    type="text"
                    autoComplete="username" // Thêm dòng này
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Mật khẩu</label>
                <input
                    onChange={handleOnChange}
                    name="matKhau"
                    type="password" id="password"
                    autoComplete="current-password" // Thêm dòng này
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" />
            </div>
            <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Login</button>
        </form>

    )
}

import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserServices } from "./slice";

export default function AddUser() {
    const [user, setUser] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDT: "",
        hoTen: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
    });

    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleAddUser = (e) => {
        e.preventDefault();
        dispatch(addUserServices(user));
    };

    return (
        <form onSubmit={handleAddUser} className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Tài khoản</label>
                <input
                    onChange={handleOnChange}
                    name="taiKhoan"
                    type="text"
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Mật khẩu</label>
                <input
                    onChange={handleOnChange}
                    name="matKhau"
                    type="password" id="password"
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Email</label>
                <input
                    onChange={handleOnChange}
                    name="email"
                    type="email"
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Phone</label>
                <input
                    onChange={handleOnChange}
                    name="soDT"
                    type="text"
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Ho ten</label>
                <input
                    onChange={handleOnChange}
                    name="hoTen"
                    type="text"
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" />
            </div>

            <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Add User</button>
        </form>

    )
}

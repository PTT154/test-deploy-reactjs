import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from "./_components/Navbar"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function AdminTemplate() {
  const authState = useSelector((state) => state.authReducer);
  const { data } = authState;


  //Nếu chưa đăng nhập thì chuyển về trang /auth
  if (!data) return <Navigate to="/auth" />

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

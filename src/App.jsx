import React from 'react'
import HomeTemplate from "./pages/HomeTemplate"
import Home from "./pages/HomeTemplate/Home"
import About from "./pages/HomeTemplate/About"
import ListMovie from "./pages/HomeTemplate/ListMovie"
import AdminTemplate from "./pages/AdminTemplate"
import Dashboard from "./pages/AdminTemplate/DashBoard"
import AddUser from "./pages/AdminTemplate/AddUser"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageNoteFound from "./pages/PageNotFound"
import renderRoute from "./routes"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route>
          <Route path="" element={<HomeTemplate />}>
            <Route path="" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="list-movie" element={<ListMovie />}></Route>
          </Route>
          <Route path="admin" element={<AdminTemplate />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="add-user" element={<AddUser />}></Route>
          </Route>
          <Route path="*" element={<PageNoteFound />}></Route>
        </Route> */}

        {/* cách chuyên nghiệp hơn tạo route động */}
        {renderRoute()}
      </Routes>
    </BrowserRouter>
  )
}


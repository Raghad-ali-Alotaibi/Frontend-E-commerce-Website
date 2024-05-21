import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import {
  Home,
  ProductDetails,
  Register,
  Login,
  Error,
  DashboardAdmin,
  DashboardUser,
  UserOrders,
  UserProfile,
  Categories,
  Orders,
  Users,
  Products
} from "@/pages/Pages"
import "./App.css"
import AdminRoute from "./Routers/AdminRoute"
import UserRoute from "./Routers/UserRoute"

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/slug/:productSlug" element={<ProductDetails />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route path="/dashboard" element={<UserRoute />}>
            <Route path="user" element={<DashboardUser />} />
            <Route path="user/profile" element={<UserProfile />} />
            <Route path="user/orders" element={<UserOrders />} />
          </Route>

          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<DashboardAdmin />} />
            <Route path="admin/categories" element={<Categories />} />
            <Route path="admin/products" element={<Products />} />
            <Route path="admin/users" element={<Users />} />
            <Route path="admin/orders" element={<Orders />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App

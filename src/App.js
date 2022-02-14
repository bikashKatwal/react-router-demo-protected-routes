import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import About from "./components/About";

import Admin from "./components/Admin";
import User from "./components/DynamicRoutes/User";
import UserDetails from "./components/DynamicRoutes/UserDetails";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import FeaturedProducts from "./components/NestedComponents/FeaturedProducts";
import NewProducts from "./components/NestedComponents/NewProducts";
import NoMatch from "./components/NoMatch";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import Profile from "./components/ProtectedRoutes/Profile";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./components/Utils/auth";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback="Loading...">
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<User />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

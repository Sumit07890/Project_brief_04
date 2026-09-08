import { Routes, Route, Navigate } from "react-router";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import MenuItem from "../pages/MenuItem/MenuItem";
import NotFound from "../pages/NotFound/notfound";

import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (
    <MainLayout>
    <Routes>
  <Route path="/" element={<Navigate to="/login" replace />} />
  <Route path="/login" element={<Login />} />
  <Route path="/home" element={<Home />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/menu-item" element={<MenuItem />} />
  <Route path="*" element={<NotFound />} />
</Routes>
    </MainLayout>
  );
}

export default AppRoutes;
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminDashboard from "./components/admin/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import CollectorDashboard from "./components/CollectorDashboard";
import UserManagement from "./components/admin/UserManagement";
import GarbageCollectorManagement from "./components/admin/GarbageCollectorManagement";
import WasteOverview from "./components/admin/WasteOverview";
import Analytics from "./components/admin/Analytics";
import Settings from "./components/admin/Settings";
import Notifications from "./components/admin/Notifications";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { user, role } = useAuth();

  // Protected Route Component
  const ProtectedRoute = ({ children, allowedRoles }) => {
    console.log("User:", user, "Role:", role);
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    if (!allowedRoles.includes(role)) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes with Role-based Access */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="user-management" element={<UserManagement />} />
          <Route path="garbage-collector" element={<GarbageCollectorManagement />} />
          <Route path="waste-overview" element={<WasteOverview />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/collector-dashboard"
          element={
            <ProtectedRoute allowedRoles={["collector"]}>
              <CollectorDashboard />
            </ProtectedRoute>
          }
        />

        {/* Catch-All 404 Route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;

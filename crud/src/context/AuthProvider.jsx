import React, { createContext, useState, useContext } from "react";

// Create the authentication context
const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to manage the current user
  const [role, setRole] = useState(null); // State to manage the user role

  // Login function
  const login = (userData) => {
    setUser(userData.email); // Set the user email or other identifying information
    setRole(userData.role); // Set the user role
    // Optional: Save user session data in localStorage/sessionStorage
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setUser(null); // Clear the user data
    setRole(null); // Clear the role data
    localStorage.removeItem("user"); // Clear session storage if used
  };

  // Auth context value to be shared
  const value = {
    user,
    role,
    login,
    logout,
    isAuthenticated: !!user, // Boolean indicating if the user is logged in
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

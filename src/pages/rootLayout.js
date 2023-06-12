import React from "react";
import { useState, createContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

export const AppContext = createContext(null);
function RootLayout() {
  const [searchMovies, setSearchMovies] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (searchMovies) {
      navigate("/search");
    } else {
      navigate("/home");
    }
  }, [searchMovies]);
  return (
    <AppContext.Provider value={{ searchMovies, setSearchMovies }}>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </AppContext.Provider>
  );
}

export default RootLayout;

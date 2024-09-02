import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Components/sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";

function MainLayout() {
  const navigate=useNavigate()
  useEffect(()=>{
    navigate('/home')
  },[])
  return (
    <div>
      <Navbar />
      <Outlet />
      <Sidebar />
    </div>
  );
}

export default MainLayout;

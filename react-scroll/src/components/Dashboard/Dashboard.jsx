import React from 'react'
import "./dashboard.scss";
import { Outlet } from 'react-router-dom'
const Dashboard = () => {

  return (
    <div className="home">
      <div className="homeContainer">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
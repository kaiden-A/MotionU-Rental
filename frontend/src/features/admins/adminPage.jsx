import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Products from './components/Products';
import Request from './components/Request';
import "./styles/admin.css"

function AdminPage(){

    const [choose , setChoose] = useState("dashboard");


    return(
        <div style={{display: "flex" , flexDirection : "row" , minHeight : "100vh"}}>

            <Sidebar
                choose={choose}
                setChoose={setChoose}
            />
            <div className="main-content">

                <div className="topbar">
                    <h1 className="page-title">Dashboard Overview</h1>
                    <div className="topbar-actions">
                        <button className="notification-btn">
                            <i className="fas fa-bell"></i>
                            <div className="notification-badge">3</div>
                        </button>
                        <div className="date-display"></div>
                    </div>
                </div>

                <div className="content-area">
                    {choose === 'dashboard' && <Dashboard/>}
                    {choose === 'products' && <Products/>}
                    {choose === 'requests' && <Request/>}
                </div>

            </div>
        
        </div>
    )

}

export default AdminPage;
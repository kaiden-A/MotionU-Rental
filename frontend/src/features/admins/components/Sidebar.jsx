import { useState } from "react";


function Sidebar({choose , setChoose}){

    return(
        <>
            <div className="sidebar">
                <div className="logo">
                    <div className="logo-icon">
                        <i className="fas fa-box"></i>
                    </div>
                    <div className="logo-text">Rent Admin</div>
                </div>
                
                <div className="admin-info">
                    <div className="admin-avatar">AD</div>
                    <div className="admin-details">
                        <h3>Admin User</h3>
                        <p>Administrator</p>
                    </div>
                </div>
                
                <nav className="nav-menu">
                    <a className={`nav-item ${choose === "dashboard" ? 'active' : ''}`} onClick={() => setChoose('dashboard')}>
                        <i className="fas fa-chart-bar"></i>
                        <span>Dashboard</span>
                    </a>
                    <a className={`nav-item ${choose === "products" ? 'active' : ''}`} onClick={() => setChoose('products')}>
                        <i className="fas fa-box-open"></i>
                        <span>Products</span>
                    </a>
                    <a className={`nav-item ${choose === "requests" ? 'active' : ''}`} onClick={() => setChoose('requests')}>
                        <i className="fas fa-clipboard-list"></i>
                        <span>Rental Requests</span>
                    </a>
                </nav>
                
                <div className="logout">
                    <button className="logout-btn">
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        
        </>
    )

}

export default Sidebar;
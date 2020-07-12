import React from 'react';
import './style.css';
import image1 from '../../images/prof1.jpg'

function Dashboard() {
    return (
        <div className="container">
            <div className="side-bar">
                <div className="logo">

                   <i class="fa fa-life-ring"></i> <span>Dashboard</span>
                </div>
                <div className="side-items">
                    <li><i className="fa fa-rocket"></i> Home</li>
                    <li><i className="fa fa-user"></i> Users</li>
                    <li><i className="fa fa-cog"></i> Settings</li>
                    <li><i className="fa fa-sign-out"></i> Logout</li>
                </div>
                   
                
            </div>
            {/* MAIN _CONTENT _ START */}
            <div className="main-content">
                <div className="header">
                    <div className="search">
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder="Buscar"/>
                    </div>
                    <div className="profile">
                        <i className="fa fa-bell"></i>
                        <img src={image1} alt="profile picture" />
                    </div>
                </div>
                <div className="text-title">
                    <div className="text-1">
                        Seus dados são esses
                    </div>
                    <div className="data-text">
                        03 July, 2020
                    </div>
                </div>
                <div className="charts">
                    <div className="chart-1">
                            
                    </div>
                    <div className="chart-2">
                        
                    </div>
                </div>
                <div className="information">
                    4
                </div>

            </div>
            {/* MAIN CONTENT-END */}
        </div>
    )
}

export default Dashboard;

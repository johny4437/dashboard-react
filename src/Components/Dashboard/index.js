import React from 'react';
import './style.css';
import image1 from '../../images/prof1.jpg';
import Bars from '../../charts/Bars';
import Chart from '../../charts/Doughnut';
import Form from   '../Forms/index';

function Dashboard() {
    return (
        <div className="container">
            <div className="side-bar">
                <div className="main">
                    <input type="checkbox" id="menu"/>
                    <label htmlFor="menu" className="menu-bar">
                     <i className="fa fa-bars"></i>
                 </label>
                <div className="logo">

                   <i class="fa fa-life-ring"></i> <span>Dashboard</span>
                </div>
                <div className="side-items">
                    <li><i className="fa fa-rocket"></i> <span>Home</span> </li>
                    <li><i className="fa fa-user"></i> <span>Usuários</span> </li>
                    <li><i className="fa fa-cog"></i> <span>Configurações</span> </li>
                    <li><i className="fa fa-sign-out"></i> <span>Sair</span> </li>
                </div>
                
                   
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
                        <Chart/>
                    </div>
                    <div className="chart-2">
                        <Bars/>
                    </div>
                </div>
                <div className="information">
                    <div className="information-1">
                        <div className="part-1">
                            
                        </div>
                        <div className="part-2">
                            
                        </div>
                    </div>
                    <div className="information-2">
                        <Form/>
                    </div>
                    <div className="information-3">
                        
                    </div>
                </div>
            
            </div>
           
            {/* MAIN CONTENT-END */}
        </div>
    )
}

export default Dashboard;

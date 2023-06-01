import React from 'react'
import Icon from '@mdi/react';
import { mdiBellRing, mdiMenuOpen } from '@mdi/js';
import { Menu, Avatar, Switch } from "antd";

export default function HeaderContent() {
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light w-100">
            <div className='logo'>
                <a href="#">
                    <img
                        style={{ height: '43.94px', width: '130px' }}
                        className='img-fluid'
                        src="https://res.cloudinary.com/da6wkcnok/image/upload/v1607667363/rentredi%20logos/logoBlueNoBackground_lxff1s.png" id="dashboardLogo" />
                </a>
            </div>
            <ul className="navbar-nav ms-auto">

                <li className="nav-item d-flex align-items-center">
                    <span>View</span>
                    <a className="nav-link " href="#">
                        <span>Demo User</span>
                        <i className="fas fa-chevron-down" aria-hidden="true"></i>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="far fa-user settingsIcon fa-xl" aria-hidden="true" ></i>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i id="bellIcon" className="settingsIcon far fa-bell  fa-xl" alt="" aria-hidden="true"></i>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i id="referLandlordGiftIcon" className="settingsIcon fas fa-gift fa-xl" alt="" aria-hidden="true"></i>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-cog settingsIcon fa-xl" aria-hidden="true"></i>
                    </a>
                </li>

            </ul>

        </nav>


    )

}
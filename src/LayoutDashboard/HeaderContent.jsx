import React from 'react'
import Icon from '@mdi/react';
import { mdiBellRing, mdiMenuOpen } from '@mdi/js';
import { Menu, Avatar, Switch } from "antd";

export default function HeaderContent() {
    return (
        // <div className='d-inline-flex'>
        //     <div className='logo'>
        //         <img
        //             style={{ height: '43.94px', width: '130px' }}
        //             className='img-fluid'
        //             src="https://app.rentredi.com/img/logoWhiteNoBackground.png" id="dashboardLogo" />
        //     </div>

        //     <div className='d-flex align-items-center bg-primary ml-auto'>
        //         <div style={{ position: 'relative', display: "flex", marginRight: '5px' }} >
        //             <div className='menu_acc' data-toggle="collapse" data-target="#demo2">
        //                 <div className='bg-bell'>
        //                     <Icon path={mdiBellRing} />
        //                 </div>
        //             </div>
        //             <div className='d-flex align-items-center'>

        //                 <div style={{ position: 'relative', display: "flex", marginRight: '5px' }} >
        //                     <div className='menu_acc' data-toggle="collapse" data-target="#demo2">
        //                         <div className='bg-bell'>
        //                             <Icon path={mdiBellRing} />
        //                         </div>
        //                     </div>

        //                 </div>

        //             </div>

        //         </div>
        //     </div>
        // </div>

        <nav className="navbar navbar-expand-sm bg-light navbar-light w-100">
            <div className='logo'>
                <a href="#">
                    <img
                        style={{ height: '43.94px', width: '130px' }}
                        className='img-fluid'
                        src="https://res.cloudinary.com/da6wkcnok/image/upload/v1607667363/rentredi%20logos/logoBlueNoBackground_lxff1s.png" id="dashboardLogo" />
                </a>
            </div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>

        </nav>


    )

}
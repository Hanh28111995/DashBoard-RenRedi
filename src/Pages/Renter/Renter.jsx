import React from 'react'
import { Button } from 'antd'
import DataTableCurrent from '../../Component/Renders/DataTableCurent'
import DataTableMovingIn from '../../Component/Renders/DataTableMovingIn'
export default function Renter() {
    return (
        <div className='renter_content'>
            <div className='btn_list'>
                <ul className="nav nav-pills text-center row w-100" style={{ margin: '10px auto', padding: '5px 5px' }}>
                    <li className="nav-item col-4 col-md-2 col-lg-2" >
                        <a className='nav-link active' data-toggle="pill" href='#current' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                            {/* <a class="nav-link active" data-toggle="pill" href="#flamingo" role="tab" aria-controls="pills-flamingo" aria-selected="true"> */}
                            <p>Current</p>
                            <p>4 Tenants</p>
                        </a>
                    </li>
                    <li className="nav-item col-4 col-md-2 col-lg-2" >
                        <a className='nav-link' data-toggle="pill" href='#movingin' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                            <p>Moving In</p>
                            <p>0 Lease Starting</p>
                        </a>
                    </li>

                    <li className="nav-item col-4 col-md-2 col-lg-2" >
                        <a className='nav-link' data-toggle="pill" href='#leaving' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                            <p>Leaving</p>
                            <p>3 Lease Ending</p>
                        </a>
                    </li>
                    <li className="nav-item col-4 col-md-2 col-lg-2" >
                        <a className='nav-link' data-toggle="pill" href='#accepted' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                            <p>Accepted</p>
                            <p>1 Accepted</p>
                        </a>
                    </li>
                    <li className="nav-item col-4 col-md-2 col-lg-2" >
                        <a className='nav-link' data-toggle="pill" href='#rejected' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                            <p>Rejected</p>
                            <p>1 Rejected</p>
                        </a>
                    </li>
                    <li className="nav-item col-4 col-md-2 col-lg-2" >
                        <a className='nav-link' data-toggle="pill" href='#prior' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                            <p>Prior</p>
                            <p>4 Previous Tenants</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='tab-content'>
                <div id='current' className="tab-pane active"  >
                    <DataTableCurrent />
                </div>
                <div id='movingin' className="tab-pane">
                    <DataTableMovingIn />
                </div>
            </div>
        </div>
    )
}

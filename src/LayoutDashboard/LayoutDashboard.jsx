import React, { useState } from 'react'
import { Layout, Menu } from "antd";
import Icon from "@mdi/react";
import { mdiAccount, mdiAccountCash, mdiFileEdit, mdiClockTimeFour, mdiTicketAccount, mdiCalendarMonth, mdiAccountSupervisor, mdiAccountGroup } from "@mdi/js";
import { Outlet } from 'react-router-dom';
import HeaderContent from './HeaderContent';
const { Content, Sider } = Layout;


export default function LayoutDashboard() {
    const [collapsed, setCollapsed] = useState(true);

    function getItem(label, key, icon, children, type, disabled) {
        return {
            key,
            icon,
            children,
            label,
            type,
            disabled
        };
    }

    const menuList = [
        // getItem('PERSONAL___', null, <span>___</span>, null, null, true),
        // getItem('Information', '/admin/personal_information', <Icon path={mdiAccount} size={1} />),
        // getItem('Pay Stub', '/admin/pay_stub', <Icon path={mdiAccountCash} size={1} />),
        // getItem('Daily Task', '/admin/daily_task', <Icon path={mdiFileEdit} size={1} />),
        // getItem('Time Sheet', '/admin/timesheet', <Icon path={mdiClockTimeFour} size={1} />),
        getItem('Dashboard', '', <i className="fa-solid fa-th-large" aria-hidden="true" />,),
        getItem('Help', '/tomorrow1', <i className="fa-solid fa-info " aria-hidden="true" />,
            [
                getItem('Live chat', '/tomorrow1/child1'),
                getItem('Articles & Tour', '/tomorrow1/child2'),
                getItem('Demo mode', '/tomorrow1/child3'),
                getItem('I Want a Product Demo', '/tomorrow1/child4'),
            ]),
        getItem('Get $50', '/tomorrow2', <i className="fa-solid fa-gift" aria-hidden="true" />,
            []),
        getItem('Rent', '/tomorrow3', <i className="fa-solid fa-dollar-sign" aria-hidden="true" />,
            [
                getItem('View all charges', '/tomorrow3/child1'),
                getItem('Create charge', '/tomorrow3/child2'),
                getItem('Add late fee rules', '/tomorrow3/child3'),
                getItem('Export charges', '/tomorrow3/child4'),
                getItem('View rent roll', '/tomorrow3/child5'),
            ]),
        getItem('Accounting', '/tomorrow4', <i className="fa-solid fa-calculator" aria-hidden="true" />,
            [
                getItem('Sign In/Sign Up', '/tomorrow4/child1'),
                getItem('Manage Plan', '/tomorrow4/child2'),
                getItem('Re-Sync Data', '/tomorrow4/child3'),
            ]),


        // getItem('DEPARTMENT___', null, <span>___</span>, null, null, true),
        // getItem('Calendar', '/admin/department/calendar', <Icon path={mdiCalendarMonth} size={1} />),
    ]

    return (
        // <p className='text-light '>hanh</p>
        <div className='layOut_wrapper'>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider
                    // className={`${userState.toggleDarkLight ? "menuSidebar_dark" : "menuSidebar"}`}
                    theme='light'
                    collapsed={false}
                    onCollapse={(value) => setCollapsed(value)}
                // collapsible={true}
                // onMouseEnter={() => setCollapsed(false)}
                // onMouseLeave={() => setCollapsed(true)}
                // style={{
                //     height: '100%',
                //     overflowY: 'auto',
                // }}


                >
                    <div className="collapse-btn bg-dark w-100 d-inline-flex align-items-center" style={{ padding: '15px' }} onClick={() => { setCollapsed(!collapsed) }}>
                        <span className="navHeaderIconContainer text-light" id="HamburgerMenuIcon" >
                            <i class="fa-solid fa-bars fa-xl"></i>
                        </span>
                        <div className='logo'>
                            <span className="logo-container" >
                                <img
                                    style={{ height: '43.94px', width: '130px' }}
                                    src="https://app.rentredi.com/img/logoWhiteNoBackground.png" id="dashboardLogo" />
                            </span>
                        </div>
                    </div>

                    <Menu
                        mode="inline"
                        // theme='light'
                        style={{ backgroundColor: 'transparent' }}
                        items={menuList}
                    // onClick={({ key }) => {
                    //     if (key === 'logOut') {
                    //         handleLogout();
                    //     }
                    //     else {
                    //         navigate(key)
                    //     }
                    // }}
                    />
                </Sider>
                <Layout
                    // className={`${userState.toggleDarkLight ? "site-layout_dark" : "site-layout"}  w-100`}
                    onClick={() => { setCollapsed(true) }}
                >
                    <Content
                        style={{
                            margin: '0 0.5rem',
                        }}
                    >
                        <header >
                            <HeaderContent />
                        </header>
                        <Outlet />
                        {/* <footer className='mt-3' >
                            <FooterContent />
                        </footer> */}
                    </Content>

                </Layout>
            </Layout>
        </div >
    )
}

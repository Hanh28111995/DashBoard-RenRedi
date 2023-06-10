import React, { useState } from 'react'
import { Layout, Menu } from "antd";
import Icon from "@mdi/react";
import { mdiAccount, mdiAccountCash, mdiFileEdit, mdiClockTimeFour, mdiTicketAccount, mdiCalendarMonth, mdiAccountSupervisor, mdiAccountGroup } from "@mdi/js";
import { Outlet, useNavigate } from 'react-router-dom';
import HeaderContent from './HeaderContent';
import Chatbox from './Chatbox';
const { Content, Sider } = Layout;


export default function LayoutDashboard() {
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate()

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
        getItem('Help', '/sub1', <i className="fa-solid fa-info " aria-hidden="true" />,
            [
                getItem('Live chat', '/tomorrow1/child1'),
                getItem('Articles & Tour', '/tomorrow1/child2'),
                getItem('Demo mode', '/tomorrow1/child3'),
                getItem('I Want a Product Demo', '/tomorrow1/child4'),
            ]),
        getItem('Get $50', '/sub2', <i className="fa-solid fa-gift" aria-hidden="true" />,
            []),
        getItem('Rent', '/sub3', <i className="fa-solid fa-dollar-sign" aria-hidden="true" />,
            [
                getItem('View all charges', '/tomorrow3/child1'),
                getItem('Create charge', '/tomorrow3/child2'),
                getItem('Add late fee rules', '/tomorrow3/child3'),
                getItem('Export charges', '/tomorrow3/child4'),
                getItem('View rent roll', '/tomorrow3/child5'),
            ]),
        getItem('Accounting', '/sub4', <i className="fa-solid fa-calculator" aria-hidden="true" />,
            [
                getItem('Sign In/Sign Up', '/tomorrow4/child1'),
                getItem('Manage Plan', '/tomorrow4/child2'),
                getItem('Re-Sync Data', '/tomorrow4/child3'),
            ]),
        getItem('Calendar', '/sub5', <i className="fa-solid fa-calendar-alt" aria-hidden="true" />,
            [
                getItem('Add Event', '/calendar/calendarEventDetails', <i />),
                getItem('View Calendar', '/calendar', <i />),
            ]),
        getItem('Tasks', '/sub6', <i className="fas fa-clipboard-check" aria-hidden="true" />,
            [
                getItem('Add task', '/tasks/tasksDetails', <i />),
                getItem('View all task', '/tasks', <i />),
            ]),
        // getItem('Dashboard', '', <i className="fa-solid fa-th-large" aria-hidden="true" />,),
        // getItem('Dashboard', '', <i className="fa-solid fa-th-large" aria-hidden="true" />,),
        // getItem('Dashboard', '', <i className="fa-solid fa-th-large" aria-hidden="true" />,),
        // getItem('Dashboard', '', <i className="fa-solid fa-th-large" aria-hidden="true" />,),
        // getItem('Dashboard', '', <i className="fa-solid fa-th-large" aria-hidden="true" />,),
        // getItem('Dashboard', '', <i className="fa-solid fa-th-large" aria-hidden="true" />,),
        // getItem('Dashboard', '', <i className="fa-solid fa-th-large" aria-hidden="true" />,),
        // getItem('Dashboard', '', <i className="fa-solid fa-th-large" aria-hidden="true" />,),



        // getItem('DEPARTMENT___', null, <span>___</span>, null, null, true),
        // getItem('Calendar', '/admin/department/calendar', <Icon path={mdiCalendarMonth} size={1} />),
    ]

    return (

        <div className='layout_wrapper'>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider
                    className="menuSidebar"
                    theme='light'
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                    onClick={() => { setCollapsed(false) }}

                    // collapsible={true}
                    // onMouseEnter={() => setCollapsed(false)}
                    // onMouseLeave={() => setCollapsed(true)}
                    style={{
                        height: '100%',
                        overflowY: 'auto',
                        backgroundClip: 'red'
                    }}
                >
                    <div
                        className={`collapse-btn w-100 d-inline-flex align-items-center ${collapsed ? '' : 'expanded'}`}
                    >
                        <span className="navHeaderIconContainer text-light" id="MenuBarIcon" >
                            <i className="fa-solid fa-bars fa-xl"></i>
                        </span>

                        <div className={`logo ${collapsed ? 'd-none' : ''}`}>
                            <span className="logo-container" >
                                <a href="/dashboard">
                                    <img
                                        src="https://app.rentredi.com/img/logoWhiteNoBackground.png" id="dashboardLogo" />
                                </a>
                            </span>
                        </div>

                    </div>

                    <Menu
                        mode="inline"
                        forceSubMenuRender={true}
                        style={{ backgroundColor: 'transparent' }}
                        items={menuList}
                        onClick={({ key }) => {
                            // if (key === 'logOut') {
                            //     handleLogout();
                            // }
                            // else {
                            navigate(key)
                            // }
                        }}
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
                        <HeaderContent />
                        <Outlet />
                        <Chatbox />
                    </Content>

                </Layout>
            </Layout>
        </div >
    )
}

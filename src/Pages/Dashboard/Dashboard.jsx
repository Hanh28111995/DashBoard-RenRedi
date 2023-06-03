import React from 'react'
import BtnMultiFunc from '../../Component/Dashboard/BtnMultiFunc'
import {
    Button,
    Checkbox
} from 'antd';
import {
    PlusOutlined,
} from '@ant-design/icons';


export default function Dashboard() {
    return (
        <div className='dashboard'>
            <div class="shortBlueBackgroundContainer">
                <div class="shortBlueBackground useAsMask lightBlue">
                    <div class="shape-container">
                        <div class="shape-first"></div>
                        <div class="shape-second"></div>
                        <div class="shape-third"></div>
                    </div>
                    <div className='row col-12 dashboard-background'>
                        <div className='col-md-4 dashboard-background-title'>
                            <p>Good Evening, Thomas. </p>
                            <p>Welcome to RentRedi!</p>
                        </div>
                        <div className='col-md-8'>
                            <div className='row col-12'>
                                <div className='col-md-4'>
                                    <BtnMultiFunc name={'Renters'} />
                                </div>
                                <div className='col-md-4'>
                                    <BtnMultiFunc name={'Notifications'} />
                                </div>
                                <div className='col-md-4'>
                                    <BtnMultiFunc name={'Properties'} />
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </div>

            <div className='row col-12 dashboard-task px-3'
            >
                <div className='col-md-4 dashboard-task-6'>
                    <div className='dashboard-task-content'>
                        <div className='dashboard-action'>
                            <div className='dashboard-action-content'>
                                <div className='title'>
                                    <h5>Calendar</h5>
                                </div>

                                <div className='btn_area'>
                                    <Button>
                                        <div className='btn-content' style={{ display: 'flex', alignItems: 'center' }}>
                                            <span>Add Event</span>
                                            <PlusOutlined />
                                        </div>
                                    </Button>
                                    <Button>
                                        <i className="fas fa-chevron-down" aria-hidden="true"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='content-item'>
                            {/* <div className='list-content'>
                                <div className='row col-12'>
                                    <div className='col-6'>
                                        <div className='list-content-title'>
                                            <p style={{ fontWeight: 'bold' }}>Baron Ryan </p>
                                            <p>1 Main Street 2B</p>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <p>Lease from Jul 30, 2023</p>
                                    </div>
                                </div>
                                <div className='row col-12'>
                                    <div className='col-6'>
                                        <div className='list-content-title'>
                                            <p style={{ fontWeight: 'bold' }}>Baron Ryan </p>
                                            <p>1 Main Street 2B</p>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <p>Lease from Jul 30, 2023</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className='col-md-4 dashboard-task-1' >
                    <div className='dashboard-task-content'>
                        <div className='dashboard-action'>
                            <div className='dashboard-action-content'>
                                <div className='title'>
                                    <h5>Tasks</h5>
                                </div>
                                <div className='btn_area'>
                                    <Button>
                                        <div className='btn-content' style={{ display: 'flex', alignItems: 'center' }}>
                                            <span className='dashboard_title'>Add Task</span>
                                            <PlusOutlined />
                                        </div>
                                    </Button>
                                    <Button>
                                        <i className="fas fa-chevron-down" aria-hidden="true"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='content-item'>
                            <div className='list-content'>
                                <div className='row col-12'>
                                    <div className='col-7'>
                                        <Checkbox></Checkbox>
                                        <div className='list-content-title'>
                                            <p>Check Gutters at 1 Main St</p>
                                        </div>
                                    </div>
                                    <div className='col-3'> <p> Medium </p></div>
                                    <div className='col-2'>     <p>Nov 30</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 dashboard-task-2'>
                    <div className='dashboard-task-content'>
                        <div className='dashboard-action'>
                            <div className='dashboard-action-content'>
                                <div className='title'>
                                    <h5>Prequalifications</h5>
                                </div>
                                <div className='btn_area'>
                                    <Button>
                                        <div className='btn-content' style={{ display: 'flex', alignItems: 'center' }}>
                                            <span>Invite</span>
                                            <PlusOutlined />
                                        </div>
                                    </Button>
                                    <Button>
                                        <i className="fas fa-chevron-down" aria-hidden="true"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='content-item'>
                            <div className='list-content'>
                                <div className='row col-12'>
                                    <div className='col-6'>
                                        <Checkbox></Checkbox>
                                        <div className='list-content-title'>
                                            <p style={{ fontWeight: 'bold' }}>Chavez Dj</p>
                                            <p>1 Main Street 2B</p>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <p>Lease from Jul 30, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 dashboard-task-3'>
                    <div className='dashboard-task-content'>
                        <div className='dashboard-action'>
                            <div className='dashboard-action-content'>
                                <div className='title'>
                                    <h5>Rent</h5>
                                </div>
                                <div className='btn_area'>
                                    <Button>
                                        <div className='btn-content' style={{ display: 'flex', alignItems: 'center' }}>
                                            <span>Create Charge</span>
                                            <PlusOutlined />
                                        </div>
                                    </Button>
                                    <Button>
                                        <i className="fas fa-chevron-down" aria-hidden="true"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='content-item'>
                            <div className='list-content'>
                                <div className='row col-12'>
                                    <div className='col-6'>
                                        <div className='list-content-title'>
                                            <p >$1500.00</p>
                                            <p>1 Main Street 1A</p>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <p>Lease from Jul 30, 2023</p>
                                    </div>
                                </div>
                                <div className='row col-12'>
                                    <div className='col-6'>
                                        <div className='list-content-title'>
                                            <p >$1500.00</p>
                                            <p>1 Main Street 1A</p>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <p>Lease from Jul 30, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 dashboard-task-4'>
                    <div className='dashboard-task-content'>
                        <div className='dashboard-action'>
                            <div className='dashboard-action-content'>
                                <div className='title'>
                                    <h5>Maintenance</h5>
                                </div>
                                <div className='btn_area'>
                                    <Button>
                                        <div className='btn-content' style={{ display: 'flex', alignItems: 'center' }}>
                                            <span>Add Request</span>
                                            <PlusOutlined />
                                        </div>
                                    </Button>
                                    <Button>
                                        <i className="fas fa-chevron-down" aria-hidden="true"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='content-item'>
                            <div className='list-content'>
                                <div className='row col-12'>
                                    <div className='col-10'>
                                        <p style={{ fontWeight: 'bold' }}> 1 Main Street 1A</p>
                                    </div>
                                    <div className='col-2'>
                                        <p>May 20</p>
                                    </div>
                                    <div className='col-12'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam cum, enim impedit, voluptate error corrupti sapiente est rem illum, quod maiores ipsam odio ducimus architecto quidem. Et, tempore exercitationem? </p>
                                    </div>
                                </div>

                                <div className='row col-12'>
                                    <div className='col-10'>
                                        <p style={{ fontWeight: 'bold' }}> 1 Main Street 1A</p>
                                    </div>
                                    <div className='col-2'>
                                        <p>May 20</p>
                                    </div>
                                    <div className='col-12'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam cum, enim impedit, voluptate error corrupti sapiente est rem illum, quod maiores ipsam odio ducimus architecto quidem. Et, tempore exercitationem? </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 dashboard-task-5'>
                    <div className='dashboard-task-content'>
                        <div className='dashboard-action'>
                            <div className='dashboard-action-content'>
                                <div className='title'>
                                    <h5>Applications</h5>
                                </div>
                                <div className='btn_area'>
                                    <Button>
                                        <div className='btn-content' style={{ display: 'flex', alignItems: 'center' }}>
                                            <span>Invite</span>
                                            <PlusOutlined />
                                        </div>
                                    </Button>
                                    <Button>
                                        <i className="fas fa-chevron-down" aria-hidden="true"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='content-item'>
                            <div className='list-content'>
                                <div className='row col-12'>
                                    <div className='col-6'>

                                        <div className='list-content-title'>
                                            <p style={{ fontWeight: 'bold' }}>Chavez Dj</p>
                                            <p>1 Main Street 2B</p>
                                        </div>
                                    </div>
                                    <div className='col-6 list-content-date'>
                                        <p>Lease from Jul 30, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

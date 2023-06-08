import React from 'react'
import {
    Button,
} from 'antd';
import {
    PlusOutlined,
    DownOutlined
} from '@ant-design/icons';

export default function BtnMultiFunc(props) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className='btnMultiFunc'>
            <div className='title_func'>
                <a href={'/' + props.name}>{capitalizeFirstLetter(props.name)}</a>
            </div>
            <div className='btn_func'>
                <Button>
                    <div className='btn-content' style={{ display: 'flex', alignItems: 'center' }}>
                        <span>Add</span>
                        <PlusOutlined />
                    </div>
                </Button>
                <div style={{ position: 'relative', display: "flex", marginRight: '5px' }}>
                    <div className='btn-expand' data-bs-toggle="collapse" data-bs-target={'#' + `${props.name}`}>
                        <Button>
                            <i className="fas fa-chevron-down" aria-hidden="true"></i>
                        </Button>
                    </div>
                    <div id={`${props.name}`}
                        className='collapse collapse-content'
                    // className={`${userState.toggleDarkLight ? "menu_notificate_dark" : "menu_notificate"} collapse`}
                    >
                        {
                            (props.name === 'Renters') &&
                            <ul>
                                <li>Watch Demo</li>
                                <li>Browse how-tos</li>
                            </ul>
                        }{
                            (props.name === 'Notifications') &&
                            <ul>
                                <li>Watch Demo</li>
                                <li>Browse how-tos</li>
                            </ul>
                        }
                        {
                            (props.name === 'Properties') &&
                            <ul>
                                <li>Watch Demo</li>
                                <li>Browse how-tos</li>
                                <li>Browse Listing how-tos</li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

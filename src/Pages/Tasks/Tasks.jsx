import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { userList_dkp } from '../../constants/userList'
import { Space, Checkbox, Button } from 'antd'
import { useEffect } from 'react'
import iconFilter from '../../assets/img/greyFilterIcon.addaac64.svg'

export default function Tasks() {
    const dt = [
        {
            task: 1,
            priority: 'high',
            date: '10/10/2023'
        },
        {
            task: 2,
            priority: 'high',
            date: '10/10/2023'
        }
    ]
    const dtc = [
        {
            task: 3,
            priority: 'low',
            date: '10/10/2023'
        },
        {
            task: 4,
            priority: 'low',
            date: '10/10/2023'
        }
    ]
    const sortIconFormatter = (name) => {
        return (
            <div className='headerStyle'>
                <span>{name}</span>
                <Button
                // onClick={() => {
                //     showModal();
                //     setModalName(name);
                // }}

                >
                    <img src={iconFilter} title='Filter & Sort' />
                </Button>
            </div>
        );
    }

    const columns = [

        {
            dataField: 'task',
            text: 'Task',
            headerFormatter: () => sortIconFormatter('Task'),
            classes: 'w-column-1'
        }, {
            dataField: 'priority',
            text: 'Priority',
            headerFormatter: () => sortIconFormatter('Priority'),
            classes: 'w-column-2'
        }, {
            dataField: 'date',
            text: 'Date',
            headerFormatter: () => sortIconFormatter('Date'),
            classes: 'w-column-3'
        }
    ];
    const handleOnSelect = (row, isSelect, rowIndex, e) => {
        // if(isSelect &&)
        console.log(row, isSelect, rowIndex)
    }
    const handleSelectAll = (isSelect, rows, e) => {
        console.log(rows)
    }

    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        onSelect: handleOnSelect,
        onSelectAll: handleSelectAll,
        selectionHeaderRenderer: ({ indeterminate, ...rest }) => (
            // <Checkbox
            //     ref={(input) => {
            //         if (input) input.indeterminate = indeterminate;
            //     }}
            //     {...rest}
            // />
            <div className='headerStyle w-column-4'  {...rest}>
                <span>Action</span>
            </div >

        ),
        selectionRenderer: ({ rowIndex, rowKey, mode, ...rest }) => (
            <Checkbox key={rowKey}  {...rest} />

        ),
        keyField: 'task',
    };

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    return (
        <div className='task_content' >
            <div
                className='btn_list'>
                <ul className="nav nav-pills justify-content-center text-center row w-100" style={{ margin: '10px auto', padding: '5px 5px' }}>
                    <li className="nav-item col-5" >
                        <a className='nav-link active' data-toggle="pill" href='#planning' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                            {/* <a class="nav-link active" data-toggle="pill" href="#flamingo" role="tab" aria-controls="pills-flamingo" aria-selected="true"> */}
                            <p>1</p>
                            <p>To Do</p>
                        </a>
                    </li>
                    <li className="nav-item col-5" >
                        <a className='nav-link' data-toggle="pill" href='#completed' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                            <p>2</p>
                            <p>Complete Tasks</p>
                        </a>
                    </li>
                    <li className="nav-item col-1">
                        <Button><i class="fas fa-plus"></i></Button>
                    </li>
                </ul>
            </div>
            <div className='tab-content'>
                <div id='planning' className="tab-pane active"  >
                    <div className='dataTable w-100' >
                        <BootstrapTable
                            bootstrap4
                            wrapperClasses='table-responsive'
                            keyField='task'
                            data={dt}
                            columns={columns}
                            bordered={false}
                            selectRow={selectRow}
                        />
                    </div >
                </div>
                <div id='completed' className="tab-pane"  >
                    <div className='dataTable w-100' >
                        <BootstrapTable
                            bootstrap4
                            wrapperClasses='table-responsive'
                            keyField='task'
                            data={dtc}
                            columns={columns}
                            bordered={false}
                            selectRow={selectRow}
                        />
                    </div >
                </div>
            </div >
        </div>
    )
}

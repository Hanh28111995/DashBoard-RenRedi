import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory,
{
  PaginationProvider,
  SizePerPageDropdownStandalone,
  PaginationTotalStandalone,
  PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import iconFilter from '../../assets/img/greyFilterIcon.addaac64.svg'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import Icon from '@mdi/react';
import {
  mdiCheckCircleOutline,
  mdiCloseCircleOutline,
  mdiDotsHorizontalCircleOutline,
  mdiDotsVertical
} from '@mdi/js';
import { Space, Button } from 'antd';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { setTitleHeader } from '../../../store/actions/user.action';



// import moment from 'moment';
const { SearchBar } = Search;
var $ = require("jquery");


export default function DataTableCurrent(props) {
  const [MissPunchList, setMissPunchList] = useState([])
  // const dispatch = useDispatch();
  // const userState = useSelector((state) => state.userReducer)

  //demo data from api
  const data = [];


  // useEffect(() => {
  //   dispatch(setTitleHeader(props.title))
  // }, [userState.titleHeader])

  useEffect(() => {
    if (data.length != 0) {
      setMissPunchList(data)
    }
  }, [data])

  const blurEvent = (x) => {
    console.log('blur', x)
    $(".collapse").collapse('hide');
  }


  //setting dataTable
  const options = {
    // prePageText: "",
    // nextPageText: '',
    // hidePageListOnlyOnePage: false,
    // showTotal: false,
    // paginationSize: 4,
    // alwaysShowAllBtns: true,
    withFirstAndLast: false,
    alwaysShowAllBtns: true,
    custom: true,
    totalSize: data.length,
    sizePerPageList: [
      {
        text: '10', value: 10
      },
    ]
  }


  ///// function component for sort next/prev pagination
  const sortIconFormatter = (name) => {
    return (
      <div>
        <span>{name}</span>
        <a href="">
          <img src={iconFilter} title='Filter & Sort' />
        </a>
      </div>
    );
  }

  const columns = [{
    dataField: 'renter',
    headerClasses: 'headerTableStyle',
    text: 'Renter',
    sort: true,
    headerFormatter: () => sortIconFormatter('Renter'),


  }, {
    dataField: 'address',
    headerClasses: 'headerTableStyle',
    text: 'Address',
    sort: true,


  }, {
    dataField: 'unit',
    headerClasses: 'headerTableStyle',
    text: 'Unit',
    sort: true,


  },
  {
    dataField: 'rentPrice',
    headerClasses: 'headerTableStyle',
    text: 'Rent',
    sort: true,

  }, {
    dataField: 'leaseStart',
    headerClasses: 'headerTableStyle',
    text: 'Lease Start',
    sort: true,

  }, {
    dataField: 'leaseEnd',
    headerClasses: 'headerTableStyle',
    text: 'Lease End',
    sort: true,
  },
  ];


  return (
    <>
      <div id='current' className="tab-pane active"  >
        <PaginationProvider pagination={paginationFactory(options)}>
          {
            ({
              paginationProps,
              paginationTableProps
            }) => (
              <>

                <ToolkitProvider
                  keyField="renter"
                  data={MissPunchList}
                  columns={columns}
                  search
                >
                  {
                    toolkitprops => (
                      <Space direction='vertical d-dlex w-100 search-btn-zone'>
                        <Space direction='horizontal' className='justify-content-between d-flex w-100 search-btn-zone-child'>
                          <div>
                            <h4>Current</h4>
                          </div>
                          <div>
                            <Button>
                              <i className="fas fa-coins mr-2" aria-hidden="true"></i> Show Balance Due
                            </Button>
                            <Button>
                              <i className="far fa-save mr-2" aria-hidden="true"></i>Export Data
                            </Button>
                            <Button>
                              <i className="fa fa-ban mr-2" aria-hidden="true"></i>Clear All Filters
                            </Button>
                          </div>
                        </Space>

                        <hr />
                        <BootstrapTable
                          bootstrap4
                          wrapperClasses='table-responsive'
                          striped
                          keyField='reference'
                          data={data}
                          columns={columns}
                          bordered={false}
                          {...toolkitprops.baseProps}
                          {...paginationTableProps}
                        />
                        {
                          (MissPunchList.length === 0) &&
                          <Space direction='vertical' className='d-dlex text-center w-100' >
                            <p className='pt-3'>No data available in table</p>
                            <hr />
                          </Space>
                        }
                      </Space>
                    )
                  }
                </ToolkitProvider>
                <Space direction='horizontal' align='baseline' className='justify-content-between d-flex'>
                  <PaginationTotalStandalone
                    {...paginationProps}
                  />
                  {(MissPunchList.length === 0) ?
                    <Space>
                      <ul className="pagination react-bootstrap-table-page-btns-ul">
                        <li className="disabled page-item" title="previous page"><a href="#" className="page-link">&lt;</a></li>
                        <li className="disabled page-item" title="next page"><a href="#" className="page-link">&gt;</a></li>
                      </ul>
                    </Space>

                    : <PaginationListStandalone
                      {...paginationProps}
                    />
                  }
                </Space>
              </>
            )
          }
        </PaginationProvider>
      </div>
      {/* <div id='movingin' className="tab-pane">
        <PaginationProvider pagination={paginationFactory(options)}>
          {
            ({
              paginationProps,
              paginationTableProps
            }) => (
              <>

                <ToolkitProvider
                  keyField="reference"
                  data={MissPunchList}
                  columns={columns}
                  search
                >
                  {
                    toolkitprops => (
                      <Space direction='vertical d-dlex w-100 search-btn-zone'>
                        <Space direction='horizontal' className='justify-content-between d-flex w-100 search-btn-zone-child'>
                          <Space>
                            <span>Show</span>
                            <SizePerPageDropdownStandalone {...paginationProps} />
                            <span>entries</span>
                          </Space>
                          <Space className='d-flex align-items-start'>
                            <SearchBar {...toolkitprops.searchProps} />
                            <NavLink to='/admin/ticket/miss-punch/addnew'>
                              <Button className='create_new_btn '>
                                Create
                              </Button>
                            </NavLink>
                          </Space>
                        </Space>

                        <hr />
                        <BootstrapTable
                          bootstrap4
                          wrapperClasses='table-responsive'
                          striped
                          keyField='reference'
                          data={MissPunchList}
                          columns={columns}
                          bordered={false}
                          {...toolkitprops.baseProps}
                          {...paginationTableProps}
                        />
                        {
                          (MissPunchList.length === 0) &&
                          <Space direction='vertical' className='d-dlex text-center w-100' >
                            <p className='pt-3'>No data available in table</p>
                            <hr />
                          </Space>
                        }
                      </Space>
                    )
                  }
                </ToolkitProvider>
                <Space direction='horizontal' align='baseline' className='justify-content-between d-flex'>
                  <PaginationTotalStandalone
                    {...paginationProps}
                  />
                  {(MissPunchList.length === 0) ?
                    <Space>
                      <ul className="pagination react-bootstrap-table-page-btns-ul">
                        <li className="disabled page-item" title="previous page"><a href="#" className="page-link">&lt;</a></li>
                        <li className="disabled page-item" title="next page"><a href="#" className="page-link">&gt;</a></li>
                      </ul>
                    </Space>

                    : <PaginationListStandalone
                      {...paginationProps}
                    />
                  }
                </Space>
              </>
            )
          }
        </PaginationProvider>
      </div> */}

    </>
  )
}

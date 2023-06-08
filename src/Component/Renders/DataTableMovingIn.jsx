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


export default function DataTableMovingIn() {
  const [rentersList, setRentersList] = useState([])
  // const dispatch = useDispatch();
  // const userState = useSelector((state) => state.userReducer)

  //demo data from api
  const data = [
    // {
    //   renter: "Barone Ed",
    //   address: "1 BiggerPockets Drive",
    //   unit: 'main',
    //   rentPrice: '$750.00',
    //   leaseStart: '11/30/2020',
    //   leaseEnd: '12/30/2020',
    //   connectStatus: true,
    //   insuranceStatus: false,
    //   autoPayStatus: false
    // },
  ];


  // useEffect(() => {
  //   dispatch(setTitleHeader(props.title))
  // }, [userState.titleHeader])

  useEffect(() => {
    if (data.length != 0) {
      setRentersList(data)
    }
  }, [data])



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
      <div className='headerStyle'>
        <span>{name}</span>
        <Button
        // onClick={() => { openModal() }}
        >
          <img src={iconFilter} title='Filter & Sort' />
        </Button>
      </div>
    );
  }

  const columns = [{
    dataField: 'renter',
    text: 'Renter',
    sort: true,
    headerFormatter: () => sortIconFormatter('Renter'),
  }, {
    dataField: 'address',
    text: 'Address',
    sort: true,
    headerFormatter: () => sortIconFormatter('Address'),
  }, {
    dataField: 'unit',
    text: 'Unit',
    sort: true,
    headerFormatter: () => sortIconFormatter('Unit'),
  },
  {
    dataField: 'rentPrice',
    text: 'Rent',
    sort: true,
    headerFormatter: () => sortIconFormatter('Rent'),
  }, {
    dataField: 'leaseStart',
    text: 'Lease Start',
    sort: true,
    headerFormatter: () => sortIconFormatter('Lease Start'),
  }, {
    dataField: 'leaseEnd',
    text: 'Lease End',
    sort: true,
    headerFormatter: () => sortIconFormatter('Lease End'),
  }
    // , 
    // {
    //   dataField: 'status',
    //   text: '',
    //   formatter: (cell, row) => {
    //     return (
    //       // <div>{`${row.connectStatus} ${row.insuranceStatus} ${row.autoPayStatus}`}</div>
    //       <div className="tableDataDiv ">
    //         <span>
    //           <span className style={{ fontSize: 20, marginRight: 15, cursor: 'default' }} aria-describedby="mui-61861">
    //             <i className="fas fa-mobile-alt " aria-hidden="true" />
    //           </span>
    //           <span className style={{ fontSize: 20, marginRight: 15, cursor: 'pointer' }} title="Not Insured - Click To Notify or Update">
    //             <i className="fas fa-shield-alt " aria-hidden="true" />
    //           </span>
    //           <span className style={{ fontSize: 20, marginRight: 15, cursor: 'pointer' }} title="Auto-pay: Inactive - Click To Notify">
    //             <i className="fas fa-dollar-sign " aria-hidden="true" />
    //           </span>
    //         </span>
    //       </div>

    //     )
    //   }
    // },
  ];


  return (
    <div className='dataTable'>
      <PaginationProvider pagination={paginationFactory(options)}>
        {
          ({
            paginationProps,
            paginationTableProps
          }) => (
            <>

              <ToolkitProvider
                keyField="renter"
                data={data}
                columns={columns}
                search
              >
                {
                  toolkitprops => (
                    <Space direction='vertical d-dlex w-100'>
                      <Space direction='horizontal' className='justify-content-between d-flex w-100 search-btn-zone-child'>
                        <div>
                          <h4>Current</h4>
                        </div>
                        <div>
                          <Button className='search-btn'>
                            <i className="fas fa-coins mr-2" aria-hidden="true"></i> Show Balance Due
                          </Button>
                          <Button className='search-btn'>
                            <i className="far fa-save mr-2" aria-hidden="true"></i>Export Data
                          </Button>
                          <Button className='search-btn'>
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
                        (data.length === 0) &&
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
                {(data.length === 0) ?
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
  )
}

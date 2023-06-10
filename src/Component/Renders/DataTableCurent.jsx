import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory,
{
  PaginationProvider,
  PaginationTotalStandalone,
  PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import iconFilter from '../../assets/img/greyFilterIcon.addaac64.svg'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { Space, Button, Modal } from 'antd';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalFilter from './ModalFilter';
import { Footer } from 'antd/es/layout/layout';
// import { setTitleHeader } from '../../../store/actions/user.action';



// import moment from 'moment';
const { SearchBar } = Search;
var $ = require("jquery");


export default function DataTableCurrent() {
  const [rentersList, setRentersList] = useState([])
  const [modalName, setModalName] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const dispatch = useDispatch();
  // const userState = useSelector((state) => state.userReducer)

  const showModal = () => {
    setIsModalOpen(true);

  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //demo data from api
  const data = [
    {
      renter: "Barone Ed",
      address: "1 BiggerPockets Drive",
      unit: 'main',
      rentPrice: '$750.00',
      leaseStart: '11/30/2020',
      leaseEnd: '12/30/2020',
      connectStatus: true,
      insuranceStatus: false,
      autoPayStatus: false
    },
  ];


  // useEffect(() => {
  //   dispatch(setTitleHeader(props.title))
  // }, [userState.titleHeader])

  // useEffect(() => {
  //   if (data.length != 0) {
  //     setRentersList(data)
  //   }
  // }, [data])



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
          onClick={() => {
            showModal();
            setModalName(name);
          }}
        >
          <img src={iconFilter} title='Filter & Sort' />
        </Button>
      </div>
    );
  }

  const columns = [{
    dataField: 'renter',
    text: 'Renter',
    headerFormatter: () => sortIconFormatter('Renter'),
  }, {
    dataField: 'address',
    text: 'Address',
    headerFormatter: () => sortIconFormatter('Address'),
  }, {
    dataField: 'unit',
    text: 'Unit',
    headerFormatter: () => sortIconFormatter('Unit'),
  },
  {
    dataField: 'rentPrice',
    text: 'Rent',
    headerFormatter: () => sortIconFormatter('Rent'),
  }, {
    dataField: 'leaseStart',
    text: 'Lease Start',
    headerFormatter: () => sortIconFormatter('Lease Start'),
  }, {
    dataField: 'leaseEnd',
    text: 'Lease End',
    headerFormatter: () => sortIconFormatter('Lease End'),
  }, {
    dataField: 'status',
    text: '',
    formatter: (cell, row) => {
      return (
        // <div>{`${row.connectStatus} ${row.insuranceStatus} ${row.autoPayStatus}`}</div>
        <div className="tableDataDiv ">
          <span>
            <span style={{ fontSize: 20, marginRight: 15, cursor: 'default' }} aria-describedby="mui-61861">
              <i className="fas fa-mobile-alt " aria-hidden="true" />
            </span>
            <span style={{ fontSize: 20, marginRight: 15, cursor: 'pointer' }} title="Not Insured - Click To Notify or Update">
              <i className="fas fa-shield-alt " aria-hidden="true" />
            </span>
            <span style={{ fontSize: 20, marginRight: 15, cursor: 'pointer' }} title="Auto-pay: Inactive - Click To Notify">
              <i className="fas fa-dollar-sign " aria-hidden="true" />
            </span>
          </span>
        </div>

      )
    }
  },
  ];


  return (
    <>
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
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <ModalFilter actionOut={() => handleCancel()} name={modalName} />
      </Modal>
    </>
  )
}

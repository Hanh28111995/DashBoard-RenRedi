import React from 'react'
import {
  Image
  , Button
} from 'antd'
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import avatar from "../../assets/img/profilecard_tenant.png";

export default function TenantInfor() {
  return (
    <div className='tenant-detail'>
      <div className='row col-12 py-5'>
        <div className='tenant-detail-col-1'>
          <div className='row justify-content-center'>
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <div className='avatar-zone'>
                  <div className='circle'>
                    <img src={avatar} alt=''></img>
                  </div>
                  <div className='card-overlay'></div>
                </div>
                <div className='text-content-zone'>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Describe 1</p>
                  <p className="card-text">Describe 2</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <a href="" className='text-to-viewall'>
              <p>View Another Profile For This Person</p>
            </a>
          </div>
        </div>
        <div className='tenant-detail-col-2'>
          <div className='row'>
            <div className='tenant-status'>
              <div className='sectionCardList'>
                <p className='sectionCardText'>Status:</p>
                <p className='sectionCardText'>Current Tenant</p>
              </div>

            </div>
          </div>
          <div className='row'>
            <ul className="nav nav-pills text-center row w-100" style={{ margin: '10px auto', padding: '5px 5px' }}>
              <li className="nav-item col-4" >
                <a className='nav-link active' data-toggle="pill" href='#details' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                  <p>Details</p>
                </a>
              </li>
              <li className="nav-item col-4" >
                <a className='nav-link' data-toggle="pill" href='#documents' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                  <p>Documents</p>
                </a>
              </li>
              <li className="nav-item col-4" >
                <a className='nav-link' data-toggle="pill" href='#charges' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                  <p>Charges</p>
                </a>
              </li>
            </ul>
          </div>
          <div className='row tab-content'>
            <div id='details' className="tab-pane active"  >
              <div className='detail-main'>
                <div className='row col-12 detail-content'>
                  <div className='col-md-4 content-item'>
                    <h4><span><CheckCircleFilled style={{ color: '#07beb8'}} /></span> Tenant App Installed</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div className='col-md-4 content-item'>
                    <h4><span><CloseCircleFilled style={{ color: 'red' }} /></span> Autopay Inactive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div className='col-md-4 content-item'>
                    <h4><span><CloseCircleFilled style={{ color: 'red' }} /></span> No Insurance Info</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
                <div className='row col-12 detail-content'>
                  <div className='col-md-6'>
                    <div className="content-item">
                      <div className='content-item-header'>
                        <h4>General Info</h4>
                        <Button>Edit Details</Button>
                      </div>
                      <div className='content-item-body'>
                        <div className='sectionCardList'>
                          <p className='sectionCardText'>
                            First Name
                          </p>
                          <p className='sectionCardText'>
                            Ed
                          </p>
                        </div>

                        <div className='sectionCardList'>
                          <p className='sectionCardText'>
                            Last Name
                          </p>
                          <p className='sectionCardText'>
                            Barone
                          </p>
                        </div>

                        <div className='sectionCardList'>
                          <p className='sectionCardText'>
                            Email
                          </p>
                          <a href="#">
                            <p className='sectionCardText'>
                              team@rentredi.com
                            </p>
                          </a>
                        </div>

                      </div>
                    </div>
                    <div className="content-item">
                      <div className='content-item-header'>
                        <h4>Auto Late Fees</h4>
                        <Button>New Late Fee Rules</Button>
                      </div>

                      <div className='content-item-body'>
                        <p>
                          <span className="fa-stack fa-1.4x">
                            <i className="fa fa-circle fa-stack-2x" aria-hidden="true" style={{ color: 'rgb(188, 196, 205)' }} />
                            <i className="fas fa-dollar-sign fa-stack-1x" aria-hidden="true" />
                          </span>
                        </p>
                        <p>
                          No late fee rules added.
                        </p>
                        <p>
                          Add late fee rules such as grace periods and recurring late fees
                        </p>
                      </div>

                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='content-item'>
                      <div className='content-item-header'>
                        <h4>General Info</h4>
                        <Button>Edit Details</Button>
                      </div>
                      <div className='content-item-body'>
                        <div className='sectionCardList'>
                          <p className='sectionCardText'>
                            Lease Start Date
                          </p>
                          <p className='sectionCardText'>
                            11/30/2020
                          </p>
                        </div>

                        <div className='sectionCardList'>
                          <p className='sectionCardText'>
                            Lease End Date
                          </p>
                          <p className='sectionCardText'>
                            12/30/2021
                          </p>
                        </div>

                        <div className='sectionCardList'>
                          <p className='sectionCardText'>
                            Monthly Lease Rent
                          </p>
                          <p className='sectionCardText'>
                            $750
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='content-item'>
                      <div className='content-item-header'>
                        <h4>Unit Details</h4>
                        <Button>View Unit</Button>
                      </div>
                      <div className='content-item-body'>
                        <div className='sectionCardList'>
                          <p className='sectionCardText'>
                            Address
                          </p>
                          <p className='sectionCardText'>
                            1 BiggerPockets Drive
                          </p>
                        </div>

                        <div className='sectionCardList'>
                          <p className='sectionCardText'>
                            Unit Number
                          </p>
                          <p className='sectionCardText'>
                            main
                          </p>
                        </div>

                        <div className='sectionCardList'>
                          <p className='sectionCardText'>
                            City
                          </p>
                          <p className='sectionCardText'>
                            Denver
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row col-12 mx-auto'>
                  <div className='ml-auto'>
                    <Button className='btn-primary'>Screen Tenant</Button>
                    <Button className='btn-success'>Unlink Tenant</Button>
                  </div>
                </div>
              </div>
            </div>
            <div id='documents' className="tab-pane"  >
              <p>Documents</p>
            </div>
            <div id='charges' className="tab-pane"  >
              <p>Charges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

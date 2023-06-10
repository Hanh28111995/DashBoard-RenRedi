import React from 'react';
import { Form, Input, Radio, DatePicker, Select, Col, Button, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
const { TextArea } = Input;
const { Option } = Select;

export default function AddTasks() {
  const navigate = useNavigate()
  const formItemLayout1 = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  }


  return (
    <div className='AddEventTask mx-auto'>
      <div className='AddEventTask-content my-5'>
        <h3 className='mb-3'>Add New Task</h3>
        <Form
          style={{ maxWidth: '100%' }}
          autoComplete='off'
          // onFinish={onSubmitForm}
          onSubmit={e => e.preventDefault()}
          noValidate={true}
        >
          <Row gutter={24}>
            <Col xs={24} sm={24} md={12} lg={12} >
              <Form.Item
                {...formItemLayout1}
                label="Task Title"
                name="taskTitle"
              // rules={[{ required: true, message: 'Please input your User Name!' }]}
              >
                <Input placeholder='Task Name' />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} >
              <Form.Item
                {...formItemLayout1}
                label="Time Zone"
                name="timezone"
              // rules={[{ required: true, message: 'Please Select Status!' }]}
              >
                <Select placeholder="Select Time Zone">
                  <Option value="disabled" disabled>Set Priority</Option>
                  <Option value="low">Low</Option>
                  <Option value="medium">Medium</Option>
                  <Option value="high">High</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col xs={24} sm={24} md={12} lg={12} >
              <Form.Item label="Details" name="details"
                {...formItemLayout1}
              // rules={[{ required: true, message: 'Please input your User Name!' }]}
              >
                <TextArea rows={4} placeholder="Other Reason" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} >
              <Form.Item
                {...formItemLayout1}
                label="Date"
                name="date"
              // rules={[{ required: true, message: 'Please input Date Start!' }]}
              >
                <DatePicker className='w-100' placeholder='Date Start' format={"MM-DD-YYYY"} />
              </Form.Item>
              <Form.Item
                {...formItemLayout1}
                label="Status"
                name="status"
              >
                <Select>
                  <Option value="disabled" disabled>Set Status</Option>
                  <Option value="notComplete">Not Complete</Option>
                  <Option value="Complete">Complete</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>




          <div className='form-btn mt-3'>
            <Form.Item>
              <Button className='btn add-btn' htmlType="submit">
                Add
              </Button>
            </Form.Item>

            <Form.Item>
              <Button className='btn cancel-btn' htmlType="button"
                onClick={() => { navigate('/calendar') }}
              >
                Cancel
              </Button>
            </Form.Item>
          </div >
        </Form >
      </div>
    </div>
  )
}

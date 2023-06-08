import React from 'react';
import { Form, Input, Radio, DatePicker, Select, Col, Space, Button, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
const { TextArea } = Input;

export default function EventCalendar() {
    const navigate = useNavigate()
    const formItemLayout1 = {
        labelCol: {
            span: 3,
        },
        wrapperCol: {
            span: 15,
        },
    }


    return (
           
            <div className='AddEventCalendar mx-auto'>
                <div className='AddEventCalendar-content mt-5'>
                    <Form
                        style={{ maxWidth: '100%' }}
                        autoComplete='off'
                        // onFinish={onSubmitForm}
                        onSubmit={e => e.preventDefault()}
                        noValidate={true}
                    >
                        <Form.Item
                            {...formItemLayout1}
                            label="Title"
                            name="title"
                        // rules={[{ required: true, message: 'Please input your User Name!' }]}
                        >
                            <Input placeholder='User Name' />
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout1}
                            label="Location"
                            name="location"
                        // rules={[{ required: true, message: 'Please input your User Name!' }]}
                        >
                            <Input placeholder='User Name' />
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout1}
                            label="All Day"
                            name="allday"
                        // rules={[{ required: true, message: 'Please input your User Name!' }]}
                        >
                            <Radio.Group>
                                <Radio value="1"> All Day </Radio>
                                <Radio value="0"> Not All Day </Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout1}
                            label="Start Date"
                            name="startdate"
                        // rules={[{ required: true, message: 'Please input Date Start!' }]}
                        >
                            <DatePicker className='w-100' placeholder='Date Start' format={"MM-DD-YYYY"} />
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout1}
                            label="End Date"
                            name="enddate"
                        // rules={[{ required: true, message: 'Please input Date Start!' }]}
                        >
                            <DatePicker className='w-100' placeholder='Date Start' format={"MM-DD-YYYY"} />
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout1}
                            label="Time Zone"
                            name="timezone"
                        // rules={[{ required: true, message: 'Please Select Status!' }]}
                        >
                            <Select placeholder="Select Time Zone">
                                <Select.Option value="1">(GMT-04:00) Eastern Time</Select.Option>
                                <Select.Option value="2">(GMT-05:00) Central Time</Select.Option>
                                <Select.Option value="3">(GMT-06:00) Mountain Time</Select.Option>
                                <Select.Option value="4">(GMT-07:00) Pacific Time</Select.Option>
                                <Select.Option value="5">(GMT-08:00) Alaska Time</Select.Option>
                                <Select.Option value="6">(GMT-10:00) Hawaii Time</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout1}
                            label="Repeat"
                            name="repeat"
                        // rules={[{ required: true, message: 'Please input your User Name!' }]}
                        >
                            <Radio.Group>
                                <Radio value="1"> Repeat </Radio>
                                <Radio value="0"> No Repeat </Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item label="Description" name="description"
                            {...formItemLayout1}
                        // rules={[{ required: true, message: 'Please input your User Name!' }]}
                        >
                            <TextArea rows={4} placeholder="Other Reason" />
                        </Form.Item>

                        <div className='form-btn'>
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

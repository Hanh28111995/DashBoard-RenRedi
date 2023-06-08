import React, { useState } from 'react'
import { Form, Select, Radio, Button, Checkbox } from 'antd';
const { Option } = Select;
export default function ModalFilter(props) {
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    return (
        <>
            <div className='modal-header-custom'>
                <h4>{props.name} Column</h4>
                <p>Set how you would like to sort and filter data.</p>
            </div>
            <div className='modal-render-content'>
                <Form>
                    <Form.Item label="Radio">
                        <Radio.Group>
                            <Radio value="asc"> Asc </Radio>
                            <Radio value="desc"> Desc </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="filter"
                        label="View"
                    >
                        <Select mode="multiple" placeholder="Filter">
                            <Option value="red">Red</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="setting_save" valuePropName="checked">
                        <Checkbox>Save as my default sort/filter setting</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <div className='ant-modal-footer'>
                            <Button htmlType="button" onClick={props.actionOut}>
                                Cancel
                            </Button>
                            <Button htmlType="button" >
                                Clear
                            </Button>
                            <Button htmlType="submit">
                                Apply
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

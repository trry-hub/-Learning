import css from './index.module.scss'

import React, { useState } from 'react'
import { Form, Tabs, Input, Button, Checkbox, message } from 'antd'

import { api } from '@/api'

const Login = (props) => {
  const [form] = Form.useForm();
  const [currentTab, setCurrentTab] = useState('登录')

  /**
   * 请求登录/注册接口
   * 调用时机：登录/注册
   * @returns
   */
  const onFinish = (e) => {
    form.validateFields()
    if (currentTab === '注册') {
      register(e)
    } else if (currentTab === '登录') {
      login(e)
    }
  }


  const register = async (params) => {
    try {
      const res = await api.post('api/register', params)
      message.success('注册成功！')
      setCurrentTab('登录')
    } catch (error) {
      console.log(error);
    }
  }
  const login = async (params) => {
    try {
      const { data } = await api.post('api/login', params)
      message.info(data.token)
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 切换tab
   * 调用时机：点击tab切换
   * @returns
   */
  const callback = (e) => {
    setCurrentTab(e)
  }

  return (
    <div className={css['login']}>
      <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish} >
        <Tabs defaultActiveKey="1" onChange={callback}>
          <Tabs.TabPane tab="登录" key="登录">
            <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名!' }]} >
              <Input />
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]} >
              <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }} >
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
          </Tabs.TabPane>
          {/* 注册 */}
          <Tabs.TabPane tab="注册" key="注册">
            <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名!' }]} >
              <Input />
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]} >
              <Input.Password />
            </Form.Item>
            <Form.Item label="确认密码" name="confirmPwd" rules={[{ required: true, message: '请确认密码!' }]} >
              <Input.Password />
            </Form.Item>
          </Tabs.TabPane>
        </Tabs>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit"> 提交 </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login

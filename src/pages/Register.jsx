import React, { Component } from "react";
import { Row, Col, Card, Form, Input, Button, Space } from "antd";
import { NavLink } from "react-router-dom";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

export class Register extends Component {
  render() {
    return (
      <Row align="middle">
        <Col span={8} offset={8}>
          <Card title="Регистрация">
            <Form {...layout}>
              <Form.Item
                label="Логин"
                name="login"
                rules={[
                  {
                    required: true,
                    message: "Введите почтовый адрес",
                  },
                ]}
              >
                <Input name="username"></Input>
              </Form.Item>

              <Form.Item
                label="Почта"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Введите почтовый адрес",
                  },
                ]}
              >
                <Input name="email"></Input>
              </Form.Item>

              <Form.Item
                label="Пароль"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Введите пароль",
                  },
                ]}
              >
                <Input type="password" name="password"></Input>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Space size="middle">
                  <Button type="primary" htmlType="submit">
                    Регистрация
                  </Button>
                  <NavLink to="/login">Авторизация</NavLink>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Register;

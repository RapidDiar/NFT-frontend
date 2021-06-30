import React, { useState } from "react";
import { Row, Col, Card, Form, Input, Button, Space, message } from "antd";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../redux/auth/authActions";

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

const Register = (props) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onPost = () => {
    props.registerPost(username, email, password);
    console.log(props.message);
    message.success(props.message);
  };

  return (
    <Row align="middle">
      <Col span={8} offset={8}>
        <Card title="Регистрация">
          <Form {...layout} onFinish={onPost}>
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
              <Input
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></Input>
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
              <Input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
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
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
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
};

const mapStateToProps = (state) => ({
  message: state.message.message,
});

const mapDispatchToProps = (dispatch) => {
  return {
    registerPost: (username, email, password) => {
      dispatch(register(username, email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

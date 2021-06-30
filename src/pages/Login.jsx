import React, { useState } from "react";
import { Row, Col, Card, Form, Input, Button, Space } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../redux/auth/authActions";

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

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onPost = () => {
    props.loginPost(username, password);
    console.log(props.isLogin);
  };

  return (
    <Row align="middle">
      <Col span={8} offset={8}>
        <Card title="Авторизация">
          <Form {...layout} onFinish={onPost}>
            <Form.Item
              label="Username"
              name="username"
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
                  Войти
                </Button>
                <Link to="/register">Регистрация</Link>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginPost: (username, password) => {
      dispatch(login(username, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

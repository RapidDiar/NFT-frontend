import React, { useState } from "react";
import { Row, Col, Card, Form, Input, Button, Space } from "antd";
import { Link } from "react-router-dom";
import axiosInstance from "../axios/axiosApi";
import axios from "axios";

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

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const data = {
    username: username,
    password: password,
  };

  console.log(data);

  const getUsers = () => {
    // GET API TOKEN
    axiosInstance.post("api/token/", data).then(
      (res) => {
        console.log(res);
        const token = res.data.access;
        localStorage.setItem("access", token);
      },
      (err) => {
        console.log(err);
      }
    );

    // GET USERS

    axiosInstance.get("account/users/").then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

    axiosInstance.get("account/api/NFT/").then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <Row align="middle">
      <Col span={8} offset={8}>
        <Card title="Авторизация">
          <Form {...layout} onFinish={getUsers}>
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

export default Login;

import React from "react";
import "./login.scss";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { adminLogin } from "../../redux/callAPI";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    adminLogin(values, dispatch, navigate);
  };
  return (
    <div className="login">
      <div className="login__form">
        <Form layout="vertical" onFinish={onFinish}>
          <h1 className="login__form__header">Login</h1>
          <hr />
          <div className="inputs">
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input className="input" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input type="password" className="input" />
            </Form.Item>
          </div>
          <button className="button">Login</button>
        </Form>
      </div>
    </div>
  );
};

export default Login;

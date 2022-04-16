import React from "react";
import "./login.scss";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/callAPI";

const Login = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(userLogin(values));
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
          <Link to="/register" style={{textDecoration: "none", color: "#1789ff"}}>
            <p className="register-link">Register Now</p>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../../redux/callAPI";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    userRegister(values, navigate);
  };
  return (
    <div className="login">
      <div
        gulter={16}
        className="d-flex align-items-center justify-content-center"
      >
        <Form layout="vertical" className="login-form" onFinish={onFinish}>
          <h1 className="text-center font-weight-bold">Register</h1>
          <hr />
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input className="input" />
          </Form.Item>
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
          <Form.Item
            name="cfpassword"
            label="Confirm Password"
            rules={[{ required: true }]}
          >
            <Input type="password" className="input" />
          </Form.Item>
          <button className="w-100 p-2 border-0 bg-blue color-white">
            Register
          </button>
          <Link to="/login">
            <p className="mt-2">Login Now</p>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;

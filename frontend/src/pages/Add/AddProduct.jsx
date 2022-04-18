import React from "react";
import { Col, Row, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/callAPI";
import Header from "../../components/Header/Header";

const Add = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(addProduct(values));
  };
  return (
    <div>
      <Header />
      <Row justify="center">
        <Col lg={12} sm={24}>
          <Form className="bs1 p-2 mt-5" layout="vertical" onFinish={onFinish}> 
            <h3 className="text-center font-weight-bold">Add New Product</h3>
            <hr />
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="price" label="Price" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="image01"
              label="Image01"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="image02"
              label="Image02"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="slug" label="Slug" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="categorySlug"
              label="Category Slug"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="colors"
              label="Colors"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="sizes"
              label="Sizes"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <div className="text-center">
              <button className="p-2 border-0 bg-blue color-white">ADD PRODUCT</button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Add;

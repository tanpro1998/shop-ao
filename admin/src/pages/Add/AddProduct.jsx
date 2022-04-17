import React from "react";
import "./addProduct.scss";
import { Col, Row, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { addAccessory, addProduct } from "../../redux/callAPI";

const AddProduct = ({ type }) => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    type === "product"
      ? dispatch(addProduct(values))
      : dispatch(addAccessory(values));
  };
  return (
    <div className="add">
      <Row justify="center">
        <Col lg={12} sm={24}>
          <Form layout="vertical" onFinish={onFinish}>
            <h3>Add New Product</h3>
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
            <Form.Item name="sizes" label="Sizes" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <div className="button">
              <button className="btn" type="submit">
                ADD PRODUCT
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AddProduct;

import React from "react";
import "./addProduct.scss";
import { Col, Row, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { addAccessory, addProduct } from "../../redux/callAPI";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const AddProduct = ({ type }) => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    type === "products"
      ? dispatch(addProduct(values))
      : dispatch(addAccessory(values));
  };
  return (
    <div className="add">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Row justify="center">
          <Col lg={12} sm={24}>
            <Form layout="vertical" onFinish={onFinish}>
              <h3>
                {type === "products" ? "Add New Product" : "Add  New Accessory"}
              </h3>
              <hr />
              <Form.Item
                className="formItem"
                name="title"
                rules={[{ required: true, message: "Title is Required!" }]}
              >
                <Input placeholder="Title" />
              </Form.Item>
              <Form.Item
                className="formItem"
                name="price"
                rules={[{ required: true, message: "Price is Required!" }]}
              >
                <Input placeholder="Price" type="number" />
              </Form.Item>
              <Form.Item
                className="formItem"
                name="image01"
                rules={[{ required: true, message: "Image 01  is Required!" }]}
              >
                <Input placeholder="Image 01" />
              </Form.Item>
              <Form.Item
                className="formItem"
                name="image02"
                rules={[{ required: true, message: "Image 02 is Required!" }]}
              >
                <Input placeholder="Image 02" />
              </Form.Item>
              <Form.Item
                name="slug"
                rules={[{ required: true, message: "Slug is Required!" }]}
              >
                <Input placeholder="Slug" />
              </Form.Item>
              <Form.Item
                className="formItem"
                name="categorySlug"
                rules={[
                  { required: true, message: "Category Slug is Required!" },
                ]}
              >
                <Input placeholder="Category Slug" />
              </Form.Item>
              <Form.Item
                className="formItem"
                name="colors"
                rules={[{ required: true, message: "Colors is Required!" }]}
              >
                <Input placeholder="Colors" />
              </Form.Item>
              <Form.Item
                className="formItem"
                name="sizes"
                rules={[{ required: true, message: "Sizes is Required!" }]}
              >
                <Input placeholder="Sizes" />
              </Form.Item>
              <Form.Item
                className="formItem"
                name="description"
                rules={[
                  { required: true, message: "Description is Required!" },
                ]}
              >
                <Input placeholder="Description" />
              </Form.Item>
              <div className="button">
                <button className="btn" type="submit">
                  {type === "products" ? "ADD PRODUCT" : "ADD ACCESSORY"}
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddProduct;

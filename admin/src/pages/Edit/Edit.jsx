import React, { useState, useEffect } from "react";
import "./edit.scss";
import { Col, Row, Form, Input } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editAccessory,
  editProduct,
  getAllAccessories,
  getAllProducts,
} from "../../redux/callAPI";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
const Edit = ({ type, currentUser }) => {
  const { productId } = useParams();
  const { accessoryId } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { accessories } = useSelector((state) => state.accessories);

  const [product, setProduct] = useState({});
  const [accessory, setAccessory] = useState({});
  const [totalProducts, setTotalProducts] = useState([]);
  const [totalAccessories, setTotalAccessories] = useState([]);

  useEffect(() => {
    if (products.length === 0 || accessories.length === 0) {
      type === "products"
        ? dispatch(getAllProducts())
        : dispatch(getAllAccessories());
    } else {
      type === "products"
        ? setProduct(products.find((item) => item._id === productId))
        : setAccessory(accessories.find((item) => item._id === accessoryId));
      setTotalProducts(products);
      setTotalAccessories(accessories);
    }
  }, [products, dispatch, productId, accessories, accessoryId, type]);

  const onFinish = (values) => {
    type === "products"
      ? (values._id = product._id)
      : (values._id = accessory._id);
    type === "products"
      ? dispatch(editProduct(values))
      : dispatch(editAccessory(values));
  };
  console.log(product);
  return (
    <div className="edit">
      <Sidebar />
      <div className="listContainer">
        <Navbar currentUser={currentUser} />
        <Row justify="center">
          <Col lg={12} sm={24}>
            {totalProducts.length > 0 && totalAccessories.length > 0 && (
              <Form
                className="bs1 p-2 mt-5"
                layout="vertical"
                initialValues={type === "products" ? product : accessory}
                onFinish={onFinish}
              >
                <h3>
                  {type === "products" ? "Edit Product" : "Edit Accessory"}
                </h3>
                <hr />
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="price"
                  label="Price"
                  rules={[{ required: true }]}
                >
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
                  label="image02"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="slug"
                  label="Slug"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="categorySlug"
                  label="Category Slug"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                {/* <Form.Item
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
              </Form.Item> */}
                <Form.Item
                  name="desc"
                  label="Description"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <div className="button">
                  <button className="btn">SUBMIT</button>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Edit;

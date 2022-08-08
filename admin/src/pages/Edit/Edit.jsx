import React, { useState, useEffect } from "react";
import "./edit.scss";
import { Col, Row, Form, Input } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editAccessory,
  editProduct,
  editRole,
  getAllAccessories,
  getAllProducts,
  getAllUsers,
} from "../../redux/callAPI";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
const Edit = ({ type, currentUser }) => {
  const { userId } = useParams();
  const { productId } = useParams();
  const { accessoryId } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { products } = useSelector((state) => state.products);
  const { accessories } = useSelector((state) => state.accessories);

  const [user, setUser] = useState({});
  const [product, setProduct] = useState({});
  const [accessory, setAccessory] = useState({});
  const [totalUsers, setTotalUsers] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [totalAccessories, setTotalAccessories] = useState([]);
  const { TextArea } = Input;

  useEffect(() => {
    if (
      products.length === 0 ||
      accessories.length === 0 ||
      users.length === 0
    ) {
      type === "products"
        ? dispatch(getAllProducts())
        : type === "accessories"
        ? dispatch(getAllAccessories())
        : dispatch(getAllUsers());
    } else {
      type === "products"
        ? setProduct(products.find((item) => item._id === productId))
        : type === "accessories"
        ? setAccessory(accessories.find((item) => item._id === accessoryId))
        : setUser(users.find((item) => item._id === userId));
      setTotalProducts(products);
      setTotalAccessories(accessories);
      setTotalUsers(users);
    }
  }, [
    products,
    dispatch,
    productId,
    accessories,
    accessoryId,
    users,
    userId,
    type,
  ]);

  const onFinish = (values) => {
    type === "products"
      ? (values._id = product._id)
      : type === "accessories"
      ? (values._id = accessory._id)
      : (values._id = user._id);
    type === "products"
      ? editProduct(values)
      : type === "accessories"
      ? editAccessory(values)
      : editRole(values);
  };
  return (
    <div className="edit">
      <Sidebar />
      <div className="listContainer">
        <Navbar currentUser={currentUser} />
        <Row justify="center">
          <Col lg={12} sm={24}>
            {totalProducts.length > 0 &&
              totalAccessories.length > 0 &&
              totalUsers.length > 0 && (
                <Form
                  className="bs1 p-2 mt-5"
                  layout="vertical"
                  initialValues={
                    type === "products"
                      ? product
                      : type === "accessories"
                      ? accessory
                      : user
                  }
                  onFinish={onFinish}
                >
                  <h3>
                    {type === "products"
                      ? "Edit Product"
                      : type === "accessories"
                      ? "Edit Accessory"
                      : "Edit Role"}
                  </h3>
                  <hr />
                  {type === "users" ? (
                    <Form.Item
                      name="isAdmin"
                      label="isAdmin"
                      rules={[
                        { required: true, message: "isAdmin is Required!" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  ) : (
                    <>
                      <Form.Item
                        name="title"
                        label="Title"
                        rules={[
                          { required: true, message: "Title is Required!" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="price"
                        label="Price"
                        rules={[
                          { required: true, message: "Price is Required!" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="image01"
                        label="Image 01"
                        rules={[
                          { required: true, message: "Image 01 is Required!" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="image02"
                        label="Image 02"
                        rules={[
                          { required: true, message: "Image 02 is Required!" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="slug"
                        label="Slug"
                        rules={[
                          { required: true, message: "Slug is Required!" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="categorySlug"
                        label="Category Slug"
                        rules={[
                          {
                            required: true,
                            message: "Category Slug is Required!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      {/* <Form.Item
                        name="colors"
                        label="Colors"
                        rules={[
                          { required: true, message: "Colors is Required!" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="sizes"
                        label="Sizes"
                        rules={[
                          { required: true, message: "Sizes is Required!" },
                        ]}
                      >
                        <Input />
                      </Form.Item> */}

                      <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                          {
                            required: true,
                            message: "Description is Required!",
                          },
                        ]}
                      >
                        <TextArea />
                      </Form.Item>
                    </>
                  )}
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

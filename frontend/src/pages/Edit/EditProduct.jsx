import React, { useState, useEffect } from "react";
import { Col, Row, Form, Input } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, getAllProducts } from "../../redux/callAPI";
import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";

const EditProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { loading } = useSelector((state) => state.alert);
  const [product, setProduct] = useState();
  const [totalProducts, setTotalProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    } else {
      setProduct(products.find((item) => item._id === productId));
      setTotalProducts(products);
    }
  }, [products, dispatch, productId]);

  const onFinish = (values) => {
    values._id = product._id;
    dispatch(editProduct(values));
  };
  return (
    <div>
      {loading && <Loading />}
      <Header />
      <Row justify="center">
        <Col lg={12} sm={24}>
          {totalProducts.length > 0 && (
            <Form
              className="bs1 p-2 mt-5"
              layout="vertical"
              initialValues={product}
              onFinish={onFinish}
            >
              <h3 className="text-center font-weight-bold">Edit Product</h3>
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

              <div className="text-center">
                <button className="p-2 w-25 border-0 bg-blue color-white">
                  SUBMIT
                </button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default EditProduct;

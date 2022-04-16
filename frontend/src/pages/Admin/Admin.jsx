import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet/Helmet";
import HeroSlider from "../../components/Slide/HeroSlider";
import heroSliderData from "../../assets/fake-data/heroSliderData";
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/Section/Section";
import Card from "../../components/Card/Card";
import policy from "../../assets/fake-data/card";
import Grid from "../../components/Grid/Grid";
import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";
import banner from "../../assets/images/banner.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/callAPI";

const Admin = () => {
  // const admin = JSON.parse(localStorage.getItem("user")).isAdmin;
  const admin = true;
  const { products } = useSelector((state) => state.products);
  const { loading } = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const [totalProducts, setTotalProducts] = useState([]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setTotalProducts(products);
  }, [products]);

  return (
    <div>
      {loading && <Loading />}
      <Header admin={admin} />
      <Helmet title="Quản trị viên">
        <HeroSlider
          data={heroSliderData}
          control={true}
          auto={true}
          timeOut={5000}
        />
        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {policy.map((item, index) => (
                <Link to="/card" key={index}>
                  <Card name={item.name} desc={item.desc} icon={item.icon} />
                </Link>
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Top Sản Phẩm</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {totalProducts.slice(0, 4).map((item, index) => (
                <Product
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                  admin={admin}
                  id={item._id}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <Link to="/catalog">
              <div className="banner">
                <img
                  src="https://www.ohpunstore.com/wp-content/uploads/2019/12/2Hoodie-Banner1.jpg"
                  alt=""
                />
              </div>
            </Link>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Sản Phẩm Mới</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {totalProducts.slice(0, 8).map((item, index) => (
                <Product
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                  admin={admin}
                  id={item._id}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Phổ Biến</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {totalProducts.slice(0, 16).map((item, index) => (
                <Product
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                  admin={admin}
                  id={item._id}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </Helmet>
      <Footer />
    </div>
  );
};

export default Admin;

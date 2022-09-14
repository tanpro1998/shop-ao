import React from "react";
import Helmet from "../../components/Helmet/Helmet";
import Slider from "../../components/Slide/Slider";
import slideData from "../../assets/fake-data/slideData";
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/Section/Section";
import Card from "../../components/Card/Card";
import policy from "../../assets/fake-data/card";
import Grid from "../../components/Grid/Grid";
import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";

const Home = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div>
      <Helmet title="Trang Chủ">
        <Header />
        <Slider />
        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {policy.map((item, index) => (
                <Card
                  name={item.name}
                  desc={item.desc}
                  icon={item.icon}
                  key={index}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle className="border-bottom">Top Sản Phẩm</SectionTitle>

          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {products.slice(0, 4).map((item, index) => (
                <Product
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                  id={item._id}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <Link to="/">
              <div className="banner">
                <img
                  src="http://file.hstatic.net/1000253775/collection/banner_sp_t10.2019__10__8c9f634ff6fe4a7bbdb0af31342f17c6.jpg"
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
              {products
                .slice(0, 8)
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((item, index) => (
                  <Product
                    key={index}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                    id={item._id}
                  />
                ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Sản phẩm bán chạy</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {products
                .slice(0, 16)
                .sort((a, b) => a.price - b.price)
                .map((item, index) => (
                  <Product
                    key={index}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
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

export default Home;

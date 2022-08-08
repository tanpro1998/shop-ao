import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Accessory from "../../components/Accessory/Accessory";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Helmet from "../../components/Helmet/Helmet";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../components/Section/Section";

const Accessories = () => {
  const { accessories } = useSelector((state) => state.accessories);

  return (
    <Helmet title="Phụ Kiện">
      <Header />
      <Section>
        <SectionTitle>Áo Thun</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {accessories
              .filter((item) => item.categorySlug === "ao-thun")
              .sort((a, b) => a.price - b.price)
              .map((item, index) => (
                <Accessory
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
                src="https://adimanav.com/wp-content/uploads/2018/02/head-turner-graphic-tshirt-banner-60.jpg"
                alt=""
                className=""
              />
            </div>
          </Link>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Quần Jean</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {accessories
              .filter((item) => item.categorySlug === "quan-jean")
              .map((item, index) => (
                <Accessory
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
        <SectionTitle>Mũ Bucket</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {accessories
              .filter((item) => item.categorySlug === "bucket-hat")
              .sort((a, b) => a.price - b.price)
              .map((item, index) => (
                <Accessory
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
      <Footer />
    </Helmet>
  );
};

export default Accessories;

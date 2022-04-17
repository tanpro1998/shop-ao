import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet/Helmet";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../components/Section/Section";
import ProductViewItem from "../../components/Product/ProductViewItem";
import { useParams } from "react-router-dom";
import Grid from "../../components/Grid/Grid";
import ProductCard from "../../components/Product/ProductCard";

const ProductView = ({ allProducts }) => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(allProducts.find((item) => item.slug === slug));
  }, [allProducts, slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet title="Chi tiet">
        <Section>
          <SectionBody>
            <ProductViewItem product={product} />
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Tim hieu them</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {allProducts.slice(0, 8).map((item, index) => (
                <ProductCard
                  key={index}
                  id={item._id}
                  image01={item.image01}
                  image02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </Helmet>
    </div>
  );
};

export default ProductView;

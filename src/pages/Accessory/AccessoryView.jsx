import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet/Helmet";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../components/Section/Section";
import { useDispatch, useSelector } from "react-redux";
import { getAllAccessories } from "../../redux/callAPI";
import { useParams } from "react-router-dom";
import Grid from "../../components/Grid/Grid";
import AccessoryCard from "../../components/Accessory/AccessoryCard";
import AccessoryViewItem from "../../components/Accessory/AccessoryViewItem";

const AccessoryView = () => {
  const { accessories } = useSelector((state) => state.accessories);
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [accessory, setAccessory] = useState({});
  const [totalAccessory, setTotalAccessory] = useState([]);

  useEffect(() => {
    if (accessories.length === 0) {
      dispatch(getAllAccessories());
    } else {
      setAccessory(accessories.find((item) => item.slug === slug));
      setTotalAccessory(accessories);
    }
  }, [dispatch, accessories, slug]);

  return (
    <div>
      <Helmet title="Chi tiet">
        <Section>
          <SectionBody>
            <AccessoryViewItem accessory={accessory} />
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Tìm hiểu thêm</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {totalAccessory.slice(0, 8).map((item, index) => (
                <AccessoryCard
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

export default AccessoryView;

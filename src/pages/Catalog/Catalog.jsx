import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Helmet from "../../components/Helmet/Helmet";
import CheckBox from "../../components/Checkbox/CheckBox";
import category from "../../assets/fake-data/category";
import productColor from "../../assets/fake-data/product-color";
import productSize from "../../assets/fake-data/product-size";
import Button from "../../components/Button/Button";
import InfinityList from "../../components/Infinity/InfinityList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getAllProducts } from "../../redux/callAPI";

const Catalog = () => {
  const { products } = useSelector((state) => state.products);
  const { accessories } = useSelector((state) => state.accessories);

  const totalProducts = products.concat(accessories);
  const dispatch = useDispatch();
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };
  const [filter, setFilter] = useState(initFilter);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts(dispatch);
  }, [dispatch, filter]);

  useEffect(() => {
    setAllProducts(totalProducts);
  }, [totalProducts]);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({
            ...filter,
            color: [...filter.color, item.color],
          });
          break;
        case "SIZE":
          setFilter({
            ...filter,
            size: [...filter.size, item.size],
          });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };

  const updateProducts = useCallback(() => {
    let temp = allProducts;
    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.sizes.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    setAllProducts(temp);
  }, [filter, allProducts]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const clearFilter = () => setFilter(initFilter);
  return (
    <div>
      <Header />
      <div className="pt-5">
        <Helmet title="Sản Phẩm">
          <div className="catalog">
            <div className="catalog__filter">
              <div className="catalog__filter__widget">
                <div className="catalog__filter__widget__title">
                  danh mục sản phẩm
                </div>
                <div className="catalog__filter__widget__content">
                  {category.map((item, index) => (
                    <div
                      key={index}
                      className="catalog__filter__widget__content__item"
                    >
                      <CheckBox
                        label={item.display}
                        onChange={(input) =>
                          filterSelect("CATEGORY", input.checked, item)
                        }
                        checked={filter.category.includes(item.categorySlug)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="catalog__filter__widget">
                <div className="catalog__filter__widget__title">màu sắc</div>
                <div className="catalog__filter__widget__content">
                  {productColor.map((item, index) => (
                    <div
                      key={index}
                      className="catalog__filter__widget__content__item"
                    >
                      <CheckBox
                        label={item.display}
                        onChange={(input) =>
                          filterSelect("COLOR", input.checked, item)
                        }
                        checked={filter.color.includes(item.color)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="catalog__filter__widget">
                <div className="catalog__filter__widget__title">kích cỡ</div>
                <div className="catalog__filter__widget__content">
                  {productSize.map((item, index) => (
                    <div
                      key={index}
                      className="catalog__filter__widget__content__item"
                    >
                      <CheckBox
                        label={item.display}
                        onChange={(input) =>
                          filterSelect("SIZE", input.checked, item)
                        }
                        checked={filter.size.includes(item.size)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="catalog__filter__widget">
                <div className="catalog__filter__widget__content">
                  <Button size="sm" onClick={clearFilter}>
                    xóa bộ lọc
                  </Button>
                </div>
              </div>
            </div>
            <div className="catalog__content">
              <InfinityList data={allProducts} />
            </div>
          </div>
        </Helmet>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;

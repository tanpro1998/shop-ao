import React from "react";
import { Link } from "react-router-dom";
import Grid from "../Grid/Grid";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className=" bg-black color-white container p-5">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div style={{ transform: "translate(100%, 5%)" }}>
            <div className="footer__title">Tổng đài hỗ trợ</div>
            <div className="footer__content">
              <p>
                Liên hệ đặt hàng <strong>0964903991</strong>
              </p>
              <p>
                Thắc mắc đơn hàng <strong>0964903991</strong>
              </p>
              <p>
                Góp ý, khiếu nại <strong>0964903991</strong>
              </p>
            </div>
          </div>
          <div
            className="footer__about"
            style={{ transform: "translateX(100%)" }}
          >
            <p>
              <Link to="/">
                <span
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  FLASH
                </span>
              </Link>
            </p>
            <p>
              Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng
              triệu người tiêu dùng Việt. Hãy cùng Flash hướng đến một cuộc sống
              năng động, tích cực hơn.
            </p>
          </div>
          <div className="footer__link">
            <a href="https://www.facebook.com/tan.duongtranthanh/">
              <FacebookOutlined className="icon" />
            </a>
            <a href="https://www.instagram.com/tan.divad/">
              <InstagramOutlined className="icon" />
            </a>
            <a href="https://twitter.com/Tan_david1661">
              <TwitterOutlined className="icon" />
            </a>
            <a href="https://www.youtube.com/c/MixiGamingofficial">
              <YoutubeOutlined className="icon" />
            </a>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;

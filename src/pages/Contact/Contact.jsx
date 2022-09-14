import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Helmet from "../../components/Helmet/Helmet";
import { Form, Input } from "antd";
const { TextArea } = Input;

const Contact = () => {
  const [send, setSend] = useState(false);

  const handleSubmit = (e) => {
    setSend(!send);
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <Helmet title="Liên Hệ">
      <Header />
      <div className="contact">
        <div className="wrapper">
          <Form
            layout="vertical"
            className="contact__form p-5 "
            onFinish={handleSubmit}
          >
            <h1 className="">Liên Hệ</h1>
            <hr />
            <Input className="input" required placeholder="Name" />
            <Input
              type="email"
              className="input"
              required
              placeholder="Email"
            />
            <Input
              type="number"
              className="input"
              required
              placeholder="Phone"
            />

            <TextArea className="textarea" rows={4} placeholder="Message" />
            <Button>Submit</Button>
            {send && (
              <div className="success">
                Thành công, cảm ơn bạn đã ủng hộ Shop!
              </div>
            )}
          </Form>
          <div className="contact__support">
            <h3>Gọi ngay</h3>
            <span>+84 9649038991</span>
            <h3>Khu vực</h3>
            <span>Quận 10, TP.HCM</span>
            <h3>Thời gian làm việc</h3>
            <p>
              <b>Mon-Fri</b>: 10am-8pm
            </p>
            <p>
              <b>Sat, Sun</b>: CLosed
            </p>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Contact;

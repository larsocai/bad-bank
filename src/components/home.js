import React from "react";
import Card from "./Card";
import creditCard from "../assets/creditCardV1.jpg";
import cashMoney from "../assets/cashMoneyV1.jpg";
import "../stylesheets/Homepage.css";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div
        className="image-row"
        style={{
          backgroundImage: "url(./nothingbank0.jpg)",
        }}
      >
        <div className="image-title">Welcome to Nothing Bank</div>
        <div className="image-subtitle">Convenience Over Security</div>
      </div>
      <div>
        <h4>
          At Nothing Bank, we're redefining the way people think about banking.
          We've stripped away the unnecessary complexities to offer you a
          seamless banking experience. With us, you can forget about the burdens
          of security and excessive services. Our focus is on providing you with
          essential banking solutions, saving you time and effort.
        </h4>
      </div>
      <div className="row">
        <div className="col">
          <Card
            txtcolor="black"
            // header="BadBank Landing Page"
            image={
              <img src={creditCard} className="img-fluid" alt="bank card" />
            }
            title="No Security"
            text="We take a unique approach by eliminating security measures, ensuring quick and efficient access to your funds. By removing security protocols, we offer unparalleled convenience, saving you time and effort. Say goodbye to multi-step passwords, PINs, and other security protocols."
            // body={<img src={bankImg} className="img-fluid" alt="bank logo" />}
          />
        </div>
        <div className="col">
          <Card
            txtcolor="black"
            // header="BadBank Landing Page"
            image={
              <img src={cashMoney} className="img-fluid" alt="dollar bill" />
            }
            title="No Extra Services"
            text="Unlike other banks, we don't burden our customers with unnecessary services. At Nothing Bank, we focus on providing the essentials, eliminating the hassle of dealing with complex banking features. We believe in streamlining the banking process to enhance your experience."
            // body={<img src={bankImg} className="img-fluid" alt="bank logo" />}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

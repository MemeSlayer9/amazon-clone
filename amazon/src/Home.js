import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        className="home-image"
      />
      <div className="home-row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="72321341"
          title="AmazonBasics Pro Gaming Headset - Black"
          price={36.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71BGLa7IFtL._SX466_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="52321341"
          title="PlayStation 4 Pro 1TB Console"
          price={377.89}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg"
        />
        <Product
          id="62321341"
          title="ASUS VivoBook L203MA Laptop, 11.6” HD Display."
          price={277.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81o8Tll-5-L._AC_SX679_.jpg"
        />
        <Product
          id="22321341"
          title="AmazonBasics Silicone, Non-Stick, Food Safe Baking Mat - Pack of 2"
          price={13.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81IC5%2BbWDgL._AC_SX522_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="42321341"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1121.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

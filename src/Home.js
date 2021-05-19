import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          alt=""
        />
        {/* Product id,title,price,rating,image */}
        <div className="home__row">
          <Product
            id="12321341"
            title="Fire TV Stick 4K with All-New Alexa Voice Remote | Streaming Media Player"
            price={5999}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO/desktop/CC_FTV_4K_1x._SY304_CB448581492_.jpg"
          />

          <Product
            id="12321345"
            title="Nx100s Stereo Headset With Foldable Microphone"
            price={1365}
            rating={4}
            image="https://m.media-amazon.com/images/I/41ub4XzjUUL._AC_SR400,600_.jpg"
          />

          <Product
            id="12321356"
            title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
            price={41999}
            rating={5}
            image="https://m.media-amazon.com/images/I/619iTNHSCGL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321346"
            title="Middle Earth Shadow of Mordor (PS4)"
            price={949}
            rating={5}
            image="https://m.media-amazon.com/images/I/51KGuModEIL._AC_SR400,600_.jpg"
          />

          <Product
            id="12321347"
            title="Mass Effect - Andromeda (Xbox One)"
            price={789}
            rating={5}
            image="https://m.media-amazon.com/images/I/51DvX+I3dnL._AC_SR400,600_.jpg"
          />

          <Product
            id="12321348"
            title="Kadence Wanderer Brown Mahogany wood Soprano Ukulele with Bag"
            price={2499}
            rating={4}
            image="https://m.media-amazon.com/images/I/4114-ODf3vL._AC_SR300,300_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321350"
            title='Acer Predator Triton 500 Thin &amp; Light Gaming Laptop, Intel Core i7-9750H, GeForce RTX 2060 with 6GB, 15.6" Full HD 144Hz'
            price={97990}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41h5xnrY3OL._AC_SY200_.jpg"
          />

          <Product
            id="12321351"
            title="ASUS ROG Strix G15 (10th Gen i7-10750H, 16GB RAM, 1TB SSD, 6GB NVIDIA GTX 1660 Ti Graphics, 15.6” FHD 144Hz Display"
            price={134990}
            rating={5}
            image="https://m.media-amazon.com/images/I/31Nb4xzgY-L._AC_UY218_.jpg"
          />

          <Product
            id="12321352"
            title="Dell G3 3500 Gaming 15.6-inch FHD Laptop (10th Gen Core i7-10750H/8GB/512GB SSD/Windows 10 Home Plus"
            price={90999}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/51S5L+bvzvL._AC_SY200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

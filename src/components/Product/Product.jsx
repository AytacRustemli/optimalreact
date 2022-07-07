import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Product/Product.scss";
import { useEffect } from "react";
import { getProductsAction } from "../../redux/Actions/ProductAction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const Product = () => {
  const getProduct = useSelector((state) => state.products.products.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAction());
  }, []);
  return (
    <div id="product">
      <div className="container">
        <div className="top">
          <div className="container">
            <ul className="d-flex justify-content-between">
              <li style={{ border: "1px #de1f23 dashed" }}>Yeni Məhsullar</li>
              <li>Endirimdə Olanlar</li>
              <li>Ən çox bəyənilənlər</li>
              <li>Ən çox baxılanlar</li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="boxes">
              <Swiper
                spaceBetween={50}
                slidesPerView={5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {getProduct &&
                  getProduct.filter(x=>x.isSlider).map((e) => (
                    <SwiperSlide key={e.id}>
                      <Link to={'/detail/' + e.id}>
                      <img
                        width="180px"
                        src={e.coverPhoto}
                        alt=""
                      />
                      </Link>
                      <Link to={'detail/' + e.id}>
                      <div className="red">
                        <div className="blue">
                          <i class="fa-solid fa-heart"></i>
                          <i class="fa-solid fa-minimize"></i>
                          <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                      </div>
                      </Link>
                      {/* <div className="image">
                        <img
                          width="80px"
                          src="https://optimal.az/image/catalog/IKONLAR/18-ay2.png"
                          alt=""
                        />
                      </div> */}
                      <div className="text">
                        <p className="kondisoner">
                          {e.name}
                        </p>
                        <p className="price">
                          {e.price} ₼ <br />
                          <del>5,999.99₼</del>
                        </p>
                        <p className="sebet">Səbətə Əlavə Et</p>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Product/Product.scss";
import { useEffect } from "react";
import { getProductsAction } from "../../redux/Actions/ProductAction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { addToCartAction } from './../../redux/Actions/CartAction';
import { CartContext } from "../../context/MyContext";
import { addToFavoriesAction } from "../../redux/Actions/FavoriesAction";


const Product = () => {
  const  {cartItems}  = useSelector((state) => state.cart)
  const  {favoriesItems}  = useSelector((state) => state.favories)
  const getProduct = useSelector((state) => state.products.products.message);
  const dispatch = useDispatch();
  const [cart, setCart] = useState(0)
  const {cartCount,setCartCount} = useContext(CartContext);

  const addToCartHadler = (id,name) => {
    var myCart = cartItems.find(e => e.id === id)
    if (myCart) {
      dispatch(addToCartAction(id, myCart.quantity + 1))
    } else {
      dispatch(addToCartAction(id, 1))
    }
    setCartCount(cartCount+1);
  }

  const addToCartHandler = (id,name) => {
    var myCart = favoriesItems.find(e => e.id === id)
    if (myCart) {
      dispatch(addToFavoriesAction(id, myCart.quantity + 1))
    } else {
      dispatch(addToFavoriesAction(id, 1))
    }
    // setCartCount(cartCount+1);
  }

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <div id="product">
      <div className="container">
        <div className="top">
          <div className="container">
            <ul className="d-flex justify-content-between">
              <li>Yeni Məhsullar</li>
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
                      <div className="red">
                        <div className="blue">
                          <i class="fa-solid fa-heart" onClick={() => addToCartHandler(e.id, e.name)}></i>
                          <i class="fa-solid fa-minimize"></i>
                          <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                      </div>
                      <div className="text">
                        <p className="kondisoner">
                          {e.name}
                        </p>
                        <p className="price">
                          {e.price} ₼ <br />
                        </p>
                        <p className="sebet" onClick={() => addToCartHadler(e.id, e.name)}>Səbətə Əlavə Et</p>
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

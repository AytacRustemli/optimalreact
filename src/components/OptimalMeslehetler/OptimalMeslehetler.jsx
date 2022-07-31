import React, { useEffect } from 'react'
import '../OptimalMeslehetler/OptimalMeslehetler.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../../redux/Actions/ProductAction';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from 'react-router-dom';

const OptimalMeslehetler = () => {
  const getProduct = useSelector((state) => state.products.products.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAction());
  }, []);
  return (
    <div id='optimalmeslehetler'>
        <div className="container">
            <div className="top">
                <h2>MƏSLƏHƏTLƏR</h2>
            </div>
            <div className="bottom">
                <div className="row">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={2}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            getProduct &&
                            getProduct.filter(x=>x.isStock).map((product)=>(
                                <SwiperSlide key={product.id}>
                                    <div className="deneme">
                                        <div className="d-flex">
                                            <div className="image">
                                                <img src={product.coverPhoto} alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>{product.name}</h3>
                                                <h4>{product.description}</h4>
                                                <Link to={'/meslehetler/' + product.id}>
                                                    <div className="readmore">
                                                        <span>Ardını oxu...</span>
                                                        <i class="fa-solid fa-angles-right"></i>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                            
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OptimalMeslehetler
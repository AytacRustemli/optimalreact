import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { BASE_URL } from "../../api/config";
import 'swiper/css';
import SwiperCore,{Autoplay} from 'swiper'

const SliderPhoto = () => {
  const [slider, setSlider] = useState([]);

  const getSlider = async () => {
    await fetch(BASE_URL + "SliderPhoto/getall")
      .then((a) => a.json())
      .then((data) => setSlider(data));
  };

  useEffect(() => {
    getSlider();
  }, []);

  SwiperCore.use([Autoplay]);

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{delay:3000}}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
          {
              slider &&
              slider.map((e) =>(
                  <SwiperSlide key={e.id}>
                      <img width='100%' src={e.photoURL} alt="" />
                  </SwiperSlide>
              )) 
          }
      </Swiper>
    </div>
        
  );
};

export default SliderPhoto;

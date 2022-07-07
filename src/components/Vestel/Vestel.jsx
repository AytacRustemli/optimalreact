import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../Vestel/vestel.scss'

function Vestel() {
  return (
    <div id="vestel">
        <div className='container'>
            <div className="box">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={6}
                    >
                    <SwiperSlide>
                        <img width='100px' src="https://optimal.az/image/cache/catalog/Markalar/1-bosch-slideeee-178x105.png?v=6" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100px' src="https://optimal.az/image/cache/catalog/Markalar/vestel-kirmizi-logo-buyuk-178x105.png?v=6" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100px' src="https://optimal.az/image/cache/catalog/Markalar/Samsung_Orig_Wordmark_BLACK_RGB-178x105.png?v=6" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100px' src="https://optimal.az/image/cache/catalog/Markalar/LG-3-178x105.jpg?v=6" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100px' src="https://optimal.az/image/cache/catalog/Markalar/huawei%20logo-178x105.jpg?v=6" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100px' src="https://optimal.az/image/cache/catalog/Markalar/download-178x105.png?v=6" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100px' src="https://optimal.az/image/cache/catalog/Markalar/Carrier-logo-178x105.png?v=6" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100px' src="https://optimal.az/image/cache/catalog/Markalar/Sharp-logo-178x105.png?v=6" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100px' src="https://optimal.az/image/cache/catalog/Markalar/Babyliss128045-178x105.png?v=6" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100px' src="https://optimal.az/image/cache/catalog/Markalar/Philips_logo-178x105.png?v=6" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100px' src="https://optimal.az/image/cache/catalog/Markalar/Simfer-178x105.png?v=6" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100px' src="https://optimal.az/image/cache/catalog/Markalar/Delonghi-178x105.png?v=6" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100px' src="https://optimal.az/image/cache/catalog/Markalar/Sharp-logo-178x105.png?v=6" alt="" />
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </div>
    </div>

  )
}

export default Vestel
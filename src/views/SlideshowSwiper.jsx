import React,{useEffect, useState} from 'react'
import { Card } from "antd";
import { useSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import "swiper/css/effect-fade";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, EffectFade, Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const SlideshowSwiper = (props) => {
    const {contentStyle, loadFirstSlide } = props;
    const [searchParams, setSearchParams] = useSearchParams();
    const live = searchParams?.get("live") ?? true;
    const [content, setContent] = useState("");
    const [imageSlide,setImageSlide] = useState([]);
    
    useEffect(() => {
        setImageSlide(getCardImages((!live)));
    },[live]);

    useEffect(() => {
        if (loadFirstSlide==true) {
            console.log(loadFirstSlide);
            var mySwiper = document.querySelector('.swiper_container').swiper
            mySwiper.slideNext();
        }
    },[loadFirstSlide]);

    const getCardImages = (isTest) => {
        const imageLoc = '../assets/sampleimgs/*.{png,jpg,jpeg,svg}';
        console.log(imageLoc);
        const images = import.meta.glob('../assets/memories/*.{png,jpg,JPG,jpeg,svg,gif}', { eager: true });
        const sampleimgs = import.meta.glob('../assets/sampleimgs/*.{png,jpg,JPG,jpeg,svg,gif}', { eager: true });

        return  Object.values((isTest ? sampleimgs : images )).map((image, index) => (
            <SwiperSlide>
                    {/* <Card className='cardSlide'
                        key={index} 
                        alt={`Image ${index + 1}`}
                        style={{
                            // backgroundSize: "cover",
                            backgroundImage: `url(${image.default})`,
                            width: "900px",
                            height: "600px",
                            placeSelf: "center"
                        }}
                        // cover = {
                        //     <div style={contentStyle}>test</div>
                        // }
                    >
                    </Card> */}
                    <img 
                    style={{maxWidth: "900px",maxHeight: "600px",}} 
                    src={image.default} alt={`Image ${index + 1}`}/>
            </SwiperSlide>
        ));
    }

  return (
    <div className="container">
        <Swiper
            // install Swiper moduleseffect={'coverflow'}
            effect={'coverflow'}
            autoplay= {{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            }}
            speed={2500}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 80,
                depth: 300,
                modifier: 4,
                slideShadows: true,  
            }}
            breakpoints={{
                500: {
                    effect: "fade",
                }
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
            }}
            modules={[EffectCoverflow, EffectFade, Pagination, Navigation, Autoplay]}
            className="swiper_container"
        >
            {imageSlide}
            {/* <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
            </div> */}
        </Swiper>
    </div>
  )
}

export default SlideshowSwiper
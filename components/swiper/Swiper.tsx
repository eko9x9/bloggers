  
import React, { useState } from 'react';
import { Swiper as SwiperLib, SwiperSlide } from 'swiper/react';
import P1 from "../../assets/image/person/p-1.png";
import P2 from "../../assets/image/person/p-2.png";
import Image from "next/image";
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Swiper() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
      <SwiperLib
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => {}}
        navigation={{

        }}
        onActiveIndexChange={(s) => {
          console.log(s)
        }}

        effect="coverflow"
      >
        <SwiperSlide>
          <div className="wrapper-swipper flex">
            <div className="img">
              <Image src={P1} alt="s" layout="fill" />
            </div>
            <div className="detail text-center">
              <h3 className="title">Lifestyle</h3>
              <h3>Lorem ipsum, dolor sit amet</h3>

              <div className="info flex">
                <div className="comment text-center flex">
                  <CommentIcon style={{color: "#C1A781", fontSize: 15}} />
                  <p>3</p>
                </div>
                <div className="publish flex">
                  <h3>{new Date().toDateString()}</h3>
                </div>
                <div className="likes flex">
                  <FavoriteIcon style={{color: "#C1A781", fontSize: 15}} />
                  <p>10</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper-swipper flex">
            <div className="img">
              <Image src={P2} alt="s" layout="fill" />
            </div>

            <div className="detail text-center">
              <h3 className="title">Fashion</h3>
              <h3>Lorem ipsum, dolor sit amet</h3>

              <div className="info flex">
                <div className="comment text-center flex">
                  <CommentIcon style={{color: "#C1A781", fontSize: 15}} />
                  <p>3</p>
                </div>
                <div className="publish flex">
                  <h3>{new Date().toDateString()}</h3>
                </div>
                <div className="likes flex">
                  <FavoriteIcon style={{color: "#C1A781", fontSize: 15}} />
                  <p>10</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </SwiperLib>
  );
};
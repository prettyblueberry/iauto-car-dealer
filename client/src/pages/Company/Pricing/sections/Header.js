/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

// Pricing page components
import SliderHeader from "pages/Company/Pricing/components/Header";

// Images
// import bg1 from "assets/images/car/car.jpg";
// import bg2 from "assets/images/car/car5.jpg";
// import bg3 from "assets/images/car/car2.jpg";
// import bg4 from "assets/images/emarket/1.jpg";
// import bg5 from "assets/images/emarket/1-2.jpg";
// import bg6 from "assets/images/emarket/1-3.webp";
// import bg7 from "assets/images/emarket/1-5.webp";
// import bg8 from "assets/images/emarket/1-6.webp";
// import brand1 from "assets/images/brands1/mercedes.png"
// import brand2 from "assets/images/brands1/porsche.png"
// import brand3 from "assets/images/brands1/jaguar.png"

function Header() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <Swiper
      autoplay={{ delay: 5000 }}
      speed={1}
      fadeEffect
      spaceBetween={1}
      slidesPerView={1}
      navigation
      loop
    >
      <SwiperSlide>
        {/* <SliderHeader
          image={bg4}
          label="Drive the future,"
          title="today."
          description=""
          cards={
            {
              brandImage: brand1,
              description: 'MERCEDES-BENZ',
              description1: '2023 EQE 350',
              batteryCapacity: '98.0',
              mile: '420',
              second: '3.2',
              engine: '350',
              originPrice: '65000',
              currentPrice: '58 900',
            }
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderHeader
          image={bg5}
          label="Visualize, Customize"
          title="Actualize."
          description=""
          cards={
            {
              brandImage: brand2,
              description: 'PORSCHE 2020',
              description1: 'TAYCAN 340',
              batteryCapacity: '73.0',
              mile: '388',
              second: '4.3',
              engine: '340',
              originPrice: 'Best deal',
              currentPrice: '123 800',
            }
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderHeader
          image={bg6}
          label="The ultimate all-electric"
          title="performance SUV"
          description=""
          cards={
            {
              brandImage: brand3,
              description: 'JAGUAR 2022 1-',
              description1: 'PACE 412',
              batteryCapacity: '78.4',
              mile: '361',
              second: '3.8',
              engine: '412',
              originPrice: '77 855',
              currentPrice: '75 000',
            }
          }
        /> */}
      </SwiperSlide>
    </Swiper>
  );
}

export default Header;

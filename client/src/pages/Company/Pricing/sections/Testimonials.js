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

import { useRef } from "react";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import ComplexReviewCard from "examples/Cards/ReviewCards/ComplexReviewCard";

// Images
import review1 from "assets//images/auction/classic3.jpg";
import review2 from "assets/images/auction/classic5.jpg";
import review3 from "assets/images/auction/classic2.jpg";
import review4 from "assets/images/auction/modern.jpg";
import review5 from "assets/images/auction/8.jpg";
import review6 from "assets/images/car/car4.jpg";
import Grid from "@mui/material/Grid";

function Testimonials() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  // Swiper navigation buttons styles
  const navigationStyles = {
    position: "absolute",
    top: 0,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
    height: "100%",
    textAlign: "center",
    opacity: 0.5,
    cursor: "pointer",
    transition: "opacity 0.15s ease",

    "&:hover, &:focus": {
      opacity: 1,
    },
  };

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <MKBox position="relative">
      <Swiper
        onInit={({ params, navigation }) => {
          const { navigation: nav } = params;

          nav.prevEl = navigationPrevRef.current;
          nav.nextEl = navigationNextRef.current;
          navigation.init();
          navigation.update();
        }}
        autoplay={{ delay: 5000 }}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        <SwiperSlide>
          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={12} md={12} lg={12} display="flex" justifyContent="ce"> 
              <ComplexReviewCard
                image={review1}
              />
              <ComplexReviewCard
                image={review2}
              />
              <ComplexReviewCard
                image={review3}
              />
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={12} md={4} lg={4}> 
              <ComplexReviewCard
                image={review4}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}> 
              <ComplexReviewCard
                image={review5}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}> 
              <ComplexReviewCard
                image={review6}
              />
            </Grid>
          </Grid>
        </SwiperSlide>
        <MKTypography
          variant="h2"
          color="primary"
          sx={{
            ...navigationStyles,
            left: 0,
          }}
          ref={navigationPrevRef}
        >
          <Icon>chevron_left</Icon>
        </MKTypography>
        <MKTypography
          variant="h2"
          color="primary"
          sx={{
            ...navigationStyles,
            right: 0,
          }}
          ref={navigationNextRef}
        >
          <Icon>chevron_right</Icon>
        </MKTypography>
      </Swiper>
    </MKBox>
  );
}

export default Testimonials;

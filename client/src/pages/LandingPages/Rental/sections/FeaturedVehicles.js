import Grid from "@mui/material/Grid";
import { useEffect, useRef, useState } from "react";
import MKBox from "components/MKBox";
import FeatureVehicle from "pages/LandingPages/Rental/components/FeatureVehicle"
import { Hexagon } from 'tiled-hexagons'
import MKTypography from "components/MKTypography";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import Icon from "@mui/material/Icon";
// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// SwiperJS styles
import "swiper/swiper.min.css";
import { BarIndicator  } from 'react-indicators';
import "swiper/modules/navigation/navigation.min.css";
import image1 from 'assets/images/auction/classic.jpg'  
import image2 from 'assets/images/auction/classic2.jpg'
import image3 from 'assets/images/auction/classic3.jpg'
import image4 from 'assets/images/auction/classic5.jpg'
import image5 from 'assets/images/auction/classic7.jpg'
import image6 from 'assets/images/auction/classic9.jpg'
import image7 from 'assets/images/auction/classic10.jpg'
import image8 from 'assets/images/auction/modern.jpg'
import image9 from 'assets/images/auction/modern2.jpg'
import image10 from 'assets/images/auction/modern4.jpg'
import image11 from 'assets/images/auction/modern6.jpg'
import image12 from 'assets/images/auction/mustang.jpg'
// import MySVG1 from 'assets/images/2.svg'; 
// import MySVG2 from 'assets/images/1.svg';

const textStyle = {
    fontFamily: 'Source Sans Pro',
    fontSize: '20px',
    fill: 'rgba(255, 255, 255, 1)'
}
function FeaturedVehicles () {
    const [progress, setProgress] = useState(0);
    const [hexagonColorPre, setHexagonColorPre] = useState("rgba(255,255,255,0.5)");
    const [hexagonShadowPre, setHexagonShadowPre] = useState('rgba(0,0,0,0)');
    const [hexagonColorNext, setHexagonColorNext] = useState("rgba(255,255,255,0.5)");
    const [hexagonShadowNext, setHexagonShadowNext] = useState('rgba(0,0,0,0)');
    const imageGroup1 = [
        image1, image2, image3, image4
    ];
    const imageGroup2 = [
        image5, image6, image7, image8
    ];
    const imageGroup3 = [
        image9, image10, image11, image12
    ];
    const navigationStyles = {
        position: "absolute",
        top: 0,
        zIndex: 1,
        display: "hidden",
        alignItems: "center",
        justifyContent: "center",
        // width: "15%",
        // height: "100%",
        textAlign: "center",
        opacity: 0,
        cursor: "pointer",
        transition: "opacity 0.15s ease",
        "&:hover, &:focus": {
          opacity: 0,
        },
    };
    const onClickHexagonPrev = () => {
        const icons = navigationPrevRef.current;
        icons.click();
        console.log(icons.style);
        if(progress === 0)setProgress(2);
        else setProgress(Math.abs(progress - 1) % 3);
    }
    const onClickHexagonNext = () => {
        const icons = navigationNextRef.current;
        icons.click();
        setProgress((progress + 1) % 3);
        console.log(progress);
    }
    const enterHexagon = (value) => {
        if(value === 1){
            setHexagonColorPre("rgba(0,0,180,1)");
            setHexagonShadowPre("rgba(0,0,0,0.8)");
        }
        else{
            setHexagonColorNext("rgba(0,0,180,1)");
            setHexagonShadowNext("rgba(0,0,0,0.8)");
        } 
        
    }
    const leaveHexagon = (value) => {
        if(value === 1){
            setHexagonColorPre("rgba(255,255,255,0.8)");
            setHexagonShadowPre("rgba(0,0,0,0)");
        }
        else{
            setHexagonColorNext("rgba(255,255,255,0.8)");
            setHexagonShadowNext("rgba(0,0,0,0)");
        } 
    }
    SwiperCore.use([Autoplay, Navigation]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return(
        <>
        <Grid container xs={12} md={12} lg={12} xl={12}>
            <Grid item xs={12} md={12} lg={12} xl={8}>
                <MKTypography variant="h1" color="white" sx={{marginLeft: '180px', fontFamily: 'cambria', marginBottom: '100px'}}>
                    Featured vehicles
                </MKTypography>
            </Grid>
            <Grid item xs={6} md={6} lg={6} xl={2} sx={{display: 'flex', justifyContent: 'end'}}>
                <MKBox onMouseEnter={() => enterHexagon(1)} onMouseLeave={() => leaveHexagon(1)}>
                    {/* <Hexagon
                        img={MySVG1}
                        sideLength={45}
                        borderRadius={1}
                        // text="prev"
                        textStyle={textStyle}
                        fill={hexagonColorPre}
                        shadow={hexagonShadowPre}
                        // border="1px solid black"
                        onClick={onClickHexagonPrev}
                        ref={navigationPrevRef}
                    /> */}
                </MKBox>
            </Grid>
            <Grid item xs={6} md={6} lg={6} xl={2} sx={{paddingLeft: '20px'}}>
                <MKBox onMouseEnter={() => enterHexagon(2)} onMouseLeave={() => leaveHexagon(2)}>
                    {/* <Hexagon
                        img={MySVG2}
                        sideLength={45}
                        borderRadius={1}
                        // text="Next"
                        textStyle={textStyle}
                        fill={hexagonColorNext}
                        shadow={hexagonShadowNext}
                        // border="1px solid black"
                        onClick={onClickHexagonNext}
                        ref={navigationNextRef}
                    /> */}
                </MKBox>
            </Grid>
        </Grid>
        <MKBox position="relative">
            <Swiper
                onInit={({ params, navigation }) => {
                const { navigation: nav } = params;

                nav.prevEl = navigationPrevRef.current;
                nav.nextEl = navigationNextRef.current;
                navigation.init();
                navigation.update();
                }}
                autoplay={{ delay: 100000 }}
                speed={800}
                spaceBetween={0}
                slidesPerView={1}
                loop
            >
                <SwiperSlide>
                    <Grid container xs={12} md={12} lg={12} xl={12}>
                        <Grid item xs={12} md={12} lg={12} xl={4}>
                            <FeatureVehicle images={imageGroup1}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={4}>
                            <FeatureVehicle images={imageGroup2}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={4}>
                            <FeatureVehicle images={imageGroup3}/>
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid container xs={12} md={12} lg={12} xl={12}>
                        <Grid item xs={12} md={21} lg={12} xl={4}>
                            <FeatureVehicle images={imageGroup1}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={4}>
                            <FeatureVehicle images={imageGroup2}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={4}>
                            <FeatureVehicle images={imageGroup3}/>
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid container xs={12} md={12} lg={12} xl={12}>
                        <Grid item xs={12} md={12} lg={12} xl={4} mb={{lg: '200px'}}>
                            <FeatureVehicle images={imageGroup1}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={4}>
                            <FeatureVehicle images={imageGroup2}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={4}>
                            <FeatureVehicle images={imageGroup3}/>
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
        
        <MKBox sx={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
            
            {/* <MKBox sx={{width: '10px'}}/>
            <CircleIndicator progress={progress} size={6}/>
            <MKBox sx={{width: '10px'}}/> */}
            {progress? 
                <MKTypography sx={{width: '6px', height: '6px', border: '2px solid white', borderRadius: '3px'}}></MKTypography>:
                <MKTypography sx={{width: '6px', height: '6px', border: '6px solid white', borderRadius: '6px', marginTop: '-3px'}}></MKTypography>
            }
            <MKTypography sx={{width: '5px', height: '4px'}}></MKTypography>
            {progress !== 1? 
                <MKTypography sx={{width: '6px', height: '6px', border: '2px solid white', borderRadius: '3px'}}></MKTypography>:
                <MKTypography sx={{width: '6px', height: '6px', border: '6px solid white', borderRadius: '6px', marginTop: '-3px'}}></MKTypography>
            }
            <MKTypography sx={{width: '5px', height: '4px'}}></MKTypography>
            {progress !== 2? 
                <MKTypography sx={{width: '6px', height: '6px', border: '2px solid white', borderRadius: '3px'}}></MKTypography>:
                <MKTypography sx={{width: '6px', height: '6px', border: '6px solid white', borderRadius: '6px', marginTop: '-3px'}}></MKTypography>
            }
        </MKBox>
        </>
    );
}

export default FeaturedVehicles;

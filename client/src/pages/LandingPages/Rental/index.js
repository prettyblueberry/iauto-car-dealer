  // /*
  // =========================================================
  // * Material Kit 2 PRO React - v2.0.0
  // =========================================================

  // * Product Page: https://www.creative-tim.com/product/material-kit-pro-react
  // * Copyright 2021 Creative Tim (https://www.creative-tim.com)

  // Coded by www.creative-tim.com

  // =========================================================

  // * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  // */

  // // @mui material components
  // import Container from "@mui/material/Container";
  // import Grid from "@mui/material/Grid";
  // import Card from "@mui/material/Card";
  // import { useEffect, useState } from "react";
  // // Material Kit 2 PRO React components
  // import MKBox from "components/MKBox";

  // // Material Kit 2 PRO React examples
  // import DefaultNavbar from "examples/Navbars/DefaultNavbar";
  // import DefaultFooter from "examples/Footers/DefaultFooter";

  // // Rental page sections
  // import Places from "pages/LandingPages/Rental/sections/Places";
  // import Testimonials from "pages/LandingPages/Rental/sections/Testimonials";
  // import Faq from "pages/LandingPages/Rental/sections/Faq";

  // // Routes
  // import routes from "routes";
  // import footerRoutes from "footer.routes";
  // // Images
  // // import bgImage from "assets/images/motors.stylemixthemes.com/background.jpg";
  // import brandImage from "assets/images/brands/brands2.png"
  // import auction2 from "assets/images/emarket/2-2.jpg";
  // import auction3 from "assets/images/emarket/2-1-1.jpg";
  // import auction1 from "assets/images/emarket/2-3.jpg";
  // import MKTypography from "components/MKTypography";
  // import MKButton from "components/MKButton";
  // import Header from "pages/Company/Pricing/sections/Header";
  // import Icon from "@mui/material/Icon";
  // import ManageSearchIcon from '@mui/icons-material/ManageSearch';
  // import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
  // import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
  // import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
  // import GroupsIcon from '@mui/icons-material/Groups';
  // import FeaturedVehicles from "pages/LandingPages/Rental/sections/FeaturedVehicles";
  // import ContactUs from "pages/Support/ContactUs/index"
  // import MKInput from "components/MKInput";
  // import securityLogo from 'assets/images/logos/security.png'
  // import fuelLogo from 'assets/images/logos/fuel.png'
  // import slienceLogo from 'assets/images/logos/slience.png'
  // import maintenanceLogo from 'assets/images/logos/maintenance.png'
  // import environmentLogo from 'assets/images/logos/environment.png'
  // import shadingImage from 'assets/images/emarket/shadingImage.JPG'
  // import equip1 from 'assets/images/emarket/5-1.jpg';
  // import equip2 from 'assets/images/emarket/5-2.jpg';
  // import equip3 from 'assets/images/emarket/5-3.jpg';
  // import footerImage from 'assets/images/emarket/6-1.jpg'
  // // import mapImage from 'assets/images/emarket/mapImage.JPG'
  // // import locationLogo from 'assets/images/logos/locationLogo.png';
  // // import messageLogo from 'assets/images/logos/messageLogo.png';
  // // import phoneLogo from 'assets/images/logos/phoneLogo.png';
  // import { Typography } from "@mui/material";

  // function Rental() {
  //   const [hash, setHash] = useState(true);
  //   const [onProgress, setOnProgress] = useState(0);
  //   useEffect(() => {
  //     console.log(onProgress);
  //     let computeProgress = () => {
  //       // The scrollTop gives length of window that has been scrolled
  //       const scrolled = document.documentElement.scrollTop;
  //       setOnProgress(scrolled);
  //     }
  //     // Adding event listener on mounting
  //     window.addEventListener("scroll", computeProgress);
  //     // Removing event listener upon unmounting
  //     return () => window.removeEventListener("scroll", computeProgress);
  //   });
  //   useEffect(() => {
  //     console.log(onProgress);
  //     if(onProgress === 0)setHash(true);
  //     else setHash(false);
  //   }, [onProgress])
  //   console.log(hash);
  //   const brand = 
  //   <MKBox
  //     component="img"
  //     src={brandImage} 
  //     borderRadius="lg"    // shadow="md"
  //     width="50%"
  //     height="50%"
  //     position="relative"
  //     zIndex={1}
  //   />
  //   return (
  //     <>
  //       {/* <MKBox position="fixed" top="0.5rem" width="100%" zIndex={5}> */}
  //         {/* <DefaultNavbar
  //           routes={routes}
  //           action={{
  //             type: "internal",
  //             route: "/",
  //             label: "sign in",
  //             color: "info",
  //           }}
  //           transparent={hash}
  //           // transparent
  //           // primary
  //           light
  //           sticky
  //           brand={brand}
  //         /> */}
  //       {/* </MKBox> */}
  //       <Header />
  //       {/* <MKBox
  //           sx={{
  //             height: '150px',
  //             backgroundColor: 'rgba(16, 33, 39, 1)',
  //             marginTop: '-15px',
  //             zIndex: '3',
  //             marginTop: '-150px'
  //           }}
  //       /> */}
  //       <MKBox paddingLeft={38} mt={10}>
  //         {/* <MKTypography variant="h1" color="black" fontFamily="calibri" sx={{marginTop: '15px'}}> */}
  //         <MKTypography variant="h1" color="black" fontFamily="calibri">
  //           WHY ELECTRIC<br/>VEHICLES?<br/>
  //         </MKTypography>
  //       </MKBox>
  //       <MKBox>
  //         <Grid container xs={12} md={12} lg={12} xl={12}>
  //           <Grid item xs={12} md={12} lg={12} xl={6}>
  //           <MKBox
  //             component="img"
  //             src={auction2} 
  //             borderRadius="0"
  //             // shadow="md"
  //             width="28%"
  //             height="32%"
  //             mt={7}
  //             ml={40}
  //             zIndex={1}
  //             sx={{border: '1px solid white'}}
  //             position="relative"
  //           />
  //           <br/>
  //           <MKBox
  //             component="img"
  //             src={auction3} 
  //             borderRadius="0"
  //             // shadow="md"
  //             width="28%"
  //             height="32%"
  //             ml={60}
  //             mt={-12}
  //             zIndex={2}
  //             sx={{border: '15px solid white'}}
  //             position="relative"
  //           /><br/>
  //           <MKBox
  //             component="img"
  //             src={auction1} 
  //             borderRadius="lg"
  //             // shadow="md"
  //             width="28%"
  //             height="32%"
  //             mt={-12}
  //             ml={40}
  //             zIndex={1}
  //             sx={{border: '1px solid white'}}
  //             position="relative"
  //           />
  //           </Grid>
  //           <Grid item xs={12} md={12} lg={12} xl={6} sx={{paddingRight: '15%', paddingLeft: '5%'}}>
  //             <Grid container xs={12} md={12} lg={12} xl={12} sx={{marginTop: '60px'}}>
  //               <Grid item xs={1} md={1} lg={1} xl={1}>
  //                 <MKBox
  //                   component="img"
  //                   src={securityLogo} 
  //                   borderRadius="lg"    // shadow="md"
  //                   width="260%"
  //                   height="90%"
  //                   position="relative"
  //                   zIndex={1}
  //                   sx={{marginLeft: '-110px'}}
  //                 />
  //               </Grid>
  //               <Grid xs={11} md={11} lg={11} xl={11} sx={{paddingRight: '15%'}}>
  //                 <MKTypography variant="h3" color="black" sx={{fontFamily: 'aria'}}>
  //                   Safety
  //                 </MKTypography>
  //                 <MKTypography variant="body2" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
  //                   Electric Cars are extremely reliable and secure. After all, electricity is not flammable!
  //                 </MKTypography>
  //               </Grid>
  //             </Grid>
  //             <Grid container xs={12} md={12} lg={12} xl={12} sx={{marginTop: '50px'}}>
  //               <Grid item xs={1} md={1} lg={1} xl={1}>
  //                 <MKBox
  //                   component="img"
  //                   src={fuelLogo} 
  //                   borderRadius="lg"    // shadow="md"
  //                   width="220%"
  //                   height="80%"
  //                   position="relative"
  //                   sx={{marginLeft: '-95px'}}
  //                   zIndex={1}
  //                 />
  //               </Grid>
  //               <Grid xs={11} md={11} lg={11} xl={11} sx={{paddingRight: '15%'}}>
  //                 <MKTypography variant="h3" color="black" sx={{fontFamily: 'aria'}}>
  //                   Fuel Cost
  //                 </MKTypography>
  //                 <MKTypography variant="body2" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
  //                   Electricity is known for its relatively cheap cost and, as a result, will be much more affordable.
  //                 </MKTypography>
  //               </Grid>
  //             </Grid>
  //             <Grid container xs={12} md={12} lg={12} xl={12} sx={{marginTop: '50px'}}>
  //               <Grid item xs={1} md={1} lg={1} xl={1}>
  //                 <MKBox
  //                   component="img"
  //                   src={slienceLogo} 
  //                   borderRadius="lg"    // shadow="md"
  //                   width="250%"
  //                   height="100%"
  //                   position="relative"
  //                   sx={{marginLeft: '-100px'}}
  //                   zIndex={1}
  //                 />
  //               </Grid>
  //               <Grid xs={11} md={11} lg={11} xl={11}>
  //                 <MKTypography variant="h3" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
  //                   Driver Fatigue & Silence
  //                 </MKTypography>
  //                 <MKTypography variant="body2" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
  //                   Bidders have a great time, even if they don’t always get their chosen item.
  //                 </MKTypography>
  //               </Grid>
  //             </Grid>
  //             <Grid container xs={12} md={12} lg={12} xl={12} sx={{marginTop: '50px'}}>
  //               <Grid item xs={1} md={1} lg={1} xl={1}>
  //                 <MKBox
  //                   component="img"
  //                   src={maintenanceLogo} 
  //                   borderRadius="lg"    // shadow="md"
  //                   width="200%"
  //                   height="70%"
  //                   position="relative"
  //                   sx={{marginLeft: '-90px'}}
  //                   zIndex={1}
  //                 />
  //               </Grid>
  //               <Grid xs={11} md={11} lg={11} xl={11}>
  //                 <MKTypography variant="h3" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
  //                   Maintenance
  //                 </MKTypography>
  //                 <MKTypography variant="body2" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
  //                   Simplified design – repairs are less expensive and take less time.
  //                 </MKTypography>
  //               </Grid>
  //             </Grid>
  //             <Grid container xs={12} md={12} lg={12} xl={12} sx={{marginTop: '50px'}}>
  //               <Grid item xs={1} md={1} lg={1} xl={1}>
  //                 <MKBox
  //                   component="img"
  //                   src={environmentLogo} 
  //                   borderRadius="lg"    // shadow="md"
  //                   width="220%"
  //                   height="80%"
  //                   position="relative"
  //                   sx={{marginLeft: '-100px'}}
  //                   zIndex={1}
  //                 />
  //               </Grid>
  //               <Grid xs={11} md={11} lg={11} xl={11}>
  //                 <MKTypography variant="h3" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
  //                     Environment
  //                 </MKTypography>
  //                 <MKTypography variant="body2" color="black" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
  //                   Owners of electric or hybrid vehicles have a much lower cost to run. The fuel cost to run an EV is roughly one third the cost of a gasoline powered car.
  //                 </MKTypography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       </MKBox>
  //       <MKBox
  //           // height={620}
  //           height={{xs: 900, md: 1200, lg:980, xl: 620}}
  //           mt={20}
  //           padding={20}
  //           paddingTop={13}
  //           sx={{
  //             backgroundColor: 'rgba(16, 33 , 36, 1)',
  //             zIndex: '3',
  //             // paddingTop: '100px',
  //           }}
  //       >
  //         <FeaturedVehicles />
  //       </MKBox>
        
  //     <Places />
  //     <MKBox paddingLeft={38} mt={10} sx={{backgroundColor: 'rgba(13, 70, 255,1)', padding: '40px', height: '450px'}}>
  //       <MKTypography variant="h1" fontFamily="calibri" sx={{marginTop: '30px', marginLeft: '18%'}} color="white">
  //       OVER 10 YEARS WE SELL<br/>
  //       ELECTRIC CARS
  //       </MKTypography>
  //       <br/>
  //       <Grid container xs={12} md={12} lg={12} sx={{paddingLeft: "15%", paddingRight: "15%"}}>
  //         <Grid item xs={12} md={3} lg={3} >
  //           <MKTypography fontFamily="calibri" sx={{marginTop: '30px', marginLeft: '20%', fontSize: '55px', fontWeight: 'bold'}} color="white">
  //             15 514
  //           </MKTypography>
  //           <MKTypography variant="h4" fontFamily="calibri" sx={{marginLeft: '20%'}} color="white">
  //             CARS SOLD
  //           </MKTypography>
  //         </Grid>
  //         <Grid item xs={12} md={3} lg={3} >
  //           <MKTypography fontFamily="calibri" sx={{marginTop: '30px', marginLeft: '20%', fontSize: '55px', fontWeight: 'bold'}} color="white">
  //             1 201
  //           </MKTypography>
  //           <MKTypography variant="h4" fontFamily="calibri" sx={{marginLeft: '20%'}} color="white">
  //             CARS SOLD
  //           </MKTypography>
  //         </Grid>
  //         <Grid item xs={12} md={3} lg={3} >
  //           <MKTypography fontFamily="calibri" sx={{marginTop: '30px', marginLeft: '20%', fontSize: '55px', fontWeight: 'bold'}} color="white">
  //             2 150
  //           </MKTypography>
  //           <MKTypography variant="h4" fontFamily="calibri" sx={{marginLeft: '20%'}} color="white">
  //             CARS SOLD
  //           </MKTypography>
  //         </Grid>
  //         <Grid item xs={12} md={3} lg={3} >
  //           <MKTypography fontFamily="calibri" sx={{marginTop: '30px', marginLeft: '20%', fontSize: '55px', fontWeight: 'bold'}} color="white">
  //             3 800+
  //           </MKTypography>
  //           <MKTypography variant="h4" fontFamily="calibri" sx={{marginLeft: '20%'}} color="white">
  //             CARS SOLD
  //           </MKTypography>
  //         </Grid>
  //       </Grid>
  //     </MKBox>
  //     <MKBox
  //       component="img"
  //       src={shadingImage} 
  //       borderRadius="lg"    // shadow="md"
  //       width="100%"
  //       height="15%"
  //       // opacity="0.5"
  //       position="relative"
  //       zIndex={1}
  //     />
  //     <MKBox component="section" py={1} >
  //         <Container>
  //           <Grid
  //             container
  //             item
  //             xs={8}
  //             flexDirection="column"
  //             // alignItems="left"
  //             // mx="auto"
  //             mt={12}
  //             textAlign="left"
  //             mb={6}
  //           >
  //             <Grid container xs={12} md={12} lg={12} xl={12}>
  //               <Grid item xs={12} md={12} lg={12} xl={10}>
  //                 <MKTypography variant="h1" color="black" mb={1} sx={{fontFamily: 'aria'}}>
  //                   EV ACCESSORIES 
  //                 </MKTypography>
  //               </Grid>
  //               <Grid item xs={12} md={12} lg={12} xl={2}>
  //                 <MKBox sx={{display: 'flex', justifyContent: 'right'}}>
  //                   <MKButton variant="gradient" color="rgba(0,0,0,0)" sx={{marginRight: '-400px', marginTop: '-50px', borderRadius: '25px', border: '1px solid blue', color: 'blue'}}>
  //                     ONLINE SHOP
  //                   </MKButton>
  //                 </MKBox>
  //               </Grid>
              
  //             </Grid>
  //           </Grid>
  //           <Grid container spacing={3} sx={{ mt: 3 }}>
  //             <Grid item xs={12} md={4} lg={4}>
  //               <MKBox
  //                 component="img"
  //                 src={equip1} 
  //                 borderRadius="lg"    // shadow="md"
  //                 width="100%"
  //                 height="90%"
  //                 // opacity="0.5"
  //                 position="relative"
  //                 zIndex={1}
  //               />
  //               <MKTypography sx={{
  //                 marginLeft: '110px',
  //                 color: 'rgba(0,0,0,1)'
  //               }}>
  //                 Wallbox type 17.4kw
  //               </MKTypography>
  //               <MKTypography sx={{
  //                 marginLeft: '150px',
  //                 color: 'blue'
  //               }}
  //               >
  //                 $380.00
  //               </MKTypography>
  //             </Grid>
  //             <Grid item xs={12} md={4} lg={4} >
  //               <MKBox
  //                 component="img"
  //                 src={equip2} 
  //                 borderRadius="lg"    // shadow="md"
  //                 width="100%"
  //                 height="90%"
  //                 // opacity="0.5"
  //                 position="relative"
                  
  //                 zIndex={1}
  //               />
  //               <MKTypography sx={{
  //                 marginLeft: '110px',
  //                 color: 'rgba(0,0,0,1)'
  //               }}>
  //                 Zeta Type XL Racing Seat
  //               </MKTypography>
  //               <MKTypography sx={{
  //                 marginLeft: '150px',
  //                 color: 'blue'
  //               }}
  //               >
  //                 <del style={{color: 'rgba(0,0,255,0.4)'}}>$800.00</del> $735.99
  //               </MKTypography>
  //             </Grid>
  //             <Grid item xs={12} md={4} lg={4} >
  //               <MKBox
  //                 component="img"
  //                 src={equip3} 
  //                 borderRadius="lg"    // shadow="md"
  //                 width="100%"
  //                 height="90%"
  //                 // opacity="0.5"
  //                 position="relative"
  //                 zIndex={1}
  //               />
  //               <MKTypography sx={{
  //                 marginLeft: '110px',
  //                 color: 'rgba(0,0,0,1)'
  //               }}>
  //                 Wallbox type 17.4kw
  //               </MKTypography>
  //               <MKTypography sx={{
  //                 marginLeft: '150px',
  //                 color: 'blue'
  //               }}
  //               >
  //                 $3,465.00
  //               </MKTypography>
  //             </Grid>
  //           </Grid>
  //         </Container>
  //     </MKBox>
  //     {/* footer */}
  //     <Grid container spacing={3} sx={{ mt: 12 }}>
  //       <Grid item xs={12} md={8} lg={8} >
  //         <MKBox
  //           sx={({
  //             functions: { rgba, linearGradient },
  //             palette: { black },
  //             borders: { borderRadius },
  //           }) => ({
  //             backgroundImage: `${linearGradient(
  //               rgba(black.main, 0),
  //               rgba(black.main, 0)
  //             )}, url(${footerImage})`,
  //             backgroundSize: "cover",
  //             backgroundPosition: "center",
  //             borderRadius: 0,
  //             height: '1000px',
  //             width: '100%'
  //           })}
  //           display="flex"
  //           justifyContent="center"
  //         >
  //           <MKBox zIndex={1} sx={{backgroundColor: 'rgba(0,70,220,0.6)', marginTop: '90px' }} width={500} height={570} display="flex" justifyContent='center'>
  //             <MKBox>
  //               <MKTypography
  //                 sx={{ color: 'rgba(255, 255, 255, 1)', marginTop: '50px', fontFamily: 'cambria', fontSize: '30px', fontWeight: 'bold'}}
  //               >
  //                 NEED A SPECIAL DEAL? <br/> CONTACT US
  //               </MKTypography>
  //               <br/>
  //               <MKInput
  //                 variant="standard"
  //                 placeholder="eg. Michael"
  //                 label="Your Name"
  //                 InputLabelProps={{ shrink: true }}
  //                 fullWidth
  //                 sx={{marginBottom: '20px'}}
  //               />
                
  //               <MKInput
  //                 variant="standard"
  //                 placeholder="eg. Michael"
  //                 label="Your Email"
  //                 color='white'
  //                 InputLabelProps={{ shrink: true }}
  //                 fullWidth
  //                 sx={{marginBottom: '20px'}}
  //               />
  //               <br/>
  //               <MKInput
  //                 variant="standard"
  //                 placeholder="eg. Michael"
  //                 label="Subject"
  //                 color='white'
  //                 InputLabelProps={{ shrink: true }}
  //                 fullWidth
  //                 sx={{marginBottom: '20px'}}
  //               />
  //               <br/>
  //               <MKInput
  //                 variant="standard"
  //                 placeholder="eg. Michael"
  //                 label="Your message(optional)"
  //                 multiline
  //                 rows={4}
  //                 color='white'
  //                 InputLabelProps={{ shrink: true }}
  //                 fullWidth
  //                 sx={{marginBottom: '20px'}}
  //               />
  //               <MKButton
  //                 color="white"
  //                 variant="contained"
  //               >
  //                 Submit
  //               </MKButton>
  //             </MKBox>
  //             <br/>
  //           </MKBox>
  //         </MKBox>
  //       </Grid>
  //       <Grid item xs={12} md={4} lg={4} >
  //         <MKBox
  //           component="img"
  //           src={mapImage} 
  //           borderRadius="0"    // shadow="md"
  //           width="110%"
  //           height="500px"
  //           // opacity="0.5"
  //           sx={{
  //             marginLeft: '-25px'
  //           }}
  //           position="relative"
  //           zIndex={1}
  //         />
  //         <MKBox
  //           width="110%"
  //           height="400px"
  //           // opacity="0.5"
  //           sx={{
  //             backgroundColor: 'rgba(16, 33, 39, 1)',
  //             marginLeft: '-25px'
  //           }}
  //           position="relative"
  //           // zIndex={1}
  //         >
  //           <Grid container xs={12} md={12} lg={12} sx={{marginTop: '-10px', paddingTop: '100px', paddingLeft: '40px'}}>
  //               <Grid item xs={12} md={1} lg={1} >
  //                 <MKBox
  //                   component="img"
  //                   src={locationLogo} 
  //                   borderRadius="lg"    // shadow="md"
  //                   width="90%"
  //                   height="50%"
  //                   position="relative"
  //                   zIndex={1}
  //                 />
  //               </Grid>
  //               <Grid xs={12} md={11} lg={11} sx={{paddingRight: '15%', paddingLeft: '20px'}}>
  //                 <MKTypography variant="body2" color="white" sx={{fontFamily: 'aria'}}>
  //                   ADDRESS
  //                 </MKTypography>
  //                 <MKTypography variant="h5" color="white" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
  //                   1010 Avenue of the Moon <br/>New York, NY 10018 US.
  //                 </MKTypography>
  //                 <br/>
  //               </Grid>
                
  //               <Grid item xs={12} md={1} lg={1}>
  //                 <MKBox
  //                   component="img"
  //                   src={phoneLogo} 
  //                   borderRadius="lg"    // shadow="md"
  //                   width="90%"
  //                   height="60%"
  //                   position="relative"
  //                   zIndex={1}
  //                 />
  //               </Grid>
  //               <Grid xs={12} md={11} lg={11} sx={{paddingRight: '15%', paddingLeft: '20px'}}>
  //                 <MKTypography variant="body2" color="white" sx={{fontFamily: 'aria'}}>
  //                   PHONE
  //                 </MKTypography>
  //                 <MKTypography variant="h5" color="white" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
  //                   +1 628 123 4000
  //                 </MKTypography>
  //                 <br/>
  //               </Grid>
  //               <br/>
  //               <Grid item xs={12} md={1} lg={1} >
  //                 <MKBox
  //                   component="img"
  //                   src={messageLogo} 
  //                   borderRadius="lg"    // shadow="md"
  //                   width="90%"
  //                   height="60%"
  //                   position="relative"
  //                   zIndex={1}
  //                 />
  //               </Grid>
  //               <Grid xs={12} md={11} lg={11} sx={{paddingRight: '15%', paddingLeft: '20px'}}>
  //                 <MKTypography variant="body2" color="white" sx={{fontFamily: 'aria'}}>
  //                   EMAIL
  //                 </MKTypography>
  //                 <MKTypography variant="h5" color="white" sx={{paddingRight: '15%', fontFamily: 'aria'}}>
  //                   brandon@loggo.com
  //                 </MKTypography>
  //               </Grid>
  //             </Grid>
  //         </MKBox>
  //       </Grid>
  //       <MKBox
  //           width="100%"
  //           height="100px"
  //           // opacity="0.5"
  //           sx={{
  //             marginTop: '-100px',
  //             backgroundColor: 'rgba(16, 33, 39, 1)'
  //           }}
  //           position="relative"
  //           // zIndex={1}
  //         />
  //     </Grid>
  //     </>
  //   );
  // }

  // export default Rental;

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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { fontFamily } from "@mui/system";
import batteryLogo from "assets/images/logos/battery.png"
import flagLogo from 'assets/images/logos/flag.png'
import secondLogo from 'assets/images/logos/second.png';
import engineLogo from 'assets/images/logos/engine.png';
import MKButton from "components/MKButton";
// Material Kit 2 PRO React examples
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

function Header({ image, label, title, description, cards }) {
  return (
    <>
      <MKBox
        minHeight="105vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0),
              rgba(gradients.dark.state, 0)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            md={8}
            sm={10}
            alignItems="flex-start"
            flexDirection="column"
            sx={{ px: { xs: 1, lg: 0, xl: 0  }, mt: {xs: -36, lg: -36}, ml: {xs: 17, lg: 17}}}
          >
            <MKTypography color="white" fontSize={62}  sx={{fontWeight: 'bold', fontFamily: 'calibri'}}>
              {label}
            </MKTypography>
            <MKTypography
              // variant="h1"
              color="white"
              mb={1}
              fontSize={58}
              marginTop={-3}
              fontWeight="bold"
              // sx={{fontSize: '58px', marginTop: '-35px', fontWeight: 'bold'}}
            >
              {title}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              {description}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <MKBox
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingLeft: '15%',
          paddingRight: '15%'
        }}
      >
        <Grid container xs={12} md={12} lg={12} xl={12}
          sx={{ 
            width: '100%',
            height: '24%',
            marginTop: '-15%',
            padding: '3%',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'rgba(13, 70, 255, 1)'
          }}
        >
          <Grid item xs={12} md={12} lg={12} xl={6}>
            <Grid container xs={12} md={12} lg={12} xl={12}>
            <Grid item xs={12} md={4} lg={4} xl={4} >
              <MKBox
                width='100%'
                sx={{
                  border: '1px solid rgba(180, 180, 180, 0.5)',
                  borderLeft: 'none',
                  borderTop: 'none',
                  borderBottom: 'none',
                }}
              >
                <MKBox
                  component="img"
                  src={cards.brandImage} 
                  borderRadius="lg"    // shadow="md"
                  width="35%"
                  height="51%"
                  position="relative"
                  zIndex={1}
                />
                <MKTypography
                  color="white"
                  mt={-1}
                  sx={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                  }}
                >
                  {cards.description}
                </MKTypography>
                <MKTypography
                  color="white"
                  mt={-1}
                  ml={1}
                  sx={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    // marginTop: '-10px',
                    // marginLeft: '10px'
                  }}
                >
                  {cards.description1}
                </MKTypography>
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4} lg={4} xl={4}>
              <MKBox
                width={180}
                sx={{
                  border: '1px solid rgba(180, 180, 180, 0.5)',
                  borderLeft: 'none',
                  borderTop: 'none',
                  borderBottom: 'none',
                }}
              >
                <MKBox
                  component="img"
                  src={batteryLogo} 
                  borderRadius="lg"    // shadow="md"
                  width="40%"
                  height="70%"
                  zIndex={1}
                  sx={{
                    marginLeft: '15%',
                  }}
                />
                <MKTypography
                  color="white"
                  ml={4}
                  mt={-1}
                  sx={{
                    fontSize: '13px',
                    fontWeight: 'bold',
                    // marginLeft: '33px',
                    // marginTop: '-25px'
                    alignItems: 'center'
                  }}
                >
                  Battery Size
                </MKTypography>
                <MKTypography
                  color="white"
                  ml={4}
                  sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    // marginLeft: '33px'
                  }}
                >
                  {cards.batteryCapacity}Kwh
                </MKTypography>
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4} lg={4} xl={4}>
              <MKBox
                width={180}
                sx={{
                  border: '1px solid rgba(180, 180, 180, 0.5)',
                  borderLeft: 'none',
                  borderTop: 'none',
                  borderBottom: 'none',
                }}
              >
                <MKBox
                  component="img"
                  src={flagLogo} 
                  borderRadius="lg"    // shadow="md"
                  width="28%"
                  height="45%"
                  zIndex={1}
                  mt={1}
                  ml={3}
                  // sx={{
                  //   marginTop: '10px',
                  //   marginLeft: '15%',
                  // }}
                />
                <MKTypography
                  color="white"
                  ml={4}
                  sx={{
                    fontSize: '13px',
                    fontWeight: 'bold',
                  }}
                >
                  Electric Range
                </MKTypography>
                <MKTypography
                  color="white"
                  ml={4}
                  sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    // marginLeft: '33px'
                  }}
                >
                  {cards.mile}mi
                </MKTypography>
              </MKBox>
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={6}>
            <Grid container xs={12} md={12} lg={12} xl={12}>
              <Grid item xs={12} md={4} lg={4} xl={4}>
                <MKBox
                  width={180}
                  sx={{
                    border: '1px solid rgba(180, 180, 180, 0.5)',
                    borderLeft: 'none',
                    borderTop: 'none',
                    borderBottom: 'none'
                  }}
                >
                  <MKBox
                    component="img"
                    src={secondLogo} 
                    borderRadius="lg"    // shadow="md"
                    width="32%"
                    height="45%"
                    zIndex={1}
                    mt={1}
                    ml={3}
                    // sx={{
                    //   marginTop: '10px',
                    //   marginLeft: '15%',
                    // }}
                  />
                  <MKTypography
                    color="white"
                    mt={-1}
                    ml={4}
                    sx={{
                      fontSize: '13px',
                      fontWeight: 'bold',
                      // marginLeft: '33px',
                      // marginTop: '-5px'
                    }}
                  >
                    0-60 mph
                  </MKTypography>
                  <MKTypography
                    color="white"
                    ml={4}
                    sx={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      // marginLeft: '33px'
                    }}
                  >
                    {cards.second}s
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4}>
                <MKBox
                  width={180}
                  sx={{
                    border: '1px solid rgba(180, 180, 180, 0.5)',
                    borderLeft: 'none',
                    borderTop: 'none',
                    borderBottom: 'none'
                  }}
                >
                  <MKBox
                    component="img"
                    src={engineLogo} 
                    borderRadius="lg"    // shadow="md"
                    width="32%"
                    height="45%"
                    zIndex={1}
                    mt={1}
                    ml={2}
                    sx={{
                      marginTop: '10px',
                      marginLeft: '15%',
                    }}
                  />
                  <MKTypography
                    color="white"
                    ml={4}
                    mt={-1}
                    sx={{
                      fontSize: '13px',
                      fontWeight: 'bold',
                      // marginLeft: '33px',
                      // marginTop: '-5px'
                    }}
                  >
                    Engine
                  </MKTypography>
                  <MKTypography
                    color="white"
                    ml={4}
                    sx={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      // marginLeft: '33px'
                    }}
                  >
                    {cards.engine}hp
                  </MKTypography>
                </MKBox>
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4}>
                <MKBox>
                  <MKTypography
                    ml={9}
                    sx={{
                      fontSize: '22px',
                      fontWeight: 'bold',
                      color: 'rgb(255,255,255, 0.4)'
                    }}
                  >
                    <del>${cards.originPrice}</del>
                  </MKTypography>
                  <MKTypography
                    ml={9}
                    mt={-1}
                    sx={{
                      fontSize: '27px',
                      fontWeight: 'bold',
                      color: 'rgb(255,255,255, 1)'
                    }}
                  >
                    ${cards.currentPrice}
                  </MKTypography>
                  <MKButton
                    sx={{
                      marginLeft: '80px',
                    }}
                  >
                    more info
                  </MKButton>
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MKBox>

      {/* <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgrondColor: 'blue',
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          border: '7px solid rgba(0, 0, 0, 1)'
        }}
      >
        <Grid container spacing={2}>
          {cards.map(({ variant, color, icon, title: cardTitle, description: cardDescription }) => (
            <Grid key={icon} item xs={12} sm={6} lg={4}>
              <FilledInfoCard
                variant={variant}
                color={color}
                icon={icon}
                title={cardTitle}
                description={cardDescription}
                action={{
                  type: "internal",
                  route: "/pages/company/about-us",
                  label: "More about us",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Card> */}

    </>
  );
}

// Typechecking props for the Header
Header.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;

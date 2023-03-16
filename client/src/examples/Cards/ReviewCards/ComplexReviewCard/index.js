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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

function ComplexReviewCard({ image, color, title, review, author }) {
  return (
    <Grid container alignItems="center" spacing={3}>
      <Grid item xs={12} sx={{ ml: { xs: 0, lg: "auto" } }}>
        <MKBox p={{ xs: 0, lg: 1 }}>
          <MKBox
            component="img"
            src={image}
            alt={title}
            width="70%"
            height="200px"
            borderRadius="md"
            shadow="md"
            sx={{border: '1px solid black'}}
          />
        </MKBox>
      </Grid>

    </Grid>
  );
}

// Setting default props for the ComplexReviewCard
ComplexReviewCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the ComplexReviewCard
ComplexReviewCard.propTypes = {
  image: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "error",
    "warning",
    "dark",
    "light",
  ]),
  title: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  author: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default ComplexReviewCard;

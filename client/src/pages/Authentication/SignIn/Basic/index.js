/**
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import Icon from '@material-ui/core/Icon';
// Authentication pages components
import BasicLayout from "pages/Authentication/components/BasicLayout";
import auth from "api/auth/auth-helper";
// Images
import bgImage from "assets/image/motors.stylemixthemes.com/slider2.jpg";
import { signin } from "api/auth";
import Snackbar from "@mui/material/Snackbar";
// @mui icons
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";

const toastStyles = ({
  palette: { success },
  borders: { borderRadius },
  typography: { size },
  boxShadows: { lg },
}) => ({
  "& .MuiPaper-root": {
    backgroundColor: success.main,
    borderRadius: borderRadius.lg,
    fontSize: size.lg,
    fontWeight: 300,
    boxShadow: lg,
    mt: 8,
    px: 2,
    py: 0.5,
  },
});

function SignInBasic(props) {
const [values, setValues] = useState({
  email: '',
  password: '',
  error: '',
  // redirectToReferrer: false,
  // remember: false,
})
const [showModal, setShowMoadl] = useState(false);
const navigate = useNavigate();
const clickSubmit = () => {
  const user = {
    email: values.email || undefined,
    password: values.password || undefined,
  }
  
  signin(user).then((data) => {
    console.log(data);
    if (data.error) {
      setValues({ ...values, error: data.error})
    } else {
      auth.authenticate(data, () => {
        setValues({ ...values, error: ''});
        localStorage.setItem('auth', JSON.stringify({...data, auth: true }));
        setShowMoadl(!showModal);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
    }
  })
}

const handleChange = name => event => {
  setValues({ ...values, [name]: event.target.value })
}
const toggleSnackbar = () => setShowMoadl(!showModal);
const toastTemplate = (
  <MKBox display="flex" justifyContent="start" alignItems="center" color="white">
    You have successfully signed In !
    <CloseIcon
      fontSize="medium"
      sx={{ ml: 4, mr: -1, cursor: "pointer" }}
      onClick={toggleSnackbar}
    />
  </MKBox>
);

  // const {from} = props.location.state || {
  //   from: {
  //     pathname: '/'
  //   }
  // }

  // const {redirectToReferrer} = values
  // if (redirectToReferrer) {
  //     return (<Redirect to={from}/>)
  // }
 
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MKBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MKTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MKTypography>
            </Grid>
            <Grid item xs={2}>
              <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MKTypography>
            </Grid>
            <Grid item xs={2}>
              <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MKTypography>
            </Grid>
          </Grid>
        </MKBox>
        <MKBox pt={4} pb={3} px={3}>
          <MKBox component="form" role="form">
            <MKBox mb={2}>
              <label>Email</label>
              <input type="email" label="Email" fullWidth onChange={handleChange('email')} sx={{borderRadius: 0, outline: 'none', border: '1px solid rgba(0,0,0,0)', padding: '1px'}}/>
            </MKBox>
            <MKBox mb={2}>
            <label>Password</label>
              <input type="password" label="Password" fullWidth onChange={handleChange('password')}/>
            </MKBox>
            <MKBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={values.remember} onChange={handleChange('remember')} />
              <MKTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleChange('remember')}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MKTypography>
            </MKBox>
            {
              values.error && (<MKTypography component="p" color="error">
                <Icon color="error" >error</Icon>
                {values.error}
              </MKTypography>)
            }
            <MKBox mt={4} mb={1}>
              <MKButton variant="gradient" color="info" fullWidth onClick={clickSubmit}>
                sign in
              </MKButton>
            </MKBox>
            <MKBox mt={3} mb={1} textAlign="center">
              <MKTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MKTypography
                  component={Link}
                  to="/authentication/sign-up/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MKTypography>
              </MKTypography>
            </MKBox>
          </MKBox>
        </MKBox>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={showModal}
          autoHideDuration={3000}
          onClose={toggleSnackbar}
          message={toastTemplate}
          // action={toggleSnackbar}
          sx={toastStyles}
        />
      </Card>
    </BasicLayout>
  );
}

export default SignInBasic;

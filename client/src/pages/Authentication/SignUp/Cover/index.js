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

// react-router-dom components
import { Link } from "react-router-dom";
import { useState } from "react";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { create } from "api/user";
import { signin } from "api/auth";
import auth from "api/auth/auth-helper";
// Authentication layout components
import BasicLayout from "pages/Authentication/components/BasicLayout";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import { useNavigate } from "react-router-dom";
// Images
import bgImage from "assets/image/car2.jpg";

function Cover() {
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
    open: false,
    error: "",
    policy: true,
  });
  const navigate = useNavigate();
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const clickSubmit = () => {
    if(values.policy){
      const user = {
        name: values.name || undefined,
        email: values.email || undefined,
        password: values.password || undefined,
      };
      create(user).then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          if(data.message === "This email already used."){
            setValues({ ...values, error: data.message });
          }else{
            setValues({ ...values, error: "", open: true });
          }
        }
      });
    }
    else{
      setValues({ ...values, error: 'You must follow our policy!' });
    }
  };

  const onClickOKBtn = () => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined,
    }
    signin(user).then((data) => {
      auth.authenticate(data, () => {
        localStorage.setItem('auth', JSON.stringify({...data, auth: true }));
        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
    })
  }

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MKBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Edit your profile
          </MKTypography>
          <MKTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to update
          </MKTypography>
        </MKBox>
        <MKBox p={3}>
          <MKBox component="form" role="form">
            <MKBox mb={2}>
              <MKInput type="text" label="Name" fullWidth onChange={handleChange("name")} outline={false}/>
            </MKBox>
            <MKBox mb={2}>
              <MKInput type="email" label="Email" fullWidth onChange={handleChange("email")}/>
            </MKBox>
            <MKBox mb={2}>
              <MKInput type="password" label="Password" fullWidth onChange={handleChange("password")}/>
            </MKBox>
            {values.error && (
              <MKTypography component="p" color="info">
                <Icon color="error">
                  error
                </Icon>
                {values.error}
              </MKTypography>
            )}
            <MKBox display="flex" alignItems="center" ml={-1}>
              <Checkbox onChange={handleChange("policy")}/>
              <MKTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MKTypography>
              <MKTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MKTypography>
            </MKBox>
            <MKBox mt={3} mb={1}>
              <MKButton variant="gradient" color="info" fullWidth onClick={clickSubmit}>
                sign up
              </MKButton>
            </MKBox>
            <MKBox mt={3} mb={1} textAlign="center">
              <MKTypography variant="button" color="text">
                Already have an account?{" "}
                <MKTypography
                  component={Link}
                  to="/authentication/sign-in/basic"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MKTypography>
              </MKTypography>
            </MKBox>
          </MKBox>
        </MKBox>
      </Card>
      <Dialog open={values.open}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New account successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MKButton color="primary" autoFocus="autoFocus" variant="contained" onClick={onClickOKBtn}>
            Ok
          </MKButton>
        </DialogActions>
      </Dialog>
    </BasicLayout>
  );
}

export default Cover;

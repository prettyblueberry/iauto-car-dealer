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
import { useEffect, useState } from "react";
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
import { update, read } from "api/user";
// Images
import bgImage from "assets/image/car2.jpg";

function Profile() {
  const [values, setValues] = useState({
    name: "",
    password: "",
    open: false,
    error: "",
});
const jwt = auth.isAuthenticated()
useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    read({
      userId: JSON.parse(localStorage.getItem('auth')).user._id
    }, {t: jwt.token}, signal).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true)
      } else {
        console.log(data.name);
        setValues({...values, name: data.name})
      }
    })
}, [])
const navigate = useNavigate();

const handleChange = (name) => (event) => {
    console.log()
    setValues({ ...values, [name]: event.target.value });
};
    
useEffect(() => {
    jQuery("#wrapper").css("min-height", "");
}, [])

const clickSubmit = () => {
    const user = {
    name: values.name || undefined,
    password: values.password || undefined,
    };
    console.log(user);
    update({userId: JSON.parse(localStorage.getItem('auth')).user._id
    }, {t: jwt.token}, user).then((data) => {
        if (data && data.error) {
            setRedirectToSignin(true)
        } else {
          console.log(data);
          setValues({...values, name: data.name})
          setValues({...values, open: true})
        }
    })
};

const onClickOKBtn = () => {
    let userData = JSON.parse(localStorage.getItem('auth'));
    userData.user.name = values.name;
    localStorage.setItem('auth', JSON.stringify(userData));
    setTimeout(() => {
        navigate('/');
    }, 1000);
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
              <MKInput type="text" label="Name" fullWidth onChange={handleChange("name")} value={values.name}/>
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
            <MKBox mt={3} mb={1}>
              <MKButton variant="gradient" color="info" fullWidth onClick={clickSubmit}>
                Update Profile
              </MKButton>
            </MKBox>
          </MKBox>
        </MKBox>
      </Card>
      <Dialog open={values.open}>
        <DialogTitle>Account Updated</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your account updated.
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

export default Profile;

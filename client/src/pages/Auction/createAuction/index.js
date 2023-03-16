import { useEffect, useState, useRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import footerRoutes from "footer.routes";
// Material Kit 2 PRO React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import MKTypography from "components/MKTypography";
import bgImage from "assets/image/motors.stylemixthemes.com/slider2.jpg";
import AuctionCountdown from "components/VehicleCards/VehicleAuctionCard/AuctionCountdown";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import { makeStyles } from '@material-ui/core/styles'
import auth from "api/auth/auth-helper";
import Icon from '@material-ui/core/Icon'
// import FileUpload from '@material-ui/icons/AddPhotoAlternate';
import { FileUpload, ForkRight } from "@mui/icons-material";
import TextField from '@material-ui/core/TextField'
import Snackbar from "@mui/material/Snackbar";
// @mui icons
import CloseIcon from "@mui/icons-material/Close";
import {create} from 'api/auction';
// @mui icons

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing(2),
      color: theme.palette.openTitle,
      fontSize: '1em'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 600,
      color: 'lightBlue'
    },
    submit: {
      marginLeft: '85%',
      marginBottom: theme.spacing(2)
    },
    input: {
      display: 'none'
    },
    filename:{
      marginLeft:'10px',
      fontSize: '16px',
      color: 'lightBlue'
    },
    imageDescription:{
        fontSize: '14px',
        color: 'lightBlue'
    }
  }))

  const toastStyles = ({
    palette: { info },
    borders: { borderRadius },
    typography: { size },
    boxShadows: { lg },
  }) => ({
    "& .MuiPaper-root": {
      backgroundColor: info.main,
      borderRadius: borderRadius.lg,
      fontSize: size.sm,
      fontWeight: 400,
      boxShadow: lg,
      px: 2,
      py: 0.5,
    },
  });
function CreateAuction() {
    const navigate = useNavigate();
    const classes = useStyles()
    const currentDate = new Date()
    const getDateString = (date) => {
        let year = date.getFullYear()
        let day = date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate()
        let month = date.getMonth().toString().length === 1 ? '0' + (date.getMonth()+1) : date.getMonth() + 1
        let hours = date.getHours().toString().length === 1 ? '0' + date.getHours() : date.getHours()
        let minutes = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes()
        let dateString = `${year}-${month}-${day}T${hours}:${minutes}`
        return dateString
    }
    const defaultStartTime = getDateString(currentDate)
    const defaultEndTime = getDateString(new Date(currentDate.setHours(currentDate.getHours()+1)))
    const jwt = auth.isAuthenticated()
    
    const [values, setValues] = useState({
        itemName: '',
        description: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        bidStart: defaultStartTime,
        bidEnd: defaultEndTime,
        startingBid: 0,
        error: ''
    });
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        jQuery("#wrapper").css("min-height", "");
        if(localStorage.getItem('auth') === null)navigate('/authentication/sign-in/basic');
     },[]);

    const handleChange = name => event => {
        let value;
        if (name.indexOf('image') !== -1){
            switch (name) {
                case 'image1':
                    value = event.target.files[0];
                    break;
                case 'image2':
                    value = event.target.files[0];
                    break;
                case 'image3':
                    value = event.target.files[0];
                    break;
                case 'image4':
                    value = event.target.files[0];
                    break;
                default:
                    break;
            }
        }else{
            value = event.target.value;
        }
        setValues({...values, [name]: value })
    }

    const clickSubmit = () => {
        console.log(values);
        if(values.bidEnd < values.bidStart){
            setValues({...values, error: "Auction cannot end before it starts"})
        }
        else{
            let auctionData = new FormData()
            values.itemName && auctionData.append('itemName', values.itemName)
            values.description && auctionData.append('description', values.description)
            values.image1 && auctionData.append('image1', values.image1)
            values.image2 && auctionData.append('image2', values.image2)
            values.image3 && auctionData.append('image3', values.image3)
            values.image4 && auctionData.append('image4', values.image4)
            values.startingBid && auctionData.append('startingBid', values.startingBid)
            values.bidStart && auctionData.append('bidStart', values.bidStart)
            values.bidEnd && auctionData.append('bidEnd', values.bidEnd)
            create({
                userId: jwt.user._id
                }, {
                    t: jwt.token
                }, auctionData).then((data) => {
                if (data.error) {
                    setValues({...values, error: data.error})
                } else {
                    console.log("create Auction: ", data)
                    setValues({...values, error: ''})
                    setRedirect(true);
                }
            })
        }
    }

    if (redirect) {
        setTimeout(() => {
            navigate('/');
        }, 1500);
    }
    const toggleSnackbar = () => setRedirect(!redirect);
    const brand = <span style={{ fontSize: "2.5rem", color: "#9595f7" }}>iAuto</span>;
    const toastTemplate = (
        <MKBox display="flex" justifyContent="space-between" alignItems="center" color="white">
          Auction created successfully!
          <CloseIcon
            fontSize="medium"
            sx={{ ml: 4, mr: -1, cursor: "pointer" }}
            onClick={toggleSnackbar}
          />
        </MKBox>
    );
  return (
    <>
    {/* <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/",
          label: "sign in",
          color: "info",
        }}
        transparent
        light
        brand={brand}
      /> */}
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
                rgba(gradients.dark.main, 0.5),
                rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
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
            lg={8}
            justifyContent="center"
            sx={{ mx: "auto", textAlign: "center" }}
          />
        </Container>
      </MKBox>
        <Card
            sx={{
                p: 2,
                mx: { xs: 5, lg: 5 },
                mt: -100,
                mb: 4,
                backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: ({ boxShadows: { xxl } }) => xxl,
                overflow: "hidden",
                zIndex: 2,
                // height: '80px',
                // widht: '25px'
            }}
        >
            <MKTypography 
                color="dark"
                fontWeight='bold'
                variant="h2"
                px={3}
                textGradient
            >
                Create New Auction
            </MKTypography>
        </Card>
        <Card
            sx={{
                p: 2,
                mx: { xs: 5, lg: 5 },
                mt: -5,
                mb: 4,
                backgroundColor: ({ palette: { black }, functions: { rgba } }) => rgba(black.main, 0.8),
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: ({ boxShadows: { xxl } }) => xxl,
                overflow: "hidden",
            }}
        >
            <CardContent>
            <MKTypography type="headline" component="h2" className={classes.title}>
                Imgaes
            </MKTypography>
            <br/>
            <Grid container item xs={12} md={12} lg={12}>
                <Grid item xs={12} md={3} lg={3}>
                    <MKTypography className={classes.imageDescription}>
                        This image should have high resolution over 600 X 800.
                    </MKTypography>
                    <MKInput accept="image/*" onChange={handleChange('image1')} className={classes.input} id="icon-button-file-1" type="file"/>
                    <label htmlFor="icon-button-file-1">
                        <MKButton variant="contained" color="secondary" component="span">
                            Upload Image
                            <FileUpload/>
                        </MKButton>
                    </label> 
                    <span className={classes.filename}>{values.image1 ? values.image1.name : ''}</span><br/>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <MKTypography className={classes.imageDescription}>
                        This image should have high resolution over 300 X 400.
                    </MKTypography>
                    <MKInput accept="image/*" onChange={handleChange('image2')} className={classes.input} id="icon-button-file-2" type="file"/>
                    <label htmlFor="icon-button-file-2">
                        <MKButton variant="contained" color="secondary" component="span">
                            Upload Image
                            <FileUpload/>
                        </MKButton>
                    </label> 
                    <span className={classes.filename}>{values.image2 ? values.image2.name : ''}</span><br/>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <MKTypography className={classes.imageDescription}>
                        This image should have high resolution over 300 X 400.
                    </MKTypography>
                    <MKInput accept="image/*" onChange={handleChange('image3')} className={classes.input} id="icon-button-file-3" type="file"/>
                    <label htmlFor="icon-button-file-3">
                        <MKButton variant="contained" color="secondary" component="span">
                            Upload Image
                            <FileUpload/>
                        </MKButton>
                    </label> 
                    <span className={classes.filename}>{values.image3 ? values.image3.name : ''}</span><br/>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <MKTypography className={classes.imageDescription}>
                        This image should have high resolution over 300 X 400.
                    </MKTypography>
                    <MKInput accept="image/*" onChange={handleChange('image4')} className={classes.input} id="icon-button-file-4" type="file"/>
                    <label htmlFor="icon-button-file-4">
                        <MKButton variant="contained" color="secondary" component="span">
                            Upload Image
                            <FileUpload/>
                        </MKButton>
                    </label> 
                    <span className={classes.filename}>{values.image4 ? values.image4.name : ''}</span><br/>
                </Grid>
            </Grid>
            <br/>
            <Grid container item xs={12} md={12} lg={12}>
                <Grid item xs={6} md={6} lg={6} sx={{padding: '10px'}}>
                    <Card
                        sx={{
                            width: '100px',
                            zIndex: 3,
                            p: 2,
                            ml: 1,
                            backgroundColor: 'rgb(48, 29, 50)',
                            backdropFilter: "saturate(200%) blur(30px)",
                            boxShadow: ({ boxShadows: { xxl } }) => xxl,
                            overflow: "hidden",
                        }}
                    >
                        <MKTypography 
                            color="info"
                            fontWeight='bold'
                            variant="h5"
                            textGradient
                        >
                            Details
                        </MKTypography>
                    </Card>
                    <Card
                        sx={{
                            mt: -3,
                            backdropFilter: "saturate(200%) blur(30px)",
                            boxShadow: ({ boxShadows: { xxl } }) => xxl,
                            overflow: "hidden",
                            p: 4,
                            pb: 8
                        }}
                    >
                        <TextField id="name" label="Car Name" className={classes.textField} value={values.itemName} onChange={handleChange('itemName')} margin="normal"/><br/>
                        <TextField
                            id="multiline-flexible"
                            label="Description"
                            multiline
                            minRows={6}
                            value={values.description}
                            onChange={handleChange('description')}
                            className={classes.textField}
                            margin="normal"
                        /><br/>
                    </Card>
                </Grid>
                <Grid item xs={6} md={6} lg={6} sx={{padding: '10px'}}>
                    <Card
                        sx={{
                            width: '180px',
                            zIndex: 3,
                            p: 2,
                            ml: 1,
                            backgroundColor: 'rgb(48, 29, 50)',
                            backdropFilter: "saturate(200%) blur(30px)",
                            boxShadow: ({ boxShadows: { xxl } }) => xxl,
                            overflow: "hidden",
                        }}
                    >
                        <MKTypography 
                            color="info"
                            fontWeight='bold'
                            variant="h5"
                            textGradient
                        >
                            Price & Timeline
                        </MKTypography>
                    </Card>
                    <Card
                        sx={{
                            mt: -3,
                            backdropFilter: "saturate(200%) blur(30px)",
                            boxShadow: ({ boxShadows: { xxl } }) => xxl,
                            overflow: "hidden",
                            p: 4,
                            pb: 8
                        }}
                    >
                        <TextField id="startingBid" label="Starting Bid ($)" className={classes.textField} value={values.startingBid} onChange={handleChange('startingBid')} margin="normal"/><br/>
                        <br/>
                        <TextField
                            id="datetime-local"
                            label="Auction Start Time"
                            type="datetime-local"
                            defaultValue={defaultStartTime}
                            className={classes.textField}
                            onChange={handleChange('bidStart')}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        /><br/>
                        <br/>
                        <TextField
                            id="datetime-local"
                            label="Auction End Time"
                            type="datetime-local"
                            defaultValue={defaultEndTime}
                            className={classes.textField}
                            onChange={handleChange('bidEnd')}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        {
                            values.error && (<Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>error</Icon>
                            {values.error}</Typography>)
                        }
                    </Card>
                </Grid>
            </Grid>
            
            </CardContent>
            <CardActions >
                <MKButton color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</MKButton>
                <Link to='/'  className={classes.submit}><MKButton color="secondary" variant="contained">Cancel</MKButton></Link>
            </CardActions>
        </Card>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={redirect}
          autoHideDuration={1000}
          onClose={toggleSnackbar}
          message={toastTemplate}
        //   action={toggleSnackbar}
          sx={toastStyles}
        />
    </>
  );
}

export default CreateAuction;
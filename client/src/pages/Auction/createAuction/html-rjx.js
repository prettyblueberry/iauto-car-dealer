import { useEffect, useState, useRef } from "react";
import MKTypography from "components/MKTypography";
import MultiImageUpload from './component/multidropdown';
import TextField from '@mui/material/TextField';
import { InputLabel } from "@mui/material";
import { Select, MenuItem } from "@material-ui/core";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import {create} from 'api/auction';
import auth from "api/auth/auth-helper";
import { useNavigate, useLocation } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

const customStyle = {
    title: {
        fontSize: '53px',
        fontFamily: 'aria',
        fonwWeight: 'bold',
        marginTop: '5%',
        marginLeft: '25%',
    },
    sideNav: {
        width: '150%',
        marginLeft: '-40%'
    },
    rightNav: {
        width: '60%',
        marginLeft: '-3%',
        main: {
            width: '100%',
            padding: '10px',
            paddingTop: '10px',
            paddingBottom: '5px'
        }
    },
    mainNavButton: {
        boxShadow: "5px 0 30px rgba(1, 41, 112, 0)",
        "&:hover": {
            // opacity: 0,
            backgroundColor: 'red'
        },
    },
    rightPriceButton: {
        boxShadow: "5px 0 30px rgba(1, 41, 112, 0)"
    },
    rightSideInput: {
        textAlign: 'center',
        backgroundColor: 'rgba(231, 239, 239, 1)',
    }
}
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

function HtmlRjx(){
    const [imageFiles, setImageFiles] = useState({});
    const [redirect, setRedirect] = useState(false);
    const [values, setValues] = useState({
        itemName: '',
        reg: '',
        modelYear: '',
        mileage: 0,
        fuel: '',
        wheelDrive: '',
        usedImport: '',
        vin: '',
        volume: '',
        power: '',
        transmission: '',
        color: '',
        eu: '',
        equipmentList: '',
        comment: '',
        startingBid: 0,
        bidStart: '',
        bidEnd: '',
        error: ''
    });
    const jwt = auth.isAuthenticated()
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if(localStorage.getItem('auth') === null){
            navigate('/authentication/sign-in/basic');
        } 
           
        jQuery("#wrapper").css("min-height", "");
     },[]);

    
    
    const handleChange = name => event => {
        console.log(event.target.value);
        let value = event.target.value;
        setValues({...values, [name]: value })
    }
    const onChangeImageFiles = (data) => {
        setImageFiles(data);
        console.log(data);
    }
    const onClickSubmit = () => {
        console.log(values, imageFiles);
        let description = {
            reg: values.reg,
            modelYear: values.modelYear,
            mileage: values.mileage,
            fuel: values.fuel,
            wheelDrive: values.wheelDrive,
            usedImport: values.usedImport,
            vin: values.vin,
            volume: values.volume,
            power: values.power,
            transmission: values.transmission,
            color: values.color,
            eu: values.eu,
            equipmentList: values.equipmentList,
            comment: values.comment,
        }
        let auctionData = new FormData();
        values.itemName && auctionData.append('itemName', values.itemName);
        auctionData.append('description', JSON.stringify(description));
        values.startingBid && auctionData.append('startingBid', values.startingBid);
        values.bidStart && auctionData.append('bidStart', values.bidStart);
        values.bidEnd && auctionData.append('bidEnd', values.bidEnd);
        Object.keys(imageFiles).forEach(key => {
            auctionData.append('image' + key, imageFiles[key]);
        });
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
        <div style={{height: '120px', backgroundColor: 'rgba(16, 33, 39, 1)'}}></div>
        <MKTypography textGradient color="primary" sx={customStyle.title}> Create Auction</MKTypography>
        <div id="main">
            <div className="container">
                <div className="dashboard-wrapper gdpr-active">
                    {/*here, I will take the navigation bar*/}
                    <div className="dashboard-wrapper">
                        <main className="dashboard-main container is-big">
                            {/* main content */}
                            <section className="dashboard-content">
                                <div className="c-car-details">
                                    {/* basic content */}
                                    <div className="c-car-details__left">
                                        <MultiImageUpload setImageFiles={onChangeImageFiles}/>
                                    </div>
                                    {/* bidding panel */}
                                    <div className="c-car-details__right">
                                    <div className="c-car-detail__module u-no-border-top">
                                            <div className="u-hidden@from-tablet" />
                                            <div className="c-car-detail__module--section">
                                                <h2 className="u-h2 u-margin-bottom">
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    label="Car Name"
                                                    onChange={handleChange('itemName')}
                                                    multiline
                                                    rows={4}
                                                    style={{width: '100%'}}
                                                />
                                                </h2>
                                                <div className="u-margin-bottom">
                                                    <button type="button" data-cy="see-report" className="c-btn c-btn--color-primary c-btn--full c-btn--medium">
                                                        <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>See test report</font></font>
                                                    </button>
                                                </div>
                                                <div className="c-car-detail__module--content">
                                                    <div className="o-level">
                                                        <div className="u-1/2 u-margin-right-tiny">
                                                            <ul className="c-car-detail__equipment-list">
                                                                <li>
                                                                    <TextField
                                                                        id="outlined-multiline-flexible"
                                                                        label="Reg.no:"
                                                                        onChange={handleChange('reg')}
                                                                        multiline
                                                                        maxRows={4}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <TextField
                                                                        id="outlined-multiline-flexible"
                                                                        label="Model year:"
                                                                        onChange={handleChange('modelYear')}
                                                                        multiline
                                                                        maxRows={4}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <TextField
                                                                        id="outlined-multiline-flexible"
                                                                        label="Mileage:"
                                                                        onChange={handleChange('mileage')}
                                                                        multiline
                                                                        maxRows={4}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <InputLabel id="demo-simple-select-label">Fuel</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-label"
                                                                        id="demo-simple-select"
                                                                        label="Fuel"
                                                                        style={{width: '100%'}}
                                                                        onChange={handleChange('fuel')}
                                                                        // onChange={handleChange}
                                                                    >
                                                                        <MenuItem value={'Diesel'}>Diesel</MenuItem>
                                                                        <MenuItem value={'Gasolina'}>Gasolina</MenuItem>
                                                                    </Select>
                                                                </li>
                                                                <li>
                                                                    <TextField
                                                                        id="outlined-multiline-flexible"
                                                                        label="Wheel drive:"
                                                                        multiline
                                                                        onChange={handleChange('wheelDrive')}
                                                                        maxRows={4}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <InputLabel id="demo-simple-select-label">Used imported</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-label"
                                                                        id="demo-simple-select"
                                                                        label="Used imported"
                                                                        onChange={handleChange('usedImport')}
                                                                        style={{width: '100%'}}
                                                                        // onChange={handleChange}
                                                                    >
                                                                        <MenuItem value={10}>Yes</MenuItem>
                                                                        <MenuItem value={20}>No</MenuItem>
                                                                    </Select>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="u-1/2">
                                                            <ul className="c-car-detail__equipment-list">
                                                                <li>
                                                                    <TextField
                                                                        id="outlined-multiline-flexible"
                                                                        label="VIN:"
                                                                        multiline
                                                                        onChange={handleChange('vin')}
                                                                        maxRows={4}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <TextField
                                                                        id="outlined-multiline-flexible"
                                                                        label="Volume:"
                                                                        multiline
                                                                        onChange={handleChange('volume')}
                                                                        maxRows={4}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <TextField
                                                                        id="outlined-multiline-flexible"
                                                                        label="Power:(hp)"
                                                                        multiline
                                                                        onChange={handleChange('power')}
                                                                        maxRows={4}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <InputLabel id="demo-simple-select-label">Transmission</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-label"
                                                                        id="demo-simple-select"
                                                                        label="Transmission"
                                                                        style={{width: '100%'}}
                                                                        onChange={handleChange('transmission')}
                                                                        // onChange={handleChange}
                                                                    >
                                                                        <MenuItem value={10}>Manual</MenuItem>
                                                                        <MenuItem value={20}>Automatic</MenuItem>
                                                                    </Select>
                                                                </li>
                                                                <li>
                                                                    <TextField
                                                                        id="outlined-multiline-flexible"
                                                                        label="Color"
                                                                        multiline
                                                                        onChange={handleChange('color')}
                                                                        maxRows={4}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <TextField
                                                                        id="outlined-multiline-flexible"
                                                                        type="datetime-local"
                                                                        label="Next EU Control"
                                                                        multiline
                                                                        onChange={handleChange('eu')}
                                                                        maxRows={4}
                                                                    />
                                                                </li>
                                                            </ul>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="c-car-detail__module--content">
                                                    <h3 className="u-h4 u-text-bolder u-margin-bottom">
                                                        <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Delivery</font></font>
                                                    </h3>
                                                    <div className="c-btn--img-wrapper">
                                                        <button type="button" data-cy="inspection-center-website" className="o-media c-btn c-btn--color-white c-btn--full" style={{backgroundColor: 'rgba(170, 170, 170, 1)'}}>
                                                            <img data-savepage-currentsrc="/assets-bid/icons/icon-viking.png" data-savepage-src="/assets-bid/icons/icon-viking.png" src="data:image/png;base64,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" className="o-media__image" alt="Inspection center" /><span className="u-h6 o-media__body" title="Kristiansand Viking Control" data-cy="inspection-center-name"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Kristiansand Viking Control</font></font></span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="c-car-detail__module--content">
                                                    <h3 className="u-h4 u-text-bolder u-margin-bottom">
                                                        <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Documentation and links</font></font>
                                                    </h3>
                                                    <div className="c-btn--img-wrapper">
                                                        <button type="button" className="o-media c-btn c-btn--color-white c-btn--full" style={{backgroundColor: 'rgba(170, 170, 170, 1)'}}>
                                                            <img data-savepage-currentsrc="/assets-bid/icons/icon-finn.png" data-savepage-src="/assets-bid/icons/icon-finn.png" src="data:image/png;base64,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" className="o-media__image" alt="See similar cars at FINN.no" /><span className="u-h6 o-media__body" title="See similar cars at FINN.no"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>See similar cars at FINN.no</font></font></span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="c-car-detail__module--content">
                                                    <div className="c-car-detail__notes-wrapper u-hidden@from-tablet">
                                                        <button type="button" className="c-btn c-btn--link-styling u-margin-bottom">
                                                            <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Show more information</font></font>
                                                        </button>
                                                    </div>
                                                    <div className="c-car-detail__notes-wrapper u-hidden@until-tablet">
                                                        <div data-testid="wrapper">
                                                            <h3>
                                                                <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Equipment list&nbsp;</font></font>
                                                            </h3>
                                                            <TextField
                                                                id="outlined-multiline-static"
                                                                label="Equipment list"
                                                                multiline
                                                                rows={10}
                                                                onChange={handleChange('equipmentList')}
                                                                style={{width: '100%'}}
                                                            />      
                                                            <h3>
                                                                <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Comment from the car's current owner&nbsp;</font></font>
                                                            </h3>
                                                            <TextField
                                                                id="outlined-multiline-static"
                                                                label="Comment"
                                                                multiline
                                                                rows={10}
                                                                onChange={handleChange('comment')}
                                                                style={{width: '100%'}}
                                                            /> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="c-car-detail__module is-relative">
                                            <div className="u-hidden@until-tablet" />
                                            <div className="is-relative">
                                                <div>
                                                    <span>Bid Info:</span>
                                                    <div className="o-level o-level--spaced">
                                                        <div className="o-level__item">
                                                            <div className="c-stat">
                                                                <div className="c-stat__label">
                                                                    <font style={{verticalAlign: 'inherit'}}>
                                                                        <font style={{verticalAlign: 'inherit'}}>Starting Price</font>
                                                                    </font>
                                                                </div>
                                                                <div className="c-stat__value c-stat__value--large">
                                                                    <TextField
                                                                        id="outlined-multiline-flexible"
                                                                        type="datetime-local"
                                                                        label="Price"
                                                                        multiline
                                                                        onChange={handleChange('startingBid')}
                                                                        maxRows={4}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="o-level__item u-1/2 u-text-right">
                                                            <div className="c-stat">
                                                                <div className="c-stat__value">
                                                                    <div className="auction-time-wrapper" data-cy="timer-static">
                                                                        Starting Date: 
                                                                        <input
                                                                            id="outlined-multiline-flexible"
                                                                            type="date"
                                                                            label="starting Date"
                                                                            onChange={handleChange('bidStart')}
                                                                        />
                                                                    </div>
                                                                    <div className="auction-time-wrapper" data-cy="timer-static">
                                                                        Ending Date: 
                                                                        <input
                                                                            id="outlined-multiline-flexible"
                                                                            type="date"
                                                                            label="Ending Date"
                                                                            onChange={handleChange('bidEnd')}
                                                                        />
                                                                    </div>
                                                                    <div className="u-margin-bottom">
                                                                        <button type="button" data-cy="see-report" style={{width: '100%', marginTop: '20px'}} className="c-btn c-btn--color-primary c-btn--full c-btn--medium" onClick={onClickSubmit}>
                                                                            <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Submit</font></font>
                                                                        </button>
                                                                    </div>
                                                                    <Snackbar
                                                                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                                                                        open={redirect}
                                                                        autoHideDuration={1000}
                                                                        onClose={toggleSnackbar}
                                                                        message={toastTemplate}
                                                                        //   action={toggleSnackbar}
                                                                        sx={toastStyles}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="c-divider c-divider--horizontal" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </div>
        </>     
    );
}

export default HtmlRjx;
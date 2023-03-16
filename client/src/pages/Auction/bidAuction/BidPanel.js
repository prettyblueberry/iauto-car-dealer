import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, Grid } from '@mui/material';
import MKInput from "components/MKInput";
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


export default function BidPanel(props) {
    const { enableButton, defaultPrice, handleSetPrice, onClickPlaceBid, onClickPlaceBidAuto,  setAutomaticFunc } = props; 
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [defaultValue, setDefaultValue] = React.useState(defaultPrice);
    const [defaultValueAuto, setDefaultValueAuto] = React.useState(defaultPrice);
    const [onStart, setOnStart] = React.useState(false);
    const [onStartAuto, setOnStartAuto] = React.useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const onClickStart = () => {
        setOnStart(true);
        setDefaultValue(defaultPrice);
    }
    const onClickStartAuto = () => {
        setOnStartAuto(!onStartAuto);
        setDefaultValueAuto(defaultPrice);
        setAutomaticFunc();
    }
    const onClickNumberBtn1 = () => {
        setDefaultValue(defaultPrice + 1000);
        // handleSetPrice(defaultValue + 1000);
    }
    const onClickNumberBtn1Auto = () => {
        setDefaultValueAuto(defaultValueAuto + 1000);
        // handleSetPrice(defaultValue + 1000);
    }
    const onClickNumberBtn2 = () => {
        setDefaultValue(defaultPrice + 5000);
        // handleSetPrice(defaultValue + 5000);
    }
    const onClickNumberBtn2Auto = () => {
        setDefaultValueAuto(defaultValueAuto + 5000);
        // handleSetPrice(defaultValue + 5000);
    }
    const onClickNumberBtn3 = () => {
        setDefaultValue(defaultPrice + 10000);
        // handleSetPrice(defaultValue + 10000);
    }
    const onClickNumberBtn3Auto = () => {
        setDefaultValueAuto(defaultValueAuto + 10000);
        // handleSetPrice(defaultValue + 10000);
    }
    React.useEffect(() => {
        setDefaultValue(defaultPrice);
        setDefaultValueAuto(defaultPrice);
    },[])
    React.useEffect(() => {
        handleSetPrice(defaultValue);
    }, [defaultValue])
    return (
        <Box sx={{ bgcolor: 'background.paper'}}>
            <Card>
                <AppBar position="static">
                    <Tabs
                        sx={{backgroundColor: 'rgba(22,22,22,0.9)'}}
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="Bidding Systems"
                    >
                    <Tab sx={{backgroundColor: 'rgba(100,100,100,0.8)', marginRight: '1px'}} label="Manual Bidding" {...a11yProps(0)} />
                    <Tab sx={{backgroundColor: 'rgba(255,255,255,0.9)'}} label="Automatic Bidding" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
            </Card>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
            <TabPanel value={value} index={0} dir={theme.direction}>
                <Card sx={{border: '1px solid lightblue'}}>
                    <Grid container item xs={12} lg={12} md={12} sx={{padding: '30px', paddingTop: '10px'}}>
                        <Grid container item xs={12} lg={12} md={12}>
                            <Grid item xs={12} lg={10} md={10}>
                                <MKTypography variant="body2" color="info" >Here, you can bid manually.</MKTypography>
                            </Grid>
                            <Grid item xs={12} lg={2} md={2}>
                                <MKButton variant="gradient" color="primary"  px={1} sx={{padding: 0}} onClick={onClickStart}>start</MKButton>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={12} md={12}>
                            <MKInput type="price" label="Price($)" value={defaultValue} fullWidth px={3} my={1} disabled/>
                        </Grid>
                        <Grid container item xs={12} lg={12} md={12}>
                            <Grid container item xs={12} lg={6} md={6} sx={{padding: '15px'}}>
                                <Grid item xs={12} lg={4} md={4} sx={{paddingRight: '10px'}}>
                                    {onStart?
                                        <MKButton variant="gradient" color="primary" fullWidth px={2} user-data="1000" sx={{height: '100px'}} onClick={onClickNumberBtn1}>+1000</MKButton>:
                                        <MKButton variant="gradient" color="primary" fullWidth px={2} sx={{height: '100px'}} disabled>+1000</MKButton>
                                    }
                                </Grid>
                                <Grid item xs={12} lg={4} md={4} sx={{paddingRight: '10px'}}>
                                    {onStart?
                                        <MKButton variant="gradient" color="warning" fullWidth px={2} user-data="5000" sx={{height: '100px'}} onClick={onClickNumberBtn2}>+5000</MKButton>:
                                        <MKButton variant="gradient" color="warning" fullWidth px={2} sx={{height: '100px'}} disabled>+5000</MKButton>
                                    }           
                                </Grid>
                                <Grid item xs={12} lg={4} md={4} sx={{paddingRight: '10px'}}>
                                    {onStart?
                                        <MKButton variant="gradient" color="success" fullWidth px={2} user-data="10000" sx={{height: '100px'}} onClick={onClickNumberBtn3}>+10000</MKButton>:
                                        <MKButton variant="gradient" color="success" fullWidth px={2} sx={{height: '100px'}} disabled>+10000</MKButton>
                                    }
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={6} md={6} sx={{padding: '15px'}}>
                                {enableButton && onStart? 
                                <div>
                                <MKButton variant="gradient" color="info" fullWidth px={2} sx={{height: '100px'}} onClick={() => start(defaultValue)}>
                                    Place bid
                                </MKButton></div>: 
                                <div><MKButton variant="gradient" color="info" fullWidth px={10} sx={{height: '100px'}} disabled>
                                    Place bid
                                </MKButton></div>}
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <Card sx={{border: '1px solid lightblue'}}>
                    <Grid container item xs={12} lg={12} md={12} sx={{padding: '30px', paddingTop: '10px'}}>
                        <Grid item xs={12} lg={10} md={10}>
                            <MKTypography variant="body2" color="info" >Here, you can bid <span style={{color: 'red', fontWeight: 'bold'}}>automatically.</span></MKTypography>
                        </Grid>
                        <Grid item xs={12} lg={2} md={2}>
                            <MKButton variant="gradient" px={1} color="primary" sx={{padding: 0, color: 'red'}} onClick={onClickStartAuto}>ON/OFF</MKButton>
                        </Grid>
                        <Grid item xs={12} lg={12} md={12}>
                            <MKInput type="price" label="Price($)" value={defaultValueAuto} fullWidth px={3} my={1} disabled/>
                        </Grid>
                        <Grid container item xs={12} lg={12} md={12}>
                            <Grid container item xs={12} lg={6} md={6} sx={{padding: '15px'}}>
                                <Grid item xs={12} lg={4} md={4} sx={{paddingRight: '10px'}}>
                                    {onStartAuto ? 
                                        <MKButton variant="gradient" color="primary" fullWidth px={2} sx={{height: '100px'}} onClick={onClickNumberBtn1Auto}>+1000</MKButton>:
                                        <MKButton variant="gradient" color="primary" fullWidth px={2} sx={{height: '100px'}} disabled>+1000</MKButton>
                                    }
                                </Grid>
                                <Grid item xs={12} lg={4} md={4} sx={{paddingRight: '10px'}}>
                                    {onStartAuto ? 
                                        <MKButton variant="gradient" color="warning" fullWidth px={2} sx={{height: '100px'}} onClick={onClickNumberBtn2Auto}>+5000</MKButton>:
                                        <MKButton variant="gradient" color="warning" fullWidth px={2} sx={{height: '100px'}} disabled>+5000</MKButton>
                                    }
                                </Grid>
                                <Grid item xs={12} lg={4} md={4} sx={{paddingRight: '10px'}}>
                                    {onStartAuto ? 
                                        <MKButton variant="gradient" color="success" fullWidth px={2} sx={{height: '100px'}} onClick={onClickNumberBtn3Auto}>+10000</MKButton>:
                                        <MKButton variant="gradient" color="success" fullWidth px={2} sx={{height: '100px'}} disabled>+10000</MKButton>
                                    }
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={6} md={6} sx={{padding: '15px'}}>
                                {onStartAuto? 
                                <div>
                                <MKButton variant="gradient" color="light" fullWidth px={2} sx={{height: '100px'}} onClick={() => onClickPlaceBidAuto(defaultValueAuto)}>
                                    Set AutoBid Price
                                </MKButton></div>: 
                                <div><MKButton variant="gradient" color="light" fullWidth px={10} sx={{height: '100px'}} disabled>
                                    Set AutoBid Price
                                </MKButton></div>}
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </TabPanel>
            </SwipeableViews>
        </Box>
    );
}

BidPanel.propTypes = {
    enableButton: PropTypes.bool.isRequired,
    defaultPrice:  PropTypes.number,
    handleSetPrice: PropTypes.func.isRequired,
    onClickPlaceBid: PropTypes.func.isRequired,
    onClickPlaceBidAuto: PropTypes.func.isRequired,
    setAutomaticFunc: PropTypes.func.isRequired,
};
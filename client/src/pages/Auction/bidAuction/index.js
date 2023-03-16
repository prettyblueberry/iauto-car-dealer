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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import BidPanel from "./BidPanel";
import { read } from "api/auction";
import auth from "api/auth/auth-helper";
import { url } from "constant/url";
// @mui icons
// import CloseIcon from "@mui/icons-material/Close";
// const socket = require('socket.io-client')('http://localhost');
const io = require('socket.io-client')
const socket = io('https://api.iauto.no');
// const socket = io('http://localhost:3001');
function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }, [delay]);
}
function BidAuction() {
    const [auction, setAuction] = useState({itemName: '', bidEnd: '', seller: {name: ''}, bids:[], startingBid: 0, image: {contentType: [], data: []}});
    const [price, setPrice] = useState(0);
    const [userPrice, setUserPrice] = useState(0);
    const [enableButton, setEnableButton] = useState(false);
    const [seller, setSeller] = useState('');
    const [isSeller, setIsSeller] = useState(false);
    const [isAutomatic, setIsAutomatic] = useState(false);
    const [autoBidPrice, setAutoBidPrice] = useState(0);
    const [completeAuction, setCompleteAuction] = useState(false);
    const {auctionId} = useParams();
    const navigate = useNavigate();    
    const jwt = auth.isAuthenticated();
    
    const brand = <span style={{ fontSize: "2.5rem", color: "#9595f7" }}>iAuto</span>;
    useInterval(() => {
        if (Date.now() > new Date(auction.bidEnd)) {
            setEnableButton(false);
            setCompleteAuction(true);
        }
    }, 1000);

    useEffect(() => {
        socket.emit('join_auction_room', {room: auctionId})
        return () => {
            socket.emit('leave auction room', {
              room: auctionId
            })
          }
    }, [])
    useEffect(() => {
        socket.on('new bid', payload => {
            if(!isAutomatic){
                updateAuction(payload);
                if(payload.seller._id === JSON.parse(localStorage.getItem('auth')).user._id)setIsSeller(true);
            }else{
                updateAuction(payload);
                if((payload.bids[0].bidder._id !== JSON.parse(localStorage.getItem('auth')).user._id) && (payload.bids[0].bid < autoBidPrice)){
                    setTimeout(() => {
                        onClickPlaceBid(Number(payload.bids[0].bid) + 1000);
                    }, 2000);
                }
            }
        })
        return () => {
            socket.off('new bid')
        }
    })

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal;
        if(sessionStorage.getItem('jwt') === null)navigate('/authentication/sign-in/basic');
        read({auctionId: auctionId}, signal).then((data) => {
            if (!data) {
                navigate('/authentication/sign-in/basic');
            } else {
                console.log(data);
                if(data.bids.length === 0){
                    // if(new Date(data.bidEnd) < new Date(auction.bidEnd)){
                    //     data.bidEnd = auction.bidEnd;   
                    // }
                    console.log(data);
                    setAuction(data);
                    setPrice(data.startingBid);
                    setSeller(data.seller.name);
                    if(data.seller._id === JSON.parse(localStorage.getItem('auth')).user._id)setIsSeller(true);
                }else{
                    // if(new Date(data.bidEnd) < new Date(auction.bidEnd)){
                    //     data.bidEnd = auction.bidEnd;   
                    // }
                    setAuction(data);
                    setPrice(data.bids[0].bid);
                    setSeller(data.seller.name);
                    if(data.seller._id === JSON.parse(localStorage.getItem('auth')).user._id)setIsSeller(true);
                }
            }
        })
        return function cleanup(){
            abortController.abort()
        }
    }, [auctionId])

    useEffect(() => {
        let newValue = auction.bids.length === 0?auction.startingBid:auction.bids[0].bid;
        setEnableButton(parseInt(price)>parseInt(newValue)?true:false);
    },[price])

    const handleSetPrice = (val) => {
        setPrice(val);
        setUserPrice(val);
    }

    const onClickPlaceBid = (val) => {
        let newBid = {
            bid: val,
            time: new Date(),
            bidder: jwt.user
        }
        socket.emit('new bid', {
            room: auctionId,
            bidInfo:  newBid
        })
        setEnableButton(false);
    }

    const onClickOkBtn = () => {
        navigate('/');
    }
    
    const setAutomaticFunc = () => {
        setIsAutomatic(!isAutomatic);
    }

    const onClickPlaceBidAuto = (val) => {
        setAutoBidPrice(val);
    }

    const updateAuction = (data) => {
        // setAuction(data);
        if(new Date(auction.bidEnd) - new Date() < 60000) {
            let time1, time2;
            time1 = new Date ();
            time2 = new Date ( time1 );
            time2.setMinutes ( time1.getMinutes() + 3 );
            data.bidEnd = time2;
            auction.bidEnd = time2;
        }else{
            data.bidEnd = auction.bidEnd;
        }
        setAuction(data);
        setPrice(data.bids[0].bid);
        setSeller(data.seller.name);
    }
  return (
    <>
      <MKBox
        minHeight="50vh"
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
            mt: -35,
            mb: 4,
            backgroundColor: ({ palette: { black }, functions: { rgba } }) => rgba(black.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
            overflow: "hidden",
          }}
    >
        <MKTypography
            color="info"
            fontWeight='bold'
            variant="h1"
            px={3}
            textGradient
        >
            {auction.itemName}
        </MKTypography>
        <Grid container item xs={12} lg={12} md={12}>
            <Grid item xs={12} lg={7} md={7}>
                    <MKBox component="img" 
                        // minHeight="50vh"
                        width="100%"
                        src={`data:${auction.image.contentType[0]};base64,${auction.image.data[0]}`}
                        sx={{
                            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                            `${linearGradient(
                            rgba(gradients.dark.main, 0.1),
                            rgba(gradients.dark.state, 0.5)
                            )}`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "grid",
                        placeItems: "center",
                        height: '500px',
                    }}/>
                    <Grid container item xs={12} lg={12} md={12} sx={{justifyContent: 'space-between'}}>
                    <Grid item xs={12} lg={4} md={4}>
                        <MKBox component="img"
                            // minHeight="50vh"
                            width="100%"
                            src={`data:${auction.image.contentType[0]};base64,${auction.image.data[1]}`}
                            sx={{
                                opacity: '0.4',
                                backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                                `${linearGradient(
                                rgba(gradients.dark.main, 0.7),
                                rgba(gradients.dark.state, 0.7)
                                )}`,
                            backgroundSize: "cover",
                            backgroundPosition: "right",
                            display: "grid",
                            placeItems: "right",
                            height: '200px',
                        }}/>
                    </Grid>
                    <Grid item xs={12} lg={4} md={4}>
                        <MKBox component="img"
                            // minHeight="50vh"
                            src={`data:${auction.image.contentType[0]};base64,${auction.image.data[2]}`}
                            width="100%"
                            sx={{
                                opacity: '0.7',
                                backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                                `${linearGradient(
                                rgba(gradients.dark.main, 0.5),
                                rgba(gradients.dark.state, 0.5)
                                )}`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "grid",
                            placeItems: "center",
                            height: '200px',
                        }}/>
                    </Grid>
                    <Grid item xs={12} lg={4} md={4}>
                        <MKBox component="img"
                            // minHeight="50vh"
                            width="100%"
                            src={`data:${auction.image.contentType[0]};base64,${auction.image.data[3]}`}
                            sx={{
                                opacity: '1',
                                backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                                `${linearGradient(
                                rgba(gradients.dark.main, 0.1),
                                rgba(gradients.dark.state, 0.1)
                                )}`,
                            backgroundSize: "cover",
                            backgroundPosition: "left",
                            display: "grid",
                            placeItems: "left",
                            height: '200px',
                        }}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={5} md={5}>
                    <Accordion sx={{marginLeft: '20px'}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <MKTypography
                            color="rgba(35, 149, 241)"
                            fontWeight='bold'
                            variant="h3"
                            px={3}
                        >
                            Details
                        </MKTypography>
                        </AccordionSummary>
                        <AccordionDetails px={3}>
                        <MKTypography
                            color="black"
                            fontFamily='aria'
                            fontWeight='bold'
                            variant="h5"
                            px={3}
                        >
                            {auction.description}
                        </MKTypography>
                        </AccordionDetails>
                    </Accordion>
                <br/>
                <Grid container item xs={12} lg={12} md={12}>
                    <Grid  item xs={12} lg={12} md={12}>
                        <Card sx={{width: '150px', marginLeft: '30px', backgroundColor: 'rgba(71, 12, 97, 1)', zIndex: 3}}>
                            <MKTypography
                                color="info"
                                fontWeight='bold'
                                variant="h2"
                                px={2}
                                textGradient
                                >
                                Status
                            </MKTypography>
                        </Card>
                    </Grid>
                    <Card sx={{marginLeft: '18px', marginTop: '-10px'}}>
                        <Grid container item xs={12} lg={12} md={12}>
                            <Grid container item xs={12} lg={7} md={7}>
                                <Grid item xs={12} lg={4} md={4}>
                                    <MKTypography variant="h1" color="text" px={4} ml={1} sx={{marginTop: '4px'}}>
                                        <AuctionCountdown  container timeEnd={`${new Date(auction.bidEnd)}`}/>
                                    </MKTypography>
                                    <MKTypography variant="h6" ml={4} mt={1}>
                                        remain time
                                    </MKTypography>
                                </Grid>
                                <Grid item xs={12} lg={4} md={4} display="flex" sx={{paddingLeft: '20px'}}>
                                    <DefaultCounterCard
                                        count={price}
                                        title="Prices($)"
                                        px={4}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={4} md={4}>
                                    <DefaultCounterCard
                                        count={auction.bids.length}
                                        title="Bids counts"
                                        description={auction.bids.length.toString()}
                                        px={4}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} lg={5} md={5}>
                                <Grid item xs={12} lg={6} md={6}>
                                    <DefaultCounterCard
                                            count={userPrice}
                                            title="Your Prices($)"
                                            px={4}
                                        />
                                    </Grid>
                                <Grid item xs={12} lg={6} md={6} sx={{paddingTop: '19px'}}>
                                    <MKTypography
                                        color="info"
                                        fontWeight='bold'
                                        variant="h3"
                                        px={4}
                                        mb={1}
                                        textGradient
                                    >
                                        {auction.bids.length?auction.bids[0].bidder?auction.bids[0].bidder.name:'None':'None'}
                                    </MKTypography>
                                    <MKTypography
                                        color="success"
                                        fontWeight='bold'
                                        variant="h6"
                                        pl={3}
                                        mb={1}
                                        textGradient
                                    >
                                        Last bidder
                                    </MKTypography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                
                    {!isSeller && 
                    <>
                    <br/>
                    <Card ml={2} sx={{marginLeft: '27px', width: '180px', paddingLeft: '7px', backgroundColor: 'rgba(71, 12, 97, 1)', zIndex: 3}}>
                        <MKTypography
                            color="info"
                            fontWeight='bold'
                            variant="h3"
                            px={2}
                            textGradient
                        >
                            Place Bid
                        </MKTypography>
                    </Card>
                    <Card ml={2} sx={{marginLeft: '20px', paddingLeft: '5px', padding: '10px', marginTop: '-10px', paddingTop: '12px'}}>
                        <BidPanel enableButton={enableButton} defaultPrice={price} handleSetPrice={handleSetPrice} setAutomaticFunc={setAutomaticFunc} onClickPlaceBidAuto={onClickPlaceBidAuto} onClickPlaceBid={onClickPlaceBid}/>
                    </Card>
                    </>}
                        {auction.bids.length?
                            <Grid container item xs={12} lg={12} md={12} px={2} sx={{padding: '20px'}}>
                                <Card sx={{backgroundColor: 'rgba(71, 12, 97, 1)', zIndex: 4, marginLeft: '7px'}}>
                                    <MKTypography 
                                        color="info"
                                        fontWeight='bold'
                                        variant="h2"
                                        px={2}
                                        textGradient
                                    >
                                        All bids
                                    </MKTypography>
                                </Card>
                                <Card sx={{marginTop: '-12px'}}>
                                <Grid container xs={12} lg={12} md={12} sx={{padding: '25px'}}>
                                    <Grid container spacing={4} xs={12} lg={12} md={12}>
                                        <Grid item xs={3} sm={3} >
                                            <MKTypography variant="h5" color="info">Bid ID</MKTypography>
                                        </Grid>
                                        <Grid item xs={4} sm={4}>
                                            <MKTypography variant="h5" color="info">Bid Time</MKTypography>
                                        </Grid>
                                        <Grid item xs={3} sm={3}>
                                            <MKTypography variant="h5" color="info">Bidder</MKTypography>
                                        </Grid>
                                        <Grid item xs={2} sm={2}>
                                            <MKTypography variant="h5" color="info">Price</MKTypography>
                                        </Grid>
                                    </Grid> 
                                    {auction.bids.map((item, index) => {
                                        let color = index?'secondary': 'primary';
                                        let bold = index?'': 'bold';
                                        return (
                                            <Grid container spacing={4} key={index} xs={12} lg={12} md={12}>
                                                <Grid item xs={5} sm={3}><MKTypography variant="body2" justifyContent="center" color={color} fontWeight={bold}>{index + 1}</MKTypography></Grid>
                                                <Grid item xs={3} sm={4}><MKTypography variant="body2" color={color} fontWeight={bold}>{new Date(item.time).toLocaleString()}</MKTypography></Grid>
                                                <Grid item xs={2} sm={3}><MKTypography variant="body2" color={color} fontWeight={bold}>{item.bidder?item.bidder.name: 'None'}</MKTypography></Grid>
                                                <Grid item xs={2} sm={2}><MKTypography variant="body2" color={color} fontWeight={bold}>${item.bid}</MKTypography></Grid>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                                </Card>
                            </Grid>:''
                        }
            </Grid>
        </Grid>
    </Card>
    <Modal open={completeAuction} sx={{ display: "grid", placeItems: "center" }}>
        <Slide direction="down" in={completeAuction} timeout={500}>
            <MKBox
              position="relative"
              width="500px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
            >
              <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">Completed Auction</MKTypography>
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox p={2}>
                <MKTypography variant="h2" color="secondary" fontWeight="regular">
                    {auction.bids.length?'Congratulations!': 'Notification'}
                </MKTypography>
                <MKTypography variant="body2" color="secondary" fontWeight="regular">
                    {auction.bids.length && auction.bids[auction.bids.length - 1].bidder? <>
                    Hi! {auction.bids[auction.bids.length - 1].bidder.name}<br/>
                    You won this auction.
                    At this auction, for the price of {price} dollars, you won.<br/>
                    congratulations!. Would you like to continue participating in the auction?</>
                    :<>This auction was finished without any bidders.<br/>Please try again.</> }
                </MKTypography>
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox display="flex" justifyContent="space-between" p={1.5}>
                <MKButton variant="gradient" color="info" onClick={onClickOkBtn}>
                  Okay
                </MKButton>
              </MKBox>
            </MKBox>
        </Slide>
    </Modal>
    </>
  );
}

export default BidAuction;
import bgImage from "assets/image/car1.jpg"
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { read } from "api/auction";
import { Link } from "@mui/material";
import AuctionCountdown from "components/VehicleCards/VehicleAuctionCard/AuctionCountdown";
import auth from "api/auth/auth-helper";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Divider from "@mui/material/Divider";
import MKButton from "components/MKButton";
import LayoutAuction from "../layoutAuction";
import zIndex from "@mui/material/styles/zIndex";
import boxShadow from "assets/theme/functions/boxShadow";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import screenImage from 'assets/image/screen.png'
import { useMediaQuery } from 'react-responsive'

const io = require('socket.io-client')
const socket = io('https://api.iauto.no');
// const socket = io('http://localhost:3001');
const customStyle = {
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
            paddingBottom: '5px',
            borderRadius: 0,
            backgroundColor: 'rgba(16, 33, 39, 1)',
            border: 'none'
        }
    },

    mainNavButton: {
        height: '60px',
        width: '60px',
        // marginTop: '35%',
        borderRadius: '30px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        boxShadow: '5px 0 30px rgba(1, 41, 112, 0)',
        marginTop: '-60px',
        // marginTop: '40%',
        // zIndex: '3',
        // flow: 'Right',
        // width: '50px',
        // marginLeft: '80%'
    },

    mainNavButton1: {
        height: '60px',
        width: '60px',
        marginTop: '25%',
        borderRadius: '30px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        boxShadow: '5px 0 30px rgba(1, 41, 112, 0)'
        // marginTop: '40%',
        // zIndex: '3',
        // flow: 'Right',
        // width: '50px',
        // marginLeft: '80%'
    },

    mainNavButton2: {
        height: '60px',
        width: '60px',
        marginTop: '25%',
        borderRadius: '30px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        boxShadow: '5px 0 30px rgba(1, 41, 112, 0)'
        // display: 'relative',
        // top: '50%',
        // flow: 'Right',
        // marginLeft: '20%'
    },

    rightPriceButton: {
        boxShadow: "5px 0 30px rgba(1, 41, 112, 0)"
    },

    rightSideInput: {
        textAlign: 'center',
        backgroundColor: 'rgba(231, 239, 239, 1)',
    }
}







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

function HtmlRjx(){
    const [auction, setAuction] = useState({});
    const [bids, setBids] = useState([])
    const [status, setStatus] = useState('');
    const [round, setRound] = useState(0);
    const [remain, setRemain] = useState('');
    const [bidEnd, setBidEnd] = useState('');
    const [bid, setBid] = useState(0);
    const [myBid, setMyBid] = useState(0);
    const [autoBidPrice, setAutoBidPrice] = useState(0);
    const [enableBid, setEnableBid] = useState(false);
    const [isAutomatic, setIsAutomatic] = useState(false);
    const [completeAuction, setCompleteAuction] = useState(false);
    const [countImage, setCountImage] = useState(0);

    const navigate = useNavigate();
    const {auctionId} = useParams();
    const jwt = auth.isAuthenticated();
    const handle = useFullScreenHandle();

    let sreenFit =  {
        width: '100%', backgroundColor: 'rgba(0,0,0,0)', marginTop: '48%'
    };
    const isScreen0 = useMediaQuery({ query: '(min-width: 1356px)' })
    const isScreen1 = useMediaQuery({ query: '(min-width: 1280px)' })
    const isScreen2 = useMediaQuery({ query: '(min-width: 1050px)' })
    const isScreen3 = useMediaQuery({ query: '(min-width: 860px)' })
    const isScreen4 = useMediaQuery({ query: '(min-width: 768px)' })
    const isScreen5 = useMediaQuery({ query: '(min-width: 650px)' })
    const isScreen6 = useMediaQuery({ query: '(min-width: 520px)' })
    const isScreen7 = useMediaQuery({ query: '(min-width: 430px)' })
    const isScreen8 = useMediaQuery({ query: '(min-width: 350px)' })
    const isScreen9 = useMediaQuery({ query: '(min-width: 260px)' })

    if(isScreen9)  sreenFit =  {width: '100%', backgroundColor: 'rgba(0,0,0,0)', marginTop: '34%'}
    if(isScreen8)  sreenFit =  {width: '100%', backgroundColor: 'rgba(0,0,0,0)', marginTop: '22%', marginLeft: '-1%'}
    if(isScreen7)  sreenFit =  {width: '83%', backgroundColor: 'rgba(0,0,0,0)', marginTop: '19%', marginLeft: '7.5%'}
    if(isScreen6)  sreenFit =  {width: '63%', backgroundColor: 'rgba(0,0,0,0)', marginTop: '14%', marginLeft: '18%'}
    if(isScreen5)  sreenFit =  {width: '56%', backgroundColor: 'rgba(0,0,0,0)', marginTop: '11.8%', marginLeft: '21.3%'}
    if(isScreen4)  sreenFit =  {width: '100%', backgroundColor: 'rgba(0,0,0,0)', marginTop: '21%', marginLeft: '3%', marginRight: '5%'}
    if(isScreen3)  sreenFit =  {width: '100%', backgroundColor: 'rgba(0,0,0,0)', marginTop: '18%', marginLeft: '10%', marginRight: '11.5%'}
    if(isScreen2)  sreenFit =  {width: '100%', backgroundColor: 'rgba(0,0,0,0)', marginTop: '19%', marginLeft: '8%', marginRight: '9.5%'}
    if(isScreen1)  sreenFit =  {width: '100%', backgroundColor: 'rgba(0,0,0,0)', marginTop: '19%', marginLeft: '9%', marginRight: '10.5%'}
    if(isScreen0)  sreenFit =  {width: '100%', backgroundColor: 'rgba(0,0,0,0)', marginTop: '16%', marginLeft: '14.5%', marginRight: '15.8%'}
    
    jQuery(window).off("load");
    jQuery(window).off("scroll");
    
    useInterval(() => {
        if (Date.now() > new Date(auction.bidEnd)) {
            setEnableBid(false);
            setCompleteAuction(true);
        }
    }, 1000);
    
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal;
        if(sessionStorage.getItem('jwt') === null)navigate('/authentication/sign-in/basic');
        read({auctionId: auctionId}, signal).then((data) => {
            console.log(data);
            if(data){
                if( new Date() - new Date(data.bidStart) > 0){  // already started??
                    setAuction(data);
                    if(new Date(data.bidEnd) - new Date() < 0){
                        setStatus('Finished');
                        setRemain('');
                    }else{
                        setStatus('Closing')
                        let mNow = new Date();
                        let mEnd = new Date(data.bidEnd);
                        let mUpcoming = mEnd.getMinutes() - mNow.getMinutes();
                        setRemain(mUpcoming);
                    }
                    setRound(data.bids.length);
                    if(data.bids.length === 0){
                        setBid(data.startingBid);
                        setMyBid(data.startingBid);
                        setBids([]);
                        setRound(0);
                    }else{
                        console.log('here');
                        setBid(data.bids[0].bid);
                        setMyBid(data.bids[0].bid);
                        setRound(data.bids.length);
                        setBids(data.bids);
                        // data.bids.forEach(bid => {
                        //     if(bid.bidder._id === JSON.parse(localStorage.getItem('auth')).user._id){
                        //         setMine(bid.bidder.name);
                        //     }
                        // });
                    }
                    setBidEnd(data.bidEnd);
                }else{    //not started yet??
                    setAuction(data);
                    setStatus('Preparing')
                    setRemain('');
                    setRound(0);
                    setBids([]);
                    setBid(data.startingBid);
                    setMyBid(data.startingBid);
                    setBidEnd(data.bidEnd);
                }
            }else{
                console.log('data fetch error');
            }
        })
        return function cleanup(){
            abortController.abort()
        }
    }, [auctionId])

    useEffect(() => {
        if(myBid > bid)setEnableBid(true);
        else setEnableBid(false);
    }, [myBid])
    
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
            console.log(payload);
            if(!isAutomatic){
                updateAuction(payload);
            }else{
                updateAuction(payload);
                if((payload.bids[0].bidder._id !== JSON.parse(localStorage.getItem('auth')).user._id) && (payload.bids[0].bid < autoBidPrice)){
                    setTimeout(() => {
                        onClickBidBtn(Number(payload.bids[0].bid) + 1000);
                    }, 2000);
                }
            }
        })
        return () => {
            socket.off('new bid')
        }
    })

    const updateAuction = (data) => {
        if(new Date(bidEnd) - new Date() < 60000) {
            let time1, time2;
            time1 = new Date ();
            time2 = new Date ( time1 );
            time2.setMinutes ( time1.getMinutes() + 3 );
            data.bidEnd = time2;
        }else{
            data.bidEnd = auction.bidEnd;
        }
        // setAuction(data);
        setBids(data.bids);
        setRound(data.bids.length);
        setBidEnd(data.bidEnd);
        setBid(data.bids[0].bid);
    }

    const onPlusBtnClick = () => {
        setMyBid(myBid + 1000);
    }
    const onMinusBtnClick = () => {
        setMyBid(myBid - 1000)
    }
    const onClickBtnPlus = (value) => {
        setMyBid(myBid + value)
    }
    const onChangeMyBid = (ev) => {
        setMyBid(ev.target.value);
    }
    const onLeaveMyBid = () => {
        setMyBid(myBid - myBid % 1000);
    }
    const onClickBidBtn = (val) => {
        let newBid = {
            bid: val,
            time: new Date(),
            bidder: jwt.user,
        }
        socket.emit('new bid', {
            room: auctionId,
            bidInfo:  newBid
        })
        setEnableBid(false);
    }
    const onClickAutoBid = () => {
        setIsAutomatic(true);
        setAutoBidPrice(myBid);
    }
    const onClickOkBtn = () => {
        navigate('/');
    }
    const onClickCountImage = (val) => {
        console.log(countImage);
        let count = countImage + Number(val);
        console.log(count);
        if(Number(count) <  0)count = Math.abs(auction.image.data.length - 1);
        setCountImage(count % auction.image.data.length)
    }
    const fullscreenMode = () => {
        

    }
    return (
        <>
            <LayoutAuction>
                <div className="c-car-details">
                    {/* basic content */}
                    <div className="c-car-details__left">
                        <div className="c-car-detail__module c-car-detail__module--gallery">
                            <div className="nettbil-imagegallery" data-cy="car-images-gallery">
                                <div className="slider-wrapper">
                                <MKBox
                                    sx={({
                                    functions: { rgba, linearGradient },
                                    palette: { black },
                                    borders: { borderRadius },
                                    }) => ({
                                    backgroundImage: `${linearGradient(
                                        rgba(black.main, 0),
                                        rgba(black.main, 0)
                                    )}, url(${screenImage})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: 0,
                                    height: '400px',
                                    width: '100%',
                                    paddingLeft: '10px',
                                    paddingRight: '10px'
                                    })}
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <div  style={sreenFit}>
                                        <div  dir="ltr">
                                            <div className="slick-list" handle={handle}>
                                            
                                                {auction.image &&
                                                
                                                    <MKBox
                                                        sx={({
                                                        functions: { rgba, linearGradient },
                                                        palette: { black },
                                                        borders: { borderRadius },
                                                        }) => ({
                                                        backgroundImage: `${linearGradient(
                                                            rgba(black.main, 0),
                                                            rgba(black.main, 0)
                                                        )}, url(${`data:${auction.image.contentType[countImage]};base64,${auction.image.data[countImage]}`})`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "center",
                                                        borderRadius: 0,
                                                        height: '210px',
                                                        width: '100%',
                                                        paddingLeft: '10px',
                                                        paddingRight: '10px'
                                                        })}
                                                        display="flex"
                                                        justifyContent="space-between"
                                                    >
                                                        <button id="mainNavLeft" type="button" data-role="none"  style={customStyle.mainNavButton1} onClick={() => onClickCountImage(-1)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width={24} height={24} viewBox="0 0 24 24" style={{marginLeft: '-8px', marginTop: '4px'}}>
                                                                <path d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                                                            </svg>
                                                        </button>
                                                        <button type="button" id="mainNavRight" data-role="none" style={customStyle.mainNavButton2} onClick={() => onClickCountImage(1)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width={24} height={24} viewBox="0 0 24 24" style={{marginLeft: '-8px', marginTop: '4px', boxShadow: '5px 0 30px rgba(1, 41, 112, 0)'}}>
                                                                <path d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                                            </svg>
                                                        </button>
                                                    </MKBox>
                                            
                                                    // <img data-savepage-src={bgImage} alt="Volvo" data-cy="car-images-slide-0" height="100%" width="100%" src={`data:${auction.image.contentType[countImage]};base64,${auction.image.data[countImage]}`}/>
                                                }    
                                            </div>
                                            <button style={{backgroundColor: 'rgba(0,0,0,0)', zIndex: '3', marginTop: '-100px', width: '100px', height: '100px'}}/>
                                        </div>
                                        <span className="current-slide">
                                            <span className="current-index">
                                                <font style={{verticalAlign: 'inherit'}}>
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        {auction.image && 
                                                            countImage + 1 + '/' +  auction.image.data.length
                                                        }
                                                    </font>
                                                </font>
                                            </span>
                                        </span>
                                        <button type="button" style={customStyle.mainNavButton} onClick={handle.enter}>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" fill="currentColor" viewBox="0 0 24 24" xmlSpace="preserve" width="45" height={20} style={{marginLeft: '-20px'}}>
                                                <path id="play" d="m 3.4285714,15.428571 -3.42857145,0 0,8.571429 8.57142905,0 0,-3.428571 -5.1428577,0 0,-5.142858 z M -5e-8,8.5714287 l 3.42857145,0 0,-5.1428573 5.1428577,0 L 8.5714291,0 -4.9999999e-8,0 l 0,8.5714287 z M 20.571428,20.571429 l -5.142857,0 0,3.428571 L 24,24 l 0,-8.571429 -3.428572,0 0,5.142858 z M 15.428571,2e-7 l 0,3.4285714 5.142857,0 0,5.1428571 3.428572,0 L 24,2e-7 l -8.571429,0 z">
                                                    <animate id="animation-to" begin="indefinite" fill="freeze" attributeName="d" dur="0.15s" to="m 5.0000001e-8,18.857143 5.14285695,0 0,5.142857 3.428572,0 0,-8.571429 -8.571428950000001,0 0,3.428572 z M 5.142857,5.1428572 l -5.14285695,0 0,3.4285714 8.571428949999999,0 0,-8.571428500000001 -3.428572,0 0,5.142857100000001 z M 15.428571,24 l 3.428572,0 0,-5.142857 5.142857,0 0,-3.428572 -8.571429,0 0,8.571429 z m 3.428572,-18.8571428 0,-5.1428571 -3.428572,0 0,8.5714285 8.571429,0 0,-3.4285714 -5.142857,0 z" />
                                                    <animate id="animation-from" begin="indefinite" fill="freeze" attributeName="d" dur="0.15s" to="m 3.4285714,15.428571 -3.42857145,0 0,8.571429 8.57142905,0 0,-3.428571 -5.1428577,0 0,-5.142858 z M -5e-8,8.5714287 l 3.42857145,0 0,-5.1428573 5.1428577,0 L 8.5714291,0 -4.9999999e-8,0 l 0,8.5714287 z M 20.571428,20.571429 l -5.142857,0 0,3.428571 L 24,24 l 0,-8.571429 -3.428572,0 0,5.142858 z M 15.428571,2e-7 l 0,3.4285714 5.142857,0 0,5.1428571 3.428572,0 L 24,2e-7 l -8.571429,0 z" />
                                                </path>
                                            </svg>
                                        </button>
                                        <button type="button" className="custom-navigation custom-prev" />
                                        <button type="button" className="custom-navigation custom-next" />
                                    </div>
                                </MKBox>
                                </div>
                            </div>
                        </div>
                        <div className="c-car-detail__module u-no-border-top">
                            <div className="u-hidden@from-tablet" />
                            <div className="c-car-detail__module--section">
                                <h2 className="u-h2 u-margin-bottom">
                                    {auction.itemName?auction.itemName: ''}
                                </h2>
                                <div className="u-margin-bottom">
                                    <button type="button" data-cy="see-report" className="c-btn c-btn--color-primary c-btn--full c-btn--medium" style={{borderRadius: 0, backgroundColor: 'black', border: 'none'}}>
                                        <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>See test report</font></font>
                                    </button>
                                </div>
                                <div className="c-car-detail__module--content">
                                    <div className="o-level">
                                        <div className="u-1/2 u-margin-right-tiny">
                                            <ul className="c-car-detail__equipment-list">
                                                <li>
                                                    <strong>
                                                        <font style={{verticalAlign: 'inherit'}}>
                                                            <font style={{verticalAlign: 'inherit'}}>Reg. no</font>
                                                        </font>
                                                        <font style={{verticalAlign: 'inherit'}}>
                                                            <font style={{verticalAlign: 'inherit'}}>.:</font>
                                                        </font>
                                                    </strong>
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        <font style={{verticalAlign: 'inherit'}}>{auction.description? auction.description.reg: ''}</font>
                                                    </font>
                                                </li>
                                                <li>
                                                    <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Model year
                                                    </font></font><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>:</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                    {auction.description? auction.description.modelYear: ''}</font></font>
                                                </li>
                                                <li>
                                                    <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Mileage
                                                    </font></font><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>:</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                    {auction.description? auction.description.mileage: ''} km</font></font>
                                                </li>
                                                <li>
                                                    <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Fuel
                                                    </font></font><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>:</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                    {auction.description? auction.description.fuel: ''}</font></font>
                                                </li>
                                                <li>
                                                    <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Wheel drive
                                                    </font></font><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>:</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                    {auction.description? auction.description.wheelDrive: ''}</font></font>
                                                </li>
                                                <li>
                                                    <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Used imported
                                                    </font></font><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>:</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                    {auction.description? auction.description.usedImport === 10? 'Yes': 'No': ''}</font></font>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="u-1/2">
                                            <ul className="c-car-detail__equipment-list">
                                                <li>
                                                    <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>VIN
                                                    </font></font><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>:</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                    {auction.description? auction.description.vin: ''}</font></font>
                                                </li>
                                                <li>
                                                    <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Volume
                                                    </font></font><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>:</font></font></strong>
                                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                    {auction.description? auction.description.volume: ''}</font></font>
                                                </li>
                                                <li>
                                                    <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Power
                                                    </font></font><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>:</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                    {auction.description? auction.description.power: ''} hp</font></font>
                                                </li>
                                                <li>
                                                    <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Transmission
                                                    </font></font><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>:</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                    {auction.description? auction.description.transmission === 10? 'Manual': 'Automatic': ''}</font></font>
                                                </li>
                                                <li>
                                                    <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Colour
                                                    </font></font><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>:</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                    {auction.description? auction.description.color: ''}</font></font>
                                                </li>
                                                <li>
                                                    <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Next EU control
                                                    </font></font><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>:</font></font></strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                    {auction.description? auction.description.eu: ''}</font></font>
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
                                        <button type="button" data-cy="inspection-center-website" className="o-media c-btn c-btn--color-white c-btn--full">
                                            <img data-savepage-currentsrc="/assets-bid/icons/icon-viking.png" data-savepage-src="/assets-bid/icons/icon-viking.png" src="data:image/png;base64,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" className="o-media__image" alt="Inspection center" /><span className="u-h6 o-media__body" title="Kristiansand Viking Control" data-cy="inspection-center-name"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Kristiansand Viking Control</font></font></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="c-car-detail__module--content">
                                    <h3 className="u-h4 u-text-bolder u-margin-bottom">
                                        <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Documentation and links</font></font>
                                    </h3>
                                    <div className="c-btn--img-wrapper">
                                        <button type="button" className="o-media c-btn c-btn--color-white c-btn--full">
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
                                            {auction.description? auction.description.equipmentList: ''}
                                            <h3>
                                                <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Comment from the car's current owner&nbsp;</font></font>
                                            </h3>
                                            {auction.description? auction.description.comment: ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* bidding panel */}
                    <div className="c-car-details__right">
                        <div className="c-car-detail__module is-relative">
                            <div className="u-hidden@until-tablet" />
                            <div className="is-relative">
                                <div>
                                    <span>Remain time: <AuctionCountdown  container timeEnd={`${new Date(bidEnd)}`}/></span>
                                    <div className="o-level o-level--spaced">
                                        <div className="o-level__item">
                                            <div className="c-stat">
                                                <div className="c-stat__label">
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        <font style={{verticalAlign: 'inherit'}}>Highest bid</font>
                                                    </font>
                                                </div>
                                                <div className="c-stat__value c-stat__value--large">
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        <font style={{verticalAlign: 'inherit'}}>NOK {bid}</font>
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="o-level__item u-1/2 u-text-right">
                                            <div className="c-stat">
                                                <div className="c-stat__label">
                                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{status}</font></font>
                                                </div>
                                                <div className="c-stat__value">
                                                    <div className="auction-time-wrapper" data-cy="timer-static">
                                                        { auction.bidEnd &&
                                                            <span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{auction.bidEnd.split('T')[0] + ' at ' +  auction.bidEnd.split('T')[1].split('.')[0]}</font></font></span>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-divider c-divider--horizontal" />
                                    <div className="c-bidding-controls">
                                        <div className="u-h6 u-margin-bottom-small u-color-bwg-tint-1">
                                            <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Place a bid</font></font>
                                        </div>
                                        <div className="u-margin-bottom">
                                            <div className="c-input-increment">
                                                <button type="button" className="c-input-increment__button u-text-unselectable" data-cy="bidding-controls-decrement" style={customStyle.rightPriceButton} onClick={onMinusBtnClick}>
                                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', color: 'rgba(35, 61, 62, 1)'}}>-</font></font>
                                                </button>
                                                <div className="c-input-increment__wrapper">
                                                    <input  type="price" placeholder="Amount" value={myBid} onChange={onChangeMyBid} onBlur={onLeaveMyBid} style={customStyle.rightSideInput}/>
                                                </div>
                                                <button type="button" className="c-input-increment__button u-text-unselectable" data-cy="bidding-controls-increment" style={customStyle.rightPriceButton} onClick={onPlusBtnClick}>
                                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', color: 'rgba(35, 61, 62, 1)'}}>+</font></font>
                                                </button>
                                            </div>
                                            <div className="o-level o-level--centered">
                                                <span className="u-h8 u-margin-top-tiny">
                                                    <font style={{verticalAlign: 'inherit'}}>
                                                        <font style={{verticalAlign: 'inherit'}}>Proposal</font>
                                                        <span className="is-inline">
                                                            <font style={{verticalAlign: 'inherit'}}> unit 1000</font>
                                                        </span>
                                                        <font style={{verticalAlign: 'inherit'}}>( </font>
                                                        <font style={{verticalAlign: 'inherit'}}>minimum: {bid} </font>
                                                        <font style={{verticalAlign: 'inherit'}}>)</font>
                                                    </font>
                                                <span className="is-inline"><font style={{verticalAlign: 'inherit'}} /></span>
                                                <font style={{verticalAlign: 'inherit'}} /><font style={{verticalAlign: 'inherit'}} /><font style={{verticalAlign: 'inherit'}} /></span>
                                            </div>
                                        </div>
                                        <div className="c-quickbids o-level o-level--equal o-level--margin-tiny" style={customStyle.rightNav}>
                                            <div className="o-level__item" style={customStyle.rightNav}>
                                                <button type="button" data-cy="168242-bid-1000" className="c-btn c-btn--confirm c-btn--full c-btn--color-primary-tint-2 c-btn--bold" onClick={() => onClickBtnPlus(1000)}>
                                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', color: 'rgba(16, 33, 39, 1)'}} >+ NOK 1,000</font></font>
                                                </button>
                                            </div>
                                            <div className="o-level__item" style={customStyle.rightNav}>
                                                <button type="button" data-cy="168242-bid-3000" className="c-btn c-btn--confirm c-btn--full c-btn--color-primary-tint-2 c-btn--bold" onClick={() => onClickBtnPlus(3000)}>
                                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', color: 'rgba(16, 33, 39, 1)'}}>+ NOK 3,000</font></font>
                                                </button>
                                            </div>
                                            <div className="o-level__item" style={customStyle.rightNav}>
                                                <button type="button" data-cy="168242-bid-5000" className="c-btn c-btn--confirm c-btn--full c-btn--color-primary-tint-2 c-btn--bold" onClick={() => onClickBtnPlus(5000)}>
                                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', color: 'rgba(16, 33, 39, 1)'}}>+ NOK 5,000</font></font>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="o-level o-level--equal o-level--margin-tiny u-margin-bottom-small u-margin-top" style={{display: 'flex'}}>
                                            <div className="o-level__item">
                                                {!enableBid?
                                                    <button type="button" data-cy="place-bid" className="c-btn c-btn--medium c-btn--full c-btn--color-primary c-btn--disabled" style={customStyle.rightNav.main} onClick={() => onClickBidBtn(myBid)}>
                                                        <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', fontSize: '14px'}}>Make an offer</font></font>
                                                    </button>:
                                                    <button type="button" data-cy="place-bid" className="c-btn c-btn--medium c-btn--full c-btn--color-primary" style={customStyle.rightNav.main} onClick={() => onClickBidBtn(myBid)}>
                                                        <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', fontSize: '14px'}}>Make an offer</font></font>
                                                    </button>
                                                }
                                            </div>
                                            <div className="o-level__item">
                                                {!enableBid?
                                                    <button type="button" data-cy="place-auto-bid" className="c-btn c-btn--medium c-btn--full c-btn--color-primary c-btn--outlined c-btn--disabled"  style={{width: '100%', marginLeft: '-5%', padding: '10px', paddingBottom: '5px', borderRadius: 0, border: '1px solid rgba(16, 33, 39, 1)'}} onClick={onClickAutoBid}>
                                                        <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', color: 'rgba(16, 33, 39, 1)', fontSize: '14px'}}>Give auto bid</font></font>
                                                    </button>:
                                                    <button type="button" data-cy="place-auto-bid" className="c-btn c-btn--medium c-btn--full c-btn--color-primary c-btn--outlined"  style={{width: '100%', marginLeft: '-5%', padding: '10px', paddingBottom: '5px',  borderRadius: 0, backgroundColor: 'rgba(16, 33, 39, 1)', border: 'none'}} onClick={onClickAutoBid}>
                                                        <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', color: 'rgba(255, 255, 255, 1)', fontSize: '14px'}}>Give auto bid</font></font>
                                                    </button>
                                                }
                                                <div className="u-text-center u-margin-top-tiny">
                                                    <span className="c-tooltip">
                                                        <span className="c-tooltip__trigger">
                                                            <span className="u-text-underlined">
                                                                <font style={{verticalAlign: 'inherit'}}>
                                                                    <font style={{verticalAlign: 'inherit'}}>What is Autobid?</font>
                                                                </font>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="c-car-detail__module">
                            <div className="o-level o-level--spaced u-margin-bottom">
                                <h3 className="u-h4 u-text-bolder">
                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Bid history</font></font>
                                </h3>
                                <h3 className="u-h4 u-text-bolder">
                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{round} bids</font></font>
                                </h3>
                            </div>
                            <ul className="c-bid-list c-bid-list--scrollable">
                                {   auction.bids &&
                                    bids.map((bid, index) => {
                                        return (<div className="c-bid-list__item o-level o-level--spaced o-level--equal" key={new Date() + index}>
                                            <div className="o-level__item">
                                                <div className="u-h6 u-color-black">
                                                    {bid.bidder && <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{bid.bidder.name}</font></font> }
                                                </div>
                                                <div className="u-color-bwg-tint-1 u-h7">
                                                    <span>
                                                        <font style={{verticalAlign: 'inherit'}}>
                                                            <font style={{verticalAlign: 'inherit'}}>{bid.time.split('T')[0]}</font>
                                                        </font>
                                                    </span>
                                                    <span>
                                                        <font style={{verticalAlign: 'inherit'}}>
                                                            <font style={{verticalAlign: 'inherit'}}>{bid.time.split('T')[1].split('.')[0]}</font>
                                                        </font>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="right-info o-level__item o-level o-level--right">
                                                <h3 className="u-h5 u-text-bolder u-color-black">
                                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>NOK {bid.bid}</font></font>
                                                </h3>
                                            </div>
                                        </div>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </LayoutAuction>
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
                        <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                            <MKTypography variant="h5">Completed Auction</MKTypography>
                        </MKBox>
                        <Divider sx={{ my: 0 }} />
                        <MKBox p={2}>
                            <MKTypography variant="h2" color="secondary" fontWeight="regular">
                                {bids.length?'Congratulations!': 'Notification'}
                            </MKTypography>
                            <MKTypography variant="body2" color="secondary" fontWeight="regular">
                                {bids.length && bids[bids.length - 1].bidder? <>
                                        Hi! {bids[bids.length - 1].bidder.name}<br/>
                                        You won this auction.
                                        At this auction, for the price of {bid} NOK, you won.<br/>
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

export default HtmlRjx;
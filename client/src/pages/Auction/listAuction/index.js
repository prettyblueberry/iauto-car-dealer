import CarAuctionRow from "./row";
import LayoutAuction from "../layoutAuction";
import { useLocation } from 'react-router-dom';
import {useEffect, useState} from "react";
import { list } from "api/auction";


function ListAuction(){
    const location = useLocation();
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        const paths = location.pathname.split('/');
        console.log("location", paths);
        const lastPart = paths[paths.length - 1];
        const abortController = new AbortController()
        const signal = abortController.signal
        list(signal, lastPart).then((result) => {
            if (!result) {
                // setRedirectToSignin(true)
            } else {
                // setAuctions(result);
                setCars(result);
            }
        })
    }, [location])
    return (
        <LayoutAuction>
            {cars.map((c, i)=><CarAuctionRow key={i} data={c} />)}
        </LayoutAuction>
    );
}

export default ListAuction;
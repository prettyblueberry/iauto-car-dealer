import PropTypes from "prop-types";
import PaidIcon from "@mui/icons-material/Paid";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import VehicleCard from "../VehicleCard";
import AuctionCountdown from "./AuctionCountdown";
import MKBadge from "../../MKBadge";
import MKTypography from "components/MKTypography";
import { Card } from "@mui/material";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

function VehicleAuctionCard({
  image,
  auction,
  now,
  title,
  timeData,
  topBidPrice,
  allBidCount,
  vehicleInfo,
  action,
}) {
  const [timeNow, setTimeNow] = [now]
  const { timeStart, timeEnd } = timeData;
  const description = (
    <>
    {/* { new Date(timeStart) > timeNow && <MKBadge><Card sx={{width: '80px', backgroundColor: 'purple', paddingLeft: '10px'}}><MKTypography sx={{fontSize: '14px', color: 'lightBlue'}}>Preparing</MKTypography></Card></MKBadge>} */}
    { new Date(timeStart) > timeNow &&
      <MKBadge
        color="primary"
        container
        badgeContent={
          <>
            <QueryBuilderIcon />
            &nbsp;Preparing
          </>
        }
      />}
    { new Date(timeStart) < timeNow && <AuctionCountdown timeEnd={timeEnd} />}
      <MKBadge
        badgeContent={
          <>
            <PaidIcon />
            &nbsp;{topBidPrice}
          </>
        }
        color="light"
        container
      />
      <MKBadge
        badgeContent={
          <>
            <PeopleAltIcon />
            &nbsp;{allBidCount}
          </>
        }
        color="light"
        container
      />
    </>
  );
  action.route = "pages/AuctionPage/BidAuction/" + auction._id;
  if(new Date(timeStart) > timeNow){action.label = 'Show Auction'; action.color = 'info'; action.route = '/'}
  return (
    <VehicleCard
      image={image}
      title={title}
      description={description}
      timeData={timeData}
      vehicleInfo={vehicleInfo}
      action={action}
    />
  );
}

VehicleAuctionCard.propTypes = {
  image: PropTypes.object.isRequired,
  auction: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  vehicleInfo: PropTypes.shape({
    miles: PropTypes.number,
    fuel: PropTypes.string,
    transmission: PropTypes.oneOf(["Manual", "Automatic"]),
  }).isRequired,
  timeData: PropTypes.shape({
    timeStart: PropTypes.string,
    timeEnd: PropTypes.string,
  }).isRequired,
  topBidPrice: PropTypes.number,
  allBidCount: PropTypes.number,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default VehicleAuctionCard;

import MKBox from "components/MKBox";

function AuctionCard ({
    image
}) {
    return (
        <MKBox
            component="img"
            className="lazy img-responsive"
            src={`data:${image.contentType[0]};base64,${image.data[0]}`}
            // alt={title}
            // borderRadius="lg"
            shadow="md"
            // width="100%"
            // position="relative"
            zIndex={1}
        />
    )
}

export default AuctionCard;
import SimpleImageSlider from "react-simple-image-slider";
import { BarIndicator  } from 'react-indicators';
import MKBox from "components/MKBox";
import { Grid } from "@mui/material";
import { useState } from "react";

function FeaturedVehicle ({
    images
}){
    const [progress, setProgress] = useState([1,0,0,0]);
    const [currentImage, setCurrentImage] = useState(images[0]);
    const imageWidth = 500;
    const imageHeight = 260;
    const mouseEnterEvent = (value) => {
        switch (value) {
            case 1:
                setProgress([1,0,0,0]);
                setCurrentImage(images[0]);
                break;
            case 2:
                setProgress([0,1,0,0]);
                setCurrentImage(images[1]);
                break;
            case 3:
                setProgress([0,0,1,0]);
                setCurrentImage(images[2]);
                break;
            case 4:
                setProgress([0,0,0,1]);
                setCurrentImage(images[3]);
                break;
            default:
                break;
        }
    }
  return (
    <div>
        <Grid xs={12} md={12} lg={12}>
            {/* <SimpleImageSlider
                width={imageWidth}
                height={imageHeight}
                images={currentImage}
                showBullets={false}
                showNavs={false}
            /> */}
            <MKBox
                component="img"
                src={currentImage} 
                // borderRadius="lg"
                // shadow="md"
                width={imageWidth}
                height={imageHeight}
                sx={{border: '1px solid black'}}
            />
            <MKBox sx={{marginTop: '-30px'}}>
                
            </MKBox>
            <MKBox sx={{marginTop: '-30px'}}>
                <BarIndicator progress={progress[0]} size={30} stroke="white" color="blue" height={4} backgroundColor="white" width={imageWidth / 4} />
                <BarIndicator progress={progress[1]} size={30} stroke="white" color="blue" height={4} backgroundColor="white" width={imageWidth / 4} />
                <BarIndicator progress={progress[2]} size={30} stroke="white" color="blue" height={4} backgroundColor="white" width={imageWidth / 4} />
                <BarIndicator progress={progress[3]} size={30} stroke="white" color="blue" height={4} backgroundColor="white" width={imageWidth / 4} />
            </MKBox>
        </Grid>
        <Grid xs={12} md={12} lg={12} sx={{display: 'flex', justifyContent: 'center', marginLeft: '-10px', marginTop: '-250px'}}>
            <MKBox height={imageHeight} width={imageWidth / 4} sx={{backgroundColor: 'rgba(0,0,0,0.1)'}} onMouseEnter={ () => mouseEnterEvent(1)} zIndex={5}/>
            <MKBox height={imageHeight} width={imageWidth / 4} sx={{backgroundColor: 'rgba(0,0,0,0.1)'}} onMouseEnter={ () => mouseEnterEvent(2)} zIndex={5}/>
            <MKBox height={imageHeight} width={imageWidth / 4} sx={{backgroundColor: 'rgba(0,0,0,0.1)'}} onMouseEnter={ () => mouseEnterEvent(3)} zIndex={5}/>
            <MKBox height={imageHeight} width={imageWidth / 4} sx={{backgroundColor: 'rgba(0,0,0,0.1)'}} onMouseEnter={ () => mouseEnterEvent(4)} zIndex={5}/>
        </Grid>
    </div>
  );
}

export default FeaturedVehicle;
import MKBox from 'components/MKBox';
import BrandImage from 'assets/image/brandAdmin.jpg'
import navigationBarAdmin from 'assets/image/navigationBar.jpg'
import { Link, useParams } from 'react-router-dom';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';

const navStyle = {
    boxStyle: {
        paddingTop: '10px',
        // paddingLeft: '30px',
        // paddingRight: '30px',
        width: '17%',
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid rgba(11, 22, 26, 1)',
        borderRadius: 0,
        backgroundColor: 'rgba(1,1,1, 0)',
        "&:hover, &:focus": {
            opacity: 1,
        },
    },
    textStyle: {
        fontSize: '18px',
        fontFamily: 'aria',
        color: 'rgba(230, 108, 36, 1)'
    }
}
function LayoutAdmin () {
    const {adminId} = useParams();
    const navigationList = ['User', 'All Auctions', 'Upcoming Auctions', 'Active Auctions', 'Closed Auctions']
    return (
        <>
            <div style={{height: '80px', backgroundColor: 'rgba(16, 33, 39, 1)'}}></div>
            <MKBox
                sx={({
                functions: { rgba, linearGradient },
                palette: { black },
                borders: { borderRadius },
                }) => ({
                backgroundImage: `${linearGradient(
                    rgba(black.main, 0),
                    rgba(black.main, 0)
                )}, url(${BrandImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 0,
                width: '100%',
                height: '200px'
                })}
                display="flex"
                justifyContent="center"
            />
            <MKBox
                sx={({
                functions: { rgba, linearGradient },
                palette: { black },
                borders: { borderRadius },
                }) => ({
                backgroundImage: `${linearGradient(
                    rgba(black.main, 0),
                    rgba(black.main, 0)
                )}, url(${navigationBarAdmin})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 0,
                width: '100%',
                height: '50px'
                })}
                display="flex"
                justifyContent="center"
            >
                {
                    navigationList.map((item, index) => {
                        return (
                            item === adminId?
                            <MKButton 
                                sx={{...navStyle.boxStyle, backgroundColor: 'rgba(255,255,255,1)'}}
                                key={new Date() + index}
                            >
                                <Link to='/'><MKTypography sx={navStyle.textStyle}>{item}</MKTypography></Link>
                            </MKButton> :
                            <MKButton 
                                sx={{...navStyle.boxStyle}}
                                key={new Date() + index}
                            >
                                <Link to='/'><MKTypography sx={navStyle.textStyle}>{item}</MKTypography></Link>
                            </MKButton>
                        )
                    })
                }
            </MKBox>
        </>
    );
}

export default LayoutAdmin;
import UserDataGrid from "./components/UserDataGrid"
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SideNavigationBar from './components/SideNavigationBar'

function UserAdmin () {
    return (
        <>
            <div style={{height: '120px', backgroundColor: 'rgba(16, 33, 39, 1)'}}></div>
            
            <Grid container style={{margin: '100px', marginBottom: '400px'}}>
                <Grid item md={2} >
                <SideNavigationBar />
                </Grid>
                <Grid item md={8}>
                    {/*<Card>*/}
                    <Card>
                        <UserDataGrid />
                    </Card>
                    {/*</Card>*/}
                </Grid>
            </Grid>
        </>
    );
}

export default UserAdmin;
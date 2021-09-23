import React from 'react';
import { withRouter } from "react-router"
import { AuthContext } from '../context/authcontext';

const Home = () => {
    const authContext = React.useContext(AuthContext);

    return(
        <div>
            <h1>Home</h1>
        </div>
        
    )
}

export default withRouter(Home)
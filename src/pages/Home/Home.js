import React from 'react';
import {Link} from "react-router-dom";
function Home(props) {
    return (
        <div>
            this is home
                        <Link to="/dashboard" exact>link</Link>
        </div>
    );
}

export default Home;
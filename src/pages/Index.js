
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0Provider ,Auth0ProviderOptions } from "@auth0/auth0-react";

import { 
    BrowserRouter as Router, 
    Link, 
    Route, 
    Switch, 
    useHistory 
  } from 'react-router-dom';


  
import Navbar from '../comp/Comp/NavBar';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Auth0ProviderWithHistory from '../Util/AuthWithHistory';
import Footer from '../comp/Comp/Footer';


function Index(props) {
    const { loginWithRedirect , logout  , isAuthenticated , user} = useAuth0();
    return (
        <>
        <Router>
      <Auth0ProviderWithHistory>

            <Navbar></Navbar>
            <Route path="/" exact>
                <Home></Home>
            </Route>
            <Route path="/dashboard" exact>

                <Dashboard>
                </Dashboard>

            </Route>
            <Footer></Footer>
      </Auth0ProviderWithHistory>
        </Router>
         


      </>
    );
}

export default Index;

import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { 
    BrowserRouter as Router, 
    Link, 
    Route, 
    Switch, 
    useHistory 
  } from 'react-router-dom';


  
import Navbar from '../comp/Comp/NavBar';
import Home from './Home/Home';


function Index(props) {
    const { loginWithRedirect , logout  , isAuthenticated , user} = useAuth0();
    return (
        <>
        <Router>
            <Navbar></Navbar>
            <Route path="/" exact>
                <Home></Home>
            </Route>
        </Router>
          {/* <div>
              <button onClick={() => loginWithRedirect()}>Log In</button>;            
          </div>
           <button onClick={() => logout({ returnTo: window.location.origin })}>
           Log Out
         </button>
         {
                 isAuthenticated && (
                    <div>
                      <img src={user.picture} alt={user.name} />
                      <h2>{user.name}</h2>
                      <p>{user.email}</p>
                    </div>
                  )
              
         } */}


      </>
    );
}

export default Index;
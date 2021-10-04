import React from "react";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "../comp/Comp/NavBar";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import Auth0ProviderWithHistory from "../Util/AuthWithHistory";
import Footer from "../comp/Comp/Footer";

function Index(props) {
	return (
		<Router>
			<Auth0ProviderWithHistory>
				<Fade top>
					<Navbar />
				</Fade>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/dashboard' exact>
					<Dashboard />
				</Route>
				<Fade bottom>
					<Footer />
				</Fade>
			</Auth0ProviderWithHistory>
		</Router>
	);
}

export default Index;

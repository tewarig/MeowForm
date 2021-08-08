import React from "react";
import {Box ,Card , Text} from "@chakra-ui/react";
import { useAuth0  ,withAuthenticationRequired} from "@auth0/auth0-react";
import FullPage from "../../comp/Skeletons/FullPage";


const Dashboard = () => {
    const{isLoading ,user} = useAuth0();
    if(isLoading){
        return(<FullPage/>)
    }else{
        return(<>
        <Text> Meow Meow</Text>
        </>)
    }
}
export default withAuthenticationRequired( Dashboard,{
    onRedirecting:() => <FullPage/>,
});
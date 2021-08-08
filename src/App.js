import react from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import Index from './pages/Index';



function App() {
  return (
    <ChakraProvider>
          <Auth0Provider  
          REACT_APP_CLIENTID    
           domain={process.env.REACT_APP_AUTH_DOMAIN}
        clientId={process.env.REACT_APP_CLIENTID}
        redirectUri={window.location.origin}
         >
           <Index> </Index>
          </Auth0Provider>
   </ChakraProvider>
  );
}

export default App;

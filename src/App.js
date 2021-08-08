import react from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import Index from './pages/Index';



function App() {
  return (
    <ChakraProvider>
         
           <Index> </Index>
   </ChakraProvider>
  );
}

export default App;

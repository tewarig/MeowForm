import react from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import Index from './pages/Index';



function App() {
  return (
    <ChakraProvider>
         
           <Index> </Index>
   </ChakraProvider>
  );
}

export default App;

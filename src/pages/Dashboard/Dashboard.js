import React from "react";
import {Avatar, Box ,Card , Text ,Flex, Image ,useMediaQuery ,Spacer, Divider} from "@chakra-ui/react";
import { useAuth0  ,withAuthenticationRequired} from "@auth0/auth0-react";
import FullPage from "../../comp/Skeletons/FullPage";


const Dashboard = () => {
    const{isLoading ,user} = useAuth0();
    const [check] = useMediaQuery("(min-width: 1025px)")

   
    return(
        <Box backgroundColor="whiteAlpha.100">
     
        
        < Box padding="6" boxShadow="2xl" align="center" margin="2%"  borderRadius={check ?"full" : "0 "}> 
      
        <Flex align="center" flexDirection={check?"row":"column"}>

   
        <Flex>

        <Image src={user.picture} borderRadius="full"  /> 
        <Text  mt="10%"  ml="20px"  bgGradient="linear(to-l, #ec9f05 ,#ff4e00)"  bgClip="text"
              fontSize="3xl" >
            {user.name}
        </Text>
                  </Flex>


        <Flex align="center" ml={check ? "40%" : "10%"}>

        <Box>

        <Text bgGradient="linear(to-l, #ec9f05 ,#ff4e00)"  bgClip="text"
              fontSize="3xl" >
              40
        </Text>
        <Text>
           Responses
        </Text>
        </Box>
        <Box ml="50%">

            <Text bgGradient="linear(to-l, #ec9f05 ,#ff4e00)"  bgClip="text"
                  fontSize="3xl" >
                  5
            </Text>
            <Text>
              Forms
            </Text>
            </Box>
          
                                
            </Flex>
            </Flex>

            




        </Box>
       
       <Box  padding="6" boxShadow="xl"  margin="2%"  borderRadius={check ?"25px" : "0 "}>

        <Text margin="5%"   bgGradient="linear(to-l, #ec9f05 ,#ff4e00)"  bgClip="text"  fontSize="3xl" >
            Forms
        <Divider  colorScheme="blackAlpha"></Divider>

        </Text>
         <Flex margin="5%" justifyContent="space-between"  >
             <Text> From Name</Text>
             <Text> 50 Responses</Text>
         </Flex>
       </Box>

      </Box>
    )
}
export default withAuthenticationRequired( Dashboard,{
    onRedirecting:() => <FullPage/>,
});
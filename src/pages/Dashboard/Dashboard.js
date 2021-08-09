import React from "react";
import {Avatar, Box ,Card , Text ,Flex, Image ,useMediaQuery ,Spacer} from "@chakra-ui/react";
import { useAuth0  ,withAuthenticationRequired} from "@auth0/auth0-react";
import FullPage from "../../comp/Skeletons/FullPage";


const Dashboard = () => {
    const{isLoading ,user} = useAuth0();
    const [check] = useMediaQuery("(min-width: 1025px)")

   
    return(
        <>
     
        
        < Box padding="6" boxShadow="lg" align="center" > 
      
        <Flex align="center" flexDirection={check?"row":"column"}>

        {/* <SkeletonCircle size="1" padding="5%" ml="5%" mb="5%" /> */}
{/* /        <SkeletonCircle size="1" padding="5%" ml="25%" /> */}
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

        <Text>
            Forms
        </Text>

      </>
    )
}
export default withAuthenticationRequired( Dashboard,{
    onRedirecting:() => <FullPage/>,
});
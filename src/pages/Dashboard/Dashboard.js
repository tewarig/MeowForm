import React ,{useEffect}from "react";
import {Avatar, Box ,Card , Text ,Flex, Image ,useMediaQuery ,Spacer, Divider, SkeletonText , Button} from "@chakra-ui/react";
import { useAuth0  ,withAuthenticationRequired} from "@auth0/auth0-react";
import FullPage from "../../comp/Skeletons/FullPage";
import axios from "axios";
import FormCard from "../../comp/Comp/FormCard";


const Dashboard = () => {
    const{isLoading ,user} = useAuth0();
    const [check] = useMediaQuery("(min-width: 1025px)")
    let userEmail = user.email ;
    let apiKey = process.env.REACT_APP_APIKEY ;
    let  apiUrl = process.env.REACT_APP_HOSTURL ;
    const [data,setData] = React.useState();
    const getData = async() => {

        let temp = await axios.get(apiUrl+'user/' + userEmail + '&' + apiKey);
        setData(temp.data[0]);
    }
    useEffect(()=>{
        getData();
        // console.log(apiUrl+'user/' + userEmail + '&' + apiKey);
    },[]);
    // getData();
    let responses = 0;
    if(data){
   for(let i=0;i<data.forms.length ;i++){
     responses += data.forms[i].formData.length;
   }
    }
   
    return(
        <Box backgroundColor="whiteAlpha.100">
     
        
        < Box padding="6" boxShadow="2xl" align="center" margin="2%"  borderRadius={check ?"full" : "0 "}> 
      
        <Flex align="center" flexDirection={check?"row":"column"}>

   
        <Flex>

        <Image src={user.picture} borderRadius="full"  /> 
        <Text  mt="10%"  ml="20px"  bgGradient="linear(to-l, #ec9f05 ,#ff4e00)"  bgClip="text"
              fontSize={check ? "3xl" : "xl"} >
            {user.name}
        </Text>
                  </Flex>


        <Flex align="center" ml={check ? "40%" : "10%"}>

        <Box>

        <Text bgGradient="linear(to-l, #ec9f05 ,#ff4e00)"  bgClip="text"
              fontSize="3xl" >
             { data ?  responses : <SkeletonText></SkeletonText> } 

        </Text>
        <Text>
           Responses
        </Text>
        </Box>
        <Box ml="50%">

            <Text bgGradient="linear(to-l, #ec9f05 ,#ff4e00)"  bgClip="text"
                  fontSize="3xl" >

                      { data ? data.forms.length : <SkeletonText></SkeletonText> } 
            </Text>

            <Text>
              Forms
            </Text>

            </Box>
          
                                
            </Flex>
            </Flex>

            




        </Box>
       
       <Box  padding="6" boxShadow="xl"  margin="2%"  borderRadius={check ?"25px" : "0 "}>
         <Flex justifyContent="space-between">

        <Text margin="5%"   bgGradient="linear(to-l, #ec9f05 ,#ff4e00)"  bgClip="text"  fontSize="3xl" >
            Forms

        </Text>
            <Button margin="5%" colorScheme="orange">
                New form
            </Button>
         </Flex>
        <Divider margin="2%" colorScheme="blackAlpha"></Divider>
        {
        data ?
         data.forms.map(x => 
            <FormCard  formName={x.formName} responses={x.formData.length} formData={x.formData}></FormCard>)
         :
         <>
          <SkeletonText mt="3" noOfLines={1}  ></SkeletonText>  
          <SkeletonText mt="3" noOfLines={1}  ></SkeletonText>  

         </>
        

        }
          
      {data && data.forms.length == 0 ? <>
       <Image src="https://res.cloudinary.com/dd0mtkqbr/image/upload/v1629867315/kitekat-3_dlccdn.png" width="25%" height="25%" ml="38%" />
      <Text align="center">You haven't created a form Yet </Text></> : <> </>

      }
           
         
       </Box>

      </Box>
    )
}
export default withAuthenticationRequired( Dashboard,{
    onRedirecting:() => <FullPage/>,
});
import React ,{useEffect}from "react";
import {Avatar, Box ,Card , Text ,Flex, Image ,useMediaQuery ,Spacer, Divider, SkeletonText , Button, Input} from "@chakra-ui/react";
import { useAuth0  ,withAuthenticationRequired} from "@auth0/auth0-react";
import FullPage from "../../comp/Skeletons/FullPage";
import axios from "axios";
import FormCard from "../../comp/Comp/FormCard";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from "@chakra-ui/react";
  import toast ,{Toaster} from "react-hot-toast";
import { ClassNames } from "@emotion/react";



const Dashboard = () => {
    const{isLoading ,user} = useAuth0();
    const [check] = useMediaQuery("(min-width: 1025px)")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [formName,setFormName] = React.useState();
    let userEmail = user.email ;
    let apiKey = process.env.REACT_APP_APIKEY ;
    let  apiUrl = process.env.REACT_APP_HOSTURL ;
    const [data,setData] = React.useState();
    const getData = async() => {

        let temp = await axios.get(apiUrl+'user/' + userEmail + '&' + apiKey);
        setData(temp.data[0]);
         console.log(data);
    }
    useEffect(()=>{
        getData();
        if(data === undefined){
        setTimeout(()=>(getData()),2500);
        }
    },[]);
    let responses = 0;
    if(data){
   for(let i=0;i<data.forms.length ;i++){
     responses += data.forms[i].formData.length;
   }
    }

    const  postApiData = async() => {
        
        let temp = await axios.post(apiUrl + 'addForm/' + apiKey  ,{
            "email": user.email,
            "formName": formName,
            "url":""
         });
        getData();
       
    }
    const addNewForm = () => {
         if(formName == "" ){
            toast.error('Form is empty😉');

         }else{    
            //  console.log(data.forms[0].formName);
            let isCopy  = false;
            for(let i=0;i<data.forms.length;i++){
                if(data.forms[i].formName == formName){
                    isCopy = true;
                }

            }     
            if(isCopy){
                toast.error('form with such name already exits ');
            }else{
                
                    
                    postApiData()
                setTimeout(()=>(getData()),2000);
                onClose();
                setTimeout(()=>(toast.success('Form Have beeen added 😉')
                ),2000);


            }
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
            <Button margin="5%" colorScheme="orange" onClick={onOpen}>
                New form
            </Button>
         </Flex>
        <Divider margin="2%" colorScheme="blackAlpha"></Divider>
        {
        data ?
         data.forms.map(x => 
            <FormCard  formName={x.formName} responses={x.formData.length} formData={x.formData} redirectUrl={x.redirectUrl} email={userEmail}></FormCard>)
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
       <Drawer onClose={onClose} isOpen={isOpen} size={check ? "xs" :"xs"}>
                     <DrawerOverlay />
                     <DrawerContent>
                       <DrawerHeader align="center"> 

                           <Text
                           margin="1%"
                           fontWeight="extraBold"
                           fontSize="3xl"
                           bgGradient="linear(to-l, #ec9f05 ,#ff4e00)"
                           bgClip="text"
                           
                           >

                            Add Form
                           </Text>
                           <Image src="https://res.cloudinary.com/dd0mtkqbr/image/upload/v1629884425/kitekat-17_ipr2uy.png" />
                       <Text
                        
                       >
      
                        </Text>
                           </DrawerHeader>
                       <DrawerBody>
                       
                        <Box>
                          <Flex>

                           <Input onChange={(e)=>setFormName(e.target.value)} placeholder="Form Name" />
                           <Button ml="0.5%" colorScheme="orange" onClick={addNewForm}> > </Button>
                          </Flex>

                           
                        </Box>
                        <Box>
                      
                          
                        </Box>
                       </DrawerBody>
                     </DrawerContent>
                   </Drawer>

                   <Toaster/>

      </Box>
    )
}
export default withAuthenticationRequired( Dashboard,{
    onRedirecting:() => <FullPage/>,
});
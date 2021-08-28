import { Box , Text  } from '@chakra-ui/layout';
import { Image , Button ,useColorModeValue ,Badge ,useMediaQuery  ,Flex ,Input} from "@chakra-ui/react";
import FormData from './FormData';
import FormHeading from './FormHeading';
import { AspectRatio } from "@chakra-ui/react"

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
import {Link} from "react-router-dom";
import React from 'react';
import axios from 'axios';
import toast ,{Toaster} from "react-hot-toast";


function FormCard({formName , responses ,formData ,redirectUrl ,email }) {
    const  formBackground = useColorModeValue("gray.100","gray.700");
    const [check] = useMediaQuery("(min-width: 1025px)")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState("md")
    const [url, setUrl] = React.useState();
    const [edit , setEdit] = React.useState(false);
    let apiKey = process.env.REACT_APP_APIKEY ;
    let  apiUrl = process.env.REACT_APP_HOSTURL ;

    function isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
      };
      const sendResponse = async(serverUrl)=> {
        let meow = await  axios({
            method: 'post',
            url: serverUrl,
            data: {
              url: url,
              formName: formName
            }
          });

      }
    const checkUrl = () => {
        if(url === "" || url === undefined){
            toast.error(' Url not saved');
            setEdit(!edit)


        }else if(isValidURL(url)){
            let serverUrl = apiUrl + 'url/' + email + '&' + apiKey;
            sendResponse(serverUrl);
          
            toast.success('Url is saved, it will some time to reflect');

            setEdit(!edit)
        }else{
            toast.error('The url is not valid :( ');

  
        }
   
    }


    return (
       <Box  id={formName}mt="1%"    borderRadius={25}  padding="2%" display="flex" flexDirection={check ?   "row" : "column"} backgroundColor ="#fff" background={formBackground} >
          
                  <Box width="100%" ml="5%" >
                  <Flex  justifyContent="space-between"  >
                      <Text> {formName}</Text>
                      <Text> {responses} Responses</Text>
                      <Button colorScheme="orange" onClick={onOpen}> View</Button>
                   </Flex>
 
                          {/* {console.log(formData)} */}
                   </Box>
                   <Drawer onClose={onClose} isOpen={isOpen} size={check ? "xl" :"xs"}>
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

                          {formName}
                           </Text>
                       <Text
                        
                       >
                         {responses} Responses

      
                        </Text>
                           </DrawerHeader>
                       <DrawerBody>
                       
                        <Box>
                
                     {formData.length > 0 &&
                     <>
                            <FormHeading obj={formData[0]}></FormHeading>
                      
                          {
                              formData.map(x=>
                              <FormData obj={x}></FormData>
                                  )
                          } 
                            
                    </>
                     }   
                     {/* <Flex>
                         <Text margin="5%">Redirect Url </Text>
                         <Text margin="5%"> { redirectUrl } </Text>
                     </Flex>  */}
                     {/* { edit && */}
                    {/* <Flex>
                      <Input placeholder={redirectUrl} isDisabled={!edit}   value={url} onChange={ (e)=>(setUrl(e.target.value))}
                      />  
                     {edit === false ?
                       <Button onClick={()=>{setEdit(!edit)}}>
                           edit
                       </Button>
                       :
                       <Button  onClick={()=>(checkUrl())}> Save</Button>
                     }
                    </Flex> */}
                     {/* }  */}
                           {/* <Text> * you one need Redirect url if you are just using html css , check docs here </Text>  */}
                        </Box>
                        <Box>
                      
                          
                        </Box>
                       </DrawerBody>
                     </DrawerContent>
                   </Drawer>



       </Box>
    );
}

export default FormCard;
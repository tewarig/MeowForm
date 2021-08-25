import { Box , Text  } from '@chakra-ui/layout';
import { Image , Button ,useColorModeValue ,Badge ,useMediaQuery  ,Flex} from "@chakra-ui/react";
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

function FormCard({formName , responses ,formData }) {
    const  formBackground = useColorModeValue("gray.100","gray.700");
    const [check] = useMediaQuery("(min-width: 1025px)")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState("md")


    return (
       <Box  id={formName}mt="1%"    borderRadius={25}  padding="2%" display="flex" flexDirection={check ?   "row" : "column"} backgroundColor ="#fff" background={formBackground} >
          
                  <Box width="100%" ml="5%" >
                  <Flex  justifyContent="space-between"  >
                      <Text> {formName}</Text>
                      <Text> {responses} Responses</Text>
                      <Button colorScheme="orange" onClick={onOpen}> View</Button>
                   </Flex>
 
                          {console.log(formData)}
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
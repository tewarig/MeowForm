import React from 'react';
import MenuButtons from './MenuButtons';
import {Button, IconButton} from "@chakra-ui/button";
import { VStack,Flex ,Heading, Spacer , Box , Text  , Divider} from "@chakra-ui/layout";
import {useMediaQuery} from "@chakra-ui/react";
import {Tooltip } from "@chakra-ui/react";
import  { FaSun , FaMoon, FaGithub, FaUser} from "react-icons/fa";
import { FcList, FcSearch } from "react-icons/fc";
import {BsSearch ,BsCalendarFill, BsPeopleFill, BsPerson, BsFillExclamationCircleFill, BsStar  ,BsMenu} from "react-icons/bs";
import { useColorMode ,useColorModeValue } from '@chakra-ui/color-mode';
import {Link} from "react-router-dom";
import {MdRemoveFromQueue , MdFindInPage , MdStar, MdPeople} from "react-icons/md";

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

function MenuItems({onClose}) {
    return (
        <div>
                <Box>
                   
                   <MenuButtons link="/dashboard" icon={<MdRemoveFromQueue/>} Tittle="dashboard" click={onClose}></MenuButtons>
                           
                   <a href="https://docs.meowform.xyz/docs/intro" target="_blank">
                        <Button ml="1%" mt="5%" width="100%" onClick={onClose}>                            
                          <MdFindInPage/>
                            <Text fontSize="xl" ml="4">
                            Docs
                            </Text>
                        </Button>                            
                            </a>
                      <a href="https://github.com/tewarig/meowForm" target="_blank">
                        <Button ml="1%" mt="5%" width="100%" onClick={onClose}>                            
                          <MdStar/>
                            <Text fontSize="xl" ml="4">
                            Star on github
                            </Text>
                        </Button>                            
                            </a>

                      <a href="https://github.com/tewarig/meowForm" target="_blank">
                        <Button ml="1%" mt="5%" width="100%" onClick={onClose}>                            
                          <MdPeople/>
                            <Text fontSize="xl" ml="4">
                           Support MeowForm
                            </Text>
                        </Button>                            
                            </a>
                         
                </Box>
        </div>
    );
}

export default MenuItems;
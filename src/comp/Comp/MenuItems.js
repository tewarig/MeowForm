import React from 'react';
import MenuButton from './MenuButton';
import {Button, IconButton} from "@chakra-ui/button";
import { VStack,Flex ,Heading, Spacer , Box , Text  , Divider} from "@chakra-ui/layout";
import {useMediaQuery} from "@chakra-ui/react";
import {Tooltip } from "@chakra-ui/react";
import  { FaSun , FaMoon, FaGithub, FaUser} from "react-icons/fa";
import { FcList, FcSearch } from "react-icons/fc";
import {BsSearch ,BsCalendarFill, BsPeopleFill, BsPerson, BsFillExclamationCircleFill, BsStar } from "react-icons/bs";
import { useColorMode ,useColorModeValue } from '@chakra-ui/color-mode';
import {Link} from "react-router-dom";

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
                   
                   <MenuButton link="/erjnvdfjf" icon={<BsSearch/>} Tittle="jdfkvdfvjkdv" click={onClose}></MenuButton>
                                                   

                         
                </Box>
        </div>
    );
}

export default MenuItems;
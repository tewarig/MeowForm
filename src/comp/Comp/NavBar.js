import React from 'react';
import {Button, IconButton} from "@chakra-ui/button";
import {Avatar }from '@chakra-ui/react';
import { VStack,Flex ,Heading, Spacer , Box , Text  , Divider} from "@chakra-ui/layout";
import {useMediaQuery} from "@chakra-ui/react";
import {Tooltip } from "@chakra-ui/react";
import  { FaSun , FaMoon, FaGithub, FaUser, FaList} from "react-icons/fa";
import { useColorMode ,useColorModeValue } from '@chakra-ui/color-mode';
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuItem

  } from "@chakra-ui/react";
import MenuItems from './MenuItems';


function Navbar(props) {
    const {colorMode , toggleColorMode }= useColorMode();
    const isDark = colorMode === 'dark';
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState("md")
    const [check] = useMediaQuery("(min-width: 1025px)")
    const [meow ,setMeow] = React.useState(false);
    const [signIn,setSignIn] = React.useState(false);
    const  formBackground = useColorModeValue("white.100","gray.900");
    const { loginWithRedirect , logout  , isAuthenticated , user} = useAuth0();


    let flag = false;
    var setFlag  = () =>{
      setMeow(!meow);
      onClose();
    }
  
    return (
        <>

        <Box position="fixed" width="100%" backgroundColor="#fff" background={formBackground} zIndex="1000" >

       <VStack p={5} >
           <Flex w="100%">
            <Link to="/">
            <Text ml="8"  bgGradient="linear(to-l, #ec9f05 ,#ff4e00)" bgClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
              z-index={5}
              >
                  MeowForm
            </Text>
            </Link>
           <Spacer>

           </Spacer>

         
           <Tooltip label="Menu">
            <IconButton onClick={onOpen} ml={2} mr={1} icon={<FaList  />} isRound="true"></IconButton>
           </Tooltip>
           {check &&
           <Tooltip label="Star! on github" >
            <a href='https://github.com/tewarig/' target='_blank'><IconButton ml={2} mr={1} icon={<FaGithub />}  isRound="true"></IconButton></a>           
           </Tooltip>
           }
           { check &&
           <Tooltip label={isDark ? "Light mode":"Dark Mode"} >
           <IconButton ml={2} mr={1} icon={ isDark ? <FaSun /> : <FaMoon /> } isRound="true" onClick={toggleColorMode}>
           </IconButton>
           </Tooltip>
             }
             <Tooltip  label="Manage Profile">
               <Box ml={5} mr={1}>
             
               </Box>
             </Tooltip>
             { user &&
              <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} >
                  <Avatar name={user.name} src={user.picture} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Hi , {user.name}</MenuItem>
                    <MenuItem onClick={() => logout()}>Logout</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
             }
             { !isAuthenticated && 
                 <Tooltip label="Sign in / SignUp "> 
                   <IconButton icon={<FaUser />} isRound="true"  onClick={()=>(loginWithRedirect())}>
                   </IconButton>
                 </Tooltip>
              } 
             

  
             </Flex>
         </VStack>
         <Divider  bgGradient="linear(to-l, #ec9f05 ,#ff4e00)" height={1} />
         <Drawer onClose={meow ? setFlag : onClose } isOpen={isOpen} size={"xs"}>
                       <DrawerOverlay />
                       <DrawerContent>
                         <DrawerHeader align="center"> 
                          
                         <Text   bgGradient="linear(to-l, #ec9f05 ,#ff4e00)" bgClip="text"
                          fontSize="8xl"
                          fontWeight="extrabold"
                          >
                           MeowForm
                        </Text>
                             </DrawerHeader>
                         <DrawerBody>
                        
                                      <Box>
                                      {!check &&
                                      <Button ml="1%" mt="5%" width="100%" onClick={toggleColorMode} >
                                      {isDark ? <FaSun color="yellow"/> : <FaMoon color="#59e5f7"/> }  
                                      
                                      <Text fontSize="xl" ml="4%">
                                      {isDark ?  "Light Mode" : "Dark Mode"}
                                      </Text>
                                      </Button>
                                     }
                                                                 
                                        
            
            
           
            
                                   <MenuItems onClose={onClose}></MenuItems>
                          <Text>
                          </Text>
                           </Box>
                      
                         
                            
                            

                       
                       </DrawerBody>
                     </DrawerContent>
                   </Drawer>


              </Box>
              <Box height="15vh">
                          </Box>
       </>
    );
}

export default Navbar;

import React from 'react';
import {Link} from "react-router-dom";
import {Text ,Box, useColorModeValue,useMediaQuery , Image, Flex} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function Home(props) {
  const  textColor = useColorModeValue("gray.700","gray.100");
  const [check] = useMediaQuery("(min-width: 1025px)")


    return (
        <div>
            
          <Box ml="5%">


            <Text 
            align="center" 
            color={textColor}
            fontSize={check ?"5xl" :"3xl"}
            fontWeight="extrabold"
            mt={check?"0%":"4%"}
                          
                >
            Functional Forms for 

            </Text>
            <Text  
             align="center" 
              bgGradient="linear(to-l, #ec9f05 ,#ff4e00)"
               bgClip="text"
               fontSize={check?"7xl":"4xl"}
               fontWeight="extrabold"
               mt={check?"0%":"4%"}               
               >
            <Typewriter
              options={{
                strings: ['React Developers', 'Futter Developers','Html developers', "Flutter Developers" ,"Android Developers"],
                autoStart: true,
                loop: true,
              }}
            />

            </Text>
            <Box bgColor="#333" ml={check?"20%":"5%"} mt={check ?"8%":"12%"} width={check?"60%":"90%"} borderRadius="25" >
            <Text color="#fff" padding="5%">

            <Typewriter
              options={{
                strings: [`<Form action="https://server.meowform.xyz/YourEmail method="post"`],
                autoStart: true,
                loop: true,
              }}
              />
              </Text>
              </Box>

            </Box>
            <Box>

          <Image position={check ?"absolute":"static"} src="https://res.cloudinary.com/dd0mtkqbr/image/upload/v1629015408/kitekat_ezvxgy.png"  width={check?"35%":"40%"} height={check ?"70%":"90%"} mt={check ? "-20%" :"5%"}  ml={check ? "-12%" : "28%"} transform={check?"rotate(60deg)":""} opacity={check ?"0.9" : "1"}/>
            </Box>


             </div>
    );
}

export default Home;
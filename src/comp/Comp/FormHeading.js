import { Spacer, Text } from '@chakra-ui/layout';
import {Flex , Divider} from '@chakra-ui/react';
import React from 'react';

function FormHeading({obj}) {
    let arr = [];
    let temp = obj;
    const objectArray = Object.entries(temp);
    objectArray.forEach(([key, value]) => arr.push(key));


   
    

    return (
        <div>
              <Flex  justifyContent="space-between"  >
                  {
                      arr.map(key => 
                      <>
                      <Text margin="5%"
                      fontWeight="extraBold"
                      bgGradient="linear(to-l, #ec9f05 ,#ff4e00)"
                      bgClip="text">
                        <b> {key}
                        </b> 
                      </Text>
                   <Spacer/>
                      </>                      )
                  }

                  {/* {
                      objectArray.map(x=>
                         <>
                         <Text margin="5%">
                             {x}
                         </Text>
                      <Spacer/>
                         </>)
                  } */}
                 </Flex>
             <Divider margin="2%" ml="1%" colorScheme="blackAlpha"></Divider>
        </div>
    );
}

export default FormHeading;
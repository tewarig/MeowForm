import { Spacer, Text } from '@chakra-ui/layout';
import {Flex , Divider} from '@chakra-ui/react';
import React from 'react';

function FormData({obj}) {
    let arr = [];
    
    Object.values(obj).forEach(values => (
     arr.push(values)
    )
    )  
    

    return (
        <div>
           <Flex  justifyContent="space-between"  >

             {
                 arr.map(x=>
                    <>
                    <Text margin="5%">
                        {x}
                    </Text>
                 <Spacer/>
                    </>)
             }
            </Flex>
             <Divider margin="2%" ml="1%" colorScheme="blackAlpha"></Divider>
        </div>
    );
}

export default FormData;
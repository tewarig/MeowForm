import React from "react";

import { Box ,SkeletonText , SkeletonCircle ,Flex} from "@chakra-ui/react";
function FullPage(props) {
    return (
        <div>
        <Flex>
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Flex>
        
        < Box padding="6" boxShadow="lg" > 
      
        <Flex>

        <SkeletonCircle size="1" padding="5%" ml="5%" mb="5%" />
        <SkeletonCircle size="1" padding="5%" ml="25%" />
        <SkeletonCircle size="1" padding="5%" ml="25%" />

        </Flex>





        </Box>
        <SkeletonText mt="3" noOfLines={15} spacing="10"  padding="5%"/>
        </div>
    );
}

export default FullPage;
import React from "react";

import { Box ,SkeletonText , SkeletonCircle ,Flex} from "@chakra-ui/react";
function FullPage(props) {
    return (
        <div>
        <Flex>
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Flex>
         <Box padding="6" boxShadow="lg" bg="white">           
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <SkeletonText mt="3" noOfLines={15} spacing="10" />

      </Box>
        </div>
    );
}

export default FullPage;
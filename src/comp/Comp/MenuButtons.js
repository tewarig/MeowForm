import React from 'react';
import {Link} from 'react-router-dom';
import {Button ,Text} from '@chakra-ui/react';

function MenuButtons({link,icon,Tittle,click ,nextPage}) {
    return (
        <div> 
            <a link={nextPage} target="_blank">

     <Link to={link} onClick={click}>
        <Button ml="1%" mt="5%" width="100%">
            
              {icon}
            <Text fontSize="xl" ml="4">
            {Tittle}
            </Text>
        </Button>
       </Link>
            
            </a>
        </div>
    );
}

export default MenuButtons;
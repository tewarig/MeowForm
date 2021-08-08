import React from 'react';
import {Link} from 'react-router-dom';
import {Button ,Text} from '@chakra-ui/react';

function MenuButton({link,icon,Tittle,click}) {
    return (
        <div> 
     <Link to={link} onClick={click}>
        <Button ml="1%" mt="5%" width="100%">
     
              {icon}
            <Text fontSize="xl" ml="4">
            {Tittle}
            </Text>
        </Button>
       </Link>
            
        </div>
    );
}

export default MenuButton;
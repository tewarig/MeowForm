import  Data from "./faq.json"
import React from "react"
import Header from "./Header"
import {Body,Item} from "./Header"


function Faq(props) {
            console.log(Data)
    return (
        <>
        {
         Data.map((x)=>
            <>
            <Item>
             <Header>{x.header}</Header>
             <Body>{x.answer}</Body>
             </Item>
         </>
         
         )
     }
    </>
    );
}

export default Faq;
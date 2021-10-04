import  Data from "./faq.json"
import add from "./add.png"
import close from "./close-slim.png"
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const userContext=createContext()

function Header({children}) {
    const {Toggle,Settoggle} =useContext(userContext)      
    return (
        <div onClick={()=>{Settoggle(!Toggle)}}>
        {Toggle ? (<img src={add}/>):(<img src={close}/>)}
    </div>
    );
}
function Body({children}) {
   const {Toggle} =useContext(userContext)
return (
<>
{Toggle ? <div>{children}</div>:null}
</>
);
}
function Item({children}) {
   const [Toggle,Settoggle]=useState(false) 
return (
<>
<userContext.Provider value={{Toggle,Settoggle}}>{children}</userContext.Provider>
</>
);
}

export default Header;
export {Item,Body}
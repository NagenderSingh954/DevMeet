import { useContext, useState } from "react";
import HtmlCode from "./code";

const HtmlProvider=({children})=>{
    const [code,setCode]=useState('')
    return(
        <HtmlCode.Provider value={{code,setCode}}>
            {children}
        </HtmlCode.Provider>
    )
}

export default HtmlProvider
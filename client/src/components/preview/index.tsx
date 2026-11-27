import React, { useContext, useState } from 'react'
import HtmlCode from '../../context/code'

function Preview() {
    // const [code,setCode]=useState('')//this is use when the user write in teh editor and html render 

    const {code}=useContext(HtmlCode)
  return (
    <div className='bg-white h-[100%] w-[100%] text-black'>
        <iframe
        srcDoc={code}
        sandbox="allow-scripts"
        className="w-full h-full"
        title="HTML Preview"
      />
    </div>
  )
}

export default Preview